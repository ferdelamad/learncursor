import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="px-4 md:px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center">
        <Link href="/" className="flex items-center gap-3 mb-3 sm:mb-0 sm:mr-8">
          <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Learn Cursor
          </span>
        </Link>
        <div className="flex-1" />
        <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white/70 hover:text-white rounded-xl text-sm sm:text-base" 
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
              Download Cursor
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 