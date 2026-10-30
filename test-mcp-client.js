import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  console.log("Starting MCP client connecting to dist/mcp.js...");
  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/mcp.js"]
  });

  const client = new Client(
    { name: "test-client", version: "1.0.0" },
    { capabilities: {} }
  );

  await client.connect(transport);
  console.log("Connected to MCP server!");

  console.log("\n1. Testing tools/list...");
  const tools = await client.listTools();
  console.log("Available tools:", tools.tools.map(t => ({ name: t.name, description: t.description })));

  console.log("\n2. Calling list_types...");
  const resTypes = await client.callTool({ name: "list_types", arguments: {} });
  console.log("list_types result:", resTypes);

  console.log("\n3. Calling list_navbars (type: 'dropdowns', page: 1)...");
  const resList = await client.callTool({ name: "list_navbars", arguments: { type: "dropdowns", page: 1 } });
  console.log("list_navbars response text length:", resList.content[0].text.length);
  const parsedList = JSON.parse(resList.content[0].text);
  console.log("Found items count:", parsedList.items?.length);
  if (parsedList.items?.length > 0) {
    console.log("First item sample:", parsedList.items[0]);
  }

  console.log("\n4. Calling get_navbar (slug: 'orchid')...");
  const resGet = await client.callTool({ name: "get_navbar", arguments: { slug: "orchid" } });
  const parsedGet = JSON.parse(resGet.content[0].text);
  console.log("get_navbar title:", parsedGet.title);
  console.log("get_navbar website:", parsedGet.website);

  console.log("\n5. Calling search_navbars (query: 'orchid', type: 'dropdowns', maxPages: 2)...");
  const resSearch = await client.callTool({
    name: "search_navbars",
    arguments: { query: "orchid", type: "dropdowns", maxPages: 2 }
  });
  console.log("search_navbars result:", resSearch.content[0].text);

  await client.close();
  console.log("\nMCP test finished successfully!");
  process.exit(0);
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
