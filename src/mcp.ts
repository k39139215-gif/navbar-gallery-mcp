#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { TYPES, getNavbar, listType, searchType } from "./core.js";

const server = new McpServer({ name: "navbar-gallery", version: "0.1.0" });
const typeEnum = z.enum(TYPES);

const json = (data: unknown) => ({
  content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
});
const fail = (e: unknown) => ({
  isError: true,
  content: [{ type: "text" as const, text: String(e instanceof Error ? e.message : e) }],
});

server.registerTool(
  "list_types",
  { description: "List all navbar categories available on navbar.gallery", inputSchema: {} },
  async () => json(TYPES)
);

server.registerTool(
  "list_navbars",
  {
    description: "List navbar examples for a category. Paginated (page 1 = first batch).",
    inputSchema: { type: typeEnum, page: z.number().int().min(1).default(1) },
  },
  async ({ type, page }) => {
    try { return json(await listType(type, page)); } catch (e) { return fail(e); }
  }
);

server.registerTool(
  "search_navbars",
  {
    description: "Find navbar examples by brand/site name within a category, or type all for every category (scans up to maxPages pages each)",
    inputSchema: {
      query: z.string().min(1),
      type: z.enum([...TYPES, "all"]).default("dropdowns"),
      maxPages: z.number().int().min(1).max(15).default(5),
    },
  },
  async ({ query, type, maxPages }) => {
    try { return json(await searchType(query, type, maxPages)); } catch (e) { return fail(e); }
  }
);

server.registerTool(
  "get_navbar",
  {
    description: "Get details (title, website, screenshots) for one navbar by slug, e.g. 'browserbase'",
    inputSchema: { slug: z.string().min(1) },
  },
  async ({ slug }) => {
    try { return json(await getNavbar(slug)); } catch (e) { return fail(e); }
  }
);

await server.connect(new StdioServerTransport());
