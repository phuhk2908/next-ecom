"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <div className="bg-muted rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
      <p className="text-muted-foreground mb-4">Get the latest posts delivered right to your inbox</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full gap-2" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
          <Send className="h-4 w-4" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-3">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
