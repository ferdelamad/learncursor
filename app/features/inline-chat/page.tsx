export default function InlineChatPage() {
  return (
    <div className="max-w-3xl mx-auto py-4 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Inline Chat (⌘K)
      </h1>
      <div className="prose prose-invert max-w-none prose-base md:prose-lg">
        <p className="text-white/90 leading-relaxed mb-4 md:mb-8 bg-white/[0.03] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          Inline Chat is an integrated feature that enables direct code manipulation and assistance without leaving your editor. 
          Access it using the ⌘K shortcut to maintain your coding flow.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Code Generation</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Creates code snippets and functions based on natural language descriptions, helping you quickly implement new features.
            </p>
            <div className="bg-white/[0.02] rounded-xl p-3 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/rCZtfWNv1kc?vq=hd1080"
                  title="Inline Chat Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/60 text-center">
                Watch a demo of Inline Chat in action
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Code Refactoring</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Transforms existing code to improve structure and readability while preserving its functionality.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-3 md:p-4 space-y-2">
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Convert this function to use useCallback"</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Refactors selected code while maintaining functionality</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Code Explanation</h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Provides clear, contextual explanations of code blocks to help understand complex implementations.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-3 md:p-4 space-y-2">
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Example:</span>
                <span className="text-white/70">"Explain how this code block works"</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                <span className="text-violet-300 font-semibold">Action:</span>
                <span className="text-white/70">Provides detailed explanation of selected code</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          How to Use
        </h2>
        
        <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <ol className="list-none space-y-2 md:space-y-3 text-white/80 text-sm md:text-base">
            {[
              "Select code or position cursor in desired location",
              "Press ⌘K to open Inline Chat",
              "Type your request in natural language",
              "Press Enter to execute"
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <span className="flex h-5 md:h-6 w-5 md:w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-300 text-xs md:text-sm">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-4 bg-violet-500/[0.08] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <p className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 text-white/90 text-sm md:text-base">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            <span>Press the Esc key at any time to exit the Chat interface and return to the terminal.</span>
          </p>
        </div>
      </div>
    </div>
  )
} 