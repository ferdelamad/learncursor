"use client"

import { useEffect, useState } from "react"
import { Github } from "lucide-react"

interface GitHubEmbedProps {
  src: string
  title: string
}

export const GitHubEmbed = ({ src, title }: GitHubEmbedProps) => {
  const [content, setContent] = useState(`Loading ${title}...`)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const rawUrl = src
          .replace('github.com', 'raw.githubusercontent.com')
          .replace('/blob/', '/')
        
        const response = await fetch(rawUrl)
        const text = await response.text()
        setContent(text)
      } catch (error) {
        setContent(`Error loading content. Please try again later. ${error}`)
      }
    }

    fetchContent()
  }, [src])

  return (
    <div className="relative bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm border border-white/[0.05] -mx-6 sm:mx-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-violet-300">{title}</h3>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          <Github className="h-4 w-4" />
          <span>View on GitHub</span>
        </a>
      </div>
      <div className="relative rounded-lg overflow-hidden bg-[#0d1117]">
        <iframe
          src={`https://carbon.now.sh/embed?bg=rgba%2813%2C17%2C23%2C1%29&t=night-owl&wt=none&l=markdown&width=880&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=${encodeURIComponent(
            content
          )}`}
          className="w-full h-[600px] border-0 -mx-4 sm:mx-0"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
    </div>
  )
} 