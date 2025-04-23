import Link from "next/link";
import { Twitter, Linkedin, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Author } from "@/types/blog";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg bg-muted/50 p-6 sm:flex-row sm:items-start">
      <Avatar className="h-24 w-24">
        <AvatarImage
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
        />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold">{author.name}</h3>
        <p className="mb-3 text-muted-foreground">{author.role}</p>
        <p className="mb-4">{author.bio}</p>

        <div className="flex justify-center gap-3 sm:justify-start">
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
  );
}
