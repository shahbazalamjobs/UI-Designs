import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and start building your first application. This comprehensive guide covers everything from setup to creating components.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["React", "JavaScript", "Web Development"],
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    description: "Dive deep into TypeScript and learn advanced concepts for better type safety. Explore generics, conditional types, and other powerful features.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["TypeScript", "JavaScript", "Programming"],
    date: "2023-05-20",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    description: "Learn how to create robust and scalable APIs using Node.js and Express. This tutorial covers best practices for structuring your API and optimizing performance.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Node.js", "API", "Backend"],
    date: "2023-05-25",
  },
  {
    id: 4,
    title: "CSS Grid Layout Mastery",
    description: "Master CSS Grid Layout and create complex, responsive layouts with ease. Learn how to use this powerful layout system to build modern, flexible web designs.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["CSS", "Web Design", "Responsive"],
    date: "2023-06-01",
  },
  {
    id: 5,
    title: "Introduction to GraphQL",
    description: "Discover the power of GraphQL and how it can improve your API development. Learn how to define schemas, write queries, and integrate GraphQL into your projects.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["GraphQL", "API", "Web Development"],
    date: "2023-06-05",
  },
  {
    id: 6,
    title: "Mastering Git and GitHub",
    description: "Learn advanced Git techniques and collaborate effectively using GitHub. This guide covers branching strategies, resolving merge conflicts, and leveraging GitHub's features.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Git", "GitHub", "Version Control"],
    date: "2023-06-10",
  },
]

export default function BlogList() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background border-b">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-primary hover:text-primary/80 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-primary hover:text-primary/80 font-medium">
                All Blogs
              </Link>
            </li>
            <li>
              <Link href="/list" className="text-primary hover:text-primary/80 font-medium">
                List
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:text-primary/80 font-medium">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="w-[150px] flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <p className="text-muted-foreground">{post.date}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
