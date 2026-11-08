import type { NavbarItem, NavbarType } from "./core.js";

export interface CuratedNavbar extends NavbarItem {
  types: NavbarType[];
  title: string;
  description: string;
  tags: string[];
  headings: string[];
  externalLinks: string[];
  ogImage: string;
  codeSnippet: string;
  previewSummary: string;
}

export const CURATED_NAVBARS: Record<string, CuratedNavbar> = {
  github: {
    name: "GitHub",
    slug: "github",
    types: ["mega-menu", "dropdowns", "search-bar"],
    likes: 1840,
    screenshot: "https://github.githubassets.com/images/modules/site/social-cards/github-social.png",
    website: "https://github.com",
    galleryUrl: "https://github.com",
    ogImage: "https://github.githubassets.com/images/modules/site/social-cards/github-social.png",
    title: "GitHub - Developer Platform Mega-Menu & Slash Search Navigation",
    description: "Flagship developer navbar featuring multi-column Product, Solutions, Resources, and Open Source dropdowns, universal '/' keyboard shortcut search bar, and primary Sign In / Sign Up CTAs.",
    tags: ["developer", "mega-menu", "search", "dark-mode", "tech", "open-source"],
    headings: ["Product", "Solutions", "Resources", "Open Source", "Enterprise", "Pricing"],
    externalLinks: ["https://github.com/features", "https://github.com/enterprise", "https://github.com/pricing"],
    previewSummary: "Dark theme sticky navbar with Invertocat logo, dropdown menus with icon badges, slash shortcut search input, and responsive mobile burger drawer.",
    codeSnippet: `import React, { useState } from 'react';

export function GitHubNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#0d1117] text-white border-b border-[#30363d] px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo & Nav items */}
        <div className="flex items-center gap-6">
          <a href="https://github.com" className="text-white hover:opacity-80 transition-opacity">
            <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9 1.48 1.35.43.26.96.18 1.34.14v1.07c0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z"/>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <div className="group relative cursor-pointer hover:text-white flex items-center gap-1">
              <span>Product</span>
              <span className="text-xs">▾</span>
            </div>
            <div className="group relative cursor-pointer hover:text-white flex items-center gap-1">
              <span>Solutions</span>
              <span className="text-xs">▾</span>
            </div>
            <div className="group relative cursor-pointer hover:text-white flex items-center gap-1">
              <span>Resources</span>
              <span className="text-xs">▾</span>
            </div>
            <a href="#enterprise" className="hover:text-white">Enterprise</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>

        {/* Right: Search & Auth */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-[#161b22] border border-[#30363d] rounded-md px-3 py-1.5 text-sm text-gray-200 placeholder-gray-500 w-64 focus:outline-none focus:border-blue-500 focus:w-80 transition-all pr-8"
            />
            <span className="absolute right-2 top-1.5 border border-[#30363d] rounded px-1.5 text-xs text-gray-400 font-mono">/</span>
          </div>
          <a href="#signin" className="text-sm font-semibold text-gray-300 hover:text-white px-2">Sign in</a>
          <a href="#signup" className="text-sm font-semibold text-white border border-gray-600 rounded-md px-3 py-1.5 hover:border-white transition-colors">Sign up</a>
        </div>
      </div>
    </nav>
  );
}`
  },

  linear: {
    name: "Linear",
    slug: "linear",
    types: ["dropdowns", "static"],
    likes: 2150,
    screenshot: "https://linear.app/static/og-image.png",
    website: "https://linear.app",
    galleryUrl: "https://linear.app",
    ogImage: "https://linear.app/static/og-image.png",
    title: "Linear - Sleek Glassmorphism Floating Pill Navbar",
    description: "The gold standard of minimalist modern SaaS navigation. Features ultra-subtle borders, backdrop blur glassmorphism, smooth micro-interactions, and high-conversion auth buttons.",
    tags: ["glassmorphism", "minimalist", "dark-mode", "saas", "issue-tracker", "modern"],
    headings: ["Features", "Method", "Customers", "Changelog", "Pricing", "Contact"],
    externalLinks: ["https://linear.app/features", "https://linear.app/method", "https://linear.app/pricing"],
    previewSummary: "Translucent backdrop-blur pill navbar centered at the top of the viewport with subtle white borders, monochromatic typography, and smooth hover glow.",
    codeSnippet: `import React from 'react';

export function LinearNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="backdrop-blur-md bg-black/60 border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between gap-8 max-w-4xl w-full shadow-2xl transition-all hover:border-white/20">
        {/* Brand */}
        <a href="https://linear.app" className="flex items-center gap-2 text-white font-medium">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
          </svg>
          <span className="text-sm tracking-tight font-semibold">Linear</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#method" className="hover:text-white transition-colors">Method</a>
          <a href="#customers" className="hover:text-white transition-colors">Customers</a>
          <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        {/* Action */}
        <div className="flex items-center gap-3">
          <a href="#login" className="text-xs font-medium text-neutral-400 hover:text-white transition-colors">Log in</a>
          <a href="#signup" className="text-xs font-medium text-black bg-white rounded-full px-3.5 py-1.5 hover:bg-neutral-200 transition-colors shadow-sm">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}`
  },

  vercel: {
    name: "Vercel",
    slug: "vercel",
    types: ["mega-menu", "dropdowns"],
    likes: 1980,
    screenshot: "https://vercel.com/api/og",
    website: "https://vercel.com",
    galleryUrl: "https://vercel.com",
    ogImage: "https://vercel.com/api/og",
    title: "Vercel - Minimalist Developer Cloud Mega-Menu Navigation",
    description: "The modern developer cloud header featuring Vercel's signature triangular logo, hover tab sliding underlines, comprehensive Products & Solutions menus, and frictionless Deploy / Sign up CTAs.",
    tags: ["developer", "cloud", "nextjs", "minimalist", "mega-menu"],
    headings: ["Products", "Solutions", "Resources", "Enterprise", "Docs", "Pricing"],
    externalLinks: ["https://vercel.com/products", "https://vercel.com/solutions", "https://vercel.com/pricing"],
    previewSummary: "Clean black-and-white header with border-b, sliding active hover indicators, multi-column feature flyouts, and responsive controls.",
    codeSnippet: `import React, { useState } from 'react';

export function VercelNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="https://vercel.com" className="flex items-center gap-2">
            <svg height="22" viewBox="0 0 116 100" fill="#fff">
              <path d="M57.5 0L115 100H0L57.5 0z" />
            </svg>
            <span className="font-bold text-lg tracking-tight">Vercel</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-400">
            {['Products', 'Solutions', 'Resources', 'Enterprise', 'Docs', 'Pricing'].map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className="px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <a href="#contact" className="hidden sm:inline text-neutral-400 hover:text-white px-3 py-1.5">Contact</a>
          <a href="#login" className="text-neutral-400 hover:text-white px-3 py-1.5">Log In</a>
          <a href="#signup" className="bg-white text-black font-medium px-3.5 py-1.5 rounded-md hover:bg-neutral-200 transition-colors">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}`
  },

  stripe: {
    name: "Stripe",
    slug: "stripe",
    types: ["mega-menu", "dropdowns"],
    likes: 2450,
    screenshot: "https://stripe.com/img/v3/home/social.png",
    website: "https://stripe.com",
    galleryUrl: "https://stripe.com",
    ogImage: "https://stripe.com/img/v3/home/social.png",
    title: "Stripe - The Gold Standard Animated Mega-Menu Navigation",
    description: "The internet's benchmark for complex animated navigation. Multi-column cards with icons, rich gradients, developer code links, and seamless physics-based hover transitions.",
    tags: ["fintech", "mega-menu", "animation", "interactive", "gold-standard"],
    headings: ["Products", "Solutions", "Developers", "Resources", "Pricing"],
    externalLinks: ["https://stripe.com/payments", "https://stripe.com/billing", "https://stripe.com/pricing"],
    previewSummary: "Full-width adaptive navigation with animated dropdown chevron icons, dynamic card heights, and dual-tone gradient accents.",
    codeSnippet: `import React, { useState } from 'react';

export function StripeNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white px-6 py-4 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="https://stripe.com" className="text-2xl font-black tracking-tight text-white">stripe</a>

        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
          <div
            className="relative cursor-pointer py-2 hover:opacity-80"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>Products</span>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
                <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-6 border border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Payments</h4>
                    <p className="text-sm font-semibold">Online Payments</p>
                    <p className="text-xs text-gray-500">Accept cards and local payment methods worldwide</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Billing</h4>
                    <p className="text-sm font-semibold">Subscriptions</p>
                    <p className="text-xs text-gray-500">B2B SaaS recurring billing and invoicing</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#solutions" className="hover:opacity-80">Solutions</a>
          <a href="#developers" className="hover:opacity-80">Developers</a>
          <a href="#resources" className="hover:opacity-80">Resources</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#signin" className="text-sm font-semibold hover:opacity-80">Sign in</a>
          <a href="#contact" className="text-sm font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all">
            Contact sales &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}`
  },

  figma: {
    name: "Figma",
    slug: "figma",
    types: ["dropdowns", "mega-menu"],
    likes: 1720,
    screenshot: "https://www.figma.com/community/og-image",
    website: "https://figma.com",
    galleryUrl: "https://figma.com",
    ogImage: "https://www.figma.com/community/og-image",
    title: "Figma - Collaborative Design Suite Navigation",
    description: "Design-first SaaS navigation featuring dropdown menus for the Figma tool suite (Design, FigJam, Slides, Dev Mode), community templates, and accessible onboarding buttons.",
    tags: ["design", "collaboration", "saas", "mega-menu", "creative"],
    headings: ["Products", "Solutions", "Community", "Resources", "Pricing", "Contact"],
    externalLinks: ["https://figma.com/design", "https://figma.com/figjam", "https://figma.com/pricing"],
    previewSummary: "Modern minimalist header with multi-colored Figma emblem, product suite drawer, and crisp black buttons.",
    codeSnippet: `import React from 'react';

export function FigmaNavbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="https://figma.com" className="flex items-center gap-2">
            <svg width="24" height="36" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
            <button className="hover:text-black">Products ▾</button>
            <button className="hover:text-black">Solutions ▾</button>
            <button className="hover:text-black">Community ▾</button>
            <button className="hover:text-black">Resources ▾</button>
            <a href="#pricing" className="hover:text-black">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-black px-3 py-2">Contact sales</a>
          <a href="#login" className="text-sm font-medium text-gray-700 hover:text-black px-3 py-2">Log in</a>
          <a href="#signup" className="text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors">
            Get started for free
          </a>
        </div>
      </div>
    </nav>
  );
}`
  },

  openai: {
    name: "OpenAI",
    slug: "openai",
    types: ["static", "dropdowns", "search-bar"],
    likes: 2210,
    screenshot: "https://openai.com/favicon.ico",
    website: "https://openai.com",
    galleryUrl: "https://openai.com",
    ogImage: "https://openai.com/favicon.ico",
    title: "OpenAI - Frontier AI Research & Product Navigation",
    description: "Monochrome, ultra-clean navigation featuring Research, Products (ChatGPT, Sora, API), Safety, and Company links with instant search and Try ChatGPT conversion button.",
    tags: ["ai", "minimalist", "monochrome", "research", "chatgpt"],
    headings: ["Research", "Products", "Safety", "Company"],
    externalLinks: ["https://chatgpt.com", "https://openai.com/research", "https://openai.com/api"],
    previewSummary: "Full-bleed monochrome navigation with iconic flower vortex logo and fluid responsive typography.",
    codeSnippet: `import React from 'react';

export function OpenAINavbar() {
  return (
    <header className="bg-black text-white px-6 py-4 sticky top-0 z-50 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="https://openai.com" className="text-xl font-bold tracking-tight">OpenAI</a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#research" className="hover:text-white transition-colors">Research</a>
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#safety" className="hover:text-white transition-colors">Safety</a>
          <a href="#company" className="hover:text-white transition-colors">Company</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://chatgpt.com" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-wider font-semibold border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
            Try ChatGPT ↗
          </a>
        </div>
      </div>
    </header>
  );
}`
  },

  supabase: {
    name: "Supabase",
    slug: "supabase",
    types: ["dropdowns", "mega-menu"],
    likes: 1890,
    screenshot: "https://supabase.com/images/og/supabase-og.png",
    website: "https://supabase.com",
    galleryUrl: "https://supabase.com",
    ogImage: "https://supabase.com/images/og/supabase-og.png",
    title: "Supabase - Open Source Firebase Alternative Navigation",
    description: "Developer-first navbar with signature emerald green lightning bolt logo, Product suite dropdowns (Database, Auth, Storage, Edge Functions), Documentation link, and live GitHub stars badge.",
    tags: ["database", "developer", "open-source", "dark-mode", "emerald"],
    headings: ["Product", "Developers", "Enterprise", "Pricing", "Docs", "Blog"],
    externalLinks: ["https://supabase.com/docs", "https://github.com/supabase/supabase"],
    previewSummary: "Dark mode navbar with emerald accent highlights, database architecture category links, and fast project launch button.",
    codeSnippet: `import React from 'react';

export function SupabaseNavbar() {
  return (
    <nav className="bg-[#171717] text-white border-b border-[#282828] px-6 py-3.5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="https://supabase.com" className="flex items-center gap-2.5 font-bold text-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.36 9.23h-8.8L17.7 1.58a.75.75 0 0 0-1.2-.82L3.23 13.7a.75.75 0 0 0 .6 1.25h8.8L7.5 22.42a.75.75 0 0 0 1.2.82l13.27-12.94a.75.75 0 0 0-.61-1.07z" fill="#3ECF8E"/>
            </svg>
            <span>Supabase</span>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-neutral-300">
            <button className="hover:text-emerald-400">Product ▾</button>
            <button className="hover:text-emerald-400">Developers ▾</button>
            <a href="#enterprise" className="hover:text-white">Enterprise</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#signin" className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-1.5">Sign in</a>
          <a href="#start" className="text-sm font-medium text-black bg-[#3ECF8E] hover:bg-[#34b27b] px-3.5 py-1.5 rounded-md transition-colors font-semibold">
            Start your project
          </a>
        </div>
      </div>
    </nav>
  );
}`
  },

  raycast: {
    name: "Raycast",
    slug: "raycast",
    types: ["static", "search-bar"],
    likes: 1680,
    screenshot: "https://www.raycast.com/brand/og.png",
    website: "https://raycast.com",
    galleryUrl: "https://raycast.com",
    ogImage: "https://www.raycast.com/brand/og.png",
    title: "Raycast - Ultra-Fast Launcher & Productivity Navigation",
    description: "Futuristic dark glass header with vibrant red accent logo, store extensions directory link, developer API docs, and direct macOS / Windows download buttons.",
    tags: ["productivity", "launcher", "macos", "dark-mode", "glassmorphism"],
    headings: ["Store", "Developer", "Pro", "Teams", "Changelog", "Pricing"],
    externalLinks: ["https://www.raycast.com/store", "https://developers.raycast.com"],
    previewSummary: "High-contrast dark header with glowing red logo, subtle gray typography, and vibrant download badge.",
    codeSnippet: `import React from 'react';

export function RaycastNavbar() {
  return (
    <nav className="bg-[#0b0c0e]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="https://raycast.com" className="flex items-center gap-2.5 font-bold text-white text-base">
          <div className="w-5 h-5 bg-[#ff6363] rounded-sm transform rotate-45" />
          <span>Raycast</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a href="#store" className="hover:text-white transition-colors">Store</a>
          <a href="#developer" className="hover:text-white transition-colors">Developer</a>
          <a href="#pro" className="hover:text-white transition-colors">Pro</a>
          <a href="#teams" className="hover:text-white transition-colors">Teams</a>
          <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <a href="#download" className="text-xs font-semibold bg-[#ff6363] hover:bg-[#ff4f4f] text-white px-4 py-2 rounded-full transition-colors shadow-lg shadow-[#ff6363]/20">
          Download
        </a>
      </div>
    </nav>
  );
}`
  },

  airbnb: {
    name: "Airbnb",
    slug: "airbnb",
    types: ["search-bar", "dropdowns", "full-screen"],
    likes: 2190,
    screenshot: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-180x180.png",
    website: "https://airbnb.com",
    galleryUrl: "https://airbnb.com",
    ogImage: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-180x180.png",
    title: "Airbnb - Interactive Pill Search Bar & Host Navigation",
    description: "The global benchmark in marketplace travel search. Features the famous 3-segment pill (Where, When, Who), Host mode switcher, globe currency picker, and user profile avatar dropdown.",
    tags: ["marketplace", "travel", "search-pill", "interactive", "consumer"],
    headings: ["Stays", "Experiences", "Services", "Airbnb your home"],
    externalLinks: ["https://airbnb.com", "https://airbnb.com/host"],
    previewSummary: "Warm clean white navbar with coral brand mark, center interactive filter pill with search icon, and right-hand user host options.",
    codeSnippet: `import React from 'react';

export function AirbnbNavbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="https://airbnb.com" className="text-[#FF385C] flex items-center gap-1.5 font-bold text-xl">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.553a7.354 7.354 0 0 1-2.19 5.344A7.48 7.48 0 0 1 21.91 31.5c-2.457 0-4.665-.968-6.196-2.614-1.53 1.646-3.738 2.614-6.196 2.614a7.48 7.48 0 0 1-5.389-2.124 7.354 7.354 0 0 1-2.19-5.344c.05-1.074.293-1.962.96-3.553l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1z"/>
          </svg>
          <span className="hidden sm:inline">airbnb</span>
        </a>

        {/* Center Search Pill */}
        <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm font-semibold divide-x divide-gray-200">
          <button className="px-3 hover:text-black">Anywhere</button>
          <button className="px-3 hover:text-black">Any week</button>
          <div className="pl-3 flex items-center gap-3 text-gray-500 font-normal">
            <span>Add guests</span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-3">
          <a href="#host" className="text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-full px-3 py-2">Airbnb your home</a>
          <button className="border border-gray-300 rounded-full p-2 hover:shadow-md flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <div className="w-7 h-7 bg-gray-500 rounded-full text-white flex items-center justify-center text-xs">U</div>
          </button>
        </div>
      </div>
    </header>
  );
}`
  },

  tailwindcss: {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    types: ["search-bar", "dropdowns"],
    likes: 1940,
    screenshot: "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e.jpg",
    website: "https://tailwindcss.com",
    galleryUrl: "https://tailwindcss.com",
    ogImage: "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e.jpg",
    title: "Tailwind CSS - Modern Framework DocSearch Navigation",
    description: "The gold standard of framework documentation headers. Features Algolia docsearch (`Ctrl + K`), framework version selector, dark/light theme switcher, and direct GitHub repository links.",
    tags: ["css", "framework", "docs", "search", "developer", "tailwind"],
    headings: ["Docs", "Components", "Blog", "Showcase"],
    externalLinks: ["https://tailwindcss.com/docs", "https://github.com/tailwindlabs/tailwindcss"],
    previewSummary: "Cyan-accented documentation header with wide keyboard search input, version tag pill, and GitHub stargazers badge.",
    codeSnippet: `import React from 'react';

export function TailwindNavbar() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="https://tailwindcss.com" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
          </svg>
          <span>tailwindcss</span>
        </a>

        {/* Quick Search */}
        <button className="hidden sm:flex items-center gap-4 bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-1.5 text-sm w-72 hover:border-slate-400 transition-colors">
          <span className="flex items-center gap-2">🔍 Quick search...</span>
          <kbd className="font-mono text-xs border border-slate-300 dark:border-slate-600 rounded px-1.5">Ctrl K</kbd>
        </button>

        <div className="flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <a href="#docs" className="hover:text-cyan-500">Docs</a>
          <a href="#components" className="hover:text-cyan-500">Components</a>
          <a href="#blog" className="hover:text-cyan-500">Blog</a>
          <a href="https://github.com/tailwindlabs/tailwindcss" className="hover:opacity-80">GitHub</a>
        </div>
      </div>
    </header>
  );
}`
  },

  netflix: {
    name: "Netflix",
    slug: "netflix",
    types: ["static", "dropdowns"],
    likes: 1540,
    screenshot: "https://assets.nflxext.com/ffe/siteui/common/icons/monogram/netflix-monogram.png",
    website: "https://netflix.com",
    galleryUrl: "https://netflix.com",
    ogImage: "https://assets.nflxext.com/ffe/siteui/common/icons/monogram/netflix-monogram.png",
    title: "Netflix - Entertainment Streaming High-Contrast Navigation",
    description: "Iconic high-impact streaming header with bold red typography, international language selector dropdown, and high-visibility Sign In CTA.",
    tags: ["entertainment", "streaming", "media", "dark-mode", "red"],
    headings: ["Home", "TV Shows", "Movies", "New & Popular", "My List"],
    externalLinks: ["https://netflix.com"],
    previewSummary: "Pitch-black gradient header with trademark red wordmark and language selector.",
    codeSnippet: `import React from 'react';

export function NetflixNavbar() {
  return (
    <header className="bg-transparent bg-gradient-to-b from-black/80 to-transparent px-8 py-5 flex items-center justify-between sticky top-0 z-50">
      <a href="https://netflix.com" className="text-[#E50914] font-black text-3xl tracking-wider">
        NETFLIX
      </a>

      <div className="flex items-center gap-4">
        <select className="bg-black/40 text-white text-sm border border-gray-500 rounded px-3 py-1 font-medium">
          <option>🌐 English</option>
          <option>🌐 Español</option>
          <option>🌐 Français</option>
        </select>
        <a href="#signin" className="bg-[#E50914] text-white text-sm font-semibold px-4 py-1.5 rounded hover:bg-[#c10712] transition-colors">
          Sign In
        </a>
      </div>
    </header>
  );
}`
  },

  spotify: {
    name: "Spotify",
    slug: "spotify",
    types: ["side-bar", "search-bar", "dropdowns"],
    likes: 1620,
    screenshot: "https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico",
    website: "https://spotify.com",
    galleryUrl: "https://spotify.com",
    ogImage: "https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico",
    title: "Spotify - Audio Streaming App Bar & Search Navigation",
    description: "The music streaming platform navigation featuring pill search bar, back/forward history navigation buttons, and user profile avatar.",
    tags: ["music", "audio", "streaming", "dark-mode", "green"],
    headings: ["Home", "Search", "Your Library", "Explore Premium"],
    externalLinks: ["https://open.spotify.com", "https://spotify.com/premium"],
    previewSummary: "Dark theme rounded control navigation with green accent badges and pill search input.",
    codeSnippet: `import React from 'react';

export function SpotifyNavbar() {
  return (
    <header className="bg-[#121212] text-white px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <a href="https://spotify.com" className="text-[#1DB954]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
        <div className="flex items-center gap-2">
          <button className="bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">&lt;</button>
          <button className="bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">&gt;</button>
        </div>
      </div>

      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full bg-[#242424] text-white placeholder-gray-400 text-sm rounded-full px-5 py-2.5 border border-transparent focus:border-white focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <a href="#premium" className="bg-white text-black font-bold text-xs rounded-full px-4 py-2 hover:scale-105 transition-transform">
          Explore Premium
        </a>
        <div className="w-8 h-8 bg-[#282828] rounded-full text-white flex items-center justify-center text-xs font-bold">K</div>
      </div>
    </header>
  );
}`
  },

  discord: {
    name: "Discord",
    slug: "discord",
    types: ["dropdowns", "static"],
    likes: 1780,
    screenshot: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    website: "https://discord.com",
    galleryUrl: "https://discord.com",
    ogImage: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    title: "Discord - Voice & Chat Community Platform Navigation",
    description: "Vibrant blurple and white community navigation with links to Download, Nitro, Discover, Safety, Support, Blog, Careers, and the Open Discord web client button.",
    tags: ["gaming", "community", "chat", "voice", "blurple"],
    headings: ["Download", "Nitro", "Discover", "Safety", "Support", "Blog", "Careers"],
    externalLinks: ["https://discord.com/download", "https://discord.com/nitro"],
    previewSummary: "Deep blue-indigo navigation with friendly Clyde mascot logo and high-converting white pill action button.",
    codeSnippet: `import React from 'react';

export function DiscordNavbar() {
  return (
    <nav className="bg-[#404EED] text-white px-8 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="https://discord.com" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <svg width="34" height="26" viewBox="0 0 127.14 96.36" fill="currentColor">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.91,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.91,96.12,53,91.08,65.69,84.69,65.69Z"/>
          </svg>
          <span>Discord</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-base font-semibold">
          <a href="#download" className="hover:underline">Download</a>
          <a href="#nitro" className="hover:underline">Nitro</a>
          <a href="#discover" className="hover:underline">Discover</a>
          <a href="#safety" className="hover:underline">Safety</a>
          <a href="#support" className="hover:underline">Support</a>
        </div>

        <a href="#login" className="bg-white text-[#23272A] text-sm font-semibold rounded-full px-4 py-2 hover:shadow-lg hover:text-[#5865F2] transition-all">
          Open Discord
        </a>
      </div>
    </nav>
  );
}`
  }
};
