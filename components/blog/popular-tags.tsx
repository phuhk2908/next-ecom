"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tags = [
  { name: "Design", count: 24 },
  { name: "UX", count: 18 },
  { name: "JavaScript", count: 32 },
  { name: "React", count: 27 },
  { name: "CSS", count: 15 },
  { name: "Productivity", count: 12 },
  { name: "Career", count: 9 },
  { name: "AI", count: 21 },
  { name: "Web Development", count: 36 },
  { name: "Mobile", count: 14 },
]

export function PopularTags() {
  return (
    <div className="bg-muted rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link key={tag.name} href={`/tags/${tag.name.toLowerCase()}`}>
            <Badge variant="secondary" className="px-3 py-1 hover:bg-secondary/80 transition-colors">
              {tag.name}
              <span className="ml-1 text-xs text-muted-foreground">({tag.count})</span>
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}
