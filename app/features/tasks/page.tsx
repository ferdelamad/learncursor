import { CollapsibleCard } from "@/components/ui/collapsible-card"

const taskPromptPreview = `Create a structured development roadmap for [TASK NAME] using Cursor's Task format. Follow the KISS principle (Keep It Simple, Stupid) to ensure clarity and focus.

## Task Details
- **Task description**: [DESCRIPTION OF YOUR TASK]
- **Technologies**: [LIST KEY TECHNOLOGIES/FRAMEWORKS]
- **Main goals**: [LIST 2-3 PRIMARY OBJECTIVES]

## Structure
Divide the development into [NUMBER] sequential phases...`

const taskPromptContent = `Create a structured development roadmap for [TASK NAME] using Cursor's Task format. Follow the KISS principle (Keep It Simple, Stupid) to ensure clarity and focus.

## Task Details
- **Task description**: [DESCRIPTION OF YOUR TASK]
- **Technologies**: [LIST KEY TECHNOLOGIES/FRAMEWORKS]
- **Main goals**: [LIST 2-3 PRIMARY OBJECTIVES]

## Structure
Divide the development into [NUMBER] sequential phases. For Phase 1, focus on [INITIAL PHASE FOCUS].

For each phase, include:
1. A brief introduction explaining the phase's purpose and goals (2-3 sentences)
2. 3-5 main tasks with clearly defined goals
3. Relevant subtasks under each main task

## Task Format Requirements
- Use Cursor's checkbox format:
  - Main tasks: \`1. [ ] **Task Name**\`
  - Subtasks: \`   - [ ] Subtask description\`
- For each main task:
  - Add priority tag: \`[CRITICAL]\`, \`[HIGH]\`, \`[MEDIUM]\`, or \`[LOW]\`
  - Include "Done when:" success criteria at the end of each main task
- Include any critical dependencies between tasks
- Avoid code snippets; focus on clear action items
- Keep task descriptions concise (max 1-2 lines per item)

## Example Format
\`\`\`markdown
# Phase 1: [Phase Name]

Brief introduction explaining this phase's purpose and what we're trying to accomplish.

## Tasks

1. [ ] **[CRITICAL] Set up project repository and basic structure**
   - [ ] Initialize Git repository
   - [ ] Create README with project overview
   - [ ] Set up basic directory structure
   - [ ] Configure essential dotfiles
   - Done when: Repository is created with initial commit and proper documentation

2. [ ] **[HIGH] Configure development environment**
   - [ ] Install dependencies
   - [ ] Set up linting and formatting
   - Done when: Developers can run the project locally with proper tooling
\`\`\``

export default function TasksPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Tasks
      </h1>
      <div className="prose prose-invert max-w-none prose-lg">
        <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
          Tasks is a powerful concept that helps you break down complex development work into structured, AI-friendly steps. 
          By creating a detailed task list, you enable the AI to tackle your projects methodically and accurately.
        </p>

        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">Key Benefits</h3>
            <ul className="list-none space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                <span>
                  <strong className="text-violet-300">Improved Accuracy & Efficiency:</strong> Break complex problems into smaller, more manageable steps that can be addressed one at a time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                <span>
                  <strong className="text-violet-300">Enhanced Debugging:</strong> Isolate issues to specific steps rather than debugging an entire solution at once, with the ability to add test specifications for each step
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                <span>
                  <strong className="text-violet-300">Progress Tracking:</strong> Maintain clear organization and visibility into your project's advancement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400/60">•</span>
                <span>
                  <strong className="text-violet-300">Adaptability:</strong> Make decisions at strategic points and update subsequent steps as needed
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold text-violet-300 mb-3">How It Works</h3>
            <p className="text-white/80">
              The AI agent can mark tasks and subtasks as completed, providing natural stopping points for you to review changes before continuing to the next step.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Cursor Task Creation Prompt
        </h2>

        <p className="text-white/90 mb-6">
          You can use a prompt similar to this to get an LLM to create your cursor task:
        </p>

        <CollapsibleCard
          title="Task Creation Template"
          preview={taskPromptPreview}
          content={taskPromptContent}
        />
      </div>
    </div>
  )
} 