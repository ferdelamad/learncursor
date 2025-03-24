"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Section {
  title: string
  items: {
    title: string
    href: string
  }[]
}

const sections: Section[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "What is Cursor?",
        href: "/what-is-cursor",
      },
      {
        title: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Tab Features",
        href: "/features/tab",
      },
      {
        title: "Inline Chat",
        href: "/features/inline-chat",
      },
      {
        title: "Side Chat",
        href: "/features/side-chat",
      },
      {
        title: "Terminal",
        href: "/features/terminal",
      },
      {
        title: "Context",
        href: "/features/context",
      },
      {
        title: "@ Symbols",
        href: "/features/at-symbols",
      },
      {
        title: "Rules",
        href: "/features/rules",
      },
      {
        title: "Tasks",
        href: "/features/tasks",
      },
      {
        title: "Agent / Composer",
        href: "/features/composer",
      },
      {
        title: "MCP",
        href: "/features/mcp",
      }
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="w-full md:w-72">
      {/* Mobile Toggle Button */}
      <div className="flex justify-between items-center md:hidden bg-[#12122a]/70 backdrop-blur-xl p-3 rounded-xl shadow-sm">
        <div className="flex items-center">
          <h3 className="font-medium text-sm text-violet-300">Navigation</h3>
          {isOpen && <span className="ml-2 text-xs text-violet-300/50">(tap item to close)</span>}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-1.5 hover:bg-violet-500/10 text-violet-300" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar Content - Hidden on mobile when closed */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-2 rounded-xl bg-[#12122a]/70 backdrop-blur-xl shadow-sm`}>
        <ScrollArea className="h-full max-h-[75vh] md:max-h-full">
          <div className="p-4">
            {sections.map((section) => (
              <div key={section.title} className="mb-6 last:mb-0">
                <h4 className="font-medium text-xs text-violet-300/50 uppercase tracking-wider px-2 mb-3">
                  {section.title}
                </h4>
                <div className="grid grid-cols-1 gap-0.5 md:space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-violet-500/[0.08] text-violet-300"
                          : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                      }`}
                      onClick={() => setIsOpen(false)} 
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 