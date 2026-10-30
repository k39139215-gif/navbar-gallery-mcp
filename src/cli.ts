#!/usr/bin/env node
import { TYPES, NavbarType, SearchScope, fetchRaw, getNavbar, listType, searchType } from "./core.js";

const [cmd, ...args] = process.argv.slice(2);
const flag = (name: string, fallback: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const asType = (t: string): NavbarType => {
  if (!(TYPES as readonly string[]).includes(t)) throw new Error(`Unknown type "${t}". Try: ${TYPES.join(", ")}`);
  return t as NavbarType;
};

const asScope = (t: string): SearchScope => (t === "all" ? "all" : asType(t));

const help = `navbar-gallery <command>

  types                          list categories
  list <type> [--page N]         list navbars in a category
  search <query> [--type T] [--pages N]
  get <slug>                     details for one navbar
  html <path>                    raw HTML (debug selectors), e.g. html /type/dropdowns

  --type accepts "all" to search every category.

All output is JSON (pipe into jq).`;

try {
  let out: unknown;
  switch (cmd) {
    case "types": out = TYPES; break;
    case "list": out = await listType(asType(args[0]), Number(flag("page", "1"))); break;
    case "search": out = await searchType(args[0], asScope(flag("type", "dropdowns")), Number(flag("pages", "5"))); break;
    case "html": process.stdout.write(await fetchRaw(args[0] ?? "/")); process.exit(0);
    case "get": out = await getNavbar(args[0]); break;
    default: console.log(help); process.exit(cmd ? 1 : 0);
  }
  console.log(JSON.stringify(out, null, 2));
} catch (e) {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
}
