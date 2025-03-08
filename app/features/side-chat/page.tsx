export default function SideChatPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Side Chat (⌘L)
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          The side chat provides a dedicated space for comprehensive project-wide interactions and complex queries, accessible through the ⌘L shortcut.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Project-Wide Access</h3>
            <p className="text-white/80 mb-4">
              Query and analyze your entire codebase, search through files, and get comprehensive project insights.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Find all API endpoints in the project"</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Enhanced Context</h3>
            <p className="text-white/80 mb-4">
              Add specific files, folders, or external references to your queries using @ commands for more accurate responses.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"@utils/helpers.js explain the authentication flow"</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Easy Code Usage</h3>
            <p className="text-white/80 mb-4">
              Code snippets in chat responses can be easily copied, dragged into your editor, or applied with a single click.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">Copy code with the copy button or drag it directly into your editor</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Interaction Methods
        </h2>
        
        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm">
          <ul className="list-none space-y-3 text-white/80">
            {[
              "Drag and drop files/folders into chat",
              "Use @ commands for file references",
              "Copy code blocks directly from responses",
              "Access project-wide search"
            ].map((method, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-violet-400/60">•</span>
                {method}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-2 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            For complex refactoring tasks, add multiple related files to the chat to ensure the AI understands the full context of your codebase.
          </p>
        </div>
      </div>
    </div>
  )
} 