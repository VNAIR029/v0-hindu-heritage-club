import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Users, Calendar, Heart, BookOpen, MessageCircle, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Welcoming Community",
    description: "Join a supportive group of students interested in learning and cultural exploration.",
  },
  {
    icon: BookOpen,
    title: "Educational Opportunities",
    description: "Learn about Hindu philosophy, culture, and traditions in an accessible, respectful environment.",
  },
  {
    icon: Calendar,
    title: "Cultural Events",
    description: "Participate in festivals, celebrations, and special events throughout the school year.",
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Develop understanding, empathy, and appreciation for diverse perspectives and traditions.",
  },
  {
    icon: MessageCircle,
    title: "Open Dialogue",
    description: "Engage in meaningful discussions about philosophy, values, and life in a safe space.",
  },
]

const steps = [
  {
    number: "1",
    title: "Attend a Meeting",
    description: "Come to any of our regular meetings to see what we're about. No commitment required!",
  },
  {
    number: "2",
    title: "Fill Out Contact Form",
    description: "Let us know you're interested by filling out our contact form or speaking with an officer.",
  },
  {
    number: "3",
    title: "Get Involved",
    description: "Start participating in discussions, events, and activities at your own comfort level.",
  },
]

export default function JoinPage() {
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
                <Users className="w-8 h-8 text-orange-600" />
                <h1 className="text-4xl lg:text-5xl font-bold">Join Our Community</h1>
              </div>
              <p className="text-xl text-muted-foreground text-pretty">
                Become part of a welcoming community dedicated to learning, cultural exploration, and building bridges
                between different backgrounds. Everyone is welcome!
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Join the Hindu Heritage Club?</h2>
                <p className="text-muted-foreground text-lg">
                  Our club offers unique opportunities for learning, growth, and community building.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <benefit.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How to Join</h2>
                <p className="text-muted-foreground text-lg">
                  Getting involved is easy! Follow these simple steps to become part of our community.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
                <p className="text-muted-foreground text-lg">
                  Here's what you can look forward to as a member of our club.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <span>Regular Activities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Bi-weekly meetings with discussions and learning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Simple mantra practice and meditation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Cultural presentations and educational talks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Open Q&A and respectful dialogue</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-orange-600" />
                      <span>Special Events</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Festival celebrations (Diwali, Holi, etc.)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Interfaith dialogue events</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Community service projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Guest speakers and workshops</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Level */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">No Pressure, Just Learning</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We believe in voluntary participation and respect for all backgrounds. You can:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="secondary">Attend when you can</Badge>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="secondary">Participate at your comfort level</Badge>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="secondary">Ask questions freely</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our goal is to create a safe, welcoming space for cultural exploration and learning. There's no
                  pressure to believe anything specific - just come with an open mind and curiosity!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Join?</h2>
              <p className="text-muted-foreground text-lg">
                Take the first step and get in touch with us. We're excited to welcome you to our community!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us to Join</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/events">View Next Meeting</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? Check out our{" "}
                <Link href="/faq" className="text-orange-600 hover:underline">
                  FAQ page
                </Link>{" "}
                or reach out directly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
