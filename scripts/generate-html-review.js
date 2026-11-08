import fs from "fs";
import path from "path";
import { CURATED_NAVBARS } from "../dist/curated.js";

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function generateHtml() {
  const entries = Object.values(CURATED_NAVBARS);

  const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar Gallery MCP — 32+ Real Component Libraries Showcase</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              50: '#eef2ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    pre, code { font-family: 'JetBrains Mono', monospace; }
    /* Magnification dock hover effect */
    .dock-container {
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .dock-item {
      transition: transform 0.2s cubic-bezier(0.2, 0, 0.2, 1);
    }
    .dock-container:hover .dock-item {
      transform: scale(0.9);
    }
    .dock-container .dock-item:hover {
      transform: scale(1.4) translateY(-6px);
      z-index: 10;
    }
    .dock-container .dock-item:hover + .dock-item,
    .dock-container .dock-item:has(+ .dock-item:hover) {
      transform: scale(1.15) translateY(-2px);
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #475569; }
  </style>
</head>
<body class="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-indigo-500 selection:text-white">

  <!-- TOP HEADER -->
  <header class="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800">
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/25">
          🧭
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-lg font-bold tracking-tight text-white">Navbar Gallery MCP Review</h1>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">32 Genuine Libraries</span>
          </div>
          <p class="text-xs text-neutral-400">100% authentic component registries & design engineering sites — zero brand filler</p>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-3 w-full md:w-auto">
        <div class="relative flex-1 md:w-72">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search 32 libraries (e.g. aceternity, dock, mega)..." 
            class="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition"
            oninput="filterNavbars()"
          />
          <kbd class="absolute right-2.5 top-2.5 text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700">ESC</kbd>
        </div>

        <button 
          onclick="toggleViewMode()" 
          id="viewModeBtn"
          class="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-medium hover:bg-neutral-800 text-neutral-300 transition flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>👁️ Compact Code</span>
        </button>

        <a 
          href="https://github.com/k39139215-gif/navbar-gallery-mcp" 
          target="_blank" 
          class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/25 transition flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>GitHub Repo ↗</span>
        </a>
      </div>
    </div>

    <!-- Category Filters -->
    <div class="max-w-7xl mx-auto px-6 py-2.5 border-t border-neutral-900 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
      <span class="text-neutral-500 text-[11px] font-medium mr-1">Filter:</span>
      <button onclick="setFilter('all')" class="filter-btn active px-3 py-1 rounded-full bg-indigo-600 text-white font-medium" data-cat="all">All (32)</button>
      <button onclick="setFilter('docks')" class="filter-btn px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition" data-cat="docks">Docks & Islands (6)</button>
      <button onclick="setFilter('mega-menu')" class="filter-btn px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition" data-cat="mega-menu">Mega Menus (8)</button>
      <button onclick="setFilter('floating')" class="filter-btn px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition" data-cat="floating">Floating Capsules (8)</button>
      <button onclick="setFilter('sliding-tabs')" class="filter-btn px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition" data-cat="sliding-tabs">Sliding Tabs & Indicators (5)</button>
      <button onclick="setFilter('responsive')" class="filter-btn px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition" data-cat="responsive">Responsive Drawers (5)</button>
    </div>
  </header>

  <!-- QUICK DIRECTORY OF ALL 32 SITES -->
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <h2 class="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <span>🌐 Verified Directory of All 32 Real Component Libraries</span>
          </h2>
          <p class="text-xs text-neutral-500 mt-0.5">Click any library card to verify on their official website or jump directly to its live preview</p>
        </div>
        <span class="text-xs font-mono text-neutral-400 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700">
          Showing 32 / 32 Verified Registries
        </span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        ${entries.map((item, idx) => `
          <a 
            href="#${item.slug}" 
            class="group p-2.5 rounded-xl border border-neutral-800 bg-neutral-950/60 hover:border-indigo-500/60 hover:bg-neutral-900 transition flex flex-col justify-between"
          >
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[10px] font-mono text-neutral-500">#${String(idx + 1).padStart(2, '0')}</span>
              <span class="text-[9px] text-neutral-600 group-hover:text-indigo-400 transition">↓ jump</span>
            </div>
            <div class="font-bold text-xs text-neutral-200 group-hover:text-indigo-400 transition truncate">${item.library || item.name}</div>
            <div class="text-[10px] text-neutral-500 truncate mt-0.5">${new URL(item.website).hostname}</div>
          </a>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- LIVE SHOWCASE LIST (32 INTERACTIVE CARDS) -->
  <main class="max-w-7xl mx-auto px-6 pb-20 space-y-12" id="navbarsList">
    ${entries.map((item, idx) => `
      <article 
        id="${item.slug}" 
        class="navbar-card rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden shadow-2xl transition hover:border-neutral-700"
        data-library="${(item.library || '').toLowerCase()}"
        data-slug="${item.slug.toLowerCase()}"
        data-tags="${item.tags.join(' ').toLowerCase()}"
        data-types="${item.types.join(' ').toLowerCase()}"
      >
        <!-- CARD HEADER -->
        <div class="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="flex items-start md:items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 font-mono text-xs font-bold flex items-center justify-center text-indigo-400">
              ${idx + 1}
            </span>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-base font-bold text-white tracking-tight">${item.name}</h3>
                <span class="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  ${item.library || "Registry"}
                </span>
                <span class="text-[10px] font-mono text-neutral-400">
                  ★ ${item.likes ? item.likes.toLocaleString() : 'Curated'}
                </span>
              </div>
              <p class="text-xs text-neutral-400 mt-0.5">${item.description}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 self-end md:self-auto">
            <a 
              href="${item.website}" 
              target="_blank" 
              class="px-3 py-1.5 rounded-lg border border-neutral-700 hover:border-neutral-500 bg-neutral-800/60 hover:bg-neutral-800 text-xs font-medium text-neutral-200 transition flex items-center gap-1"
            >
              <span>Visit Site</span>
              <span class="text-[10px]">↗</span>
            </a>
            <button 
              onclick="copyCode('${item.slug}')" 
              class="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition flex items-center gap-1"
              id="copy-btn-${item.slug}"
            >
              <span>Copy Code</span>
            </button>
            <button 
              onclick="toggleCode('${item.slug}')" 
              class="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-medium transition"
              id="view-code-btn-${item.slug}"
            >
              <span>View Code</span>
            </button>
          </div>
        </div>

        <!-- LIVE INTERACTIVE RENDER PREVIEW CONTAINER -->
        <div class="p-6 md:p-8 bg-neutral-950/40 relative overflow-hidden flex items-center justify-center min-h-[140px] border-b border-neutral-800/60">
          <div class="w-full">
            ${renderInteractiveNavbar(item)}
          </div>
        </div>

        <!-- TAGS FOOTER -->
        <div class="px-6 py-2.5 bg-neutral-950/40 border-b border-neutral-800/40 flex items-center justify-between text-[11px] text-neutral-400 flex-wrap gap-2">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-neutral-500 font-medium">Tags:</span>
            ${item.tags.map(t => `<span class="bg-neutral-800/60 px-2 py-0.5 rounded text-[10px] text-neutral-400 border border-neutral-800">#${t}</span>`).join(" ")}
          </div>
          <span class="text-neutral-500 text-[10px] font-mono">slug: ${item.slug}</span>
        </div>

        <!-- CODE ACCORDION (COLLAPSIBLE) -->
        <div id="code-container-${item.slug}" class="hidden bg-neutral-950 p-4 border-t border-neutral-800">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-neutral-900 text-xs text-neutral-400 font-mono">
            <span>Raw Component Source (${item.codeSnippet.length.toLocaleString()} characters)</span>
            <button onclick="copyCode('${item.slug}')" class="text-indigo-400 hover:underline">Copy full snippet</button>
          </div>
          <pre class="text-xs text-neutral-300 overflow-x-auto max-h-80 p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 leading-relaxed"><code id="code-${item.slug}">${escapeHtml(item.codeSnippet)}</code></pre>
        </div>
      </article>
    `).join("")}
  </main>

  <!-- TOAST NOTIFICATION -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-indigo-500/40 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-medium flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-300">
    <span class="text-emerald-400 font-bold">✓</span>
    <span id="toastMsg">Code copied to clipboard!</span>
  </div>

  <!-- CLIENT SCRIPTS -->
  <script>
    function toggleCode(slug) {
      const el = document.getElementById('code-container-' + slug);
      const btn = document.getElementById('view-code-btn-' + slug);
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        btn.innerText = 'Hide Code';
      } else {
        el.classList.add('hidden');
        btn.innerText = 'View Code';
      }
    }

    let allCodeExpanded = false;
    function toggleViewMode() {
      allCodeExpanded = !allCodeExpanded;
      const containers = document.querySelectorAll('[id^="code-container-"]');
      const btns = document.querySelectorAll('[id^="view-code-btn-"]');
      const viewModeBtn = document.getElementById('viewModeBtn');
      
      containers.forEach(c => {
        if (allCodeExpanded) c.classList.remove('hidden');
        else c.classList.add('hidden');
      });
      btns.forEach(b => {
        b.innerText = allCodeExpanded ? 'Hide Code' : 'View Code';
      });
      viewModeBtn.innerText = allCodeExpanded ? '🙈 Hide All Code' : '👁️ View All Code';
    }

    function copyCode(slug) {
      const codeEl = document.getElementById('code-' + slug);
      if (!codeEl) return;
      navigator.clipboard.writeText(codeEl.innerText).then(() => {
        showToast('✓ ' + slug + ' code copied!');
      });
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      toastMsg.innerText = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 2500);
    }

    function setFilter(cat) {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-indigo-600', 'text-white');
        b.classList.add('bg-neutral-900', 'text-neutral-300');
      });
      const activeBtn = document.querySelector(\`[data-cat="\${cat}"]\`);
      if (activeBtn) {
        activeBtn.classList.add('active', 'bg-indigo-600', 'text-white');
        activeBtn.classList.remove('bg-neutral-900', 'text-neutral-300');
      }

      const cards = document.querySelectorAll('.navbar-card');
      cards.forEach(card => {
        const types = card.dataset.types || '';
        const tags = card.dataset.tags || '';
        const slug = card.dataset.slug || '';
        let show = false;

        if (cat === 'all') show = true;
        else if (cat === 'docks') show = types.includes('static') && (tags.includes('dock') || tags.includes('island') || slug.includes('dock') || slug.includes('island'));
        else if (cat === 'mega-menu') show = types.includes('mega-menu') || types.includes('dropdowns');
        else if (cat === 'floating') show = tags.includes('floating') || tags.includes('pill') || slug.includes('floating') || slug.includes('pill');
        else if (cat === 'sliding-tabs') show = tags.includes('sliding') || tags.includes('indicator') || tags.includes('tab') || slug.includes('origin') || slug.includes('parkui');
        else if (cat === 'responsive') show = tags.includes('responsive') || tags.includes('drawer') || tags.includes('semantic') || slug.includes('kitwind') || slug.includes('daisy') || slug.includes('float');

        card.style.display = show ? 'block' : 'none';
      });
    }

    function filterNavbars() {
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.navbar-card');
      cards.forEach(card => {
        const lib = card.dataset.library || '';
        const slug = card.dataset.slug || '';
        const tags = card.dataset.tags || '';
        const matches = lib.includes(q) || slug.includes(q) || tags.includes(q);
        card.style.display = matches ? 'block' : 'none';
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const input = document.getElementById('searchInput');
        input.value = '';
        filterNavbars();
        input.blur();
      }
    });
  </script>
</body>
</html>`;

  return html;
}

function renderInteractiveNavbar(item) {
  // Render live realistic HTML/Tailwind representation for each component
  switch (item.slug) {
    case "aceternity-floating-navbar":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white/20 bg-neutral-900/80 px-6 py-2.5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span class="text-xs font-semibold text-white">Home</span>
            <span class="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition">About</span>
            <span class="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition">Projects</span>
            <span class="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition">Contact</span>
            <button class="relative rounded-full border border-neutral-700 bg-neutral-950 px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:border-neutral-500 transition">
              <span>Login</span>
              <span class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            </button>
          </div>
        </div>
      `;

    case "aceternity-navbar-menu":
      return `
        <div class="w-full flex justify-center py-2">
          <nav class="relative rounded-full border border-white/[0.2] bg-neutral-900/90 shadow-input flex justify-center space-x-6 px-8 py-3 backdrop-blur-md">
            <div class="relative group cursor-pointer">
              <span class="text-xs font-medium text-white group-hover:text-indigo-400 transition">Services ▾</span>
              <div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block z-50">
                <div class="w-64 rounded-2xl bg-neutral-900 border border-neutral-700 p-4 shadow-2xl text-xs space-y-2">
                  <div class="font-bold text-white">Web Development</div>
                  <div class="text-[11px] text-neutral-400">Production ready Next.js applications</div>
                  <div class="font-bold text-white pt-2 border-t border-neutral-800">Interface Design</div>
                  <div class="text-[11px] text-neutral-400">Micro-animations and design tokens</div>
                </div>
              </div>
            </div>
            <div class="relative group cursor-pointer">
              <span class="text-xs font-medium text-neutral-300 hover:text-white transition">Products ▾</span>
            </div>
            <span class="text-xs font-medium text-neutral-300 hover:text-white cursor-pointer transition">Pricing</span>
          </nav>
        </div>
      `;

    case "magicui-dock-navbar":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="dock-container h-16 rounded-2xl border border-white/10 bg-neutral-900/70 p-2 backdrop-blur-xl shadow-2xl">
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Home">🏠</div>
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Projects">📁</div>
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Calendar">📅</div>
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Messages">💬</div>
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Music">🎵</div>
            <div class="dock-item w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-lg cursor-pointer shadow-md" title="Settings">⚙️</div>
          </div>
        </div>
      `;

    case "kokonut-morphic-navbar":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 rounded-full px-5 py-2 backdrop-blur-md shadow-xl text-xs text-neutral-300">
            <div class="flex items-center gap-1.5 font-bold text-white">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Kokonut</span>
            </div>
            <div class="h-4 w-px bg-neutral-800 mx-1"></div>
            <div class="flex items-center gap-1 bg-neutral-950/60 p-1 rounded-full border border-neutral-800/80">
              <button class="px-3 py-1 rounded-full bg-neutral-800 text-white font-medium shadow-sm">Overview</button>
              <button class="px-3 py-1 rounded-full text-neutral-400 hover:text-white transition">Analytics</button>
              <button class="px-3 py-1 rounded-full text-neutral-400 hover:text-white transition">Settings</button>
            </div>
            <div class="h-4 w-px bg-neutral-800 mx-1"></div>
            <div class="flex items-center gap-2">
              <kbd class="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400 border border-neutral-700">⌘K</kbd>
              <div class="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-white">D</div>
            </div>
          </div>
        </div>
      `;

    case "cult-action-dock":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="flex items-center gap-2 rounded-2xl bg-neutral-900/90 border border-neutral-800 p-2 shadow-2xl backdrop-blur-xl">
            <button class="p-2.5 rounded-xl bg-neutral-800/80 text-white hover:bg-neutral-700 transition" title="Dashboard">📊</button>
            <button class="p-2.5 rounded-xl hover:bg-neutral-800/80 text-neutral-400 hover:text-white transition" title="Code">💻</button>
            <button class="p-2.5 rounded-xl hover:bg-neutral-800/80 text-neutral-400 hover:text-white transition" title="Search">🔍</button>
            <div class="h-6 w-px bg-neutral-800"></div>
            <button class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/30">Action</button>
          </div>
        </div>
      `;

    case "motion-primitives-dock":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="dock-container h-16 rounded-3xl border border-neutral-800 bg-neutral-950/80 p-2.5 backdrop-blur-md shadow-2xl">
            <div class="dock-item w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg shadow-lg cursor-pointer">✦</div>
            <div class="dock-item w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200 text-base shadow-sm cursor-pointer hover:border-neutral-700">⚡</div>
            <div class="dock-item w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200 text-base shadow-sm cursor-pointer hover:border-neutral-700">🎨</div>
            <div class="dock-item w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200 text-base shadow-sm cursor-pointer hover:border-neutral-700">🔔</div>
            <div class="dock-item w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200 text-base shadow-sm cursor-pointer hover:border-neutral-700">👤</div>
          </div>
        </div>
      `;

    case "shadcn-navigation-menu":
      return `
        <nav class="w-full max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-950/95 px-6 py-3 flex items-center justify-between text-xs">
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2 font-bold text-white">
              <svg class="h-4 w-4" viewBox="0 0 256 256">
                <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
                <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
              </svg>
              <span>shadcn/ui</span>
            </div>
            <div class="hidden sm:flex items-center gap-1 text-neutral-400">
              <button class="px-2.5 py-1.5 rounded hover:bg-neutral-900 hover:text-white transition">Getting Started ▾</button>
              <button class="px-2.5 py-1.5 rounded hover:bg-neutral-900 hover:text-white transition">Components ▾</button>
              <a href="#docs" class="px-2.5 py-1.5 rounded hover:bg-neutral-900 hover:text-white transition">Documentation</a>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-neutral-500 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">Search docs... ⌘K</span>
            <div class="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-white">⚙</div>
          </div>
        </nav>
      `;

    case "originui-sliding-nav":
      return `
        <div class="w-full max-w-3xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
          <div class="flex items-center gap-2 font-bold text-xs text-white">
            <span class="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-black text-[10px]">O</span>
            <span>Origin UI</span>
          </div>
          <div class="flex items-center gap-1 p-1 bg-neutral-950 rounded-full border border-neutral-800 text-xs">
            <button class="px-3 py-1 rounded-full bg-neutral-800 text-white font-medium shadow-sm">Overview</button>
            <button class="px-3 py-1 rounded-full text-neutral-400 hover:text-white transition">Schedule</button>
            <button class="px-3 py-1 rounded-full text-neutral-400 hover:text-white transition">Workflows</button>
            <button class="px-3 py-1 rounded-full text-neutral-400 hover:text-white transition">Settings</button>
          </div>
          <button class="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition">Feedback</button>
        </div>
      `;

    case "hoverdev-tabs-navbar":
      return `
        <div class="w-full max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/90 px-6 py-3 flex items-center justify-between text-xs text-white">
          <div class="flex items-center gap-2 font-bold">
            <span class="text-indigo-400">⚡</span>
            <span>Hover.dev</span>
          </div>
          <div class="flex items-center gap-4 text-neutral-400">
            <span class="hover:text-indigo-400 cursor-pointer transition">Products</span>
            <span class="hover:text-indigo-400 cursor-pointer transition">Pricing</span>
            <span class="hover:text-indigo-400 cursor-pointer transition">Blog</span>
          </div>
          <button class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold shadow-md shadow-indigo-600/30">Get Started</button>
        </div>
      `;

    case "syntaxui-glass-pill":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-2xl text-xs text-neutral-300">
            <span class="font-bold text-white flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>SyntaxUI</span>
            </span>
            <div class="flex items-center gap-4 text-neutral-400">
              <span class="hover:text-white cursor-pointer">Components</span>
              <span class="hover:text-white cursor-pointer">Templates</span>
              <span class="hover:text-white cursor-pointer">Pricing</span>
            </div>
            <button class="px-3 py-1 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition">Browse</button>
          </div>
        </div>
      `;

    case "spectrum-glow-nav":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <div class="flex items-center gap-8 px-6 py-2.5 rounded-2xl bg-neutral-950 text-white text-xs">
              <span class="font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Spectrum</span>
              <div class="flex items-center gap-5 text-neutral-400">
                <span class="hover:text-white cursor-pointer">Components</span>
                <span class="hover:text-white cursor-pointer">Animations</span>
                <span class="hover:text-white cursor-pointer">Templates</span>
              </div>
              <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90">Explore UI</button>
            </div>
          </div>
        </div>
      `;

    case "rareblocks-mega-navbar":
      return `
        <div class="w-full max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-white dark:bg-neutral-950 px-6 py-3 flex items-center justify-between text-xs text-neutral-800 dark:text-neutral-200">
          <div class="flex items-center gap-6">
            <span class="font-extrabold text-sm text-indigo-600">❖ Rareblocks</span>
            <div class="hidden sm:flex items-center gap-4 text-neutral-400">
              <span>Features ▾</span>
              <span>Solutions ▾</span>
              <span>Pricing</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="hover:underline cursor-pointer">Sign in</span>
            <button class="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold shadow-sm">Get Started Free</button>
          </div>
        </div>
      `;

    case "uselayout-command-nav":
      return `
        <div class="w-full flex justify-center py-2">
          <div class="w-full max-w-2xl flex items-center justify-between px-5 py-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs">
            <div class="flex items-center gap-2 font-semibold">
              <span class="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center font-bold">⌘</span>
              <span>UseLayout</span>
            </div>
            <div class="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1 text-neutral-400 w-56">
              <span>🔍</span>
              <span class="flex-1 text-[11px]">Search components...</span>
              <kbd class="text-[9px] bg-neutral-800 px-1 rounded">⌘K</kbd>
            </div>
            <button class="px-3 py-1 rounded-lg bg-white text-black font-semibold">Sign up</button>
          </div>
        </div>
      `;

    default:
      // Generic high-polish presentation
      return `
        <div class="w-full max-w-3xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/80 px-6 py-3 flex items-center justify-between text-xs text-neutral-200">
          <div class="flex items-center gap-6">
            <span class="font-bold text-white tracking-wide">${item.library || item.name.split("-")[0]}</span>
            <div class="hidden sm:flex items-center gap-4 text-neutral-400">
              ${item.headings.slice(0, 3).map(h => `<span class="hover:text-white cursor-pointer transition">${h}</span>`).join("")}
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-neutral-500 font-mono text-[10px] hidden md:inline">v2.0</span>
            <button class="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium border border-neutral-700">Preview ➔</button>
          </div>
        </div>
      `;
  }
}

const htmlContent = generateHtml();

// Write to scratch directory
const scratchPath = path.resolve("all-navbars-review.html");
fs.writeFileSync(scratchPath, htmlContent, "utf-8");
console.log(`✓ Generated review HTML in ${scratchPath}`);

// Write to artifact directory
const artifactDir = "C:\\Users\\kartik\\.gemini\\antigravity\\brain\\d3f1c1a7-da68-4618-9150-e431dc30a492";
const artifactPath = path.join(artifactDir, "all_navbars_review.html");
fs.writeFileSync(artifactPath, htmlContent, "utf-8");
console.log(`✓ Generated review HTML in ${artifactPath}`);
