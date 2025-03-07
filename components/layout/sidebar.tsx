"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 border-r border-white/5 bg-black/20">
      <ScrollArea className="h-full py-6">
        <div className="px-4 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="font-medium text-xs text-blue-400/80 uppercase tracking-wider px-2">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Separator className="opacity-5 my-4" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 