"use client"

import { Twitter, Facebook, Linkedin, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function ShareButtons() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      description: "Link copied to clipboard",
    })
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" onClick={handleCopyLink} aria-label="Copy link">
        <Link className="h-4 w-4" />
      </Button>
    </div>
  )
}
