export default function WhatIsCursorPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        What is Cursor?
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/80 leading-relaxed">
        Cursor is a full-fledged AI-powered code editor designed to integrate artificial intelligence directly into the development workflow. Built as a fork of VS Code, it maintains compatibility with the VS Code ecosystem while adding specialized AI capabilities for code generation, analysis, and assistance.

        The editor combines local development features with cloud-based AI processing, allowing developers to interact with their codebase through both traditional programming interfaces and natural language commands. This hybrid approach enables developers to leverage AI assistance while maintaining full control over their development environment.
        </p>
        <h2 className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          What Cursor is NOT
        </h2>
        
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-violet-300">Not an Extension</p>
            <p>Cursor is a standalone IDE, unlike GitHub Copilot which functions as a plugin for existing editors.</p>
          </div>

          <div>
            <p className="font-semibold text-violet-300">Not Autonomous</p>
            <p>Cursor is a development tool that assists with coding tasks. It requires developer oversight and expertise to produce optimal results.</p>
          </div>

          <div>
            <p className="font-semibold text-violet-300">Technical Limitations</p>
            <ul className="list-disc pl-6">
              <li>May require adjustments to generated code</li>
              <li>Complex bug detection accuracy varies</li>
              <li>Performance depends on project size and complexity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 