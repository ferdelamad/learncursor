export default function ComposerPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Agent / Composer (⌘I)
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          The Composer is a powerful AI agent that enables comprehensive code generation and management across multiple files. 
          It serves as your collaborative coding partner, capable of handling complex development tasks while keeping you in control.
        </p>

        <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
          <p className="flex gap-2">
            <span className="text-violet-300 font-semibold">Shortcuts:</span>
            <span className="text-white/70">⌘I to open Composer, ⌘N for new conversation</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Multi-file Editing</h3>
            <p className="text-white/80 mb-4">
              Simultaneously manage multiple files with intelligent context awareness and coordinated changes across your codebase.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Create a new React component with its corresponding test and style files"</span>
              </p>
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Generates component.tsx, component.test.tsx, and component.css files</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Full App Generation</h3>
            <p className="text-white/80 mb-4">
              Generate complete applications with proper architecture, routing, and component structure based on your requirements.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Create a Next.js dashboard with authentication and user management"</span>
              </p>
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Generates full application structure with necessary components and configurations</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Context-Aware Coding</h3>
            <p className="text-white/80 mb-4">
              Leverages project context to provide relevant suggestions and maintain consistency with existing code patterns.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Add a new feature following our existing architecture patterns"</span>
              </p>
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Generates code that matches project structure and coding conventions</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Preview and Control</h3>
            <p className="text-white/80 mb-4">
              Review and modify AI-generated changes before applying them to your codebase, maintaining full control over the development process.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Preview changes before applying them to the project"</span>
              </p>
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Shows diff view of proposed changes for review and modification</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            Use clear, detailed prompts to get the most accurate and useful code generation. The more context you provide, the better the results.
          </p>
        </div>
      </div>
    </div>
  )
} 