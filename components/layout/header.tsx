import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="px-4 md:px-6 py-3 md:py-4 sticky top-0 z-10 bg-[#0a0a1b]/80 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Learn Cursor
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white/70 hover:text-white rounded-xl text-sm sm:text-base hidden sm:inline-flex" 
            asChild
          >
            <Link href="https://cursor.com" target="_blank">
              Official Website
            </Link>
          </Button>
          <Button 
            className="bg-violet-600/80 hover:bg-violet-600 text-white rounded-xl text-sm sm:text-base"
            size="sm" 
            asChild
          >
            <Link href="https://cursor.com/downloads" target="_blank">
              Download
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 