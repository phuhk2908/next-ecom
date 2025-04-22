import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { posts } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentPostId: number
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // Get 3 related posts (excluding current post)
  const relatedPosts = posts.filter((post) => post.id !== currentPostId).slice(0, 3)

  return (
    <div className="space-y-4">
      {relatedPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h4>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {post.readingTime} min read
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
