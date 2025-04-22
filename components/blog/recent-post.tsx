"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { posts } from "@/lib/blog-data"

export function RecentPosts() {
  const [visiblePosts, setVisiblePosts] = useState(4)

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, posts.length))
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
      </div>

      <div className="space-y-10">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <Link href={`/blogs/${post.slug}`} className="block relative h-60 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <Badge variant="outline" className="mb-2">
                {post.category}
              </Badge>
              <Link href={`/blogs/${post.slug}`}>
                <h3 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{post.commentCount} comments</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-10">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      )}
    </section>
  )
}
