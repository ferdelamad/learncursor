import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="border-b border-white/5 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/10">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-3 mr-8">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Learn Cursor
          </span>
        </Link>
        <div className="flex-1" />
        <nav className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/5" 
            asChild
          >
            <Link href="https://cursor.sh" target="_blank">
              Official Website
            </Link>
          </Button>
          <Button 
            className="bg-blue-600/90 hover:bg-blue-600 text-white" 
            asChild
          >
            <Link href="https://cursor.sh/download" target="_blank">
              Download Cursor
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 