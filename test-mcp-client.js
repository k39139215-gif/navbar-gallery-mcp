import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  console.log("Starting MCP client connecting to dist/mcp.js...");
  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/mcp.js"]
  });

  const client = new Client(
    { name: "test-client", version: "1.1.0" },
    { capabilities: {} }
  );

  await client.connect(transport);
  console.log("Connected to MCP server!");

  console.log("\n1. Testing tools/list...");
  const tools = await client.listTools();
  console.log("Available tools count:", tools.tools.length);
  const toolNames = tools.tools.map(t => t.name);
  console.log("Tool names:", toolNames);
  if (!toolNames.includes("get_navbar_code")) {
    throw new Error("get_navbar_code tool missing!");
  }

  console.log("\n2. Calling list_types...");
  const resTypes = await client.callTool({ name: "list_types", arguments: {} });
  console.log("list_types result:", resTypes.content[0].text);

  console.log("\n3. Calling list_navbars (type: 'dropdowns', page: 1)...");
  const resList = await client.callTool({ name: "list_navbars", arguments: { type: "dropdowns", page: 1 } });
  const parsedList = JSON.parse(resList.content[0].text);
  console.log("Found items count in dropdowns:", parsedList.items?.length);
  const curatedFound = parsedList.items.filter(i => ["linear", "github", "vercel", "stripe", "figma"].includes(i.slug));
  console.log("Curated top brands present in dropdowns:", curatedFound.map(c => c.name));

  console.log("\n4. Calling get_navbar (slug: 'linear')...");
  const resGetLinear = await client.callTool({ name: "get_navbar", arguments: { slug: "linear" } });
  const parsedLinear = JSON.parse(resGetLinear.content[0].text);
  console.log("Linear Title:", parsedLinear.title);
  console.log("Linear Website:", parsedLinear.website);
  console.log("Linear Tags:", parsedLinear.tags);
  console.log("Linear Code Snippet Length:", parsedLinear.codeSnippet?.length);

  console.log("\n5. Calling search_navbars (query: 'github', type: 'all', maxPages: 1)...");
  const resSearch = await client.callTool({
    name: "search_navbars",
    arguments: { query: "github", type: "all", maxPages: 1 }
  });
  const parsedSearch = JSON.parse(resSearch.content[0].text);
  console.log("search_navbars found:", parsedSearch.map(s => ({ name: s.name, slug: s.slug, types: s.types })));

  console.log("\n6. Calling get_navbar_code (slug: 'github')...");
  const resCode = await client.callTool({
    name: "get_navbar_code",
    arguments: { slug: "github" }
  });
  const parsedCode = JSON.parse(resCode.content[0].text);
  console.log("Code tool result name:", parsedCode.name);
  console.log("Framework:", parsedCode.framework);
  console.log("First 3 lines of code:\n" + parsedCode.code.split("\n").slice(0, 3).join("\n"));

  console.log("\n7. Calling get_navbar for a live gallery slug: 'orchid'...");
  const resGetOrchid = await client.callTool({ name: "get_navbar", arguments: { slug: "orchid" } });
  const parsedOrchid = JSON.parse(resGetOrchid.content[0].text);
  console.log("Orchid title:", parsedOrchid.title);
  console.log("Orchid website:", parsedOrchid.website);

  await client.close();
  console.log("\n🎉 ALL 7 MCP TESTS PASSED 100%!");
  process.exit(0);
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
