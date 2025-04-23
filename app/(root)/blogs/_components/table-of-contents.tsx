"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const tableOfContents = [
  { id: "understanding-your-audience", title: "Understanding Your Audience", level: 2 },
  { id: "crafting-compelling-narratives", title: "Crafting Compelling Narratives", level: 2 },
  { id: "embracing-visual-content", title: "Embracing Visual Content", level: 2 },
  { id: "consistency-is-key", title: "Consistency is Key", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 },
]

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      tableOfContents.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="bg-muted rounded-lg p-6">
      <h3 className="font-medium mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tableOfContents.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "text-sm hover:text-primary transition-colors block py-1",
                  activeId === item.id ? "text-primary font-medium" : "text-muted-foreground",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
