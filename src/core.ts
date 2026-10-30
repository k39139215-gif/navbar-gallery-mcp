import * as cheerio from "cheerio";

const BASE = "https://www.navbar.gallery";
const UA = "navbar-gallery-cli/0.1 (personal tool)";
const DELAY_MS = 600;          // polite gap between live requests
const TTL_MS = 10 * 60 * 1000; // in-memory cache lifetime
const RETRIES = 2;

export const TYPES = [
  "static", "dropdowns", "mega-menu", "side-bar",
  "search-bar", "announcement", "full-screen", "breadcrumbs",
] as const;
export type NavbarType = (typeof TYPES)[number];
export type SearchScope = NavbarType | "all";

export interface NavbarItem {
  name: string;
  slug: string;
  likes: number | null;
  screenshot: string | null;
  website: string | null;
  galleryUrl: string;
}
export interface ListPage {
  items: NavbarItem[];
  nextPageUrl: string | null;
}

/* ---------- network layer: robots.txt, rate limit, cache, retry ---------- */

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const cache = new Map<string, { t: number; html: string }>();
let lastRequest = 0;
let disallow: string[] | null = null;

async function loadRobots(): Promise<string[]> {
  if (disallow) return disallow;
  disallow = [];
  try {
    const res = await fetch(`${BASE}/robots.txt`, {
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(10_000),
    });
    if (res.ok) {
      let applies = false;
      let lastWasUA = false;
      for (const raw of (await res.text()).split(/\r?\n/)) {
        const m = raw.split("#")[0].trim().match(/^([a-z-]+)\s*:\s*(.*)$/i);
        if (!m) continue;
        const key = m[1].toLowerCase();
        const val = m[2].trim();
        if (key === "user-agent") {
          if (!lastWasUA) applies = false; // new group starts
          applies = applies || val === "*";
          lastWasUA = true;
        } else {
          lastWasUA = false;
          if (applies && key === "disallow" && val) disallow.push(val);
        }
      }
    }
  } catch {
    /* robots.txt unreachable -> proceed, rate limit still applies */
  }
  return disallow;
}

