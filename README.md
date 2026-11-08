# 🧭 Navbar Gallery Model Context Protocol (MCP) Server

[![MCP](https://img.shields.io/badge/MCP-Model_Context_Protocol-6366F1?logo=anthropic&logoColor=white)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Curated Libraries](https://img.shields.io/badge/Component_Libraries-32_Verified-emerald.svg)](https://github.com/k39139215-gif/navbar-gallery-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An intelligent Model Context Protocol (MCP) server, CLI, and curated registry for querying, searching, and previewing high-converting, accessible navigation bar components from **32+ premier design systems, UI component libraries, and frontend engineering platforms**.

Built specifically for AI coding assistants (**Cursor, Claude Desktop, Antigravity**) to inject 100% production-ready React + Tailwind CSS navigation components directly into coding workflows.

---

## 🌟 32 Verified Component Libraries & Design Registries

Unlike generic website scrapers, **`navbar-gallery-mcp`** exclusively curates from authentic frontend component libraries, open-source registries, and design engineering resources:

| # | Component Library / Registry | Category / Style | Official Website |
|---|---|---|---|
| 01 | **Aceternity UI** | Floating Pill & Scroll Visibility Navbar | [ui.aceternity.com](https://ui.aceternity.com/components/floating-navbar) |
| 02 | **Aceternity UI** | Hover Magnetic Dropdown Navbar Menu | [ui.aceternity.com](https://ui.aceternity.com/components/navbar-menu) |
| 03 | **Magic UI** | macOS Proximity Magnification Dock | [magicui.design](https://magicui.design/docs/components/dock) |
| 04 | **Kokonut UI** (@dorianbaffier) | Morphic Split Island Navigation | [kokonutui.com](https://kokonutui.com/docs/components/morphic-navbar) |
| 05 | **Cult UI** | Minimalist Island Action Dock | [cult-ui.com](https://www.cult-ui.com/docs/components/dock) |
| 06 | **motion-primitives** (@ibelick) | Math-Driven Magnified Dock & Floating Nav | [motion-primitives.com](https://motion-primitives.com/docs/dock) |
| 07 | **shadcn/ui** | Accessible Radix Navigation Menu & Viewports | [ui.shadcn.com](https://ui.shadcn.com/docs/components/navigation-menu) |
| 08 | **Origin UI (coss.com)** | Cal.com Sliding Active Indicator Pill Nav | [originui.com](https://originui.com) |
| 09 | **Hover.dev** | Shifting Directional Dropdown Navbar | [hover.dev](https://www.hover.dev/components/navigation) |
| 10 | **Syntax UI** | Frosted Glass Capsule Pill Navbar | [syntaxui.com](https://syntaxui.com) |
| 11 | **Transitions.dev** | Fluid Animated Layout Transition Header | [transitions.dev](https://transitions.dev) |
| 12 | **Details.design** | Spring Micro-interaction Header | [details.design](https://details.design) |
| 13 | **Spectrum UI** | Conic Neon Border Gradient Header | [spectrum-ui.dev](https://spectrum-ui.dev) |
| 14 | **Rareblocks / Rare UI** | SaaS Multi-column Mega Dropdown Header | [rareblocks.xyz](https://rareblocks.xyz) |
| 15 | **UseLayout** | Floating Bento Command Bar Navbar | [uselayout.com](https://uselayout.com) |
| 16 | **BeUI** | Clean Frosted Island Navbar | [beui.dev](https://beui.dev) |
| 17 | **Affect UI** | Magnetic Spring Item Header | [affect-ui.com](https://affect-ui.com) |
| 18 | **daisyUI** | Pure Semantic CSS Utility Responsive Nav | [daisyui.com](https://daisyui.com/components/navbar/) |
| 19 | **Flowbite** | Tailwind 3-Column Feature Mega Menu | [flowbite.com](https://flowbite.com/docs/components/navbar/) |
| 20 | **Preline UI** | Tailwind Flyout Subnav with Icon Badges | [preline.co](https://preline.co/docs/navbar.html) |
| 21 | **HyperUI** (Mark Mead) | Centered Minimalist Marketing Header | [hyperui.dev](https://www.hyperui.dev/components/marketing/navbars) |
| 22 | **Meraki UI** | Modern Blur Backdrop Responsive Header | [merakiui.com](https://merakiui.com/components/navbars) |
| 23 | **Tailspark** | Dual-Tier SaaS Header with Announcement Bar | [tailspark.co](https://tailspark.co/components/navbar) |
| 24 | **Cruip** | High-End Dark Mode SaaS Header with Glow | [cruip.com](https://cruip.com) |
| 25 | **WickedBlocks** | Playful Neobrutalist Floating Capsule Bar | [wickedblocks.dev](https://wickedblocks.dev) |
| 26 | **Kitwind** | Animated Mobile Drawer Responsive Header | [kitwind.com](https://kitwind.com) |
| 27 | **Float UI** | Clean Responsive Tailwind Navbar | [floatui.com](https://floatui.com/components/navbars) |
| 28 | **Tailwind UI** (Tailwind Labs) | Official Flyout Navigation & Security Menus | [tailwindui.com](https://tailwindui.com/components/marketing/elements/headers) |
| 29 | **Park UI** (Ark UI / Zag.js) | State-Machine Accessible Tabs Navbar | [park-ui.com](https://park-ui.com) |
| 30 | **Sailboat UI** | Admin & Marketing Nav with Notification Badge | [sailboatui.com](https://sailboatui.com) |
| 31 | **21st.dev** | Apple Dynamic Island Expanding Capsule Nav | [21st.dev](https://21st.dev) |
| 32 | **Navbar Gallery** | Category Filtered Explorer Header | [navbar.gallery](https://www.navbar.gallery) |

---

## 🛠️ MCP Tools Overview

When connected as an MCP server, `navbar-gallery-mcp` exposes 5 native tools:

| Tool | Parameters | Description |
|---|---|---|
| `list_types` | None | Returns supported navbar categories (`static`, `dropdowns`, `mega-menu`, `side-bar`, `search-bar`, `announcement`, `full-screen`, `breadcrumbs`). |
| `list_navbars` | `type` (NavbarType), `page` (number, default: 1) | Lists top navbar components for a specific category with metadata, likes, and previews. |
| `search_navbars` | `query` (string), `scope` (NavbarType \| "all", default: "all") | Full-text search across 32+ component libraries and live registry items by name, library, style, or tag. |
| `get_navbar` | `slug` (string) | Returns detailed specs, external documentation links, headings, tags, and summary for any navbar. |
| `get_navbar_code` | `slug` (string) | Returns **100% authentic, production-ready React + Tailwind CSS code** for direct injection into your project. |

---

## 🚀 Quick Start & Installation

```bash
# Clone the repository
git clone https://github.com/k39139215-gif/navbar-gallery-mcp.git
cd navbar-gallery-mcp

# Install dependencies and compile
npm install
npm run build

# Run test suite
node test-mcp-client.js
```

### Configure in Claude Desktop / Antigravity / Cursor

Add to your `mcp_config.json`:

```json
{
  "mcpServers": {
    "navbar-gallery": {
      "command": "node",
      "args": [
        "C:\\path\\to\\navbar-gallery-mcp\\dist\\mcp.js"
      ]
    }
  }
}
```

---

## 💻 CLI Usage

You can also use the CLI directly in your terminal:

```bash
# List dropdown navbars
node dist/cli.js list dropdowns

# Search for dock or island navbars
node dist/cli.js search dock --type all

# Output raw component code directly to console or file
node dist/cli.js code aceternity-floating-navbar > FloatingNav.tsx
node dist/cli.js code shadcn-navigation-menu > NavigationMenu.tsx
node dist/cli.js code kokonut-morphic-navbar > MorphicNav.tsx
```

---

## 🌐 All-in-One Interactive Review Showcase

Open `all-navbars-review.html` in any web browser to review all 32 navbars rendered live with:
- Interactive hover effects (macOS dock magnification, sliding tab pills, mega dropdowns)
- Fast live search and category filtering
- One-click copy code functionality with syntax previews
- Direct jump links to each component library's documentation

---

## 📄 License

MIT License. Copyright (c) 2026.
Author attributions belong to their respective creators (Aceternity UI, Magic UI, Kokonut UI, Cult UI, Julien Thibeaut / motion-primitives, shadcn, Cal.com, Mark Mead, and Tailwind Labs).
