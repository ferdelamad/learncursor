"use client"

import { useState } from "react"
import { Button } from "./button"
import { ChevronDown, ChevronUp, Github } from "lucide-react"

interface CollapsibleCardProps {
  title: string
  preview: string
  content: string
  githubUrl?: string
}

export const CollapsibleCard = ({ title, preview, content, githubUrl }: CollapsibleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm border border-white/[0.05] hover:border-violet-500/20 transition-colors">
      <h3 className="text-xl font-semibold text-violet-300 mb-3">{title}</h3>
      <div className="prose prose-invert max-w-none">
        <div className={`relative bg-white/[0.02] rounded-lg p-4 ${!isExpanded ? "max-h-[200px] overflow-hidden" : ""}`}>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#12122a] to-transparent" />
          )}
          <div className="text-white/80 whitespace-pre-wrap font-mono text-sm">
            {isExpanded ? content : preview}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button
            variant="ghost"
            className="text-violet-400 hover:text-violet-300 hover:bg-white/[0.02]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="mr-2">
              {isExpanded ? "Show Less" : "Show More"}
            </span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 