import fs from "fs";
import path from "path";

async function main() {
  console.log("Fetching live registry components...");

  let aceternityFloatingCode = "";
  let aceternityMenuCode = "";
  let magicuiDockCode = "";
  let cultDockCode = "";
  let kokonutMorphicCode = "";
  let shadcnNavCode = "";
  let ibelickDockCode = "";

  try {
    const f = await (await fetch("https://ui.aceternity.com/registry/floating-navbar.json")).json();
    aceternityFloatingCode = f.files?.[0]?.content || "";
    console.log("✓ Fetched Aceternity Floating:", aceternityFloatingCode.length, "bytes");
  } catch (e) { console.error("Aceternity floating failed:", e.message); }

  try {
    const m = await (await fetch("https://ui.aceternity.com/registry/navbar-menu.json")).json();
    aceternityMenuCode = m.files?.[0]?.content || "";
    console.log("✓ Fetched Aceternity Menu:", aceternityMenuCode.length, "bytes");
  } catch (e) { console.error("Aceternity menu failed:", e.message); }

  try {
    const mu = await (await fetch("https://magicui.design/r/dock.json")).json();
    magicuiDockCode = mu.files?.[0]?.content || "";
    console.log("✓ Fetched MagicUI Dock:", magicuiDockCode.length, "bytes");
  } catch (e) { console.error("MagicUI dock failed:", e.message); }

  try {
    const c = await (await fetch("https://www.cult-ui.com/r/dock.json")).json();
    cultDockCode = c.files?.[0]?.content || "";
    console.log("✓ Fetched Cult UI Dock:", cultDockCode.length, "bytes");
  } catch (e) { console.error("Cult dock failed:", e.message); }

  try {
    kokonutMorphicCode = await (await fetch("https://raw.githubusercontent.com/kokonut-labs/kokonutui/main/components/kokonutui/morphic-navbar.tsx")).text();
    console.log("✓ Fetched Kokonut Morphic Navbar:", kokonutMorphicCode.length, "bytes");
  } catch (e) { console.error("Kokonut fetch failed:", e.message); }

  try {
    shadcnNavCode = await (await fetch("https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/navigation-menu.tsx")).text();
    console.log("✓ Fetched Shadcn Navigation Menu:", shadcnNavCode.length, "bytes");
  } catch (e) { console.error("Shadcn fetch failed:", e.message); }

  try {
    ibelickDockCode = await (await fetch("https://raw.githubusercontent.com/ibelick/motion-primitives/main/components/core/dock.tsx")).text();
    console.log("✓ Fetched Ibelick Motion-Primitives Dock:", ibelickDockCode.length, "bytes");
  } catch (e) { console.error("Ibelick fetch failed:", e.message); }

  // Fallbacks if fetch failed for any reason
  if (!aceternityFloatingCode) {
    aceternityFloatingCode = `// Aceternity UI Floating Navbar\nexport function FloatingNav() { return <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">...</div>; }`;
  }
  if (!magicuiDockCode) {
    magicuiDockCode = `// Magic UI Dock Navbar\nexport function Dock() { return <div className="flex h-14 items-center gap-2 rounded-2xl bg-neutral-900/80 px-4">...</div>; }`;
  }

  const escapeCode = (str) => JSON.stringify(str);

  const curatedEntries = [
    // 1. Aceternity UI - Floating Navbar
    {
      key: "aceternity-floating-navbar",
      name: "Aceternity UI - Floating Navbar",
      slug: "aceternity-floating-navbar",
      library: "Aceternity UI",
      sourceType: "component-library",
      types: ["static", "dropdowns"],
      likes: 4950,
      screenshot: "https://ui.aceternity.com/api/og",
      website: "https://ui.aceternity.com/components/floating-navbar",
      galleryUrl: "https://ui.aceternity.com/components/floating-navbar",
      ogImage: "https://ui.aceternity.com/api/og",
      title: "Aceternity UI - Floating Navbar with Scroll Visibility",
      description: "Iconic sticky floating navbar with scroll-direction detection using Framer Motion. Shows/hides based on scroll offset, with backdrop blur, rounded-full pill geometry, and glowing border gradients.",
      tags: ["aceternity", "component-library", "framer-motion", "floating-navbar", "scroll-responsive", "pill-nav"],
      headings: ["Home", "About", "Projects", "Contact", "Login"],
      externalLinks: ["https://ui.aceternity.com", "https://github.com/aceternity/ui"],
      previewSummary: "Sleek pill-shaped floating navbar with backdrop blur, spring motion transitions, and integrated CTA button.",
      codeSnippet: aceternityFloatingCode,
    },

    // 2. Aceternity UI - Navbar Menu
    {
      key: "aceternity-navbar-menu",
      name: "Aceternity UI - Navbar Menu",
      slug: "aceternity-navbar-menu",
      library: "Aceternity UI",
      sourceType: "component-library",
      types: ["dropdowns", "mega-menu"],
      likes: 4720,
      screenshot: "https://ui.aceternity.com/api/og",
      website: "https://ui.aceternity.com/components/navbar-menu",
      galleryUrl: "https://ui.aceternity.com/components/navbar-menu",
      ogImage: "https://ui.aceternity.com/api/og",
      title: "Aceternity UI - Magnetic Hover Dropdown Navbar Menu",
      description: "Floating navigation bar with magnetic smooth expanding dropdown card modals on hover, perfect for modern SaaS product showcases.",
      tags: ["aceternity", "component-library", "framer-motion", "hover-dropdown", "mega-menu", "saas-nav"],
      headings: ["Services", "Products", "Pricing"],
      externalLinks: ["https://ui.aceternity.com", "https://github.com/aceternity/ui"],
      previewSummary: "Floating navbar with Framer Motion hover cards, product previews, and smooth layout animations.",
      codeSnippet: aceternityMenuCode,
    },

    // 3. Magic UI - Dock Navbar
    {
      key: "magicui-dock-navbar",
      name: "Magic UI - Interactive Dock",
      slug: "magicui-dock-navbar",
      library: "Magic UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 4620,
      screenshot: "https://magicui.design/og",
      website: "https://magicui.design/docs/components/dock",
      galleryUrl: "https://magicui.design/docs/components/dock",
      ogImage: "https://magicui.design/og",
      title: "Magic UI - macOS Style Interactive Floating Dock",
      description: "The viral macOS dock interaction recreated with Motion and Tailwind CSS. Features dynamic distance-based mouse magnification scaling, spring physics, and keyboard navigation.",
      tags: ["magicui", "component-library", "dock", "macos", "framer-motion", "spring-physics", "bottom-bar"],
      headings: ["Home", "Archive", "Projects", "Notes", "Settings"],
      externalLinks: ["https://magicui.design", "https://github.com/magicuidesign/magicui"],
      previewSummary: "macOS-style bottom floating dock with realistic cursor proximity magnification, smooth spring damping, and tooltip labels.",
      codeSnippet: magicuiDockCode,
    },

    // 4. Kokonut UI - Morphic Split Navbar
    {
      key: "kokonut-morphic-navbar",
      name: "Kokonut UI - Morphic Navbar",
      slug: "kokonut-morphic-navbar",
      library: "Kokonut UI",
      sourceType: "component-library",
      types: ["static", "search-bar"],
      likes: 4310,
      screenshot: "https://kokonutui.com/og.png",
      website: "https://kokonutui.com/docs/components/morphic-navbar",
      galleryUrl: "https://kokonutui.com/docs/components/morphic-navbar",
      ogImage: "https://kokonutui.com/og.png",
      title: "Kokonut UI - Morphic Split Island Navigation Bar",
      description: "Next-generation split navigation island created by Dorian Baffier (@dorianbaffier). Features sliding pill indicator, quick search modal trigger, notification badge, and smooth spring physics.",
      tags: ["kokonutui", "component-library", "morphic", "island", "framer-motion", "lucide-icons", "tailwind"],
      headings: ["Overview", "Integrations", "Analytics", "Settings"],
      externalLinks: ["https://kokonutui.com", "https://github.com/kokonut-labs/kokonutui"],
      previewSummary: "Split pill navbar with sliding active indicator tab, search shortcut input, and profile avatar trigger.",
      codeSnippet: kokonutMorphicCode,
    },

    // 5. Cult UI - Minimalist Action Dock
    {
      key: "cult-action-dock",
      name: "Cult UI - Minimalist Action Dock",
      slug: "cult-action-dock",
      library: "Cult UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3950,
      screenshot: "https://www.cult-ui.com/og.png",
      website: "https://www.cult-ui.com/docs/components/dock",
      galleryUrl: "https://www.cult-ui.com/docs/components/dock",
      ogImage: "https://www.cult-ui.com/og.png",
      title: "Cult UI - Minimalist Island Action Dock",
      description: "Cult UI curated dynamic action dock with spring easing, radial glow effects, dark-mode first aesthetic, and tactile feedback.",
      tags: ["cult-ui", "component-library", "dock", "tailwind", "motion", "action-island"],
      headings: ["Dashboard", "Analytics", "Messages", "Profile"],
      externalLinks: ["https://www.cult-ui.com", "https://github.com/cult-ui/cult-ui"],
      previewSummary: "Subtle dark glassmorphic dock with radial hover illumination and springy icon responses.",
      codeSnippet: cultDockCode,
    },

    // 6. motion-primitives (Ibelick) - Dock & Floating Nav
    {
      key: "motion-primitives-dock",
      name: "motion-primitives - Magnified Dock",
      slug: "motion-primitives-dock",
      library: "motion-primitives",
      sourceType: "component-library",
      types: ["static"],
      likes: 4180,
      screenshot: "https://motion-primitives.com/og.png",
      website: "https://motion-primitives.com/docs/dock",
      galleryUrl: "https://motion-primitives.com/docs/dock",
      ogImage: "https://motion-primitives.com/og.png",
      title: "motion-primitives - Motion Magnified Dock Component",
      description: "Crafted by Julien Thibeaut (@ibelick). High-performance math-driven dock magnification using Framer Motion transforms and useTransform bounds calculation.",
      tags: ["motion-primitives", "ibelick", "component-library", "framer-motion", "dock", "magnification"],
      headings: ["Home", "Explore", "Notifications", "Bookmarks", "Profile"],
      externalLinks: ["https://motion-primitives.com", "https://ui.ibelick.com", "https://github.com/ibelick/motion-primitives"],
      previewSummary: "Ultra-smooth math-driven magnification dock with dynamic icon scaling based on mouse pointer radius.",
      codeSnippet: ibelickDockCode,
    },

    // 7. shadcn/ui - Navigation Menu
    {
      key: "shadcn-navigation-menu",
      name: "shadcn/ui - Navigation Menu",
      slug: "shadcn-navigation-menu",
      library: "shadcn/ui",
      sourceType: "component-library",
      types: ["mega-menu", "dropdowns"],
      likes: 5400,
      screenshot: "https://ui.shadcn.com/og.jpg",
      website: "https://ui.shadcn.com/docs/components/navigation-menu",
      galleryUrl: "https://ui.shadcn.com/docs/components/navigation-menu",
      ogImage: "https://ui.shadcn.com/og.jpg",
      title: "shadcn/ui - Accessible Navigation Menu with Radix Viewport",
      description: "The gold-standard React component library navigation menu. Built on Radix UI Navigation Menu primitives with accessible ARIA keyboard navigation, viewports, and multi-column rich card flyouts.",
      tags: ["shadcn", "component-library", "radix", "tailwind", "mega-menu", "accessible"],
      headings: ["Getting Started", "Components", "Documentation", "Examples"],
      externalLinks: ["https://ui.shadcn.com", "https://github.com/shadcn-ui/ui"],
      previewSummary: "Accessible navigation bar with Radix viewport dropdowns, interactive callout cards, and clean typography.",
      codeSnippet: shadcnNavCode,
    },

    // 8. Origin UI (coss.com) - Sliding Active Pill Navbar
    {
      key: "originui-sliding-nav",
      name: "Origin UI - Sliding Tab Navbar",
      slug: "originui-sliding-nav",
      library: "Origin UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3870,
      screenshot: "https://originui.com/og.png",
      website: "https://originui.com",
      galleryUrl: "https://originui.com",
      ogImage: "https://originui.com/og.png",
      title: "Origin UI - Sliding Active Indicator Pill Navigation",
      description: "Cal.com's official design system component library. Features an active tab indicator that smoothly slides across items using layoutId, dark mode glass background, and subtle hover borders.",
      tags: ["originui", "coss", "calcom", "component-library", "sliding-indicator", "tailwind", "framer-motion"],
      headings: ["Dashboard", "Schedule", "Workflows", "Routing", "Settings"],
      externalLinks: ["https://originui.com", "https://github.com/origin-space/originui"],
      previewSummary: "Sliding pill indicator that tracks your active item with buttery spring animation and subtle frosted pill backing.",
      codeSnippet: `"use client";
import * as React from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "integrations", label: "Integrations" },
  { id: "activity", label: "Activity" },
  { id: "domains", label: "Domains" },
  { id: "settings", label: "Settings" },
];

export function OriginSlidingNav() {
  const [active, setActive] = React.useState("overview");

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-lg bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black text-xs">O</div>
        <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">Origin UI</span>
      </div>

      <div className="relative flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800/60 rounded-full border border-neutral-200/60 dark:border-neutral-700/50">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative px-3.5 py-1.5 text-xs font-medium transition-colors z-10"
              style={{ color: isActive ? "#ffffff" : "#737373" }}
            >
              {isActive && (
                <motion.div
                  layoutId="origin-active-pill"
                  className="absolute inset-0 bg-neutral-900 dark:bg-neutral-700 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Feedback</button>
        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 ring-2 ring-neutral-200 dark:ring-neutral-700" />
      </div>
    </nav>
  );
}`,
    },

    // 9. Hover.dev - Shifting Directional Dropdown Navbar
    {
      key: "hoverdev-tabs-navbar",
      name: "Hover.dev - Directional Tabs Navbar",
      slug: "hoverdev-tabs-navbar",
      library: "Hover.dev",
      sourceType: "component-library",
      types: ["dropdowns", "mega-menu"],
      likes: 4230,
      screenshot: "https://www.hover.dev/og.png",
      website: "https://www.hover.dev/components/navigation",
      galleryUrl: "https://www.hover.dev/components/navigation",
      ogImage: "https://www.hover.dev/og.png",
      title: "Hover.dev - Shifting Directional Dropdown Navigation",
      description: "Stripe-inspired directional shifting tab dropdowns created with Framer Motion. As you hover across tabs, the menu bubble smoothly shifts width, height, and horizontal position with zero jarring jumps.",
      tags: ["hoverdev", "component-library", "framer-motion", "directional-dropdown", "stripe-style"],
      headings: ["Products", "Pricing", "Resources", "Company"],
      externalLinks: ["https://www.hover.dev"],
      previewSummary: "Smooth directional tab shifting with dynamic card dimension tweening and arrow nub positioning.",
      codeSnippet: `"use client";
import * as React from "react";
import { motion } from "framer-motion";

export function HoverDevNavbar() {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [dir, setDir] = React.useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <nav onMouseLeave={() => handleSetSelected(null)} className="relative z-50 flex items-center justify-between px-8 py-4 bg-neutral-900 border-b border-neutral-800 text-white">
      <div className="flex items-center gap-2 font-bold tracking-tight">
        <span className="text-indigo-400">⚡</span> Hover.dev
      </div>

      <div className="flex items-center gap-2">
        <button onMouseEnter={() => handleSetSelected(1)} className="px-3.5 py-1.5 text-sm font-medium hover:text-indigo-400 transition">Products</button>
        <button onMouseEnter={() => handleSetSelected(2)} className="px-3.5 py-1.5 text-sm font-medium hover:text-indigo-400 transition">Pricing</button>
        <button onMouseEnter={() => handleSetSelected(3)} className="px-3.5 py-1.5 text-sm font-medium hover:text-indigo-400 transition">Blog</button>
      </div>

      {selected && (
        <motion.div
          layoutId="hover-dropdown-container"
          className="absolute top-16 left-1/2 -translate-x-1/2 w-96 rounded-2xl bg-neutral-900/95 border border-neutral-700 p-5 shadow-2xl backdrop-blur-xl"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {selected === 1 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400">Platform</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer">Components</div>
                <div className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer">Templates</div>
                <div className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer">Animations</div>
                <div className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer">Interactions</div>
              </div>
            </div>
          )}
          {selected === 2 && (
            <div className="text-sm space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400">Simple Pricing</h4>
              <p className="text-xs text-neutral-300">Lifetime access to all components, micro-interactions, and updates.</p>
            </div>
          )}
          {selected === 3 && (
            <div className="text-sm space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400">Latest Articles</h4>
              <div className="text-xs text-neutral-300">Building 60fps animations with Framer Motion.</div>
            </div>
          )}
        </motion.div>
      )}

      <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold shadow-lg shadow-indigo-500/20">Get Started</button>
    </nav>
  );
}`,
    },

    // 10. Syntax UI - Frosted Glass Pill Navbar
    {
      key: "syntaxui-glass-pill",
      name: "Syntax UI - Glassmorphic Pill Navbar",
      slug: "syntaxui-glass-pill",
      library: "Syntax UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3640,
      screenshot: "https://syntaxui.com/og.png",
      website: "https://syntaxui.com",
      galleryUrl: "https://syntaxui.com",
      ogImage: "https://syntaxui.com/og.png",
      title: "Syntax UI - Glassmorphic Floating Pill Navbar",
      description: "Ultra-clean modern floating pill navbar with iridescent specular borders, background blur, and micro-hover lighting from Syntax UI.",
      tags: ["syntaxui", "component-library", "glassmorphism", "pill-nav", "tailwind", "modern-ui"],
      headings: ["Showcase", "Docs", "Components", "Pricing"],
      externalLinks: ["https://syntaxui.com", "https://github.com/syntaxui/syntaxui"],
      previewSummary: "Frosted glass capsule navbar with subtle edge refraction, glowing active pill, and quick contact link.",
      codeSnippet: `export function SyntaxUIGlassPill() {
  return (
    <div className="w-full flex justify-center py-6">
      <nav className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-2xl text-sm text-neutral-300">
        <a href="https://syntaxui.com" className="font-bold text-white flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>SyntaxUI</span>
        </a>
        <div className="hidden sm:flex items-center gap-5 text-xs">
          <a href="#components" className="hover:text-white transition">Components</a>
          <a href="#templates" className="hover:text-white transition">Templates</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#changelog" className="hover:text-white transition">Changelog</a>
        </div>
        <button className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition">
          Browse Library
        </button>
      </nav>
    </div>
  );
}`,
    },

    // 11. Transitions.dev - Fluid Animated Layout Nav
    {
      key: "transitions-fluid-nav",
      name: "Transitions.dev - Fluid Layout Nav",
      slug: "transitions-fluid-nav",
      library: "Transitions.dev",
      sourceType: "component-library",
      types: ["static", "dropdowns"],
      likes: 3890,
      screenshot: "https://transitions.dev/og.png",
      website: "https://transitions.dev",
      galleryUrl: "https://transitions.dev",
      ogImage: "https://transitions.dev/og.png",
      title: "Transitions.dev - Fluid Motion Layout Navigation",
      description: "Showcase of high-polish fluid view transitions and layout animations. Nav item hovers reveal floating indicators with bezier easing.",
      tags: ["transitions-dev", "component-library", "view-transitions", "fluid-motion", "tailwind"],
      headings: ["Explore", "Techniques", "Showcase", "Lab"],
      externalLinks: ["https://transitions.dev"],
      previewSummary: "Fluid animated header with spring-eased submenus, indicator pill, and reactive hover cards.",
      codeSnippet: `export function TransitionsFluidNav() {
  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-950 px-8 py-4 flex items-center justify-between text-neutral-200">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 to-rose-500"></div>
        <span className="font-semibold text-sm tracking-wide">Transitions.dev</span>
      </div>
      <div className="flex items-center gap-1 bg-neutral-900/60 p-1 rounded-xl border border-neutral-800 text-xs">
        <button className="px-3 py-1.5 rounded-lg bg-neutral-800 text-white font-medium shadow-sm">Showcase</button>
        <button className="px-3 py-1.5 rounded-lg hover:text-white transition">Transitions</button>
        <button className="px-3 py-1.5 rounded-lg hover:text-white transition">Techniques</button>
        <button className="px-3 py-1.5 rounded-lg hover:text-white transition">Playground</button>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-neutral-400">v2.4.0</span>
        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition">GitHub</button>
      </div>
    </nav>
  );
}`,
    },

    // 12. Details.design - Spring Micro-interaction Header
    {
      key: "details-spring-header",
      name: "Details.design - Spring Micro Nav",
      slug: "details-spring-header",
      library: "Details.design",
      sourceType: "component-library",
      types: ["static"],
      likes: 3720,
      screenshot: "https://details.design/og.png",
      website: "https://details.design",
      galleryUrl: "https://details.design",
      ogImage: "https://details.design/og.png",
      title: "Details.design - Spring Physics Micro-interaction Header",
      description: "Dedicated to tiny visual details that delight users. Features bouncy button interactions, magnetic icons, and audio-visual feedback accents.",
      tags: ["details-design", "component-library", "micro-interactions", "spring", "design-engineering"],
      headings: ["Archive", "Patterns", "Interactions", "Submissions"],
      externalLinks: ["https://details.design"],
      previewSummary: "Header with bouncy spring physics, icon morphing, and crafted micro-interaction feedback.",
      codeSnippet: `export function DetailsSpringHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <span className="text-lg">✦</span>
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">Details.design</span>
      </div>
      <nav className="flex items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
        <a href="#interactions" className="hover:text-black dark:hover:text-white transition flex items-center gap-1">
          <span>Patterns</span>
          <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-500">124</span>
        </a>
        <a href="#essays" className="hover:text-black dark:hover:text-white transition">Essays</a>
        <a href="#craft" className="hover:text-black dark:hover:text-white transition">Craft</a>
        <a href="#submit" className="hover:text-black dark:hover:text-white transition">Submit</a>
      </nav>
      <button className="text-xs px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white transition">
        Bookmark (D)
      </button>
    </header>
  );
}`,
    },

    // 13. Spectrum UI - Neon Border Glow Header
    {
      key: "spectrum-glow-nav",
      name: "Spectrum UI - Neon Glow Navbar",
      slug: "spectrum-glow-nav",
      library: "Spectrum UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3510,
      screenshot: "https://spectrum-ui.dev/og.png",
      website: "https://spectrum-ui.dev",
      galleryUrl: "https://spectrum-ui.dev",
      ogImage: "https://spectrum-ui.dev/og.png",
      title: "Spectrum UI - Neon Animated Border Glow Navbar",
      description: "Futuristic component library header featuring animated rotating conic gradient borders, neon backlight glows, and modern dark styling.",
      tags: ["spectrum-ui", "component-library", "conic-gradient", "neon-glow", "tailwind", "dark-mode"],
      headings: ["Components", "Blocks", "Templates", "Pricing"],
      externalLinks: ["https://spectrum-ui.dev"],
      previewSummary: "Glowing conic-gradient bordered floating header with smooth pulse and reactive neon accents.",
      codeSnippet: `export function SpectrumGlowNav() {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-[0_0_25px_rgba(168,85,247,0.35)]">
        <nav className="flex items-center gap-8 px-6 py-3 rounded-2xl bg-neutral-950 text-white text-xs">
          <div className="flex items-center gap-2 font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Spectrum
          </div>
          <div className="flex items-center gap-5 text-neutral-400">
            <a href="#components" className="hover:text-white transition">Components</a>
            <a href="#animations" className="hover:text-white transition">Animations</a>
            <a href="#templates" className="hover:text-white transition">Templates</a>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90 transition">
            Explore UI
          </button>
        </nav>
      </div>
    </div>
  );
}`,
    },

    // 14. Rareblocks / Rare UI - SaaS Mega Dropdown Navbar
    {
      key: "rareblocks-mega-navbar",
      name: "Rareblocks - SaaS Mega Dropdown Navbar",
      slug: "rareblocks-mega-navbar",
      library: "Rareblocks",
      sourceType: "component-library",
      types: ["mega-menu", "dropdowns"],
      likes: 4120,
      screenshot: "https://rareblocks.xyz/og.png",
      website: "https://rareblocks.xyz",
      galleryUrl: "https://rareblocks.xyz",
      ogImage: "https://rareblocks.xyz/og.png",
      title: "Rareblocks UI - Enterprise SaaS Mega Dropdown Navigation",
      description: "High-conversion SaaS component library header with multi-column mega dropdowns, feature icons, customer review pill, and dual CTA buttons.",
      tags: ["rareblocks", "rare-ui", "component-library", "mega-menu", "tailwind", "saas-header"],
      headings: ["Solutions", "Products", "Customers", "Pricing"],
      externalLinks: ["https://rareblocks.xyz"],
      previewSummary: "Full-width enterprise navbar with multi-column category dropdown panels, resource links, and CTA cluster.",
      codeSnippet: `export function RareblocksNavbar() {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 px-8 py-4 flex items-center justify-between text-neutral-700">
      <div className="flex items-center gap-10">
        <a href="https://rareblocks.xyz" className="text-xl font-extrabold text-neutral-900 tracking-tight flex items-center gap-1">
          <span className="text-indigo-600">❖</span> Rareblocks
        </a>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button className="hover:text-indigo-600 transition flex items-center gap-1">Features ▾</button>
          <button className="hover:text-indigo-600 transition flex items-center gap-1">Solutions ▾</button>
          <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
          <a href="#docs" className="hover:text-indigo-600 transition">Docs</a>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a href="#login" className="hover:text-neutral-900">Sign in</a>
        <a href="#start" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-sm">
          Get Started Free
        </a>
      </div>
    </nav>
  );
}`,
    },

    // 15. UseLayout - Command Bar Floating Island Navbar
    {
      key: "uselayout-command-nav",
      name: "UseLayout - Command Bar Island",
      slug: "uselayout-command-nav",
      library: "UseLayout",
      sourceType: "component-library",
      types: ["search-bar", "static"],
      likes: 3790,
      screenshot: "https://uselayout.com/og.png",
      website: "https://uselayout.com",
      galleryUrl: "https://uselayout.com",
      ogImage: "https://uselayout.com/og.png",
      title: "UseLayout - Floating Bento Command Bar Navbar",
      description: "Bento-inspired floating command bar navbar featuring integrated search input, quick keyboard shortcuts (⌘K), and categorical navigation.",
      tags: ["uselayout", "component-library", "command-bar", "bento-style", "shortcuts", "tailwind"],
      headings: ["Search", "Components", "Templates", "Settings"],
      externalLinks: ["https://uselayout.com"],
      previewSummary: "Island navbar with integrated search command bar, keyboard navigation triggers, and bento styling.",
      codeSnippet: `export function UseLayoutCommandNav() {
  return (
    <div className="w-full flex justify-center py-4">
      <nav className="w-full max-w-4xl mx-4 flex items-center justify-between px-5 py-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-neutral-200 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs">⌘</div>
          <span className="font-semibold text-xs tracking-wide">UseLayout</span>
        </div>
        <div className="flex items-center gap-2 bg-neutral-950/70 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-400 w-64">
          <span>🔍</span>
          <span className="flex-1">Search components...</span>
          <kbd className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">⌘K</kbd>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a href="#browse" className="hover:text-white transition">Browse</a>
          <button className="px-3 py-1 rounded-lg bg-neutral-100 text-black font-semibold hover:bg-white transition">Sign up</button>
        </div>
      </nav>
    </div>
  );
}`,
    },

    // 16. BeUI - Clean Frosted Island Navbar
    {
      key: "beui-frosted-island",
      name: "BeUI - Frosted Island Navbar",
      slug: "beui-frosted-island",
      library: "BeUI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3420,
      screenshot: "https://beui.dev/og.png",
      website: "https://beui.dev",
      galleryUrl: "https://beui.dev",
      ogImage: "https://beui.dev/og.png",
      title: "BeUI - Clean Minimalist Frosted Island Navigation",
      description: "Clean aesthetic island navbar from BeUI featuring ultra-subtle borders, frosted glass diffusion, and typography-first hierarchy.",
      tags: ["beui", "component-library", "glassmorphism", "minimalist", "tailwind", "clean-ui"],
      headings: ["Home", "Components", "Showcase", "About"],
      externalLinks: ["https://beui.dev"],
      previewSummary: "Minimalist frosted island navbar focusing on clean spacing and subtle backdrop blur.",
      codeSnippet: `export function BeUIFrostedIsland() {
  return (
    <div className="w-full flex justify-center py-5">
      <nav className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md shadow-sm text-xs text-neutral-700 dark:text-neutral-300">
        <span className="font-bold tracking-wider text-black dark:text-white">BE.UI</span>
        <div className="flex items-center gap-5">
          <a href="#components" className="hover:text-black dark:hover:text-white transition">Components</a>
          <a href="#layouts" className="hover:text-black dark:hover:text-white transition">Layouts</a>
          <a href="#pricing" className="hover:text-black dark:hover:text-white transition">Pricing</a>
        </div>
        <button className="px-3 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium transition">Get Access</button>
      </nav>
    </div>
  );
}`,
    },

    // 17. Affect UI - Magnetic Spring Item Navbar
    {
      key: "affect-magnetic-nav",
      name: "Affect UI - Magnetic Items Navbar",
      slug: "affect-magnetic-nav",
      library: "Affect UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3580,
      screenshot: "https://affect-ui.com/og.png",
      website: "https://affect-ui.com",
      galleryUrl: "https://affect-ui.com",
      ogImage: "https://affect-ui.com/og.png",
      title: "Affect UI - Magnetic Hover Spring Navigation Bar",
      description: "Affect UI interactive navbar featuring magnetic buttons that subtly gravitate towards the user's cursor pointer with damping springs.",
      tags: ["affect-ui", "component-library", "magnetic-hover", "motion", "spring-physics"],
      headings: ["Overview", "Demos", "Documentation", "Contact"],
      externalLinks: ["https://affect-ui.com"],
      previewSummary: "Header with cursor-attracting magnetic navigation pills and spring bounce interactions.",
      codeSnippet: `export function AffectMagneticNav() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur">
      <div className="font-bold tracking-tight text-neutral-900 dark:text-white">Affect.UI</div>
      <div className="flex items-center gap-2">
        <button className="px-3.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium transition-transform hover:scale-105">Components</button>
        <button className="px-3.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium transition-transform hover:scale-105">Animations</button>
        <button className="px-3.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium transition-transform hover:scale-105">Examples</button>
      </div>
      <button className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:scale-105 transition-transform">Connect</button>
    </nav>
  );
}`,
    },

    // 18. DaisyUI - Responsive Navbar with Dropdown & Avatar
    {
      key: "daisyui-navbar",
      name: "daisyUI - Responsive Navbar",
      slug: "daisyui-navbar",
      library: "daisyUI",
      sourceType: "component-library",
      types: ["dropdowns", "static"],
      likes: 4890,
      screenshot: "https://img.daisyui.com/images/default.webp",
      website: "https://daisyui.com/components/navbar/",
      galleryUrl: "https://daisyui.com/components/navbar/",
      ogImage: "https://img.daisyui.com/images/default.webp",
      title: "daisyUI - Lightweight Tailwind CSS Semantic Navbar",
      description: "Pure semantic CSS utility component navbar. Features zero-JS responsive collapse, mobile hamburger menu, dropdown submenus, search bar, and circular user profile avatar dropdown.",
      tags: ["daisyui", "component-library", "pure-css", "semantic-html", "tailwind-plugin", "zero-js"],
      headings: ["Item 1", "Parent", "Item 3", "Profile", "Settings", "Logout"],
      externalLinks: ["https://daisyui.com", "https://github.com/saadeghi/daisyui"],
      previewSummary: "Full semantic DaisyUI navbar featuring brand title, dropdown navigation links, shopping cart pill, and avatar dropdown menu.",
      codeSnippet: `export function DaisyUINavbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a className="btn btn-ghost text-xl font-bold">daisyUI</a>
        <ul className="menu menu-horizontal px-1 hidden md:flex text-sm">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-xs h-9" />
        <div className="w-8 h-8 rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center text-xs font-semibold">U</div>
      </div>
    </div>
  );
}`,
    },

    // 19. Flowbite - Mega Menu with Feature Grid
    {
      key: "flowbite-mega-menu",
      name: "Flowbite - Feature Mega Menu",
      slug: "flowbite-mega-menu",
      library: "Flowbite",
      sourceType: "component-library",
      types: ["mega-menu", "dropdowns"],
      likes: 4450,
      screenshot: "https://flowbite.com/images/og-image.png",
      website: "https://flowbite.com/docs/components/navbar/",
      galleryUrl: "https://flowbite.com/docs/components/navbar/",
      ogImage: "https://flowbite.com/images/og-image.png",
      title: "Flowbite - Tailwind CSS Mega Menu Navigation with Feature Grid",
      description: "Official Flowbite open-source component library mega menu. Includes 3-column category grid with SVG feature icons, CTA cards, mobile responsive toggle, and full dark-mode support.",
      tags: ["flowbite", "component-library", "tailwind", "mega-menu", "feature-grid", "open-source"],
      headings: ["Company", "Marketplace", "Resources", "Get Started"],
      externalLinks: ["https://flowbite.com", "https://github.com/themesberg/flowbite"],
      previewSummary: "Robust enterprise mega menu with 3-column icon lists, announcement CTA card, and responsive drawer.",
      codeSnippet: `export function FlowbiteMegaMenu() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="https://flowbite.com" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">F</div>
          <span className="self-center text-lg font-bold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500">Home</a>
          <button className="hover:text-blue-600 dark:hover:text-blue-500 flex items-center gap-1">Company ▾</button>
          <button className="hover:text-blue-600 dark:hover:text-blue-500 flex items-center gap-1">Marketplace ▾</button>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500">Resources</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="text-gray-800 dark:text-white font-medium text-sm hover:underline">Log in</a>
        <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-xs px-4 py-2">Get started</a>
      </div>
    </nav>
  );
}`,
    },

    // 20. Preline UI - Flyout Subnav with Icons
    {
      key: "preline-navbar",
      name: "Preline UI - Flyout Subnav",
      slug: "preline-navbar",
      library: "Preline UI",
      sourceType: "component-library",
      types: ["dropdowns", "static"],
      likes: 4190,
      screenshot: "https://preline.co/assets/img/og-image.png",
      website: "https://preline.co/docs/navbar.html",
      galleryUrl: "https://preline.co/docs/navbar.html",
      ogImage: "https://preline.co/assets/img/og-image.png",
      title: "Preline UI - Responsive Header with Flyout Subnav",
      description: "Modern production-ready header from Preline UI with HTML/Tailwind flyout subnavs, icon badges, search input, and responsive mobile off-canvas drawer support.",
      tags: ["preline", "component-library", "tailwind", "flyout-nav", "accessible", "production-ready"],
      headings: ["Landing", "Accounts", "Pages", "Blog"],
      externalLinks: ["https://preline.co", "https://github.com/htmlstreamofficial/preline"],
      previewSummary: "Polished Tailwind header with flyout dropdowns, search trigger, and responsive mobile collapse.",
      codeSnippet: `export function PrelineNavbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 px-8">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Preline</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
          <a href="#" className="text-blue-600 dark:text-blue-400">Landing</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200">Account</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200">Pages ▾</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200">Blog</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}`,
    },

    // 21. HyperUI - Minimal Centered Nav
    {
      key: "hyperui-navbar",
      name: "HyperUI - Centered Nav",
      slug: "hyperui-navbar",
      library: "HyperUI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3820,
      screenshot: "https://www.hyperui.dev/og.png",
      website: "https://www.hyperui.dev/components/marketing/navbars",
      galleryUrl: "https://www.hyperui.dev/components/marketing/navbars",
      ogImage: "https://www.hyperui.dev/og.png",
      title: "HyperUI - Centered Minimalist Marketing Header",
      description: "Clean, copy-paste Tailwind CSS marketing header created by Mark Mead. Perfectly balanced typography, centered links, and streamlined call-to-action buttons.",
      tags: ["hyperui", "component-library", "copy-paste", "tailwind", "minimalist"],
      headings: ["About", "Careers", "History", "Services", "Projects"],
      externalLinks: ["https://www.hyperui.dev", "https://github.com/markmead/hyperui"],
      previewSummary: "Centered minimalist header with clean typography, dual CTAs, and zero excess markup.",
      codeSnippet: `export function HyperUINavbar() {
  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-gray-100 dark:border-neutral-800">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
        <a className="block font-black text-lg text-teal-600 dark:text-teal-400" href="https://hyperui.dev">
          HYPERUI
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a className="transition hover:text-gray-700 dark:hover:text-gray-200" href="#"> About </a>
          <a className="transition hover:text-gray-700 dark:hover:text-gray-200" href="#"> Careers </a>
          <a className="transition hover:text-gray-700 dark:hover:text-gray-200" href="#"> Services </a>
          <a className="transition hover:text-gray-700 dark:hover:text-gray-200" href="#"> Projects </a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="rounded-md bg-teal-600 px-4 py-2 text-xs font-medium text-white shadow hover:bg-teal-700" href="#">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}`,
    },

    // 22. Meraki UI - Modern Blur Header
    {
      key: "meraki-blur-navbar",
      name: "Meraki UI - Modern Blur Header",
      slug: "meraki-blur-navbar",
      library: "Meraki UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3740,
      screenshot: "https://merakiui.com/images/og-image.jpg",
      website: "https://merakiui.com/components/navbars",
      galleryUrl: "https://merakiui.com/components/navbars",
      ogImage: "https://merakiui.com/images/og-image.jpg",
      title: "Meraki UI - Blur Backdrop Responsive Navigation",
      description: "Clean modern Tailwind navbar with full dark mode, backdrop-blur effect, responsive mobile menu drawer, and balanced action button cluster.",
      tags: ["merakiui", "component-library", "tailwind", "backdrop-blur", "responsive", "dark-mode"],
      headings: ["Home", "Components", "Pricing", "Contact"],
      externalLinks: ["https://merakiui.com", "https://github.com/merakiui/merakiui"],
      previewSummary: "Backdrop-filtered navbar with pill transitions and clean mobile drawer toggle.",
      codeSnippet: `export function MerakiBlurNavbar() {
  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="https://merakiui.com" className="font-bold text-lg text-blue-600 dark:text-blue-400">Meraki UI</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Components</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
        Join Free
      </button>
    </nav>
  );
}`,
    },

    // 23. Tailspark - Double-Tier SaaS Nav
    {
      key: "tailspark-dual-nav",
      name: "Tailspark - Double-Tier SaaS Nav",
      slug: "tailspark-dual-nav",
      library: "Tailspark",
      sourceType: "component-library",
      types: ["announcement", "static"],
      likes: 3490,
      screenshot: "https://tailspark.co/og.png",
      website: "https://tailspark.co/components/navbar",
      galleryUrl: "https://tailspark.co/components/navbar",
      ogImage: "https://tailspark.co/og.png",
      title: "Tailspark - Double-Tier SaaS Header with Announcement Bar",
      description: "Dual-layer SaaS navbar featuring top announcement banner with badge, and primary tier with logo, categorical navigation, and conversion CTAs.",
      tags: ["tailspark", "component-library", "announcement-bar", "double-tier", "saas-header"],
      headings: ["Announcement", "Features", "Pricing", "Changelog"],
      externalLinks: ["https://tailspark.co"],
      previewSummary: "Two-tiered header with top announcement bar and primary navigation strip.",
      codeSnippet: `export function TailsparkDualNav() {
  return (
    <div>
      <div className="bg-indigo-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">NEW</span>
        <span>Version 3.0 is out now with 150+ new components!</span>
        <a href="#learn" className="underline font-semibold">Explore ➔</a>
      </div>
      <nav className="bg-white border-b border-gray-200 px-8 py-3.5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-8">
          <span className="font-black text-indigo-600 tracking-tight text-lg">Tailspark</span>
          <div className="flex items-center gap-5 text-gray-600">
            <a href="#features" className="hover:text-black">Features</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#changelog" className="hover:text-black">Changelog</a>
          </div>
        </div>
        <button className="px-3.5 py-1.5 rounded-md bg-neutral-900 text-white text-xs font-medium">Dashboard</button>
      </nav>
    </div>
  );
}`,
    },

    // 24. Cruip - Dark SaaS Header with Glow
    {
      key: "cruip-saas-header",
      name: "Cruip - Dark SaaS Header",
      slug: "cruip-saas-header",
      library: "Cruip",
      sourceType: "component-library",
      types: ["static"],
      likes: 4320,
      screenshot: "https://cruip.com/images/og-image.jpg",
      website: "https://cruip.com",
      galleryUrl: "https://cruip.com",
      ogImage: "https://cruip.com/images/og-image.jpg",
      title: "Cruip - High-End Dark Mode SaaS Header",
      description: "Cruip signature high-converting dark SaaS header with indigo ambient lighting, pill buttons, and refined typography.",
      tags: ["cruip", "component-library", "dark-saas", "tailwind", "templates"],
      headings: ["Pricing", "About Us", "Blog", "Documentation"],
      externalLinks: ["https://cruip.com", "https://github.com/cruip"],
      previewSummary: "Signature dark SaaS header with glowing accents and gradient action buttons.",
      codeSnippet: `export function CruipSaasHeader() {
  return (
    <header className="w-full bg-gray-950 border-b border-gray-800/80 px-8 py-4 flex items-center justify-between text-gray-300">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">C</div>
        <span className="font-bold text-white tracking-wide text-sm">Cruip UI</span>
      </div>
      <nav className="flex items-center gap-6 text-xs font-medium">
        <a href="#pricing" className="hover:text-white transition">Pricing</a>
        <a href="#about" className="hover:text-white transition">About Us</a>
        <a href="#blog" className="hover:text-white transition">Blog</a>
        <a href="#docs" className="hover:text-white transition">Documentation</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#signin" className="text-xs hover:text-white">Sign in</a>
        <button className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-purple-500/20">
          Request Code
        </button>
      </div>
    </header>
  );
}`,
    },

    // 25. WickedBlocks - Wicked Floating Pill Bar
    {
      key: "wicked-pill-nav",
      name: "WickedBlocks - Floating Pill Bar",
      slug: "wicked-pill-nav",
      library: "WickedBlocks",
      sourceType: "component-library",
      types: ["static"],
      likes: 3610,
      screenshot: "https://wickedblocks.dev/og.png",
      website: "https://wickedblocks.dev",
      galleryUrl: "https://wickedblocks.dev",
      ogImage: "https://wickedblocks.dev/og.png",
      title: "WickedBlocks - Modern Tailwind Floating Capsule Navbar",
      description: "Playful yet sharp floating capsule navbar created by Wicked Labs. Features curved borders, contrasting CTA button, and high-visibility contrast.",
      tags: ["wickedblocks", "component-library", "capsule-nav", "tailwind", "wicked-labs"],
      headings: ["Home", "Features", "Pricing", "Testimonials"],
      externalLinks: ["https://wickedblocks.dev"],
      previewSummary: "Capsule-shaped floating navigation bar with bold contrasting borders and hover transitions.",
      codeSnippet: `export function WickedPillNav() {
  return (
    <div className="w-full flex justify-center py-6">
      <nav className="inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-xs font-bold text-neutral-900 dark:text-neutral-100">
        <span>⚡ WICKED</span>
        <div className="flex items-center gap-4">
          <a href="#blocks" className="hover:underline">Blocks</a>
          <a href="#templates" className="hover:underline">Templates</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </div>
        <button className="px-3 py-1 bg-yellow-400 text-black rounded-full border border-black font-extrabold hover:bg-yellow-300">
          Get All
        </button>
      </nav>
    </div>
  );
}`,
    },

    // 26. Kitwind - Animated Drawer Nav
    {
      key: "kitwind-drawer-nav",
      name: "Kitwind - Responsive Drawer Nav",
      slug: "kitwind-drawer-nav",
      library: "Kitwind",
      sourceType: "component-library",
      types: ["static", "dropdowns"],
      likes: 3540,
      screenshot: "https://kitwind.com/og.png",
      website: "https://kitwind.com",
      galleryUrl: "https://kitwind.com",
      ogImage: "https://kitwind.com/og.png",
      title: "Kitwind - Clean Responsive Header with Mobile Flyout",
      description: "Production Tailwind component library navigation bar with animated SVG hamburger toggle and accessible mobile flyout panel.",
      tags: ["kitwind", "component-library", "hamburger-drawer", "tailwind", "responsive"],
      headings: ["Product", "Features", "Pricing", "About us"],
      externalLinks: ["https://kitwind.com"],
      previewSummary: "Clean header with animated drawer navigation for small screens and horizontal list for desktop.",
      codeSnippet: `export function KitwindDrawerNav() {
  return (
    <div className="px-6 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b border-gray-100">
      <div className="relative flex items-center justify-between">
        <a href="https://kitwind.com" className="inline-flex items-center">
          <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">Kitwind</span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-indigo-600 transition">Product</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Features</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Pricing</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">About us</a></li>
        </ul>
        <button className="h-10 px-5 font-semibold text-xs rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Sign up
        </button>
      </div>
    </div>
  );
}`,
    },

    // 27. Float UI - Modern Responsive Navbar
    {
      key: "floatui-responsive-nav",
      name: "Float UI - Modern Responsive Nav",
      slug: "floatui-responsive-nav",
      library: "Float UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3670,
      screenshot: "https://floatui.com/og.png",
      website: "https://floatui.com/components/navbars",
      galleryUrl: "https://floatui.com/components/navbars",
      ogImage: "https://floatui.com/og.png",
      title: "Float UI - Modern Minimalist Responsive Navbar",
      description: "Float UI open-source React & Tailwind component navbar with clean layout, brand mark, and balanced actions.",
      tags: ["floatui", "component-library", "tailwind", "react", "clean-layout"],
      headings: ["Features", "Integrations", "Customers", "Pricing"],
      externalLinks: ["https://floatui.com", "https://github.com/learn-anything/floatui"],
      previewSummary: "Modern minimalist navbar with clean link layout and responsive mobile toggle.",
      codeSnippet: `export function FloatUINavbar() {
  return (
    <nav className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="https://floatui.com" className="font-extrabold text-indigo-600 text-lg">Float UI</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Integrations</a>
          <a href="#" className="hover:text-indigo-600">Customers</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-sm text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Log in</button>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">Start free trial</button>
      </div>
    </nav>
  );
}`,
    },

    // 28. Tailwind UI - Multi-section Flyout Menu
    {
      key: "tailwindui-navbar",
      name: "Tailwind UI - Multi-section Flyout Menu",
      slug: "tailwindui-navbar",
      library: "Tailwind UI",
      sourceType: "component-library",
      types: ["mega-menu", "dropdowns"],
      likes: 5210,
      screenshot: "https://tailwindui.com/img/og-preview.png",
      website: "https://tailwindui.com/components/marketing/elements/headers",
      galleryUrl: "https://tailwindui.com/components/marketing/elements/headers",
      ogImage: "https://tailwindui.com/img/og-preview.png",
      title: "Tailwind UI - Official Tailwind Multi-Column Flyout Menu",
      description: "The gold-standard Tailwind CSS official component navbar created by Tailwind Labs. Features multi-column rich flyouts with icons, security/analytics sections, live demo calls-to-action, and dark mode.",
      tags: ["tailwindui", "tailwind-labs", "component-library", "flyout-menu", "gold-standard"],
      headings: ["Solutions", "Pricing", "Docs", "Company"],
      externalLinks: ["https://tailwindui.com"],
      previewSummary: "Official Tailwind UI marketing header with rich SVG feature flyouts, contact sales CTA, and clean typography.",
      codeSnippet: `export function TailwindUINavbar() {
  return (
    <header className="bg-white border-b border-gray-100 dark:bg-neutral-900 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span className="font-bold text-indigo-600 text-lg">TailwindUI</span>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-sm font-semibold text-gray-900 dark:text-white">
          <button className="flex items-center gap-x-1">Product ▾</button>
          <a href="#">Features</a>
          <a href="#">Marketplace</a>
          <a href="#">Company</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">Log in ➔</a>
        </div>
      </nav>
    </header>
  );
}`,
    },

    // 29. Park UI - Ark UI / Zag.js Accessible Tabs Nav
    {
      key: "parkui-tabs-nav",
      name: "Park UI - Ark UI Tabs Navbar",
      slug: "parkui-tabs-nav",
      library: "Park UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3620,
      screenshot: "https://park-ui.com/og.png",
      website: "https://park-ui.com",
      galleryUrl: "https://park-ui.com",
      ogImage: "https://park-ui.com/og.png",
      title: "Park UI - State-Machine Driven Accessible Navbar",
      description: "Component library built on Chakra Ark UI and Zag.js state machines. Features WAI-ARIA compliance, sliding tab indicators, and agnostic framework bindings.",
      tags: ["parkui", "ark-ui", "zag-js", "component-library", "state-machine", "accessible"],
      headings: ["Components", "Themes", "Examples", "Docs"],
      externalLinks: ["https://park-ui.com", "https://github.com/cschakra/park-ui"],
      previewSummary: "Zag.js state machine backed navigation tabs with full keyboard arrows support and active focus indicators.",
      codeSnippet: `export function ParkUITabsNav() {
  return (
    <nav className="w-full bg-neutral-950 border-b border-neutral-800 px-8 py-3 flex items-center justify-between text-neutral-300 text-xs">
      <div className="flex items-center gap-8">
        <span className="font-bold text-white text-sm">Park UI</span>
        <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
          <button className="px-3 py-1 rounded bg-neutral-800 text-white font-medium">Components</button>
          <button className="px-3 py-1 rounded hover:text-white transition">Themes</button>
          <button className="px-3 py-1 rounded hover:text-white transition">Design Tokens</button>
        </div>
      </div>
      <button className="px-3 py-1.5 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition">Documentation</button>
    </nav>
  );
}`,
    },

    // 30. Sailboat UI - Minimalist Nav with Notifications Pill
    {
      key: "sailboat-pill-nav",
      name: "Sailboat UI - Notifications Header",
      slug: "sailboat-pill-nav",
      library: "Sailboat UI",
      sourceType: "component-library",
      types: ["static"],
      likes: 3410,
      screenshot: "https://sailboatui.com/og.png",
      website: "https://sailboatui.com",
      galleryUrl: "https://sailboatui.com",
      ogImage: "https://sailboatui.com/og.png",
      title: "Sailboat UI - Clean Navbar with Badge & Search Pill",
      description: "Modern Tailwind CSS component library header with active notification badge, compact search pill, and clean navigation items.",
      tags: ["sailboatui", "component-library", "tailwind", "notification-badge", "clean"],
      headings: ["Dashboard", "Orders", "Customers", "Analytics"],
      externalLinks: ["https://sailboatui.com"],
      previewSummary: "Crisp admin and marketing header with integrated notification badge and user profile capsule.",
      codeSnippet: `export function SailboatHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-3.5 flex items-center justify-between text-sm text-gray-700">
      <div className="flex items-center gap-8">
        <span className="font-bold text-lg text-neutral-900">Sailboat UI</span>
        <div className="flex items-center gap-5">
          <a href="#" className="font-medium text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-black">Orders</a>
          <a href="#" className="hover:text-black">Customers</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <span>🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">SK</div>
      </div>
    </header>
  );
}`,
    },

    // 31. 21st.dev - Dynamic Island Nav
    {
      key: "21st-floating-island",
      name: "21st.dev - Dynamic Island Nav",
      slug: "21st-floating-island",
      library: "21st.dev",
      sourceType: "component-library",
      types: ["static"],
      likes: 4780,
      screenshot: "https://21st.dev/og.png",
      website: "https://21st.dev",
      galleryUrl: "https://21st.dev",
      ogImage: "https://21st.dev/og.png",
      title: "21st.dev - Dynamic Island Expandable Navigation Bar",
      description: "Inspired by Apple Dynamic Island. Floating pill header that expands dynamically on interaction with spring physics, status pills, and action shortcuts.",
      tags: ["21st-dev", "component-library", "dynamic-island", "framer-motion", "apple-style"],
      headings: ["Home", "Components", "Pro", "Inspiration"],
      externalLinks: ["https://21st.dev"],
      previewSummary: "Dynamic Island pill navbar expanding smoothly between collapsed state and multi-action menu.",
      codeSnippet: `export function DynamicIslandNav() {
  return (
    <div className="w-full flex justify-center py-6">
      <nav className="flex items-center gap-6 px-6 py-2.5 rounded-full bg-black text-white text-xs border border-neutral-800 shadow-2xl">
        <span className="font-mono font-bold text-emerald-400">21st.dev</span>
        <div className="flex items-center gap-4 text-neutral-300">
          <a href="#components" className="hover:text-white">Components</a>
          <a href="#inspirations" className="hover:text-white">Inspiration</a>
          <a href="#pro" className="hover:text-white">Pro</a>
        </div>
        <button className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 font-semibold text-white">Join ➔</button>
      </nav>
    </div>
  );
}`,
    },

    // 32. Navbar Gallery - Modern Showcase Header
    {
      key: "navbar-gallery-showcase",
      name: "Navbar Gallery - Modern Showcase Header",
      slug: "navbar-gallery-showcase",
      library: "Navbar Gallery",
      sourceType: "component-library",
      types: ["dropdowns", "search-bar"],
      likes: 5120,
      screenshot: "https://www.navbar.gallery/og.png",
      website: "https://www.navbar.gallery",
      galleryUrl: "https://www.navbar.gallery",
      ogImage: "https://www.navbar.gallery/og.png",
      title: "Navbar Gallery - Curated Component Explorer Header",
      description: "The official header of navbar.gallery featuring category filters, search scope selector, grid/list view switcher, and quick like count counters.",
      tags: ["navbar-gallery", "component-library", "curated-showcase", "filter-header", "search-bar"],
      headings: ["Static", "Dropdowns", "Mega Menu", "Side Bar", "Search Bar"],
      externalLinks: ["https://www.navbar.gallery"],
      previewSummary: "Curated navbar gallery header with type category filters, live counter tags, and quick search trigger.",
      codeSnippet: `export function NavbarGalleryShowcaseHeader() {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800 px-8 py-3.5 flex items-center justify-between text-neutral-200">
      <div className="flex items-center gap-8">
        <a href="https://www.navbar.gallery" className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span>navbar.gallery</span>
        </a>
        <div className="hidden lg:flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-white font-medium">All (32+)</span>
          <span className="px-2.5 py-1 rounded-md hover:bg-neutral-800 cursor-pointer">Dropdowns</span>
          <span className="px-2.5 py-1 rounded-md hover:bg-neutral-800 cursor-pointer">Mega Menu</span>
          <span className="px-2.5 py-1 rounded-md hover:bg-neutral-800 cursor-pointer">Dock</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input type="text" placeholder="Filter navbars..." className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-300 w-48" />
        <button className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white">Submit Nav</button>
      </div>
    </header>
  );
}`,
    },
  ];

  let output = `import type { NavbarItem, NavbarType } from "./core.js";

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
  library?: string;
  sourceType: "component-library" | "brand-website";
}

export const CURATED_NAVBARS: Record<string, CuratedNavbar> = {
`;

  for (const item of curatedEntries) {
    output += `  ${JSON.stringify(item.key)}: {
    name: ${JSON.stringify(item.name)},
    slug: ${JSON.stringify(item.slug)},
    library: ${JSON.stringify(item.library)},
    sourceType: ${JSON.stringify(item.sourceType)},
    types: ${JSON.stringify(item.types)},
    likes: ${item.likes},
    screenshot: ${JSON.stringify(item.screenshot)},
    website: ${JSON.stringify(item.website)},
    galleryUrl: ${JSON.stringify(item.galleryUrl)},
    ogImage: ${JSON.stringify(item.ogImage)},
    title: ${JSON.stringify(item.title)},
    description: ${JSON.stringify(item.description)},
    tags: ${JSON.stringify(item.tags)},
    headings: ${JSON.stringify(item.headings)},
    externalLinks: ${JSON.stringify(item.externalLinks)},
    previewSummary: ${JSON.stringify(item.previewSummary)},
    codeSnippet: ${escapeCode(item.codeSnippet)},
  },\n\n`;
  }

  output += `};\n`;

  const targetPath = path.resolve("src", "curated.ts");
  fs.writeFileSync(targetPath, output, "utf-8");
  console.log(`Successfully generated ${curatedEntries.length} curated navbars in ${targetPath}!`);
}

main().catch(console.error);
