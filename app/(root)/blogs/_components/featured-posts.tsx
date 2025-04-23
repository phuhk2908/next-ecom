"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { featuredPosts } from "@/seed";

export function FeaturedPosts() {
  const [startIndex, setStartIndex] = useState(0);
  const visiblePosts = featuredPosts.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < featuredPosts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Posts</h2>
          <p className="mt-1 text-muted-foreground">
            Discover our most popular articles
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={startIndex + 3 >= featuredPosts.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visiblePosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/blogs/${post.slug}`} className="group block">
              <div className="relative mb-4 h-60 overflow-hidden rounded-lg">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute left-4 top-4">{post.category}</Badge>
              </div>
              <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                  />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-muted-foreground">{post.date}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
