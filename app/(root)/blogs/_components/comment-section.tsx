"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Reply } from "lucide-react"
import type { Comment } from "@/lib/blog-data"

interface CommentSectionProps {
  comments: Comment[]
}

export function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setNewComment("")
    setIsSubmitting(false)
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h3>

      <form onSubmit={handleSubmit} className="mb-10">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e: any) => setNewComment(e.target.value)}
          className="mb-3 min-h-[100px]"
        />
        <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{comment.author.name}</div>
                    <div className="text-sm text-muted-foreground">{comment.date}</div>
                  </div>
                </div>

                <div className="mt-2">{comment.content}</div>

                <div className="flex gap-4 mt-2">
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    <Reply className="h-4 w-4" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>

            {/* Nested replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                      <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{reply.author.name}</div>
                          <div className="text-sm text-muted-foreground">{reply.date}</div>
                        </div>
                      </div>

                      <div className="mt-2">{reply.content}</div>

                      <div className="flex gap-4 mt-2">
                        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                          <Heart className="h-4 w-4" />
                          <span>{reply.likes}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
