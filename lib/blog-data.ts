export interface Author {
    name: string
    role: string
    avatar: string
    bio: string
    twitter?: string
    linkedin?: string
    website?: string
  }
  
  export interface Comment {
    id: number
    author: {
      name: string
      avatar: string
    }
    date: string
    content: string
    likes: number
    replies?: {
      id: number
      author: {
        name: string
        avatar: string
      }
      date: string
      content: string
      likes: number
    }[]
  }
  
  export interface Post {
    id: number
    title: string
    slug: string
    excerpt: string
    content?: string
    coverImage: string
    date: string
    author: Author
    category: string
    tags: string[]
    readingTime: number
    commentCount: number
    likes: number
    comments: Comment[]
  }
  
  export const authors: Author[] = [
    {
      name: "Alex Morgan",
      role: "Content Strategist",
      avatar: "https://placehold.co/40x40?text=AM",
      bio: "Alex is a content strategist with over 8 years of experience in digital marketing and content creation. He specializes in creating engaging, value-driven content strategies for brands across various industries.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      avatar: "https://placehold.co/40x40?text=SJ",
      bio: "Sarah is a UX designer passionate about creating intuitive and accessible digital experiences. With a background in psychology, she brings a user-centered approach to every project.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    {
      name: "David Chen",
      role: "Tech Writer",
      avatar: "https://placehold.co/40x40?text=DC",
      bio: "David is a tech writer and developer with expertise in web technologies. He enjoys breaking down complex technical concepts into accessible content for developers of all skill levels.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  ]
  
  export const comments: Comment[] = [
    {
      id: 1,
      author: {
        name: "Jamie Smith",
        avatar: "https://placehold.co/40x40?text=JS",
      },
      date: "2 days ago",
      content:
        "This article was incredibly helpful! I've been struggling with creating engaging content for my business, and your tips about storytelling really resonated with me.",
      likes: 12,
      replies: [
        {
          id: 101,
          author: {
            name: "Alex Morgan",
            avatar: "https://placehold.co/40x40?text=AM",
          },
          date: "1 day ago",
          content:
            "Thanks for your kind words, Jamie! I'm glad you found the storytelling tips useful. Feel free to reach out if you have any specific questions!",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Taylor Wong",
        avatar: "https://placehold.co/40x40?text=TW",
      },
      date: "3 days ago",
      content:
        "I appreciate the section on visual content. As someone who works primarily with text, I've been hesitant to incorporate more visuals, but your statistics about processing speed are convincing!",
      likes: 8,
    },
    {
      id: 3,
      author: {
        name: "Jordan Lee",
        avatar: "https://placehold.co/40x40?text=JL",
      },
      date: "5 days ago",
      content:
        "Could you elaborate more on how to maintain consistency while still keeping content fresh and interesting? That's something I struggle with.",
      likes: 5,
      replies: [
        {
          id: 102,
          author: {
            name: "Riley Adams",
            avatar: "https://placehold.co/40x40?text=RA",
          },
          date: "4 days ago",
          content:
            "Not the author, but I've found that creating content pillars helps a lot with this. You can rotate through different topics within your niche while maintaining a consistent voice and quality.",
          likes: 7,
        },
        {
          id: 103,
          author: {
            name: "Alex Morgan",
            avatar: "https://placehold.co/40x40?text=AM",
          },
          date: "4 days ago",
          content:
            "Great question, Jordan! Riley's suggestion about content pillars is spot on. I'd also add that creating a content calendar can help you plan variety while maintaining a consistent schedule.",
          likes: 4,
        },
      ],
    },
  ]
  
  export const posts: Post[] = [
    {
      id: 1,
      title: "The Art of Creating Engaging Content in 2023",
      slug: "art-of-creating-engaging-content",
      excerpt:
        "Discover proven strategies to create content that captivates your audience and drives meaningful engagement in today's digital landscape.",
      coverImage: "https://placehold.co/600x1200?text=Engaging+Content",
      date: "June 12, 2023",
      author: authors[0],
      category: "Content Strategy",
      tags: ["Content Marketing", "Engagement", "Digital Strategy", "Storytelling"],
      readingTime: 8,
      commentCount: 12,
      likes: 45,
      comments: comments,
    },
    {
      id: 2,
      title: "Designing Intuitive User Interfaces: Principles and Practices",
      slug: "designing-intuitive-user-interfaces",
      excerpt:
        "Learn the fundamental principles behind creating user interfaces that feel natural and intuitive while delivering exceptional user experiences.",
      coverImage: "https://placehold.co/600x1200?text=UI+Design",
      date: "May 28, 2023",
      author: authors[1],
      category: "Design",
      tags: ["UI Design", "UX", "Design Principles", "Accessibility"],
      readingTime: 10,
      commentCount: 8,
      likes: 37,
      comments: [],
    },
    {
      id: 3,
      title: "The Future of JavaScript: What's Coming in 2024",
      slug: "future-of-javascript-2024",
      excerpt:
        "Explore upcoming features, improvements, and trends that will shape the JavaScript ecosystem in the coming year.",
      coverImage: "https://placehold.co/600x1200?text=JavaScript+Future",
      date: "June 5, 2023",
      author: authors[2],
      category: "Development",
      tags: ["JavaScript", "Web Development", "Programming", "Tech Trends"],
      readingTime: 12,
      commentCount: 15,
      likes: 52,
      comments: [],
    },
    {
      id: 4,
      title: "Building a Personal Brand as a Developer",
      slug: "building-personal-brand-developer",
      excerpt:
        "Discover strategies to establish your personal brand in the tech industry and stand out in a competitive job market.",
      coverImage: "https://placehold.co/600x1200?text=Personal+Branding",
      date: "May 20, 2023",
      author: authors[2],
      category: "Career",
      tags: ["Career Development", "Personal Branding", "Tech Industry", "Networking"],
      readingTime: 7,
      commentCount: 6,
      likes: 29,
      comments: [],
    },
    {
      id: 5,
      title: "Mastering Color Theory for Digital Design",
      slug: "mastering-color-theory-digital-design",
      excerpt:
        "Learn how to effectively use color in your digital designs to create visually appealing and psychologically impactful user experiences.",
      coverImage: "https://placehold.co/600x1200?text=Color+Theory",
      date: "June 8, 2023",
      author: authors[1],
      category: "Design",
      tags: ["Color Theory", "Visual Design", "UI Design", "Creativity"],
      readingTime: 9,
      commentCount: 10,
      likes: 41,
      comments: [],
    },
    {
      id: 6,
      title: "Content Distribution Strategies That Actually Work",
      slug: "content-distribution-strategies",
      excerpt:
        "Explore effective methods to distribute your content across multiple channels and maximize its reach and impact.",
      coverImage: "https://placehold.co/600x1200?text=Content+Distribution",
      date: "May 15, 2023",
      author: authors[0],
      category: "Marketing",
      tags: ["Content Marketing", "Distribution", "Social Media", "SEO"],
      readingTime: 11,
      commentCount: 9,
      likes: 33,
      comments: [],
    },
    {
      id: 7,
      title: "Accessibility First: Building Inclusive Web Applications",
      slug: "accessibility-first-inclusive-web-applications",
      excerpt:
        "Discover why and how to prioritize accessibility in your web development process to create truly inclusive digital experiences.",
      coverImage: "https://placehold.co/600x1200?text=Web+Accessibility",
      date: "June 1, 2023",
      author: authors[1],
      category: "Development",
      tags: ["Accessibility", "Web Development", "Inclusive Design", "WCAG"],
      readingTime: 13,
      commentCount: 14,
      likes: 48,
      comments: [],
    },
    {
      id: 8,
      title: "The Psychology Behind Viral Content",
      slug: "psychology-behind-viral-content",
      excerpt:
        "Uncover the psychological principles that make certain content spread rapidly across social networks and how to apply them ethically.",
      coverImage: "https://placehold.co/600x1200?text=Viral+Content",
      date: "May 10, 2023",
      author: authors[0],
      category: "Content Strategy",
      tags: ["Viral Marketing", "Psychology", "Social Media", "Content Creation"],
      readingTime: 10,
      commentCount: 11,
      likes: 39,
      comments: [],
    },
  ]
  
  export const featuredPosts = [posts[0], posts[2], posts[4], posts[6]]
  