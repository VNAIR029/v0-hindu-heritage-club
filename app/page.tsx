import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, BookOpen, Users, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 kesari-gradient opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                    Hindu Heritage Club
                    <span className="block text-2xl lg:text-3xl font-normal text-muted-foreground mt-2">
                      Colonel By Secondary School
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-muted-foreground text-pretty">
                    A welcoming space to learn, celebrate, and practice — open to everyone.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <p className="text-lg leading-relaxed">
                    We provide a safe, student-led space to explore Sanātana Dharma's culture, values, and philosophy.
                    Participation is voluntary and respectful of all backgrounds.
                  </p>
                  <p className="text-base kesari-accent font-medium devanagari">
                    Vasudhaiva Kutumbakam — the world is one family.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/events">Join Next Meeting</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    <Link href="/mantras">Explore Resources</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Hindu Heritage Club Logo"
                    width={300}
                    height={300}
                    className="w-3/4 h-auto opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Next Event</CardTitle>
                  <CardDescription>Weekly Meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Join us every Thursday at lunch in Room 237</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/events">View Details</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Learn a Mantra</CardTitle>
                  <CardDescription>Om Namah Śivāya</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 devanagari">ॐ नमः शिवाय</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/mantras">Listen & Learn</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Latest Update</CardTitle>
                  <CardDescription>Diwali Celebration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Thank you to everyone who joined our Diwali celebration!
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/updates">Read More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Join the Club</CardTitle>
                  <CardDescription>All Welcome</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Become part of our inclusive community</p>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Safe Space</h3>
                  <p className="text-muted-foreground">
                    A welcoming environment where Hindu students feel safe and all students can learn with respect.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Cultural Expression</h3>
                  <p className="text-muted-foreground">
                    Explore and celebrate the rich traditions, values, and philosophy of Sanātana Dharma.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Inclusive Learning</h3>
                  <p className="text-muted-foreground">
                    Voluntary participation that respects all backgrounds and encourages curious exploration.
                  </p>
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