async function getHtml(url: string): Promise<string> {
  const u = new URL(url, BASE);
  const rules = await loadRobots();
  const path = u.pathname + u.search;
  if (rules.some((d) => path.startsWith(d))) {
    throw new Error(`Blocked by robots.txt: ${path}`);
  }

  const hit = cache.get(u.href);
  if (hit && Date.now() - hit.t < TTL_MS) return hit.html;

  for (let attempt = 0; ; attempt++) {
    const wait = lastRequest + DELAY_MS - Date.now();
    if (wait > 0) await sleep(wait);
    lastRequest = Date.now();

    try {
      const res = await fetch(u, {
        headers: { "user-agent": UA, accept: "text/html" },
        signal: AbortSignal.timeout(15_000),
      });
      if (res.status === 404) throw new Error(`Not found (404): ${u.pathname}`);
      if ((res.status === 429 || res.status >= 500) && attempt < RETRIES) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${u.href}`);
      const html = await res.text();
      cache.set(u.href, { t: Date.now(), html });
      return html;
    } catch (e) {
      const transient = e instanceof Error && (e.name === "TimeoutError" || e.name === "TypeError");
      if (transient && attempt < RETRIES) { await sleep(1500 * (attempt + 1)); continue; }
      throw e;
    }
  }
}

/** Raw HTML of any path on the site. Use it to debug selectors. */
export const fetchRaw = (path: string) => getHtml(path);

/* ---------- parsing ---------- */

const abs = (href: string | undefined, base: string = BASE) =>
  href ? new URL(href, base).toString() : null;

const LAYOUT_HINT =
  "No navbar cards found. The site layout may have changed. " +
  "Run `navbar-gallery html /type/dropdowns > page.html` and adjust parseList().";

export function parseList(html: string, currentUrl: string = BASE): ListPage {
  const $ = cheerio.load(html);
  const seen = new Set<string>();
  const items: NavbarItem[] = [];

  $('a[href*="/navbar/"]').each((_, a) => {
    const slug = ($(a).attr("href") ?? "").split("/navbar/")[1]?.split(/[?#]/)[0];
    if (!slug || seen.has(slug)) return;
    seen.add(slug);

    // climb to the card, stop before the container holds more than one item
    let card = $(a).parent();
    while (card.parent().length) {
      const slugs = new Set(
        card.find('a[href*="/navbar/"]').map((_, x) => $(x).attr("href")).get()
      );
      if (slugs.size > 1 || card.find('a:contains("Visit Website")').length > 0) break;
      card = card.parent();
    }

    const img = card.find("img").first();
    const video = card.find("video").first();
    const titleEl = card.find(".work_title").first();
    const name = titleEl.text().trim() || img.attr("alt")?.trim() || slug;
    const screenshot = abs(img.attr("src") || video.attr("thumbnail"));

    // likes: only trust it when exactly one numeric leaf exists in the card
    const nums = card
      .find("*")
      .filter((_, el) => $(el).children().length === 0 && /^\d{1,6}$/.test($(el).text().trim()))
      .map((_, el) => Number($(el).text().trim()))
      .get();

    items.push({
      name,
      slug,
      likes: nums.length === 1 ? nums[0] : null,
      screenshot,
      website: abs(card.find('a:contains("Visit Website")').first().attr("href")),
      galleryUrl: `${BASE}/navbar/${slug}`,
    });
  });

  return { items, nextPageUrl: abs($('a:contains("Load more")').first().attr("href"), currentUrl) };
}

/* ---------- public API ---------- */

export async function listType(type: NavbarType, page = 1): Promise<ListPage> {
  let url = `${BASE}/type/${type}`;
  let result: ListPage = { items: [], nextPageUrl: null };
  for (let p = 1; p <= page; p++) {
    result = parseList(await getHtml(url), url);
    if (p === 1 && result.items.length === 0) throw new Error(LAYOUT_HINT);
    if (p < page) {
      if (!result.nextPageUrl) return { items: [], nextPageUrl: null }; // past the last page
      url = result.nextPageUrl;
    }
  }
  return result;
}

async function searchOne(q: string, type: NavbarType, maxPages: number) {
  const hits: NavbarItem[] = [];
  const seen = new Set<string>();
  let url: string | null = `${BASE}/type/${type}`;
  for (let p = 0; p < maxPages && url; p++) {
    const { items, nextPageUrl } = parseList(await getHtml(url), url);
    if (p === 0 && items.length === 0) throw new Error(LAYOUT_HINT);
    for (const item of items) {
      if ((item.name.toLowerCase().includes(q) || item.slug.includes(q)) && !seen.has(item.slug)) {
        seen.add(item.slug);
        hits.push(item);
      }
    }
    url = nextPageUrl;
  }
  return hits;
}

export async function searchType(query: string, scope: SearchScope, maxPages = 5) {
  const q = query.toLowerCase().trim();
  const types = scope === "all" ? [...TYPES] : [scope];
  const bySlug = new Map<string, NavbarItem & { types: string[] }>();
  for (const t of types) {
    for (const item of await searchOne(q, t, maxPages)) {
      const prev = bySlug.get(item.slug);
      if (prev) {
        if (!prev.types.includes(t)) prev.types.push(t);
      } else {
        bySlug.set(item.slug, { ...item, types: [t] });
      }
    }
  }
  return [...bySlug.values()];
}

export async function getNavbar(slug: string) {
  if (!/^[a-z0-9-]+$/i.test(slug)) throw new Error(`Invalid slug: ${slug}`);
  const url = `${BASE}/navbar/${slug}`;
  const $ = cheerio.load(await getHtml(url));
  const meta = (p: string) =>
    $(`meta[property="${p}"], meta[name="${p}"]`).attr("content") ?? null;

  const externalLinks = [
    ...new Set(
      $("a[href^='http']")
        .map((_, a) => $(a).attr("href")!)
        .get()
        .filter((h) => !h.includes("navbar.gallery") && !/twitter\.com|x\.com|substack|dub\.sh/.test(h))
    ),
  ];
  const images = [
    ...new Set(
      $("img").map((_, i) => abs($(i).attr("src"))).get()
        .filter((s): s is string => !!s && s.includes("cdn.navbar.gallery"))
    ),
  ];
  const jsonLd = $('script[type="application/ld+json"]')
    .map((_, s) => { try { return JSON.parse($(s).text()); } catch { return null; } })
    .get()
    .filter(Boolean);

  $("script, style, noscript, nav, footer").remove();
  const headings = $("h1, h2, h3").map((_, h) => $(h).text().trim()).get().filter(Boolean);
  const text = $("body").text().replace(/\s+/g, " ").trim().slice(0, 1500);

  return {
    slug,
    url,
    title: $("title").text().trim(),
    description: meta("description") ?? meta("og:description"),
    ogImage: meta("og:image"),
    canonical: $('link[rel="canonical"]').attr("href") ?? null,
    website: externalLinks[0] ?? null,
    externalLinks,
    images,
    headings,
    jsonLd,
    textPreview: text,
  };
}
