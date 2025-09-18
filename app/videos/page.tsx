import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Play, Clock, Users } from "lucide-react"

const videos = [
  {
    id: "introduction-to-hinduism",
    title: "Introduction to Hinduism",
    description:
      "A gentle introduction to the basic concepts and philosophy of Sanātana Dharma, perfect for beginners.",
    duration: "15:30",
    category: "Educational",
    level: "Beginner",
    thumbnail: "/hindu-philosophy-introduction.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Philosophy", "Beginner", "Overview"],
  },
  {
    id: "meditation-techniques",
    title: "Basic Meditation Techniques",
    description: "Learn simple meditation practices rooted in Hindu tradition, suitable for daily practice.",
    duration: "22:45",
    category: "Practice",
    level: "Beginner",
    thumbnail: "/meditation-practice-hindu.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Meditation", "Practice", "Wellness"],
  },
  {
    id: "festival-celebrations",
    title: "Hindu Festivals and Their Significance",
    description: "Explore the meaning behind major Hindu festivals and how they're celebrated around the world.",
    duration: "28:15",
    category: "Culture",
    level: "Intermediate",
    thumbnail: "/hindu-festivals-diwali-holi.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Festivals", "Culture", "Traditions"],
  },
  {
    id: "yoga-philosophy",
    title: "The Philosophy of Yoga",
    description: "Understanding yoga beyond physical practice - exploring its spiritual and philosophical foundations.",
    duration: "35:20",
    category: "Philosophy",
    level: "Intermediate",
    thumbnail: "/yoga-philosophy-spiritual.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Yoga", "Philosophy", "Spirituality"],
  },
  {
    id: "vedic-chanting",
    title: "Introduction to Vedic Chanting",
    description: "Learn the basics of Vedic chanting, including proper pronunciation and rhythm.",
    duration: "18:40",
    category: "Practice",
    level: "Advanced",
    thumbnail: "/vedic-chanting-sanskrit.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Vedic", "Chanting", "Sanskrit"],
  },
  {
    id: "dharma-ethics",
    title: "Understanding Dharma and Ethics",
    description: "Explore the concept of dharma and how it guides ethical living in Hindu philosophy.",
    duration: "26:10",
    category: "Philosophy",
    level: "Intermediate",
    thumbnail: "/dharma-ethics-hindu-philosophy.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Dharma", "Ethics", "Philosophy"],
  },
]

const categories = ["All", "Educational", "Practice", "Culture", "Philosophy"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Video Library</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Educational content, talks, and guided practices to support your learning journey. All content is
                respectful, educational, and suitable for students.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Badge
                      key={level}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {video.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {video.level}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">{video.description}</CardDescription>

                    <div className="flex flex-wrap gap-1">
                      {video.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/videos/${video.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Watch Video
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Suggest a Video Topic</h2>
              <p className="text-muted-foreground">
                Have a topic you'd like us to cover? We welcome suggestions from our community members.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Share Your Ideas
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
