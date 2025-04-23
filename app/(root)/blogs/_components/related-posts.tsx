import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { posts } from "@/seed";

interface RelatedPostsProps {
  currentPostId: number;
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // Get 3 related posts (excluding current post)
  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <div className="space-y-4">
      {relatedPosts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group flex gap-3"
        >
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="line-clamp-2 text-sm font-medium transition-colors group-hover:text-primary">
              {post.title}
            </h4>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {post.readingTime} min read
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
