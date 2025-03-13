export default function ContextPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Context
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          Cursor's context awareness enables it to understand your entire codebase, providing more accurate and relevant assistance. 
          Through intelligent indexing and workspace management, Cursor can analyze multiple repositories and large codebases effectively.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Codebase Indexing</h3>
            <p className="text-white/80 mb-4">
              Automatically indexes your entire codebase to provide context-aware assistance and more accurate code suggestions.
            </p>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Multi-Repository Support</h3>
            <p className="text-white/80 mb-4">
              Create workspaces that include multiple repositories, enabling AI to understand and work across interconnected projects.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Requirement:</span>
                <span className="text-white/70">Files must be locally within the same base folder for cross-repo indexing</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Large Monorepo Management</h3>
            <p className="text-white/80 mb-4">
              Strategic indexing configuration for large monorepos through .cursorignore files.
            </p>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Configure .cursorignore per developer
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Add .cursorignore to global .gitignore
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Optimize indexing for specific work areas
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            {`You can check indexing status in Cursor Settings > Features > Codebase Indexing`}
          </p>
        </div>
      </div>
    </div>
  )
} 