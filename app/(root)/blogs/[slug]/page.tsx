import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, MessageSquare, Bookmark, Heart } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RelatedPosts } from "@/components/blog/related-posts"
import { CommentSection } from "@/components/blog/comment-section"
import { AuthorCard } from "@/components/blog/author-card"
import { ShareButtons } from "@/components/blog/share-buttons"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { posts } from "@/lib/blog-data"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </div>

      {/* Hero image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-32 relative">
          {/* Main content */}
          <div className="lg:col-span-8 bg-background rounded-t-lg shadow-lg p-6 md:p-10">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
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

            <div className="flex items-center gap-4 mb-8">
              <Avatar>
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
              <p className="lead">{post.excerpt}</p>

              <p>
                In today&apos;s digital landscape, creating engaging content is more important than ever. Brands and creators
                alike are competing for attention in an increasingly crowded space, making it essential to develop
                strategies that not only attract but retain audience interest.
              </p>

              <h2>Understanding Your Audience</h2>
              <p>
                The foundation of any successful content strategy begins with a deep understanding of your target
                audience. What are their pain points? What questions are they asking? What type of content do they
                prefer to consume?
              </p>

              <p>
                By developing detailed audience personas and regularly analyzing engagement metrics, you can refine your
                approach to create content that resonates on a personal level.
              </p>

              <h2>Crafting Compelling Narratives</h2>
              <p>
                Humans are naturally drawn to stories. By incorporating storytelling elements into your content, you
                create an emotional connection that facts and figures alone cannot achieve.
              </p>

              <blockquote>
              &quot;The most powerful person in the world is the storyteller. The storyteller sets the vision, values, and
                agenda of an entire generation that is to come.&quot; — Steve Jobs
              </blockquote>

              <h2>Embracing Visual Content</h2>
              <p>
                Visual content is processed 60,000 times faster than text by the human brain. Incorporating high-quality
                images, infographics, and videos can significantly increase engagement and retention rates.
              </p>

              <h2>Consistency is Key</h2>
              <p>
                Establishing a consistent publishing schedule helps build anticipation and trust with your audience.
                Whether you&apos;re posting daily, weekly, or monthly, maintaining consistency signals reliability and
                professionalism.
              </p>

              <h2>Conclusion</h2>
              <p>
                Creating engaging content is both an art and a science. By understanding your audience, telling
                compelling stories, leveraging visual elements, and maintaining consistency, you can develop a content
                strategy that not only attracts attention but builds lasting relationships with your audience.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
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
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <TableOfContents />
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-medium mb-4">Related Posts</h3>
                <RelatedPosts currentPostId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
