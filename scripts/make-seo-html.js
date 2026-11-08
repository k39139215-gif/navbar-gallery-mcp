import fs from "fs";
import path from "path";

const srcPath = "all-navbars-review.html";
let content = fs.readFileSync(srcPath, "utf8");

content = content.replace("https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js", "https://cdn.tailwindcss.com");

const seoHead = `  <meta name="description" content="Curated Navigation Bar components from 32+ premier UI component libraries (Aceternity UI, Magic UI, Kokonut UI, Cult UI, shadcn/ui, motion-primitives, Origin UI). Model Context Protocol (MCP) server & CLI for Claude Desktop, Cursor, and AI coding assistants.">
  <meta name="keywords" content="navbar, navigation menu, mega menu, dock, floating navbar, mcp server, model context protocol, shadcn, aceternity ui, magic ui, kokonut ui, cult ui, origin ui, tailwind css, react, framer motion, claude desktop, cursor mcp, ai coding, awesome mcp">
  <meta name="author" content="Kartik">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://k39139215-gif.github.io/navbar-gallery-mcp/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://k39139215-gif.github.io/navbar-gallery-mcp/">
  <meta property="og:title" content="Navbar Gallery MCP • 32+ Premier UI Component Libraries">
  <meta property="og:description" content="Model Context Protocol (MCP) server & CLI curating 32+ world-class Navigation Bar components for Claude Desktop, Cursor, and AI coding assistants.">
  <meta property="og:image" content="https://ui.aceternity.com/api/og">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://k39139215-gif.github.io/navbar-gallery-mcp/">
  <meta name="twitter:title" content="Navbar Gallery MCP • 32+ Premier UI Component Libraries">
  <meta name="twitter:description" content="Curated Navbar components for Cursor and Claude Desktop. Real React + Tailwind code from Aceternity, Magic UI, Kokonut UI, Cult UI, and shadcn.">
  <meta name="twitter:image" content="https://ui.aceternity.com/api/og">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Navbar Gallery MCP",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Model Context Protocol (MCP) server & CLI for curated Navigation Bar components from 32+ premier design systems and UI component libraries.",
        "url": "https://k39139215-gif.github.io/navbar-gallery-mcp/",
        "author": {
          "@type": "Person",
          "name": "Kartik"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "navbar-gallery-mcp",
        "codeRepository": "https://github.com/k39139215-gif/navbar-gallery-mcp",
        "programmingLanguage": "TypeScript",
        "license": "https://opensource.org/licenses/MIT",
        "runtimePlatform": "Node.js"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Navbar Gallery MCP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Navbar Gallery MCP is an open-source Model Context Protocol server that enables AI coding assistants like Cursor, Claude Desktop, and Antigravity to query, search, and inject production-ready Navbar and Navigation Menu components from 32+ verified component libraries."
            }
          },
          {
            "@type": "Question",
            "name": "Which libraries are included in Navbar Gallery MCP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It includes Aceternity UI, Magic UI, Kokonut UI, Cult UI, motion-primitives by Ibelick, shadcn/ui, Origin UI (Cal.com), Hover.dev, Syntax UI, Transitions.dev, Details.design, Spectrum UI, Rareblocks, UseLayout, BeUI, Affect UI, DaisyUI, Flowbite, Preline UI, HyperUI, Meraki UI, Tailspark, Cruip, WickedBlocks, Kitwind, Float UI, Tailwind UI, Park UI, Sailboat UI, 21st.dev, and Navbar Gallery."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Navbar Gallery MCP in Claude Desktop or Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Add navbar-gallery to your claude_desktop_config.json or mcp_config.json pointing to node /path/to/navbar-gallery-mcp/dist/mcp.js, or run via npx."
            }
          }
        ]
      }
    ]
  }
  </script>`;

content = content.replace('<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + seoHead);

fs.writeFileSync("index.html", content, "utf8");
console.log("✓ Generated SEO-optimized index.html for navbar-gallery-mcp");
