import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-6 md:py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Welcome to Learn Cursor
      </h1>
      <p className="text-lg md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed">
        Learn how to effectively use Cursor, an intelligent code editor that enhances your development workflow through AI-powered features and VS Code familiarity. This guide covers core functionalities, keyboard shortcuts, and practical applications to help you write better code faster.
      </p>
      <Button 
        size="lg" 
        className="bg-violet-600/80 hover:bg-violet-600 text-white rounded-xl w-full sm:w-auto" 
        asChild
      >
        <Link href="/what-is-cursor">Start Learning →</Link>
      </Button>
    </div>
  )
}
