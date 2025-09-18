import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Clock, Users, Heart, BookOpen } from "lucide-react"

export default function ContactPage() {
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
                <Mail className="w-8 h-8 text-orange-600" />
                <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
              </div>
              <p className="text-xl text-muted-foreground text-pretty">
                Ready to join our community or have questions? We'd love to hear from you. Reach out to learn more about
                our activities and how to get involved.
              </p>
            </div>
          </div>
        </section>

        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Meeting Location</h3>
                        <p className="text-muted-foreground">
                          Room 125, Colonel By Secondary School
                          <br />
                          2381 Ogilvie Rd, Gloucester, ON K1J 7N4
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Meeting Times</h3>
                        <p className="text-muted-foreground">
                          Day 2 every lunch
                          <br />
                          Check our Events page for specific dates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-muted-foreground">vnair1@ocdsb.ca</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Club Execs */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Club Execs</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">Vihaan Nair - Executive</p>
                        <p className="text-sm text-muted-foreground">Leadership & community building</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">Aananya Bakshi - Executive</p>
                        <p className="text-sm text-muted-foreground">Events & interfaith dialogue</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">Sameeksha Bapu Satheesh - Executive</p>
                        <p className="text-sm text-muted-foreground">Communication & member support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teacher Supervisor */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Teacher Supervisor</h2>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium">Meenakshi Dowlut</p>
                      <p className="text-sm text-muted-foreground">French Department</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Join the Club or Ask a Question</CardTitle>
                    <CardDescription>
                      Fill out this form to express interest in joining or to ask any questions about our activities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your.email@ocdsb.ca" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">Grade 9</SelectItem>
                            <SelectItem value="10">Grade 10</SelectItem>
                            <SelectItem value="11">Grade 11</SelectItem>
                            <SelectItem value="12">Grade 12</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest">I'm interested in:</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joining">Joining the club</SelectItem>
                            <SelectItem value="events">Attending events</SelectItem>
                            <SelectItem value="learning">Learning about Hindu culture</SelectItem>
                            <SelectItem value="volunteering">Volunteering/helping</SelectItem>
                            <SelectItem value="questions">I have questions</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your interest in the club, any questions you have, or how you'd like to get involved..."
                          rows={4}
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="updates" />
                          <Label htmlFor="updates" className="text-sm">
                            I'd like to receive email updates about club events and activities
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="consent" required />
                          <Label htmlFor="consent" className="text-sm">
                            I understand that this information will be used to contact me about club activities *
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-medium">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="bg-transparent" asChild>
                      <Link href="/events">View Events</Link>
                    </Button>
                    <Button variant="outline" className="bg-transparent" asChild>
                      <Link href="/faq">Read FAQ</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
