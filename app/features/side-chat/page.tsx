export default function SideChatPage() {
  return (
    <div className="max-w-3xl mx-auto py-4 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Side Chat (⌘L)
      </h1>
      <div className="prose prose-invert max-w-none prose-base md:prose-lg">
        <p className="text-white/90 leading-relaxed mb-4 md:mb-8 bg-white/[0.03] rounded-xl p-4 md:p-6 backdrop-blur-sm text-sm md:text-base">
          The side chat provides a dedicated space for comprehensive project-wide interactions and complex queries, accessible through the ⌘L shortcut.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Project-Wide Access</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Query and analyze your entire codebase, search through files, and get comprehensive project insights.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-3 md:p-4 space-y-2">
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Find all API endpoints in the project"</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Enhanced Context</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Add specific files, folders, or external references to your queries using @ commands for more accurate responses.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-3 md:p-4 space-y-2">
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"@utils/helpers.js explain the authentication flow"</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Easy Code Usage</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Code snippets in chat responses can be easily copied, dragged into your editor, or applied with a single click.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-3 md:p-4 space-y-2">
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">Copy code with the copy button or drag it directly into your editor</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Interaction Methods
        </h2>
        
        <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <ul className="list-none space-y-2 md:space-y-3 text-white/80 text-sm md:text-base">
            {[
              "Drag and drop files/folders into chat",
              "Use @ commands for file references",
              "Copy code blocks directly from responses",
              "Access project-wide search"
            ].map((method, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <span className="text-violet-400/60">•</span>
                {method}
              </li>
            ))}
          </ul>
          <br />
          <p className="text-white/80 mt-3 md:mt-4 text-sm md:text-base">
           Since models like ChatGPT and Claude have  <span className="text-violet-300 font-semibold">Multi modal</span> capabilities, you can also upload images and files to the side chat.
          </p>
        </div>

        <div className="mt-4 md:mt-8 bg-violet-500/[0.08] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <p className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 text-white/90 text-sm md:text-base">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            <span>For complex refactoring tasks, add multiple related files to the chat to ensure the AI understands the full context of your codebase.</span>
          </p>
        </div>
      </div>
    </div>
  )
} 