export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  likes: number;
  replies?: {
    id: number;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    content: string;
    likes: number;
  }[];
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  readingTime: number;
  commentCount: number;
  likes: number;
  comments: Comment[];
}
