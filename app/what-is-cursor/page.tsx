export default function WhatIsCursorPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        What is Cursor?
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          Cursor is a full-fledged AI-powered code editor designed to integrate artificial intelligence directly into the development workflow. Built as a fork of VS Code, it maintains compatibility with the VS Code ecosystem while adding specialized AI capabilities for code generation, analysis, and assistance.
          <br />
          <br />
          The editor combines local development features with cloud-based AI processing, allowing developers to interact with their codebase through both traditional programming interfaces and natural language commands. This hybrid approach enables developers to leverage AI assistance while maintaining full control over their development environment.
        </p>
        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          What Cursor is NOT
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <p className="font-semibold text-violet-300 mb-2">Not an Extension</p>
            <p className="text-white/80">Cursor is a standalone IDE, unlike GitHub Copilot which functions as a plugin for existing editors.</p>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <p className="font-semibold text-violet-300 mb-2">Not Autonomous</p>
            <p className="text-white/80">Cursor is a development tool that assists with coding tasks. It requires developer oversight and expertise to produce optimal results.</p>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <p className="font-semibold text-violet-300 mb-2">Technical Limitations</p>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                May require adjustments to generated code
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Complex bug detection accuracy varies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Performance depends on project size and complexity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 