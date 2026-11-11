# Contributing to Navbar Gallery MCP

Thank you for your interest in contributing to **Navbar Gallery MCP**! We welcome new Navbar components, navigation patterns, UI library integrations, and documentation improvements.

## Adding a New Navigation Bar Component

1. Identify the component source (must be a reputable open-source component library, design system, or MIT-licensed registry).
2. Ensure you have the raw source code (React, Tailwind CSS, and Radix UI / Framer Motion if applicable).
3. Add the component metadata and code to `src/data/navbars.ts`.
4. Run `npm run build && npm test` to verify all MCP tools return the new navbar correctly.
5. Submit a Pull Request with a clear title and link to the author's official documentation.

## Code Standards
- TypeScript with strict type checking.
- Clean JSX with semantic Tailwind CSS classes and accessible ARIA attributes.
- Minimal external dependencies.
- Always credit the original author and repository URL.

## Local Development
```bash
git clone https://github.com/k39139215-gif/navbar-gallery-mcp.git
cd navbar-gallery-mcp
npm install
npm run build
npm test
```
