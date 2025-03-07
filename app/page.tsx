import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
        Welcome to Learn Cursor
      </h1>
      <p className="text-xl text-white/70 mb-8 leading-relaxed">
        Master the next-generation AI-powered code editor and supercharge your
        development workflow with our comprehensive guide.
      </p>
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white"
        asChild
      >
        <Link href="/what-is-cursor">Start Learning →</Link>
      </Button>
    </div>
  )
}
