"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Download } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const events = {
  "weekly-meeting-nov-21": {
    id: "weekly-meeting-nov-21",
    title: "Weekly Club Meeting",
    description:
      "Join us for our regular Thursday meeting with discussion on Diwali traditions and planning for upcoming events.",
    longDescription: `
      Our weekly meetings are the heart of the Hindu Heritage Club community. This week, we'll be discussing the significance of Diwali, sharing personal traditions, and planning our upcoming celebration.

      **Agenda:**
      - Welcome and introductions for new members
      - Discussion: Diwali traditions around the world
      - Planning: Upcoming Diwali celebration event
      - Q&A session about Hindu festivals
      - Community announcements

      This is a great opportunity to meet other students, learn about Hindu culture, and contribute to our club's activities. All students are welcome, regardless of their background or level of knowledge about Hinduism.
    `,
    date: "2024-11-21",
    time: "12:15 PM - 1:00 PM",
    location: "Room 237",
    type: "Meeting",
    capacity: 30,
    registered: 18,
    rsvpRequired: false,
    image: "/student-meeting-discussion.jpg",
    organizer: "Priya Sharma",
    organizerEmail: "president@hhc-colonelby.ca",
    materials: [
      {
        name: "Meeting Agenda",
        url: "#",
        type: "PDF",
      },
      {
        name: "Diwali Information Sheet",
        url: "#",
        type: "PDF",
      },
    ],
    tags: ["Regular Meeting", "Diwali", "Discussion"],
  },
  "diwali-celebration-nov-25": {
    id: "diwali-celebration-nov-25",
    title: "Diwali Celebration & Cultural Fair",
    description:
      "Join us for a special Diwali celebration with traditional foods, rangoli making, and cultural presentations.",
    longDescription: `
      Celebrate the Festival of Lights with the Hindu Heritage Club! This special event will feature traditional Diwali activities, cultural presentations, and delicious food.

      **Event Highlights:**
      - Traditional Diwali lamp lighting ceremony
      - Rangoli (decorative art) making workshop
      - Cultural presentations about Diwali significance
      - Traditional Indian sweets and snacks
      - Music and dance performances
      - Interactive stations about Hindu festivals

      **What to Bring:**
      - Comfortable clothes (rangoli making can be messy!)
      - An open mind and curiosity to learn
      - Friends and family are welcome

      This event is open to the entire school community. We encourage students of all backgrounds to join us in celebrating this beautiful festival of light, knowledge, and new beginnings.
    `,
    date: "2024-11-25",
    time: "6:00 PM - 8:30 PM",
    location: "School Gymnasium",
    type: "Festival",
    capacity: 100,
    registered: 67,
    rsvpRequired: true,
    image: "/diwali-celebration-lights.jpg",
    organizer: "Dev Gupta",
    organizerEmail: "culture@hhc-colonelby.ca",
    materials: [
      {
        name: "Diwali Celebration Program",
        url: "#",
        type: "PDF",
      },
      {
        name: "Rangoli Patterns Guide",
        url: "#",
        type: "PDF",
      },
    ],
    tags: ["Festival", "Cultural", "Community", "Food"],
  },
}

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const addToGoogleCalendar = () => {
    const startDate = new Date(`${event.date} ${event.time.split(" - ")[0]}`)
    const endDate = new Date(`${event.date} ${event.time.split(" - ")[1]}`)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title,
    )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
      endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
    }Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`

    window.open(googleCalendarUrl, "_blank")
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
                <Link href="/events">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
              <p className="text-xl text-muted-foreground text-pretty">{event.description}</p>
            </div>
          </div>
        </section>

        {/* Event Image */}
        {event.image && (
          <section className="py-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="aspect-video lg:aspect-[21/9] overflow-hidden rounded-2xl">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        )}

        {/* Event Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {event.longDescription}
                    </div>
                  </div>
                </div>

                {event.materials && event.materials.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Event Materials</h3>
                    <div className="space-y-3">
                      {event.materials.map((material, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Download className="w-5 h-5 text-primary" />
                                <div>
                                  <p className="font-medium">{material.name}</p>
                                  <p className="text-sm text-muted-foreground">{material.type}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="bg-transparent" asChild>
                                <a href={material.url} download>
                                  Download
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Event Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{formatDate(event.date)}</p>
                          <p className="text-sm text-muted-foreground">Date</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{event.time}</p>
                          <p className="text-sm text-muted-foreground">Time</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{event.location}</p>
                          <p className="text-sm text-muted-foreground">Location</p>
                        </div>
                      </div>
                      {event.capacity && (
                        <div className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {event.registered}/{event.capacity} registered
                            </p>
                            <p className="text-sm text-muted-foreground">Capacity</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Organized by</p>
                        <p className="font-medium">{event.organizer}</p>
                        <a href={`mailto:${event.organizerEmail}`} className="text-sm text-primary hover:underline">
                          {event.organizerEmail}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {event.rsvpRequired ? (
                    <Button className="w-full" size="lg" asChild>
                      <Link href={`/events/${event.id}/rsvp`}>RSVP for Event</Link>
                    </Button>
                  ) : (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">No RSVP required - just show up!</p>
                    </div>
                  )}

                  <Button variant="outline" className="w-full bg-transparent" onClick={addToGoogleCalendar}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Event
                  </Button>
                </div>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Have questions about this event? Contact the organizer or our club officers.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
