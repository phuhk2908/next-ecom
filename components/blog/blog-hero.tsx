"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featuredPosts } from "@/lib/blog-data"

export function BlogHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const post = featuredPosts[currentIndex]

  // Auto-rotate featured posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background image with overlay */}
      <Image
        src={post.coverImage || "/placeholder.svg"}
        alt={post.title}
        fill
        className="object-cover brightness-[0.7] transition-all duration-1000"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="container px-4 h-full flex items-end pb-16 md:pb-24 relative z-10">
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{post.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-4">
            <Link href={`/blogs/${post.slug}`}>
              <Button size="lg" className="gap-2">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <div className="text-white">
              <div className="text-sm opacity-80">{post.date}</div>
              <div>{post.readingTime} min read</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
