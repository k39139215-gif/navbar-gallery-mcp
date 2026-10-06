# Navbar Gallery MCP Manifest Helper
def get_server_metadata():
    return {
        "name": "navbar-gallery-mcp",
        "version": "1.1.0",
        "description": "FastMCP server for AI assistants to explore, preview and fetch modern navbar UI components.",
        "author": "Kartik Bhosale"
    }

if __name__ == '__main__':
    import json
    print(json.dumps(get_server_metadata(), indent=2))
