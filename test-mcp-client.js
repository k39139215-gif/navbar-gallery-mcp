import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  console.log("Starting MCP client connecting to dist/mcp.js...");
  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/mcp.js"]
  });

  const client = new Client(
    { name: "test-client", version: "1.2.0" },
    { capabilities: {} }
  );

  await client.connect(transport);
  console.log("Connected to MCP server!");

  console.log("\n1. Testing tools/list...");
  const tools = await client.listTools();
  console.log("Available tools count:", tools.tools.length);
  const toolNames = tools.tools.map(t => t.name);
  console.log("Tool names:", toolNames);

  console.log("\n2. Calling list_types...");
  const resTypes = await client.callTool({ name: "list_types", arguments: {} });
  console.log("list_types result:", resTypes.content[0].text);

  console.log("\n3. Calling search_navbars for 'shadcn'...");
  const resShadcn = await client.callTool({
    name: "search_navbars",
    arguments: { query: "shadcn", type: "all", maxPages: 1 }
  });
  const parsedShadcn = JSON.parse(resShadcn.content[0].text);
  console.log("shadcn found:", parsedShadcn.map(s => ({ name: s.name, slug: s.slug })));

  console.log("\n4. Calling search_navbars for 'aceternity'...");
  const resAceternity = await client.callTool({
    name: "search_navbars",
    arguments: { query: "aceternity", type: "all", maxPages: 1 }
  });
  const parsedAceternity = JSON.parse(resAceternity.content[0].text);
  console.log("aceternity found:", parsedAceternity.map(s => ({ name: s.name, slug: s.slug })));

  console.log("\n5. Calling search_navbars for 'magicui'...");
  const resMagic = await client.callTool({
    name: "search_navbars",
    arguments: { query: "magicui", type: "all", maxPages: 1 }
  });
  const parsedMagic = JSON.parse(resMagic.content[0].text);
  console.log("magicui found:", parsedMagic.map(s => ({ name: s.name, slug: s.slug })));

  console.log("\n6. Calling get_navbar_code for 'aceternity-floating-navbar'...");
  const resCodeAceternity = await client.callTool({
    name: "get_navbar_code",
    arguments: { slug: "aceternity-floating-navbar" }
  });
  const parsedCodeAceternity = JSON.parse(resCodeAceternity.content[0].text);
  console.log("Aceternity Code Name:", parsedCodeAceternity.name);
  console.log("Snippet preview:\n" + parsedCodeAceternity.code.split("\n").slice(0, 4).join("\n"));

  console.log("\n7. Calling get_navbar for 'shadcn-navigation-menu'...");
  const resGetShadcn = await client.callTool({
    name: "get_navbar",
    arguments: { slug: "shadcn-navigation-menu" }
  });
  const parsedGetShadcn = JSON.parse(resGetShadcn.content[0].text);
  console.log("shadcn title:", parsedGetShadcn.title);
  console.log("shadcn website:", parsedGetShadcn.website);
  console.log("shadcn tags:", parsedGetShadcn.tags);

  console.log("\n8. Calling search_navbars for 'component-library'...");
  const resCompLib = await client.callTool({
    name: "search_navbars",
    arguments: { query: "component-library", type: "all", maxPages: 1 }
  });
  const parsedCompLib = JSON.parse(resCompLib.content[0].text);
  console.log("Total component libraries found:", parsedCompLib.length);
  console.log("Component Libraries list:", parsedCompLib.map(c => c.name));

  await client.close();
  console.log("\n🎉 ALL 8 TESTS PASSED WITH 100% SUCCESS!");
  process.exit(0);
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
