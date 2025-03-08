export default function TerminalPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Terminal
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
        The Terminal in Cursor combines traditional command-line functionality with AI assistance, transforming it into an intelligent interface for managing your development workflow.
        </p>

          <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
            <p className="flex gap-2">
              <span className="text-violet-300 font-semibold">Chat Shortcut:</span>
              <span className="text-white/70">Press ⌘K to toggle the chat interface in the terminal</span>
            </p>
          </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Natural Language Commands</h3>
            <p className="text-white/80 mb-4">
              Convert plain English descriptions into actual terminal commands without memorizing complex syntax.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">&quot;Find all files modified in the last 24 hours&quot; → Generates the appropriate find command</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Environment Management</h3>
            <p className="text-white/80 mb-4">
              Handle package installations, virtual environments, and file operations through simple commands.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">Install npm packages, manage node versions, create React components</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Git Operations</h3>
            <p className="text-white/80 mb-4">
              Simplify complex git workflows using natural language without memorizing specific commands.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Undo my last commit but keep the changes" → Generates the correct git reset command</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            Use the terminal's AI Chat for complex file operations or when you can't remember specific command flags and options.
          </p>
        </div>
      </div>
    </div>
  )
} 