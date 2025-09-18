import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, BookOpen, Users, Globe, GraduationCap } from "lucide-react"

const resources = [
  {
    category: "Philosophy & Texts",
    icon: BookOpen,
    items: [
      {
        title: "Bhagavad Gita Online",
        description: "Complete text with translations and commentaries in multiple languages.",
        url: "https://www.holy-bhagavad-gita.org/",
        type: "External Link",
        level: "All Levels",
      },
      {
        title: "Vedic Literature Collection",
        description: "Comprehensive collection of Vedic texts with scholarly translations.",
        url: "https://www.sacred-texts.com/hin/",
        type: "External Link",
        level: "Intermediate",
      },
      {
        title: "Introduction to Hindu Philosophy",
        description: "Academic resource covering major schools of Hindu philosophy.",
        url: "#",
        type: "PDF Guide",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Cultural Understanding",
    icon: Globe,
    items: [
      {
        title: "Hindu Festivals Calendar",
        description: "Comprehensive guide to Hindu festivals with cultural significance.",
        url: "#",
        type: "Interactive Calendar",
        level: "All Levels",
      },
      {
        title: "Art and Architecture",
        description: "Explore Hindu temple architecture and religious art traditions.",
        url: "#",
        type: "Visual Guide",
        level: "Intermediate",
      },
      {
        title: "Music and Dance Traditions",
        description: "Introduction to classical Indian music and dance forms.",
        url: "#",
        type: "Multimedia",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Academic Resources",
    icon: GraduationCap,
    items: [
      {
        title: "Harvard Divinity School - Hindu Studies",
        description: "Academic articles and research on Hindu traditions.",
        url: "https://hds.harvard.edu/",
        type: "External Link",
        level: "Advanced",
      },
      {
        title: "Oxford Centre for Hindu Studies",
        description: "Scholarly resources and research publications.",
        url: "https://www.ochs.org.uk/",
        type: "External Link",
        level: "Advanced",
      },
      {
        title: "Comparative Religion Studies",
        description: "Understanding Hinduism in the context of world religions.",
        url: "#",
        type: "Study Guide",
        level: "Intermediate",
      },
    ],
  },
  {
    category: "Community & Discussion",
    icon: Users,
    items: [
      {
        title: "Hindu Students Association Network",
        description: "Connect with Hindu student groups across North America.",
        url: "#",
        type: "Community",
        level: "All Levels",
      },
      {
        title: "Interfaith Dialogue Resources",
        description: "Materials for respectful interfaith conversations and understanding.",
        url: "#",
        type: "Discussion Guide",
        level: "All Levels",
      },
      {
        title: "Book Club Recommendations",
        description: "Curated reading list for group discussions and personal study.",
        url: "#",
        type: "Reading List",
        level: "All Levels",
      },
    ],
  },
]

export default function StudyPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Study Corner</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Curated learning materials, academic resources, and safe external references for deepening your
                understanding of Sanātana Dharma. All resources are non-sectarian and educationally focused.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 kesari-accent">Study Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  All external resources have been reviewed for educational value and respectful content
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  Resources are presented from an academic perspective, not for religious conversion
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  Questions and discussions are always welcome - contact us for guidance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources by Category */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {resources.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">{category.category}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {item.level}
                            </Badge>
                          </div>
                          <Badge variant="secondary" className="w-fit text-xs">
                            {item.type}
                          </Badge>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>

                          <Button
                            className="w-full"
                            variant={item.url.startsWith("http") ? "default" : "outline"}
                            asChild
                          >
                            <a
                              href={item.url}
                              target={item.url.startsWith("http") ? "_blank" : "_self"}
                              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {item.url.startsWith("http") ? (
                                <>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Visit Resource
                                </>
                              ) : (
                                <>
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  Access Resource
                                </>
                              )}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Groups */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Join Our Study Groups</h2>
                <p className="text-muted-foreground">
                  Collaborative learning opportunities for deeper understanding and discussion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Bhagavad Gita Study Circle
                    </CardTitle>
                    <CardDescription>Weekly discussions on selected verses with guided interpretation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">When:</span>
                        <span>Wednesdays, 3:30 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Where:</span>
                        <span>Room 237</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span>All Welcome</span>
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <Link href="/contact">Join Study Circle</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Philosophy Discussion Group
                    </CardTitle>
                    <CardDescription>Explore Hindu philosophical concepts in an open, academic setting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">When:</span>
                        <span>Fridays, 3:30 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Where:</span>
                        <span>Library Study Room</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span>Intermediate+</span>
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <Link href="/contact">Join Discussion</Link>
                      </Button>
                    </div>
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
