import { GitHubEmbed } from "@/components/ui/github-embed"
import { Github, ExternalLink } from "lucide-react"

export default function RulesPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Rules
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          Rules help you customize how Cursor's AI interacts with your codebase. By defining specific guidelines, 
          coding standards, and project requirements, you ensure consistent and high-quality AI assistance.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Example Rule
        </h2>

        <p className="text-white/90 mb-6">
          Here's an example of a rule file that defines coding standards for a Next.js fullstack application:
        </p>

        <GitHubEmbed 
          title="Base Rules for Next.js App"
          src="https://github.com/ferdelamad/cursor-task-fullstack-blog-nextjs-supabase/blob/main/.cursor/rules/base.mdc"
        />

        <div className="mt-8 bg-violet-500/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <p className="flex items-center gap-4 text-white/90">
            <span className="text-violet-300 font-semibold whitespace-nowrap">💡 Pro Tip:</span>
            You can use @file to reference multiple rule files, allowing you to chain multiple rules together
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Project Rules
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Configuration</h3>
            <p className="text-white/80 mb-4">
              Project rules are stored in the .cursor/rules directory, providing granular control through path-specific configurations.
              These rules are version-controlled, making them easy to share and maintain across your team.
            </p>
            <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
              <p className="flex gap-2">
                <span className="text-violet-300 font-semibold">Create Rule:</span>
                <span className="text-white/70">{`Cmd + Shift + P > New Cursor Rule`}</span>
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Key Features</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Semantic Descriptions for rule application context
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                File Pattern Matching using glob patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Automatic Attachment for matching files
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Reference files using @file in rules
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Common Use Cases</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Framework-specific rules for certain file types
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Special handling for auto-generated files
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Custom UI development patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                Code style and architecture preferences
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Global Rules
        </h2>

        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm">
          <p className="text-white/80 mb-4">
            {`Global rules can be configured under Cursor Settings > General > Rules for AI, applying across all projects.
            These are ideal for consistent preferences like output language and response length.`}
          </p>
          <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
            <p className="flex gap-2">
              <span className="text-violet-300 font-semibold">Location:</span>
              <span className="text-white/70">{`Cursor Settings > General > Rules for AI`}</span>
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Resources
        </h2>

        <p className="text-white/90 mb-6">
          On the following websites you can find curated lists of cursor rules or tools to generate them:
        </p>

        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Awesome Cursor Rules</h3>
            <p className="text-white/80 mb-3">
              A curated list of awesome cursor rules files for enhancing your Cursor AI experience.
            </p>
            <a 
              href="https://github.com/PatrickJS/awesome-cursorrules"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Repository</span>
            </a>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Cursor Directory</h3>
            <p className="text-white/80 mb-3">
              Extensive cursor rules bank and rules generator.
            </p>
            <a 
              href="https://cursor.directory"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Visit Website</span>
            </a>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-2">Cursor Rules CLI</h3>
            <p className="text-white/80 mb-3">
              A command-line tool to find and install the right Cursor rules for your project.
            </p>
            <a 
              href="https://github.com/sanjeed5/awesome-cursor-rules-mdc/tree/main/cursor-rules-cli#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Documentation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 