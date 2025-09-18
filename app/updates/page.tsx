import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

const updates = [
  {
    id: "diwali-celebration-recap",
    title: "Diwali Celebration Recap - Thank You!",
    excerpt:
      "What an amazing Diwali celebration we had! Over 80 students joined us for an evening of lights, culture, and community.",
    content: `
      Our Diwali celebration on November 25th was truly magical! We had over 80 students from all grades join us in the gymnasium for an evening filled with traditional activities, delicious food, and wonderful community spirit.

      **Event Highlights:**
      - Beautiful rangoli designs created by students
      - Traditional lamp lighting ceremony
      - Cultural presentations about Diwali's significance
      - Delicious Indian sweets and snacks
      - Music and dance performances by our talented members

      **Special Thanks:**
      We want to extend our heartfelt gratitude to everyone who made this event possible:
      - Ms. Thompson for her guidance and support
      - The cafeteria staff for helping with food preparation
      - All the volunteers who helped with setup and cleanup
      - Every student who attended and made the evening special

      The feedback has been overwhelmingly positive, with many students expressing interest in learning more about Hindu festivals and culture. This is exactly what we hoped to achieve - creating bridges of understanding and appreciation.

      **Looking Ahead:**
      Based on the success of this event, we're already planning our next cultural celebration. Stay tuned for announcements about our upcoming events!
    `,
    author: "Dev Gupta",
    date: "2024-11-26",
    tags: ["Festival", "Community", "Celebration"],
    image: "/diwali-celebration-recap.jpg",
  },
  {
    id: "new-study-groups-starting",
    title: "New Study Groups Starting in December",
    excerpt:
      "We're excited to announce two new study groups starting in December: Vedic Philosophy and Meditation Practices.",
    content: `
      Due to popular demand, we're launching two new study groups this December! These groups are designed to provide deeper learning opportunities for students interested in exploring specific aspects of Hindu philosophy and practice.

      **Vedic Philosophy Study Group**
      - **When:** Mondays, 3:30-4:30 PM
      - **Where:** Library Study Room C
      - **Focus:** Introduction to Vedic texts and philosophical concepts
      - **Level:** Beginner to Intermediate
      - **Facilitator:** Arjun Patel

      This group will explore fundamental concepts from the Vedas, including dharma, karma, and the nature of reality. We'll use accessible translations and focus on understanding these concepts in a modern context.

      **Meditation Practices Group**
      - **When:** Thursdays, 3:30-4:30 PM (separate from regular meetings)
      - **Where:** Room 237
      - **Focus:** Practical meditation techniques from Hindu tradition
      - **Level:** All levels welcome
      - **Facilitator:** Kavya Reddy

      This group will focus on hands-on practice of various meditation techniques, including breathing exercises, mantra meditation, and mindfulness practices rooted in Hindu tradition.

      **How to Join:**
      Both groups are open to all students, regardless of background or experience level. Simply show up to the first session or contact us via email to express your interest.

      **First Sessions:**
      - Vedic Philosophy: Monday, December 2nd
      - Meditation Practices: Thursday, December 5th

      We're excited to offer these deeper learning opportunities and look forward to exploring these topics together!
    `,
    author: "Priya Sharma",
    date: "2024-11-20",
    tags: ["Study Groups", "Philosophy", "Meditation"],
    image: "/study-groups-announcement.jpg",
  },
  {
    id: "interfaith-dialogue-success",
    title: "Successful Interfaith Dialogue Event",
    excerpt:
      "Our interfaith dialogue event brought together students from different religious clubs for meaningful conversations about shared values.",
    content: `
      Last week's interfaith dialogue event was a tremendous success! Students from the Hindu Heritage Club, Christian Fellowship, Muslim Student Association, and Jewish Student Union came together for an evening of respectful conversation and mutual learning.

      **Event Overview:**
      The event, held in the school library, featured small group discussions on topics like:
      - Common values across different faiths
      - The role of service in religious traditions
      - Celebrating diversity while finding unity
      - How faith influences daily life for students

      **Key Takeaways:**
      - Despite different traditions, we share many common values like compassion, service, and respect for others
      - Learning about other faiths helps us better understand our own beliefs
      - Open dialogue breaks down misconceptions and builds friendships
      - Our school community is strengthened when we celebrate our diversity

      **Student Feedback:**
      "I learned so much about other religions and realized we have more in common than I thought!" - Grade 11 student

      "It was amazing to hear different perspectives on similar questions we all face." - Grade 10 student

      **Future Plans:**
      Based on the positive response, we're planning to make interfaith dialogue a regular part of our programming. We're also exploring opportunities for joint service projects with other religious clubs.

      **Thank You:**
      Special thanks to Ms. Thompson and the other faculty advisors who helped organize this event, and to all the students who participated with open hearts and minds.

      This event perfectly embodied our principle of "Vasudhaiva Kutumbakam" - the world is one family. When we come together with respect and curiosity, we build a stronger, more understanding community.
    `,
    author: "Kavya Reddy",
    date: "2024-11-15",
    tags: ["Interfaith", "Community", "Dialogue"],
    image: "/interfaith-dialogue-event.jpg",
  },
  {
    id: "club-officer-elections",
    title: "Club Officer Elections - Spring 2025",
    excerpt:
      "Nominations are now open for club officer positions for the 2025-2026 school year. Learn about the roles and how to apply.",
    content: `
      It's that time of year again! We're now accepting nominations for club officer positions for the 2025-2026 school year. This is a great opportunity for dedicated members to take on leadership roles and help shape the future of our club.

      **Available Positions:**
      - **President:** Overall club leadership, liaison with school administration
      - **Vice President:** Support president, lead special projects
      - **Secretary:** Meeting minutes, communication, membership records
      - **Cultural Coordinator:** Plan cultural events and educational programs
      - **Community Outreach Coordinator:** Interfaith activities and service projects

      **Eligibility Requirements:**
      - Must be a current club member in good standing
      - Must be returning to Colonel By for the 2025-2026 school year
      - Must maintain good academic standing
      - Must demonstrate commitment to the club's values and mission

      **Application Process:**
      1. **Nomination Period:** November 10-30, 2024
      2. **Application Submission:** December 1-15, 2024
      3. **Candidate Presentations:** January 15, 2025
      4. **Elections:** January 22, 2025

      **How to Apply:**
      Submit a brief application (max 500 words) explaining:
      - Why you want to serve in this role
      - Your vision for the club
      - Relevant experience or skills
      - How you'll uphold our values of respect, inclusion, and educational focus

      **Current Officer Reflections:**
      Our current officers will be sharing their experiences and advice during our December meetings. This is a great opportunity to learn more about what each role involves.

      **Questions?**
      Contact any current officer or Ms. Thompson if you have questions about the positions or application process.

      **Open to All Students:**
      Yes! Most of our events are open to all Colonel By Secondary School students. We believe in sharing our culture with the broader school community. Some events may have limited capacity, so we encourage early registration.

      We encourage all interested members to consider applying. Fresh perspectives and new ideas help keep our club vibrant and relevant!
    `,
    author: "Priya Sharma",
    date: "2024-11-10",
    tags: ["Elections", "Leadership", "Club News"],
    image: "/club-elections-announcement.jpg",
  },
]

export default function UpdatesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
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
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Club Updates</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Stay informed about club activities, events, and important announcements. Read about our recent events
                and upcoming opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Updates List */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {updates.map((update, index) => (
                <article key={update.id} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    {update.image && (
                      <div className="aspect-video lg:aspect-[21/9] overflow-hidden">
                        <img
                          src={update.image || "/placeholder.svg"}
                          alt={update.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {update.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl leading-tight">{update.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {update.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(update.date)}
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{update.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                          {update.content}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>Share this update:</span>
                          <Button variant="ghost" size="sm">
                            Copy Link
                          </Button>
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent" asChild>
                          <Link href={`/updates/${update.id}`}>Read Full Post</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground">
                Never miss important club news and announcements. Subscribe to our email updates or follow us on social
                media.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Subscribe to Updates</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/events">View Upcoming Events</Link>
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
