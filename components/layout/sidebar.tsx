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
      {
        title: "Inline Chat",
        href: "/features/inline-chat",
      },
      {
        title: "Side Chat",
        href: "/features/side-chat",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 rounded-2xl bg-[#12122a]/60 backdrop-blur-xl">
      <ScrollArea className="h-full">
        <div className="p-4">
          {sections.map((section) => (
            <div key={section.title} className="mb-6 last:mb-0">
              <h4 className="font-medium text-xs text-violet-300/50 uppercase tracking-wider px-2 mb-3">
                {section.title}
              </h4>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-violet-500/[0.08] text-violet-300"
                        : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                    }`}
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
  )
} 