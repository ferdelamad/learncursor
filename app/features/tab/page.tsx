export default function TabFeaturesPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Tab Features
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/80 leading-relaxed mb-8">
          Cursor provides powerful tab management features that help you organize
          your workspace efficiently and boost your productivity through intelligent suggestions and automation.
        </p>
        <p className="text-white/80 leading-relaxed mb-6">
          The Tab key in Cursor provides three core functionalities:
        </p>
        <div className="space-y-6">
          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Code Completion</h3>
            <ul className="space-y-2 text-white/70">
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

          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Multi-line Editing</h3>
            <ul className="space-y-2 text-white/70">
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

          <div className="rounded-xl bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Smart Cursor Positioning</h3>
            <ul className="space-y-2 text-white/70">
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
        </div>
      </div>
    </div>
  )
} 