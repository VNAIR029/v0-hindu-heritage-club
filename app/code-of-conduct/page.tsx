import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Heart, Users, BookOpen, Shield, AlertTriangle, CheckCircle } from "lucide-react"

const principles = [
  {
    icon: Heart,
    title: "Respect",
    description:
      "We treat all members, guests, and community members with dignity and respect, regardless of their background, beliefs, or level of knowledge about Hindu culture.",
  },
  {
    icon: Users,
    title: "Consent",
    description:
      "Participation in all activities is voluntary. No one is pressured to participate in religious practices, and everyone's comfort level is respected.",
  },
  {
    icon: BookOpen,
    title: "Curiosity",
    description:
      "We encourage questions, open discussion, and learning. There are no 'stupid questions' - we're all here to learn and grow together.",
  },
  {
    icon: Shield,
    title: "Safe Space",
    description:
      "We maintain a safe, welcoming environment where everyone can express themselves authentically without fear of judgment or discrimination.",
  },
]

const expectations = [
  {
    category: "Respectful Communication",
    items: [
      "Listen actively when others are speaking",
      "Use inclusive language that welcomes all participants",
      "Avoid interrupting or dismissing others' questions or perspectives",
      "Respect different levels of knowledge and experience",
    ],
  },
  {
    category: "Cultural Sensitivity",
    items: [
      "Approach Hindu traditions with respect and genuine curiosity",
      "Avoid stereotypes, generalizations, or cultural appropriation",
      "Ask questions respectfully when you don't understand something",
      "Recognize that Hinduism is diverse with many traditions and practices",
    ],
  },
  {
    category: "Inclusive Participation",
    items: [
      "Welcome newcomers and help them feel included",
      "Respect others' choice to participate or observe",
      "Avoid proselytizing or pressuring others to adopt beliefs",
      "Create space for different perspectives and experiences",
    ],
  },
  {
    category: "Academic Integrity",
    items: [
      "Share accurate information and cite sources when appropriate",
      "Acknowledge when you're unsure about something",
      "Respect intellectual property and traditional knowledge",
      "Maintain academic standards in discussions and presentations",
    ],
  },
]

export default function CodeOfConductPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Code of Conduct</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Our community guidelines ensure that the Hindu Heritage Club remains a safe, respectful, and welcoming
                space for all students to learn and participate.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Principles</h2>
                <p className="text-muted-foreground">
                  These fundamental values guide all our interactions and activities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle, index) => (
                  <Card key={index} className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <principle.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Community Guidelines</h2>
                <p className="text-muted-foreground">
                  Specific expectations for participation in club activities and discussions.
                </p>
              </div>

              <div className="space-y-8">
                {expectations.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                        {section.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Unacceptable Behavior */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unacceptable Behavior</h2>
                <p className="text-muted-foreground">The following behaviors are not tolerated in our community.</p>
              </div>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-destructive">
                    <AlertTriangle className="w-5 h-5 mr-3" />
                    Prohibited Actions
                  </CardTitle>
                  <CardDescription>
                    These behaviors will result in immediate intervention and may lead to removal from the club.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Discrimination, harassment, or bullying based on religion, race, gender, sexuality, or any other
                      characteristic
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Aggressive proselytizing or pressuring others to adopt religious beliefs
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Disrespectful comments about any religion, culture, or belief system
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Sharing inappropriate content or using offensive language
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Disrupting meetings or activities in a way that prevents others from participating
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></span>
                      Violating school policies or engaging in illegal activities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reporting and Resolution */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Reporting Concerns</h2>
                <p className="text-muted-foreground">
                  If you experience or witness behavior that violates our code of conduct, please report it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">How to Report</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Club Officers</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Contact any club officer directly or via email:
                      </p>
                      <p className="text-sm">
                        <a href="mailto:president@hhc-colonelby.ca" className="text-primary hover:underline">
                          president@hhc-colonelby.ca
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Faculty Advisor</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Ms. Thompson is available for confidential discussions:
                      </p>
                      <p className="text-sm">
                        <a href="mailto:j.thompson@ocdsb.ca" className="text-primary hover:underline">
                          j.thompson@ocdsb.ca
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">School Administration</h4>
                      <p className="text-sm text-muted-foreground">
                        For serious concerns, contact the school's main office or guidance counselors.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Resolution Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                          1
                        </span>
                        <div>
                          <h5 className="font-medium text-sm">Initial Response</h5>
                          <p className="text-xs text-muted-foreground">
                            We acknowledge all reports within 24 hours and ensure the safety of all involved.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                          2
                        </span>
                        <div>
                          <h5 className="font-medium text-sm">Investigation</h5>
                          <p className="text-xs text-muted-foreground">
                            We gather information from all parties while maintaining confidentiality.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                          3
                        </span>
                        <div>
                          <h5 className="font-medium text-sm">Resolution</h5>
                          <p className="text-xs text-muted-foreground">
                            We work toward a fair resolution that may include education, mediation, or removal from the
                            club.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                          4
                        </span>
                        <div>
                          <h5 className="font-medium text-sm">Follow-up</h5>
                          <p className="text-xs text-muted-foreground">
                            We check in with all parties to ensure the issue has been resolved satisfactorily.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <div className="bg-card border rounded-2xl p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By participating in the Hindu Heritage Club, we all commit to upholding these standards and creating a
                  positive environment where everyone can learn, grow, and feel valued.
                </p>
                <p className="text-base kesari-accent font-medium devanagari">
                  Vasudhaiva Kutumbakam — the world is one family
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Join Our Community</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/about">Learn More About Us</Link>
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
