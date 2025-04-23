"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredPosts } from "@/seed";

export function BlogHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const post = featuredPosts[currentIndex];

  // Auto-rotate featured posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
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
      <div className="container relative z-10 flex h-full items-end px-4 pb-16 md:pb-24">
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mb-6 line-clamp-2 text-lg text-gray-200 md:text-xl">
            {post.excerpt}
          </p>
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
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
