import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageSquare,
  Bookmark,
  Heart,
  TableOfContents,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { AuthorCard } from "../_components/author-card";
import { CommentSection } from "../_components/comment-section";
import { RelatedPosts } from "../_components/related-posts";
import { ShareButtons } from "../_components/share-buttons";
import { posts } from "@/seed";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-32 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="rounded-t-lg bg-background p-6 shadow-lg md:p-10 lg:col-span-8">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>{post.commentCount} comments</span>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="prose prose-lg mb-10 max-w-none dark:prose-invert">
              <p className="lead">{post.excerpt}</p>

              <p>
                In today&apos;s digital landscape, creating engaging content is
                more important than ever. Brands and creators alike are
                competing for attention in an increasingly crowded space, making
                it essential to develop strategies that not only attract but
                retain audience interest.
              </p>

              <h2>Understanding Your Audience</h2>
              <p>
                The foundation of any successful content strategy begins with a
                deep understanding of your target audience. What are their pain
                points? What questions are they asking? What type of content do
                they prefer to consume?
              </p>

              <p>
                By developing detailed audience personas and regularly analyzing
                engagement metrics, you can refine your approach to create
                content that resonates on a personal level.
              </p>

              <h2>Crafting Compelling Narratives</h2>
              <p>
                Humans are naturally drawn to stories. By incorporating
                storytelling elements into your content, you create an emotional
                connection that facts and figures alone cannot achieve.
              </p>

              <blockquote>
                &quot;The most powerful person in the world is the storyteller.
                The storyteller sets the vision, values, and agenda of an entire
                generation that is to come.&quot; — Steve Jobs
              </blockquote>

              <h2>Embracing Visual Content</h2>
              <p>
                Visual content is processed 60,000 times faster than text by the
                human brain. Incorporating high-quality images, infographics,
                and videos can significantly increase engagement and retention
                rates.
              </p>

              <h2>Consistency is Key</h2>
              <p>
                Establishing a consistent publishing schedule helps build
                anticipation and trust with your audience. Whether you&apos;re
                posting daily, weekly, or monthly, maintaining consistency
                signals reliability and professionalism.
              </p>

              <h2>Conclusion</h2>
              <p>
                Creating engaging content is both an art and a science. By
                understanding your audience, telling compelling stories,
                leveraging visual elements, and maintaining consistency, you can
                develop a content strategy that not only attracts attention but
                builds lasting relationships with your audience.
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </div>
              <ShareButtons />
            </div>

            <Separator className="my-10" />

            <AuthorCard author={post.author} />

            <Separator className="my-10" />

            <CommentSection comments={post.comments} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-4">
            <div className="sticky top-36">
              <TableOfContents />
              <div className="mt-8 rounded-lg bg-muted p-6">
                <h3 className="mb-4 font-medium">Related Posts</h3>
                <RelatedPosts currentPostId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
