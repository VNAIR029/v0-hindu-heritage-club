import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Users, BookOpen, Globe, Mail, Calendar } from "lucide-react"

const officers = [
  {
    name: "Vihaan Nair",
    role: "Executive",
    grade: "Grade 11", // Updated from Grade 12 to Grade 11
    bio: "Passionate about sharing Hindu culture and creating an inclusive space for all students to learn and grow together.",
    email: "vihaan@hhc-colonelby.ca",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vihaan%20Nair.jpg-HFcU0z0giLenqRkcz8k4vindM07ccm.jpeg",
  },
  {
    name: "Aananya Bakshi",
    role: "Executive",
    grade: "Grade 11", // Updated from Grade 12 to Grade 11
    bio: "Dedicated to organizing meaningful events and fostering interfaith dialogue within our school community.",
    email: "aananya@hhc-colonelby.ca",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anu-Z6ddjELFyaayp7OAMf7QrecuXnivJu.png",
  },
  {
    name: "Sameeksha Bapu Satheesh",
    role: "Executive",
    grade: "Grade 12",
    bio: "Committed to maintaining clear communication and ensuring everyone feels welcome in our club activities.",
    email: "sameeksha@hhc-colonelby.ca",
    image: "/organized-student-portrait.jpg",
  },
]

const values = [
  {
    icon: Heart,
    title: "Respect & Inclusion",
    description:
      "We welcome students of all backgrounds and beliefs. Our club is built on mutual respect, understanding, and the celebration of diversity.",
  },
  {
    icon: BookOpen,
    title: "Educational Focus",
    description:
      "We approach Hindu culture and philosophy from an educational perspective, encouraging questions, discussion, and academic exploration.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "We create meaningful connections between students while fostering a sense of belonging and cultural pride within our school.",
  },
  {
    icon: Globe,
    title: "Cultural Bridge",
    description:
      "We serve as a bridge between traditional wisdom and modern student life, making ancient teachings relevant and accessible.",
  },
]

export default function AboutPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Learn about our mission, values, and the dedicated students who make the Hindu Heritage Club a welcoming
                space for cultural exploration and learning.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
                <div className="bg-card border rounded-2xl p-8 lg:p-12 space-y-6">
                  <p className="text-lg lg:text-xl leading-relaxed">
                    The Hindu Heritage Club at Colonel By Secondary School provides a safe, student-led space to explore
                    Sanātana Dharma's culture, values, and philosophy. We welcome all students to learn, participate,
                    and grow together in an environment of mutual respect and curiosity.
                  </p>
                  <div className="border-t pt-6">
                    <p className="text-base lg:text-lg kesari-accent font-medium devanagari">
                      Vasudhaiva Kutumbakam — the world is one family
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This ancient Sanskrit phrase guides our approach to building an inclusive community where everyone
                      belongs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground">
                  The principles that guide everything we do as a club and community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
                <p className="text-muted-foreground">
                  Our activities are designed to educate, inspire, and bring our community together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Weekly Meetings</h3>
                  <p className="text-muted-foreground">
                    Every Thursday at lunch in Room 237. Open discussions, cultural presentations, and community
                    building.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Festival Celebrations</h3>
                  <p className="text-muted-foreground">
                    Celebrate major Hindu festivals with the school community, sharing traditions and cultural
                    significance.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Study Groups</h3>
                  <p className="text-muted-foreground">
                    Guided study of philosophical texts, meditation practices, and cultural learning opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Leadership Team</h2>
                <p className="text-muted-foreground">
                  Meet the dedicated students who lead our club and organize our activities.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
                  {officers.map((officer, index) => (
                    <Card key={index} className="text-center h-full">
                      <CardHeader className="pb-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                          <Image
                            src={officer.image || "/placeholder.svg"}
                            alt={`${officer.name} - ${officer.role}`}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-lg">{officer.name}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="font-medium text-primary">{officer.role}</div>
                          <div className="text-sm">{officer.grade}</div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{officer.bio}</p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                          <a href={`mailto:${officer.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Supervisor */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <div className="aspect-square lg:aspect-auto lg:h-full">
                      <Image
                        src="/professional-teacher-portrait.png"
                        alt="Meenakshi Dowlut - Teacher Supervisor"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">Meenakshi Dowlut</h3>
                        <p className="text-primary font-medium">Teacher Supervisor</p>
                        <p className="text-sm text-muted-foreground">French Department</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Ms. Dowlut brings extensive experience in education and cultural understanding to her role as
                        our Teacher Supervisor. She is passionate about creating inclusive spaces for students to
                        explore different cultural and spiritual traditions with respect and academic rigor.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Office:</span> French Department
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Office Hours:</span> By appointment
                        </p>
                      </div>
                      <Button variant="outline" className="bg-transparent" asChild>
                        <a href="mailto:meenakshi.dowlut@ocdsb.ca">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Ms. Dowlut
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Join Our Community</h2>
              <p className="text-muted-foreground">
                Whether you're Hindu, curious about Hindu culture, or simply interested in learning about different
                traditions, you're welcome here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Join the Club</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/events">Attend a Meeting</Link>
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
