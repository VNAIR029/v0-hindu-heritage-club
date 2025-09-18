import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, Plus, Filter } from "lucide-react"

const upcomingEvents = [
  {
    id: "weekly-meeting-nov-21",
    title: "Weekly Club Meeting",
    description:
      "Join us for our regular Thursday meeting with discussion on Diwali traditions and planning for upcoming events.",
    date: "2024-11-21",
    time: "12:15 PM - 1:00 PM",
    location: "Room 237",
    type: "Meeting",
    capacity: 30,
    registered: 18,
    rsvpRequired: false,
    image: "/student-meeting-discussion.jpg",
  },
  {
    id: "bhagavad-gita-study-nov-22",
    title: "Bhagavad Gita Study Circle",
    description: "Weekly study session focusing on Chapter 2: The Yoga of Knowledge. All levels welcome.",
    date: "2024-11-22",
    time: "3:30 PM - 4:30 PM",
    location: "Library Study Room B",
    type: "Study Group",
    capacity: 15,
    registered: 12,
    rsvpRequired: true,
    image: "/study-group-books.jpg",
  },
  {
    id: "diwali-celebration-nov-25",
    title: "Diwali Celebration & Cultural Fair",
    description:
      "Join us for a special Diwali celebration with traditional foods, rangoli making, and cultural presentations.",
    date: "2024-11-25",
    time: "6:00 PM - 8:30 PM",
    location: "School Gymnasium",
    type: "Festival",
    capacity: 100,
    registered: 67,
    rsvpRequired: true,
    image: "/diwali-celebration-lights.jpg",
  },
  {
    id: "meditation-workshop-nov-28",
    title: "Introduction to Meditation Workshop",
    description:
      "Learn basic meditation techniques rooted in Hindu tradition. Perfect for beginners seeking mindfulness practices.",
    date: "2024-11-28",
    time: "3:30 PM - 5:00 PM",
    location: "Room 237",
    type: "Workshop",
    capacity: 20,
    registered: 8,
    rsvpRequired: true,
    image: "/meditation-workshop-peaceful.jpg",
  },
  {
    id: "philosophy-discussion-nov-29",
    title: "Philosophy Discussion: Dharma & Ethics",
    description: "Open discussion on the concept of dharma and its application to modern ethical dilemmas.",
    date: "2024-11-29",
    time: "3:30 PM - 4:30 PM",
    location: "Library Study Room A",
    type: "Discussion",
    capacity: 12,
    registered: 9,
    rsvpRequired: false,
    image: "/philosophy-discussion-group.jpg",
  },
  {
    id: "volunteer-opportunity-dec-5",
    title: "Community Service: Food Bank Volunteer",
    description:
      "Join us in giving back to the community by volunteering at the local food bank. Transportation provided.",
    date: "2024-12-05",
    time: "9:00 AM - 12:00 PM",
    location: "Ottawa Food Bank",
    type: "Service",
    capacity: 15,
    registered: 6,
    rsvpRequired: true,
    image: "/community-service-volunteers.jpg",
  },
]

const eventTypes = ["All", "Meeting", "Study Group", "Festival", "Workshop", "Discussion", "Service"]

export default function EventsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Events & Calendar</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Join us for meetings, study groups, cultural celebrations, and community service opportunities. All
                events are open to students of all backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Regular Meetings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">When:</span> Every Day 2, Lunch {/* Updated meeting times */}
                    </p>
                    <p>
                      <span className="font-medium">Where:</span> Room 125 {/* Updated room number */}
                    </p>
                    <p className="text-muted-foreground">Drop in anytime - no RSVP required!</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Workshops</CardTitle>{" "}
                  {/* Changed from "Study Groups" to "Workshops" */}
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Mantra Recitation:</span> Wednesdays, 3:30 PM{" "}
                      {/* Updated description to include mantra recitation */}
                    </p>
                    <p>
                      <span className="font-medium">Philosophy Discussion & Bhagavad Gita:</span> Fridays, 3:30 PM{" "}
                      {/* Updated description to include philosophy discussion and Bhagavad Gita */}
                    </p>
                    <p className="text-muted-foreground">RSVP recommended for workshops</p>{" "}
                    {/* Changed from "study groups" to "workshops" */}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Special Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>Festival celebrations, workshops, and community service opportunities</p>
                    <p className="text-muted-foreground">Check calendar below for details and RSVP requirements</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/events/suggest">
                  <Plus className="w-4 h-4 mr-2" />
                  Suggest Event
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Integration */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground">
                Never miss an event! Add our calendar to your Google Calendar or subscribe to email updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="https://calendar.google.com/calendar/u/0?cid=aGhjLWNvbG9uZWxieUBnbWFpbC5jb20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Add to Google Calendar
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/contact">
                    <Plus className="w-5 h-5 mr-2" />
                    Subscribe to Updates
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Event Guidelines */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Event Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Attendance Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        All students are welcome regardless of background or beliefs
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        RSVP required for workshops and special events
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Regular meetings are drop-in friendly
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Bring a friend - everyone is welcome!
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Respectful, educational discussions
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Optional participation in activities
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Cultural learning opportunities
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Community building and friendship
                      </li>
                    </ul>
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
