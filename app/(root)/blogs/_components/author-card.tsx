import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Author } from "@/lib/blog-data"

interface AuthorCardProps {
  author: Author
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-muted/50 rounded-lg p-6">
      <Avatar className="h-24 w-24">
        <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold">{author.name}</h3>
        <p className="text-muted-foreground mb-3">{author.role}</p>
        <p className="mb-4">{author.bio}</p>

        <div className="flex gap-3 justify-center sm:justify-start">
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.twitter || "#"}>
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.linkedin || "#"}>
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={author.website || "#"}>
              <Globe className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
