import { ExternalLink, Github } from "lucide-react"

export default function MCPPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Model Context Protocol
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context and tools to LLMs. 
          Think of MCP like a plugin system for Cursor - it allows you to extend the Agent's capabilities by connecting it to various 
          data sources and tools through standardized interfaces.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Key Features
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Integration Capabilities</h3>
            <p className="text-white/80 mb-4">
              MCP allows you to connect Cursor to external systems and data sources, integrating with your existing tools and infrastructure 
              instead of having to manually describe your project structure.
            </p>
            <a 
              href="https://modelcontextprotocol.io/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>View Documentation</span>
            </a>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Technical Flexibility</h3>
            <p className="text-white/80">
              MCP servers can be written in any language that can print to stdout or serve an HTTP endpoint. This flexibility allows you 
              to implement MCP servers using your preferred programming language and technology stack very quickly.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Popular Integrations
        </h2>

        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Figma Integration</h3>
            <p className="text-white/80 mb-3">
              Allow Cursor to fetch design specs directly from your Figma projects, enabling seamless implementation of designs.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/GLips/Figma-Context-MCP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>MCP Server</span>
              </a>
              <a 
                href="https://github.com/aswinckr/figma-cursor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Figma Plugin</span>
              </a>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Notion Integration</h3>
            <p className="text-white/80 mb-3">
              Read data from Notion to guide Cursor in implementing features based on your documentation and specifications.
            </p>
            <a 
              href="https://github.com/suekou/mcp-notion-server"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Repository</span>
            </a>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">GitHub Integration</h3>
            <p className="text-white/80 mb-3">
              Enable Cursor to create PRs, manage branches, search code, and interact with your GitHub repositories.
            </p>
            <a 
              href="https://github.com/modelcontextprotocol/servers/tree/main/src/github"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            You can combine multiple MCP integrations to create powerful workflows that connect your entire development ecosystem.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Resources
        </h2>

        <p className="text-white/90 mb-6">
          Explore these resources to discover more MCP servers and integrations:
        </p>

        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Awesome MCP Servers</h3>
            <p className="text-white/80 mb-3">
              A curated list of awesome Model Context Protocol (MCP) servers, frameworks, and utilities.
            </p>
            <a 
              href="https://github.com/punkpeye/awesome-mcp-servers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Repository</span>
            </a>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Cursor Directory MCPs</h3>
            <p className="text-white/80 mb-3">
              Browse and discover MCP servers in the Cursor Directory, a centralized hub for MCP integrations.
            </p>
            <a 
              href="https://cursor.directory/mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Visit Directory</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 