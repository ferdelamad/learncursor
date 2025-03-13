export default function AtSymbolsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        @Symbols
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          Symbols provide quick access to various resources and contexts within Cursor. Available in Composer, Chat, and Command-K interfaces, 
          they help you reference specific files, folders, code snippets, and more through an intuitive suggestion system.
        </p>

        <div className="bg-white/[0.03] rounded-lg p-4 space-y-2 mb-8">
          <p className="flex gap-2">
            <span className="text-violet-300 font-semibold">Usage:</span>
            <span className="text-white/70">Type @ to open the suggestion menu, then use arrow keys to navigate and Enter to select</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Available Symbols
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Project References</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Files</span> - Reference specific files in your project
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Folders</span> - Reference entire folders for broader context
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Code</span> - Reference specific code snippets or symbols
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Documentation & Resources</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Docs</span> - Access documentation and guides
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Web</span> - Reference external web resources
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Link</span> - Create links to specific code or documentation
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Development Tools</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Git</span> - Access git history and changes
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Notepads</span> - Access notepads
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Recent Changes</span> - View recent code modifications
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Special Contexts</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Codebase</span> - Reference entire codebase (Chat only)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Lint Errors</span> - Reference lint errors (Chat only)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-violet-400/60">@Definitions</span> - Look up symbol definitions (Cmd K only)
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Additional Symbols
        </h2>

        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm">
          <ul className="list-none space-y-3 text-white/80">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-violet-400/60">#Files</span> - Add files to the context without referencing
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-violet-400/60">/Commands</span> - Add open and active files to the context
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            Use multiple @ symbols in a single prompt to combine different contexts and get more accurate responses.
          </p>
        </div>
      </div>
    </div>
  )
} 