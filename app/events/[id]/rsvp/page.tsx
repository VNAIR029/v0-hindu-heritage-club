"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { useState } from "react"

interface RSVPPageProps {
  params: {
    id: string
  }
}

export default function RSVPPage({ params }: RSVPPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    dietary: "",
    accessibility: "",
    emergency_contact: "",
    emergency_phone: "",
    consent_photos: false,
    consent_minor: false,
    additional_notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("RSVP submitted:", formData)
    // In a real app, this would send data to a server
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Mock event data - in a real app, this would be fetched based on the ID
  const event = {
    title: "Diwali Celebration & Cultural Fair",
    date: "2024-11-25",
    time: "6:00 PM - 8:30 PM",
    location: "School Gymnasium",
    capacity: 100,
    registered: 67,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/events/${params.id}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Event
                </Link>
              </Button>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">RSVP</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Reserve your spot for <span className="font-medium">{event.title}</span>
              </p>
            </div>
          </div>
        </section>

        {/* RSVP Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Event Registration</CardTitle>
                      <CardDescription>
                        Please fill out this form to register for the event. All fields marked with * are required.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">School Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="grade">Grade Level *</Label>
                            <RadioGroup
                              value={formData.grade}
                              onValueChange={(value) => handleInputChange("grade", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="9" id="grade-9" />
                                <Label htmlFor="grade-9">Grade 9</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="10" id="grade-10" />
                                <Label htmlFor="grade-10">Grade 10</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="11" id="grade-11" />
                                <Label htmlFor="grade-11">Grade 11</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="12" id="grade-12" />
                                <Label htmlFor="grade-12">Grade 12</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        {/* Event-Specific Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Event Information</h3>
                          <div>
                            <Label htmlFor="dietary">Dietary Restrictions or Allergies</Label>
                            <Input
                              id="dietary"
                              value={formData.dietary}
                              onChange={(e) => handleInputChange("dietary", e.target.value)}
                              placeholder="e.g., vegetarian, nut allergy, etc."
                            />
                          </div>
                          <div>
                            <Label htmlFor="accessibility">Accessibility Needs</Label>
                            <Input
                              id="accessibility"
                              value={formData.accessibility}
                              onChange={(e) => handleInputChange("accessibility", e.target.value)}
                              placeholder="Any accommodations needed"
                            />
                          </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Emergency Contact (Required for students under 18)</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="emergency_contact">Emergency Contact Name</Label>
                              <Input
                                id="emergency_contact"
                                value={formData.emergency_contact}
                                onChange={(e) => handleInputChange("emergency_contact", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="emergency_phone">Emergency Contact Phone</Label>
                              <Input
                                id="emergency_phone"
                                type="tel"
                                value={formData.emergency_phone}
                                onChange={(e) => handleInputChange("emergency_phone", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Consent */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Consent & Permissions</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                              <Checkbox
                                id="consent_photos"
                                checked={formData.consent_photos}
                                onCheckedChange={(checked) => handleInputChange("consent_photos", checked as boolean)}
                              />
                              <Label htmlFor="consent_photos" className="text-sm leading-relaxed">
                                I consent to photos and videos being taken during this event for use in school-approved
                                publications and social media. (Optional)
                              </Label>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Checkbox
                                id="consent_minor"
                                checked={formData.consent_minor}
                                onCheckedChange={(checked) => handleInputChange("consent_minor", checked as boolean)}
                              />
                              <Label htmlFor="consent_minor" className="text-sm leading-relaxed">
                                If you are under 18, I confirm that my parent/guardian has given permission for me to
                                attend this event. (Required for minors)
                              </Label>
                            </div>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div>
                          <Label htmlFor="additional_notes">Additional Notes or Questions</Label>
                          <Textarea
                            id="additional_notes"
                            value={formData.additional_notes}
                            onChange={(e) => handleInputChange("additional_notes", e.target.value)}
                            placeholder="Anything else we should know?"
                            rows={3}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          Submit RSVP
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Event Summary */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Event Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">{event.title}</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <Calendar className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">{formatDate(event.date)}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">{event.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">
                              {event.registered + 1}/{event.capacity} registered
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Important Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          Please arrive 15 minutes early for check-in
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          Bring comfortable clothes for activities
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          Food and refreshments will be provided
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          Contact us if you need to cancel your RSVP
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
