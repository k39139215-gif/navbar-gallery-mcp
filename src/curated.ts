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
  library?: string;
  sourceType: "component-library" | "brand-website";
}

export const CURATED_NAVBARS: Record<string, CuratedNavbar> = {
  // ==========================================
  // FAMOUS UI COMPONENT LIBRARIES
  // ==========================================

  "shadcn-navigation-menu": {
    name: "shadcn/ui - Navigation Menu",
    slug: "shadcn-navigation-menu",
    library: "shadcn/ui",
    sourceType: "component-library",
    types: ["mega-menu", "dropdowns"],
    likes: 3820,
    screenshot: "https://ui.shadcn.com/og.jpg",
    website: "https://ui.shadcn.com/docs/components/navigation-menu",
    galleryUrl: "https://ui.shadcn.com/docs/components/navigation-menu",
    ogImage: "https://ui.shadcn.com/og.jpg",
    title: "shadcn/ui - Accessible Navigation Menu with Dropdown Panels",
    description: "The #1 React component library standard. Powered by Radix UI primitives and styled with Tailwind CSS. Includes animated entry/exit transitions, multi-column card dropdowns, trigger styles, and accessible keyboard navigation.",
    tags: ["shadcn", "component-library", "radix", "tailwind", "mega-menu", "accessible", "gold-standard"],
    headings: ["Getting Started", "Components", "Documentation", "Examples"],
    externalLinks: ["https://ui.shadcn.com", "https://github.com/shadcn-ui/ui"],
    previewSummary: "Minimalist accessible navigation bar with Radix viewport dropdowns, interactive callout cards, and clean typography.",
    codeSnippet: `"use client";
import * as React from "react";
import Link from "next/link";

export function ShadcnNavigationMenu() {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <nav className="relative z-50 flex items-center justify-between border-b border-neutral-200 bg-white/95 px-8 py-3.5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="flex items-center gap-8">
        <a href="https://ui.shadcn.com" className="flex items-center gap-2 font-bold tracking-tight">
          <svg className="h-5 w-5" viewBox="0 0 256 256">
            <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/>
            <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round"/>
          </svg>
          <span>shadcn/ui</span>
        </a>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {/* Item with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenItem("getting-started")}
            onMouseLeave={() => setOpenItem(null)}
          >
            <button className="flex items-center gap-1.5 rounded-md px-3.5 py-2 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors">
              <span>Getting Started</span>
              <span className="text-xs">▾</span>
            </button>
            {openItem === "getting-started" && (
              <div className="absolute left-0 top-full pt-2 w-[480px]">
                <div className="grid grid-cols-[.75fr_1fr] gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                  <a href="/docs" className="flex flex-col justify-end rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-200 p-6 no-underline dark:from-neutral-800 dark:to-neutral-900">
                    <div className="mb-2 mt-4 text-base font-bold">shadcn/ui</div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Beautifully designed components built with Tailwind CSS.</p>
                  </a>
                  <div className="flex flex-col gap-2">
                    <a href="/docs/introduction" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                      <div className="text-sm font-medium">Introduction</div>
                      <p className="text-xs text-neutral-500">Re-usable components built with Radix and Tailwind.</p>
                    </a>
                    <a href="/docs/installation" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                      <div className="text-sm font-medium">Installation</div>
                      <p className="text-xs text-neutral-500">How to install dependencies and structure your app.</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#components" className="rounded-md px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Components</a>
          <a href="#docs" className="rounded-md px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Docs</a>
          <a href="#themes" className="rounded-md px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Themes</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900">
          <span>Search docs...</span>
          <kbd className="rounded border border-neutral-300 px-1 font-mono text-[10px] dark:border-neutral-700">⌘K</kbd>
        </button>
        <a href="https://github.com/shadcn-ui/ui" className="rounded-md bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-black">
          GitHub
        </a>
      </div>
    </nav>
  );
}`
  },

  "aceternity-floating-navbar": {
    name: "Aceternity UI - Floating Navbar",
    slug: "aceternity-floating-navbar",
    library: "Aceternity UI",
    sourceType: "component-library",
    types: ["dropdowns", "static"],
    likes: 4190,
    screenshot: "https://ui.aceternity.com/og.png",
    website: "https://ui.aceternity.com/components/floating-navbar",
    galleryUrl: "https://ui.aceternity.com/components/floating-navbar",
    ogImage: "https://ui.aceternity.com/og.png",
    title: "Aceternity UI - Scroll-Aware Animated Floating Navbar",
    description: "The viral animated floating navbar created by Manu Arora. Built using React, Tailwind CSS, and Framer Motion. Automatically hides when scrolling down and smoothly reveals with backdrop blur when scrolling back up.",
    tags: ["aceternity", "component-library", "framer-motion", "floating", "scroll-hide", "dark-mode", "viral"],
    headings: ["Home", "About", "Projects", "Contact", "Login"],
    externalLinks: ["https://ui.aceternity.com", "https://twitter.com/mannupaaji"],
    previewSummary: "Centred floating capsule navbar with dark frosted blur, glowing cyan/blue border highlights, and scroll-direction reactive animations.",
    codeSnippet: `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export function AceternityFloatingNavbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-x-0 top-8 z-50 mx-auto flex max-w-fit items-center justify-center space-x-6 rounded-full border border-white/[0.2] bg-black/80 px-8 py-3 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
        <button className="relative rounded-full border border-white/[0.2] px-4 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors">
          <span>Login</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}`
  },

  "magicui-dock-navbar": {
    name: "Magic UI - Magnetic Dock Navbar",
    slug: "magicui-dock-navbar",
    library: "Magic UI",
    sourceType: "component-library",
    types: ["side-bar", "static"],
    likes: 3620,
    screenshot: "https://magicui.design/og.png",
    website: "https://magicui.design/docs/components/dock",
    galleryUrl: "https://magicui.design/docs/components/dock",
    ogImage: "https://magicui.design/og.png",
    title: "Magic UI - Interactive macOS Magnetic Dock Navbar",
    description: "Signature macOS dock navigation from Magic UI. Features fluid spring magnification physics on hover, icon distance scaling with Framer Motion, and translucent pill glass styling.",
    tags: ["magicui", "component-library", "dock", "macos", "framer-motion", "magnetic", "design-engineer"],
    headings: ["Home", "Products", "Changelog", "Docs", "Settings"],
    externalLinks: ["https://magicui.design", "https://github.com/magicuidesign/magicui"],
    previewSummary: "Bottom or top floating macOS dock with icon spring magnification on cursor hover.",
    codeSnippet: `"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function DockIcon({ children, mouseX }: { children: React.ReactNode; mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 68, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="flex aspect-square items-center justify-center rounded-full bg-neutral-800/80 border border-white/10 text-white cursor-pointer hover:bg-neutral-700/80 transition-colors shadow-lg"
    >
      {children}
    </motion.div>
  );
}

export function MagicUIDockNavbar() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center">
      <nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 pb-3 backdrop-blur-xl shadow-2xl"
      >
        <DockIcon mouseX={mouseX}><span>🏠</span></DockIcon>
        <DockIcon mouseX={mouseX}><span>⚡</span></DockIcon>
        <DockIcon mouseX={mouseX}><span>🔍</span></DockIcon>
        <DockIcon mouseX={mouseX}><span>📦</span></DockIcon>
        <DockIcon mouseX={mouseX}><span>⚙️</span></DockIcon>
      </nav>
    </div>
  );
}`
  },

  "tailwindui-navbar": {
    name: "Tailwind UI - Marketing Flyout Navbar",
    slug: "tailwindui-navbar",
    library: "Tailwind UI",
    sourceType: "component-library",
    types: ["mega-menu", "dropdowns"],
    likes: 3450,
    screenshot: "https://tailwindui.com/img/og-tailwindui.jpg",
    website: "https://tailwindui.com/components/marketing/elements/headers",
    galleryUrl: "https://tailwindui.com/components/marketing/elements/headers",
    ogImage: "https://tailwindui.com/img/og-tailwindui.jpg",
    title: "Tailwind UI - Official Tailwind Labs Marketing & Flyout Header",
    description: "Official component from Tailwind Labs. Features multi-column flyout menus with SVG icons, featured case study cards, responsive mobile popover drawer, and clean high-conversion auth actions.",
    tags: ["tailwindui", "component-library", "official", "tailwindlabs", "marketing", "flyout-menu"],
    headings: ["Solutions", "Pricing", "Docs", "Company", "Sign in"],
    externalLinks: ["https://tailwindui.com", "https://tailwindcss.com"],
    previewSummary: "Full-width marketing header with Tailwind Labs icon flyouts, mobile hamburger menu, and clean contrast.",
    codeSnippet: `import React, { useState } from 'react';

export function TailwindUINavbar() {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 font-bold text-xl text-indigo-600 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-base">T</div>
            <span className="text-gray-900 font-extrabold">TailwindUI</span>
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-10 text-sm font-semibold text-gray-900">
          <div className="relative">
            <button
              onClick={() => setFlyoutOpen(!flyoutOpen)}
              className="flex items-center gap-x-1 hover:text-indigo-600"
            >
              <span>Solutions</span>
              <span className="text-xs">▾</span>
            </button>
            {flyoutOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5 p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-indigo-600 font-bold">📊</div>
                  <div>
                    <a href="#" className="font-semibold text-gray-900">Analytics</a>
                    <p className="mt-1 text-gray-600 text-xs">Get a better understanding of your traffic.</p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-indigo-600 font-bold">⚡</div>
                  <div>
                    <a href="#" className="font-semibold text-gray-900">Engagement</a>
                    <p className="mt-1 text-gray-600 text-xs">Speak directly to your customers in a more meaningful way.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#marketplace" className="hover:text-indigo-600">Marketplace</a>
          <a href="#company" className="hover:text-indigo-600">Company</a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a href="#login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">Log in</a>
          <a href="#signup" className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Sign up</a>
        </div>
      </nav>
    </header>
  );
}`
  },

  "daisyui-navbar": {
    name: "DaisyUI - Semantic Responsive Navbar",
    slug: "daisyui-navbar",
    library: "DaisyUI",
    sourceType: "component-library",
    types: ["dropdowns", "search-bar"],
    likes: 2950,
    screenshot: "https://daisyui.com/images/daisyui-logo/favicon-192.png",
    website: "https://daisyui.com/components/navbar",
    galleryUrl: "https://daisyui.com/components/navbar",
    ogImage: "https://daisyui.com/images/daisyui-logo/favicon-192.png",
    title: "DaisyUI - Semantic Tailwind Responsive Navbar Component",
    description: "The most popular semantic component library for Tailwind CSS. Implements pure utility-free class semantics (`navbar`, `navbar-start`, `navbar-center`, `navbar-end`, `dropdown`, `indicator`). Includes mobile burger menu, search input, indicator cart badge, and user avatar.",
    tags: ["daisyui", "component-library", "semantic", "responsive-drawer", "badge-cart", "search"],
    headings: ["Item 1", "Parent Menu", "Item 3"],
    externalLinks: ["https://daisyui.com", "https://github.com/saadeghi/daisyui"],
    previewSummary: "Semantic DaisyUI navbar with responsive drawer toggle, search input, and profile dropdown.",
    codeSnippet: `import React from 'react';

export function DaisyUINavbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <input type="text" placeholder="Search" className="input input-bordered input-sm w-24 md:w-auto" />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 rounded-full bg-neutral-focus text-neutral-content flex items-center justify-center font-bold">
              K
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}`
  },

  "flowbite-mega-menu": {
    name: "Flowbite - Tailwind CSS Mega-Menu",
    slug: "flowbite-mega-menu",
    library: "Flowbite",
    sourceType: "component-library",
    types: ["mega-menu", "dropdowns"],
    likes: 2780,
    screenshot: "https://flowbite.com/images/og-image.png",
    website: "https://flowbite.com/docs/components/navbar/#mega-menu",
    galleryUrl: "https://flowbite.com/docs/components/navbar/#mega-menu",
    ogImage: "https://flowbite.com/images/og-image.png",
    title: "Flowbite - Tailwind CSS Mega-Menu Navbar with CTA Box",
    description: "Production Tailwind component from Flowbite. Features 3-column category grid, highlighted promotional marketing card with CTA, dark mode toggle, and accessible aria attributes.",
    tags: ["flowbite", "component-library", "mega-menu", "accessible", "cta", "tailwind"],
    headings: ["Company", "Marketplace", "Resources"],
    externalLinks: ["https://flowbite.com", "https://github.com/themesberg/flowbite"],
    previewSummary: "Full-width accessible mega-menu with multi-column category layout and promotional callout banner.",
    codeSnippet: `import React, { useState } from 'react';

export function FlowbiteMegaMenuNavbar() {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">F</div>
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        <div className="flex items-center md:order-2 space-x-2">
          <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700">Login</a>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">Get started</a>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li><a href="#" className="block py-2 px-3 text-blue-700 dark:text-blue-500">Home</a></li>
            <li>
              <button onClick={() => setMegaOpen(!megaOpen)} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">
                Company ▾
              </button>
            </li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Marketplace</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Resources</a></li>
          </ul>
        </div>
      </div>

      {megaOpen && (
        <div className="border-y border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow-xl">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul className="space-y-4">
              <li><a href="#" className="font-semibold hover:text-blue-600">Online Stores</a></li>
              <li><a href="#" className="font-semibold hover:text-blue-600">Segmentation</a></li>
              <li><a href="#" className="font-semibold hover:text-blue-600">Marketing CRM</a></li>
            </ul>
            <ul className="space-y-4">
              <li><a href="#" className="font-semibold hover:text-blue-600">Our Blog</a></li>
              <li><a href="#" className="font-semibold hover:text-blue-600">User Showcase</a></li>
              <li><a href="#" className="font-semibold hover:text-blue-600">Newsletter</a></li>
            </ul>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h4 className="font-bold text-sm mb-1">New Flowbite Pro</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Explore 500+ production UI components built with Tailwind CSS.</p>
              <a href="#" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Learn more &rarr;</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}`
  },

  "preline-navbar": {
    name: "Preline UI - Glassmorphism Enterprise Navbar",
    slug: "preline-navbar",
    library: "Preline UI",
    sourceType: "component-library",
    types: ["dropdowns", "static"],
    likes: 2420,
    screenshot: "https://preline.co/assets/img/og-image.png",
    website: "https://preline.co/docs/navbar.html",
    galleryUrl: "https://preline.co/docs/navbar.html",
    ogImage: "https://preline.co/assets/img/og-image.png",
    title: "Preline UI - Responsive Glassmorphism Navbar with Collapse",
    description: "Enterprise open-source Tailwind UI header from Preline. Features backdrop-blur glass styling, animated collapse toggle, and clean divider actions.",
    tags: ["preline", "component-library", "glassmorphism", "collapse-toggle", "enterprise"],
    headings: ["Landing", "Account", "Work", "Blog"],
    externalLinks: ["https://preline.co", "https://github.com/htmlstreamofficial/preline"],
    previewSummary: "Sleek enterprise navigation header with frosted border and responsive mobile collapse toggle.",
    codeSnippet: `import React, { useState } from 'react';

export function PrelineNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 py-3 backdrop-blur-md text-sm dark:border-neutral-700 dark:bg-neutral-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a className="text-xl font-bold dark:text-white" href="#">
          Preline
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden rounded-lg border border-gray-200 p-2 text-gray-800 dark:border-neutral-700 dark:text-white"
        >
          ☰
        </button>

        {/* Links */}
        <div className={\`\${open ? 'block' : 'hidden'} basis-full sm:flex sm:items-center sm:justify-end gap-x-7 sm:block\`}>
          <a className="font-medium text-blue-600 dark:text-blue-500" href="#">Landing</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400" href="#">Account</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400" href="#">Work</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400" href="#">Blog</a>
          <a className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition-colors" href="#">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}`
  },

  "hoverdev-tabs-navbar": {
    name: "Hover.dev - Animated Sliding Tab Navbar",
    slug: "hoverdev-tabs-navbar",
    library: "Hover.dev",
    sourceType: "component-library",
    types: ["dropdowns", "static"],
    likes: 3120,
    screenshot: "https://hover.dev/og.png",
    website: "https://hover.dev/components/navigation",
    galleryUrl: "https://hover.dev/components/navigation",
    ogImage: "https://hover.dev/og.png",
    title: "Hover.dev - Framer Motion Sliding Pill Tab Navbar",
    description: "Famous interactive component from Hover.dev. Features a magnetic sliding pill indicator that follows mouse hover over links with smooth spring physics.",
    tags: ["hoverdev", "component-library", "animated-tabs", "sliding-pill", "framer-motion", "spring"],
    headings: ["Home", "Features", "Pricing", "Blog"],
    externalLinks: ["https://hover.dev"],
    previewSummary: "Centred interactive pill navbar with magnetic cursor-following tab highlight background.",
    codeSnippet: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function HoverDevSlidingTabsNavbar() {
  const tabs = ["Home", "Features", "Pricing", "Docs", "Blog"];
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex justify-center p-6 bg-neutral-950">
      <nav className="flex items-center rounded-full border border-neutral-800 bg-neutral-900/80 p-1.5 backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={\`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors \${
              selected === tab ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
            }\`}
          >
            <span className="relative z-10">{tab}</span>
            {selected === tab && (
              <motion.span
                layoutId="pill-tab"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="absolute inset-0 z-0 rounded-full bg-neutral-800"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}`
  },

  "hyperui-navbar": {
    name: "HyperUI - Clean Tailwind Marketing Navbar",
    slug: "hyperui-navbar",
    library: "HyperUI",
    sourceType: "component-library",
    types: ["static", "search-bar"],
    likes: 2180,
    screenshot: "https://www.hyperui.dev/og.jpg",
    website: "https://www.hyperui.dev/components/marketing/navbars",
    galleryUrl: "https://www.hyperui.dev/components/marketing/navbars",
    ogImage: "https://www.hyperui.dev/og.jpg",
    title: "HyperUI - Free Clean Tailwind CSS Navigation Header",
    description: "Free and open-source marketing navbar from HyperUI. Lightweight, zero dependencies, responsive hamburger drawer, and clean CTA button.",
    tags: ["hyperui", "component-library", "open-source", "clean", "marketing", "ecommerce"],
    headings: ["About", "Careers", "History", "Services", "Projects"],
    externalLinks: ["https://www.hyperui.dev", "https://github.com/markmead/hyperui"],
    previewSummary: "Minimalist pure Tailwind marketing navbar with clean spacing and rounded login buttons.",
    codeSnippet: `import React from 'react';

export function HyperUINavbar() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 font-extrabold text-xl" href="#">
          HyperUI
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">About</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Careers</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">History</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Services</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Projects</a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" href="#">Login</a>
              <a className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block" href="#">Register</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}`
  },

  "21st-floating-island": {
    name: "21st.dev - Floating Glass Island Navbar",
    slug: "21st-floating-island",
    library: "21st.dev",
    sourceType: "component-library",
    types: ["dropdowns", "static"],
    likes: 3340,
    screenshot: "https://21st.dev/og.png",
    website: "https://21st.dev",
    galleryUrl: "https://21st.dev",
    ogImage: "https://21st.dev/og.png",
    title: "21st.dev - Design Engineer Floating Glass Island Navbar",
    description: "From 21st.dev (the npm for design engineers). High-end floating glass island with border beam shimmer effect, responsive drawer, and modern frosted styling.",
    tags: ["21st", "component-library", "design-engineer", "floating-island", "glassmorphism", "border-beam"],
    headings: ["Inspiration", "Components", "Templates", "Pricing"],
    externalLinks: ["https://21st.dev"],
    previewSummary: "Futuristic frosted glass floating island navbar with animated border shimmer.",
    codeSnippet: `import React from 'react';

export function TwentyFirstFloatingIslandNavbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center justify-between gap-8 rounded-full border border-white/10 bg-neutral-900/70 px-6 py-2.5 backdrop-blur-xl shadow-2xl max-w-3xl w-full">
        {/* Glow Shimmer */}
        <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">21</div>
          <span className="font-bold text-sm text-white">21st.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-300">
          <a href="#inspiration" className="hover:text-white transition-colors">Inspiration</a>
          <a href="#components" className="hover:text-white transition-colors">Components</a>
          <a href="#templates" className="hover:text-white transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-xs font-semibold bg-white text-black rounded-full px-4 py-1.5 hover:bg-neutral-200 transition-colors">
            Get Pro
          </button>
        </div>
      </nav>
    </div>
  );
}`
  },

  // ==========================================
  // FLAGSHIP TECH WEBSITES
  // ==========================================

  github: {
    name: "GitHub",
    slug: "github",
    sourceType: "brand-website",
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
  return (
    <nav className="bg-[#0d1117] text-white border-b border-[#30363d] px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="https://github.com" className="text-white hover:opacity-80 transition-opacity">
            <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9 1.48 1.35.43.26.96.18 1.34.14v1.07c0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z"/>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <span>Product ▾</span>
            <span>Solutions ▾</span>
            <span>Resources ▾</span>
            <a href="#enterprise">Enterprise</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Search or jump to... /" className="bg-[#161b22] border border-[#30363d] rounded-md px-3 py-1.5 text-sm w-60" />
          <a href="#signin" className="text-sm font-semibold text-gray-300">Sign in</a>
          <a href="#signup" className="text-sm font-semibold text-white border border-gray-600 rounded-md px-3 py-1.5">Sign up</a>
        </div>
      </div>
    </nav>
  );
}`
  },

  linear: {
    name: "Linear",
    slug: "linear",
    sourceType: "brand-website",
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
        <a href="https://linear.app" className="flex items-center gap-2 text-white font-medium">
          <span className="text-sm tracking-tight font-semibold">Linear</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#method" className="hover:text-white">Method</a>
          <a href="#customers" className="hover:text-white">Customers</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#login" className="text-xs font-medium text-neutral-400 hover:text-white">Log in</a>
          <a href="#signup" className="text-xs font-medium text-black bg-white rounded-full px-3.5 py-1.5 hover:bg-neutral-200">Sign up</a>
        </div>
      </nav>
    </header>
  );
}`
  },

  vercel: {
    name: "Vercel",
    slug: "vercel",
    sourceType: "brand-website",
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
    codeSnippet: `import React from 'react';

export function VercelNavbar() {
  return (
    <header className="bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="https://vercel.com" className="flex items-center gap-2">
            <svg height="22" viewBox="0 0 116 100" fill="#fff"><path d="M57.5 0L115 100H0L57.5 0z" /></svg>
            <span className="font-bold text-lg">Vercel</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-400">
            <button className="px-3 py-1.5 hover:text-white">Products</button>
            <button className="px-3 py-1.5 hover:text-white">Solutions</button>
            <button className="px-3 py-1.5 hover:text-white">Enterprise</button>
            <button className="px-3 py-1.5 hover:text-white">Docs</button>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href="#login" className="text-neutral-400 hover:text-white px-3 py-1.5">Log In</a>
          <a href="#signup" className="bg-white text-black font-medium px-3.5 py-1.5 rounded-md hover:bg-neutral-200">Sign Up</a>
        </div>
      </div>
    </header>
  );
}`
  },

  stripe: {
    name: "Stripe",
    slug: "stripe",
    sourceType: "brand-website",
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
    codeSnippet: `import React from 'react';

export function StripeNavbar() {
  return (
    <nav className="bg-[#0a2540] text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="https://stripe.com" className="text-2xl font-black text-white">stripe</a>
        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
          <span>Products ▾</span>
          <a href="#solutions">Solutions</a>
          <a href="#developers">Developers</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#signin" className="text-sm font-semibold">Sign in</a>
          <a href="#contact" className="text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full border border-white/20">Contact sales &rarr;</a>
        </div>
      </div>
    </nav>
  );
}`
  }
};
