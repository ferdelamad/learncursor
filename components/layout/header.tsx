import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="px-6 py-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3 mr-8">
          <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Learn Cursor
          </span>
        </Link>
        <div className="flex-1" />
        <nav className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white rounded-xl" 
            asChild
          >
            <Link href="https://cursor.sh" target="_blank">
              Official Website
            </Link>
          </Button>
          <Button 
            className="bg-violet-600/80 hover:bg-violet-600 text-white rounded-xl" 
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