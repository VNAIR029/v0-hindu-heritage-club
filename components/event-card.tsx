import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
    type: string
    capacity?: number
    registered?: number
    rsvpRequired: boolean
    image?: string
  }
  variant?: "default" | "compact"
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (variant === "compact") {
    return (
      <Card className="hover:shadow-md transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(event.date)}
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {event.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              {event.time}
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              {event.location}
            </div>
          </div>
          <Button size="sm" className="w-full" asChild>
            <Link href={`/events/${event.id}`}>View Details</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      {event.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2">
            <CardTitle className="text-xl leading-tight">{event.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{event.description}</CardDescription>
          </div>
          <Badge variant="secondary">{event.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          {event.capacity && (
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-2" />
              {event.registered || 0}/{event.capacity} registered
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="flex-1" asChild>
            <Link href={`/events/${event.id}`}>View Details</Link>
          </Button>
          {event.rsvpRequired && (
            <Button variant="outline" className="flex-1 bg-transparent" asChild>
              <Link href={`/events/${event.id}/rsvp`}>RSVP</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
