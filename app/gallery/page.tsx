import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Camera, Play, Calendar, Users } from "lucide-react"

const galleryItems = [
  {
    id: "diwali-2024",
    title: "Diwali Celebration 2024",
    type: "photos",
    date: "2024-11-25",
    description: "Beautiful moments from our Diwali celebration with rangoli, lamp lighting, and community joy.",
    thumbnail: "/diwali-celebration-recap.jpg",
    count: 24,
    tags: ["Festival", "Community"],
  },
  {
    id: "interfaith-dialogue",
    title: "Interfaith Dialogue Event",
    type: "photos",
    date: "2024-11-15",
    description: "Students from different faith communities coming together for meaningful conversations.",
    thumbnail: "/interfaith-dialogue-event.jpg",
    count: 18,
    tags: ["Interfaith", "Dialogue"],
  },
  {
    id: "meditation-workshop",
    title: "Meditation Workshop",
    type: "video",
    date: "2024-10-20",
    description: "Introduction to meditation practices and their benefits for student wellness.",
    thumbnail: "/meditation-practice-hindu.jpg",
    duration: "12:34",
    tags: ["Meditation", "Wellness"],
  },
  {
    id: "holi-preparation",
    title: "Holi Preparation Meeting",
    type: "photos",
    date: "2024-03-15",
    description: "Planning and preparing for our spring Holi celebration with colors and joy.",
    thumbnail: "/hindu-festivals-diwali-holi.jpg",
    count: 15,
    tags: ["Festival", "Planning"],
  },
  {
    id: "philosophy-discussion",
    title: "Philosophy Discussion Series",
    type: "video",
    date: "2024-02-28",
    description: "Students exploring concepts of dharma and karma in modern context.",
    thumbnail: "/hindu-philosophy-introduction.jpg",
    duration: "18:45",
    tags: ["Philosophy", "Education"],
  },
  {
    id: "community-service",
    title: "Community Service Project",
    type: "photos",
    date: "2024-01-20",
    description: "Club members volunteering at local food bank, embodying the spirit of seva (service).",
    thumbnail: "/student-meeting-discussion.jpg",
    count: 12,
    tags: ["Service", "Community"],
  },
]

export default function GalleryPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
              <div className="flex items-center space-x-3 mb-4">
                <Camera className="w-8 h-8 text-orange-600" />
                <h1 className="text-4xl lg:text-5xl font-bold">Photo & Video Gallery</h1>
              </div>
              <p className="text-xl text-muted-foreground text-pretty">
                Explore moments from our events, celebrations, and activities. See the joy, learning, and community
                spirit that defines our club.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Overlay for video items */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-gray-800 ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Type indicator */}
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.type === "photos" ? (
                            <>
                              <Camera className="w-3 h-3 mr-1" />
                              {item.count} photos
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 mr-1" />
                              {item.duration}
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="font-medium leading-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                          View {item.type === "photos" ? "Album" : "Video"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Users className="w-12 h-12 text-orange-600 mx-auto" />
              <h2 className="text-2xl font-bold">Privacy & Consent</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All photos and videos in our gallery are shared with the consent of participants. We respect privacy
                  and only include content where individuals have given permission to be featured.
                </p>
                <p>
                  If you appear in any of our media and would like it removed, or if you have photos from club events
                  you'd like to share, please contact us directly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact About Media</Link>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/code-of-conduct">View Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
