export default function TabFeaturesPage() {
  return (
    <div className="max-w-3xl mx-auto py-4 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Tab Features
      </h1>
      <div className="prose prose-invert max-w-none prose-base md:prose-lg">
        <p className="text-white/90 leading-relaxed mb-4 md:mb-8 bg-white/[0.03] rounded-xl p-4 md:p-6 backdrop-blur-sm">
          Cursor provides powerful tab management features that help you organize
          your workspace efficiently and boost your productivity through intelligent suggestions and automation.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Core Capabilities
        </h2>
        
        <div className="space-y-4 md:space-y-6">
          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-4 md:p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Code Completion</h3>
            <ul className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Suggests code completions based on your current context
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Activates as you type
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Press Tab to accept suggestions
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-4 md:p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Multi-line Editing</h3>
            <ul className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Suggests multiple line changes at once
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Handles related code blocks together
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Maintains code consistency across changes
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-4 md:p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Smart Cursor Positioning</h3>
            <ul className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Predicts your next editing location
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Automatically moves cursor to logical next position
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Helps maintain coding flow
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-4 md:p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Watch a Demo</h3>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/kn7MkSNJ4yI?vq=hd1080"
                title="Code Completion Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/60 text-center">
              Watch a demo of code completion in action
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 