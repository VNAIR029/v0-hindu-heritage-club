import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2, Heart } from "lucide-react"
import { notFound } from "next/navigation"

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

      **Photo Gallery:**
      We'll be sharing photos from the event soon (with permission from all participants). If you have photos you'd like to share, please send them to our club email.

      **Thank You Again:**
      To everyone who attended, volunteered, or supported this event - thank you for making it such a special evening. Events like these remind us why we do what we do: to build community, share culture, and create understanding.

      The spirit of Diwali - the triumph of light over darkness, knowledge over ignorance, and good over evil - was truly alive in our school that evening. We're already looking forward to next year!
    `,
    author: "Dev Gupta",
    date: "2024-11-26",
    tags: ["Festival", "Community", "Celebration"],
    image: "/diwali-celebration-recap.jpg",
    readTime: "3 min read",
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

      **What We'll Cover:**
      - Introduction to the four Vedas and their significance
      - Key philosophical concepts: dharma, karma, moksha
      - The concept of cosmic order (rita) and its relevance today
      - Practical applications of Vedic wisdom in daily life
      - Discussion of different interpretations and schools of thought

      **Meditation Practices Group**
      - **When:** Thursdays, 3:30-4:30 PM (separate from regular meetings)
      - **Where:** Room 237
      - **Focus:** Practical meditation techniques from Hindu tradition
      - **Level:** All levels welcome
      - **Facilitator:** Kavya Reddy

      This group will focus on hands-on practice of various meditation techniques, including breathing exercises, mantra meditation, and mindfulness practices rooted in Hindu tradition.

      **What We'll Practice:**
      - Basic breathing techniques (pranayama)
      - Mantra meditation with simple Sanskrit phrases
      - Mindfulness practices from yogic tradition
      - Visualization techniques
      - Integration of meditation into daily student life

      **Important Notes:**
      - Both groups are completely voluntary and open to all Colonel By Secondary School students {/* Updated to full school name */}
      - No prior experience or knowledge required
      - All practices are presented as wellness techniques, not religious requirements
      - Students can join either or both groups based on their interests
      - Materials and resources will be provided

      **How to Join:**
      Both groups are open to all Colonel By Secondary School students, regardless of background or experience level. Simply show up to the first session or contact us via email to express your interest. {/* Updated to full school name */}

      **First Sessions:**
      - Vedic Philosophy: Monday, December 2nd
      - Meditation Practices: Thursday, December 5th

      We're excited to offer these deeper learning opportunities and look forward to exploring these topics together! These study groups represent our commitment to providing meaningful educational experiences that go beyond surface-level cultural activities.
    `,
    author: "Priya Sharma",
    date: "2024-11-20",
    tags: ["Study Groups", "Philosophy", "Meditation"],
    image: "/study-groups-announcement.jpg",
    readTime: "4 min read",
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

      **Format and Structure:**
      We organized the evening into three main segments:
      1. **Opening Circle:** Each club shared a brief introduction to their traditions
      2. **Small Group Discussions:** Mixed groups explored common themes
      3. **Closing Reflection:** Shared insights and commitments to future collaboration

      **Key Takeaways:**
      - Despite different traditions, we share many common values like compassion, service, and respect for others
      - Learning about other faiths helps us better understand our own beliefs
      - Open dialogue breaks down misconceptions and builds friendships
      - Our school community is strengthened when we celebrate our diversity
      - Many students expressed interest in learning more about different traditions

      **Student Feedback:**
      "I learned so much about other religions and realized we have more in common than I thought!" - Grade 11 student

      "It was amazing to hear different perspectives on similar questions we all face." - Grade 10 student

      "I appreciated how respectful everyone was. It made me feel safe to share my own experiences." - Grade 12 student

      "This should happen more often. It's exactly what our school needs." - Grade 9 student

      **Shared Values We Discovered:**
      Through our discussions, we identified several values that transcend religious boundaries:
      - Compassion and kindness toward others
      - The importance of service to community
      - Respect for elders and wisdom traditions
      - The value of prayer/meditation/reflection
      - Commitment to justice and fairness
      - The importance of family and community bonds

      **Future Plans:**
      Based on the positive response, we're planning to make interfaith dialogue a regular part of our programming. We're also exploring opportunities for joint service projects with other religious clubs.

      **Upcoming Interfaith Initiatives:**
      - Monthly interfaith discussion groups
      - Joint community service project in the spring
      - Interfaith panel for World Religion Day
      - Collaborative cultural celebration planning

      **Thank You:**
      Special thanks to Ms. Thompson and the other faculty advisors who helped organize this event, and to all the students who participated with open hearts and minds.

      This event perfectly embodied our principle of "Vasudhaiva Kutumbakam" - the world is one family. When we come together with respect and curiosity, we build a stronger, more understanding community.

      **Looking Forward:**
      Events like these remind us that our differences are not barriers but opportunities for learning and growth. We're committed to continuing these important conversations and building bridges across our diverse school community.
    `,
    author: "Kavya Reddy",
    date: "2024-11-15",
    tags: ["Interfaith", "Community", "Dialogue"],
    image: "/interfaith-dialogue-event.jpg",
    readTime: "5 min read",
  },
  {
    id: "club-officer-elections",
    title: "Club Officer Elections - Spring 2025",
    excerpt:
      "Nominations are now open for club officer positions for the 2025-2026 school year. Learn about the roles and how to apply.",
    content: `
      It's that time of year again! We're now accepting nominations for club officer positions for the 2025-2026 school year. This is a great opportunity for dedicated members to take on leadership roles and help shape the future of our club.

      **Available Positions:**
      
      **President:** Overall club leadership, liaison with school administration
      - Lead executive meetings and general club meetings
      - Represent the club at school events and meetings
      - Work with faculty advisor on club policies and major decisions
      - Coordinate with other student organizations
      - Oversee all club activities and ensure mission alignment

      **Vice President:** Support president, lead special projects
      - Assist president with all duties and step in when needed
      - Lead special projects and initiatives
      - Coordinate with external organizations and guest speakers
      - Help with event planning and execution
      - Support member engagement and retention efforts

      **Secretary:** Meeting minutes, communication, membership records
      - Take and distribute meeting minutes
      - Manage club communications and announcements
      - Maintain membership records and attendance
      - Handle club correspondence and email management
      - Coordinate meeting logistics and room bookings

      **Cultural Coordinator:** Plan cultural events and educational programs
      - Plan and execute cultural celebrations and festivals
      - Develop educational programming and workshops
      - Coordinate with community members and cultural experts
      - Manage cultural resources and materials
      - Ensure authentic and respectful representation of traditions

      **Community Outreach Coordinator:** Interfaith activities and service projects
      - Organize interfaith dialogue events and collaborations
      - Plan and coordinate community service projects
      - Build relationships with other student organizations
      - Manage external partnerships and community connections
      - Promote club activities to the broader school community

      **Eligibility Requirements:**
      - Must be a current club member in good standing
      - Must be returning to Colonel By Secondary School for the 2025-2026 school year {/* Updated to full school name */}
      - Must maintain good academic standing (minimum 70% average)
      - Must demonstrate commitment to the club's values and mission
      - Must be able to commit to regular meeting attendance and responsibilities

      **Application Process:**
      1. **Nomination Period:** November 10-30, 2024
      2. **Application Submission:** December 1-15, 2024
      3. **Candidate Presentations:** January 15, 2025
      4. **Elections:** January 22, 2025
      5. **Transition Period:** February-March 2025

      **How to Apply:**
      Submit a brief application (max 500 words) explaining:
      - Why you want to serve in this role
      - Your vision for the club
      - Relevant experience or skills
      - How you'll uphold our values of respect, inclusion, and educational focus
      - Specific ideas or initiatives you'd like to implement

      **What We're Looking For:**
      - Commitment to the club's mission and values
      - Strong communication and organizational skills
      - Ability to work collaboratively with diverse groups
      - Creative thinking and problem-solving abilities
      - Respect for all members and inclusive leadership style
      - Understanding of Hindu culture and philosophy (or willingness to learn)

      **Current Officer Reflections:**
      Our current officers will be sharing their experiences and advice during our December meetings. This is a great opportunity to learn more about what each role involves and ask questions about the responsibilities.

      **Officer Responsibilities:**
      All officers are expected to:
      - Attend monthly executive meetings
      - Help with event planning and execution
      - Represent the club positively in all interactions
      - Support the club's educational and cultural mission
      - Maintain confidentiality when appropriate
      - Commit to serving the full school year

      **Questions?**
      Contact any current officer or Ms. Thompson if you have questions about the positions or application process. We're happy to discuss the roles in more detail and help you determine which position might be the best fit.

      **Encouragement to Apply:**
      We encourage all interested members to consider applying. Fresh perspectives and new ideas help keep our club vibrant and relevant! Leadership experience in the club is also valuable for college applications and future opportunities.

      **Timeline Reminders:**
      - November 30: Nomination deadline
      - December 15: Application deadline
      - January 15: Candidate presentations
      - January 22: Elections

      Don't miss this opportunity to help lead our amazing club into the next school year!
    `,
    author: "Priya Sharma",
    date: "2024-11-10",
    tags: ["Elections", "Leadership", "Club News"],
    image: "/club-elections-announcement.jpg",
    readTime: "6 min read",
  },
]

interface UpdatePageProps {
  params: {
    id: string
  }
}

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = updates.find((u) => u.id === params.id)

  if (!update) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const relatedUpdates = updates.filter((u) => u.id !== update.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/updates">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Updates
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {update.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{update.title}</h1>

              <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{update.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(update.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{update.readTime}</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{update.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {update.image && (
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video lg:aspect-[21/9] overflow-hidden rounded-lg">
                  <img
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <article className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line text-muted-foreground leading-relaxed text-base">
                      {update.content}
                    </div>
                  </article>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">Share this update:</span>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Share2 className="w-4 h-4 mr-2" />
                            Copy Link
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Heart className="w-4 h-4 mr-2" />
                            Like
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Author Info */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                            <User className="w-8 h-8 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{update.author}</h3>
                            <p className="text-sm text-muted-foreground">Club Officer</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="font-medium">Quick Actions</h3>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                            <Link href="/events">View Events</Link>
                          </Button>
                          <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                            <Link href="/contact">Contact Us</Link>
                          </Button>
                          <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                            <Link href="/join">Join the Club</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Updates */}
        {relatedUpdates.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Related Updates</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedUpdates.map((relatedUpdate) => (
                    <Card key={relatedUpdate.id} className="group hover:shadow-lg transition-all duration-300">
                      {relatedUpdate.image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedUpdate.image || "/placeholder.svg"}
                            alt={relatedUpdate.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-4 space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {relatedUpdate.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-medium text-sm leading-tight line-clamp-2">{relatedUpdate.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{relatedUpdate.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{formatDate(relatedUpdate.date)}</span>
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" asChild>
                            <Link href={`/updates/${relatedUpdate.id}`}>Read More</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return updates.map((update) => ({
    id: update.id,
  }))
}
