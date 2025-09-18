import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowLeft, HelpCircle, MessageCircle, Users, BookOpen, Calendar, Heart } from "lucide-react"

const faqSections = [
  {
    title: "About the Club",
    icon: Users,
    questions: [
      {
        question: "Do I have to be Hindu to join?",
        answer:
          "No. We welcome anyone interested in learning and participating. The club is student-led and inclusive. Our mission is to create a space for cultural exploration and learning that's open to all students, regardless of their background or beliefs.",
      },
      {
        question: "Will I be pressured to convert?",
        answer:
          "Absolutely not. The club focuses on culture, philosophy, and community. Participation is always voluntary. We believe in sharing knowledge and creating understanding, never in pressuring anyone to change their beliefs. Our approach is educational and respectful.",
      },
      {
        question: "What happens at meetings?",
        answer:
          "Meetings include short talks, chant practice, discussion groups, and event planning. Details are posted on the Events page. We typically start with a brief cultural or philosophical topic, practice a simple mantra or meditation, and then have open discussion. Everyone is encouraged to participate at their comfort level.",
      },
      {
        question: "How often do you meet?",
        answer:
          "We meet every lunch on day 2 in room 125. We also have special events throughout the year, so check out our events page.",
      },
    ],
  },
  {
    title: "Learning & Practice",
    icon: BookOpen,
    questions: [
      {
        question: "Do I need prior knowledge of Hinduism?",
        answer:
          "Not at all! We welcome complete beginners. Our meetings and resources are designed to be accessible to everyone, regardless of their background knowledge. We start with basics and build understanding gradually.",
      },
      {
        question: "What will I learn about?",
        answer:
          "We explore Hindu philosophy, festivals, traditions, meditation practices, and cultural values. Topics include concepts like dharma, karma, the principle of 'Vasudhaiva Kutumbakam' (the world is one family), and practical wisdom from ancient texts applied to modern life.",
      },
      {
        question: "Do you teach Sanskrit?",
        answer:
          "We introduce basic Sanskrit terms and mantras with proper pronunciation and meaning. While we're not a language class, we help members understand key concepts and practice simple chants. All Sanskrit is provided with transliteration and translation.",
      },
      {
        question: "Are the meditation practices religious?",
        answer:
          "Our meditation practices are presented as cultural and wellness techniques. While they have roots in Hindu tradition, we focus on their practical benefits for stress relief, focus, and well-being. Participation is always optional.",
      },
      {
        question: "Can I ask questions about Hindu beliefs?",
        answer:
          "Questions are encouraged and welcomed. We create a safe space for curious inquiry and respectful discussion. No question is too basic or too complex - we're all learning together.",
      },
    ],
  },
  {
    title: "Events & Activities",
    icon: Calendar,
    questions: [
      {
        question: "What kind of events do you organize?",
        answer:
          "We organize cultural celebrations (like Diwali and Holi), educational workshops, interfaith dialogues, meditation sessions, and community service projects. Events range from small group discussions to larger school-wide celebrations.",
      },
      {
        question: "Can non-members attend events?",
        answer:
          "Yes! Most of our events are open to all Colonel By students. We believe in sharing our culture with the broader school community. Some events may have limited capacity, so we encourage early registration.",
      },
      {
        question: "Do you celebrate all Hindu festivals?",
        answer:
          "We focus on major festivals that offer good learning opportunities and can be celebrated respectfully in a school setting. This typically includes Diwali, Holi, and a few others. We always provide context and explanation for the cultural significance.",
      },
      {
        question: "Are parents invited to events?",
        answer:
          "For major celebrations, we sometimes invite families and community members. This helps create connections between school and home, and allows parents to see what we're learning. Details are provided for each specific event.",
      },
    ],
  },
  {
    title: "Community & Values",
    icon: Heart,
    questions: [
      {
        question: "What does 'Vasudhaiva Kutumbakam' mean?",
        answer:
          "'Vasudhaiva Kutumbakam' means 'the world is one family.' This ancient Sanskrit phrase captures our core belief that despite our differences, we are all connected. It guides our inclusive approach and our commitment to building bridges between communities.",
      },
      {
        question: "How do you handle different interpretations of Hinduism?",
        answer:
          "We acknowledge that Hinduism is diverse with many traditions and interpretations. We focus on common values like compassion, respect, and service while being open about this diversity. We present information as 'one perspective' rather than absolute truth.",
      },
      {
        question: "Do you work with other religious clubs?",
        answer:
          "We believe that understanding between different faith communities strengthens our entire school. These collaborations embody our 'world is one family' philosophy.",
      },
      {
        question: "How do you ensure the club remains welcoming?",
        answer:
          "We have clear guidelines about respectful discussion, inclusive language, and voluntary participation. Our execs are trained to facilitate welcoming environments, and we regularly check in with members about their experience.",
      },
    ],
  },
]

export default function FAQPage() {
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
                <HelpCircle className="w-8 h-8 text-orange-600" />
                <h1 className="text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h1>
              </div>
              <p className="text-xl text-muted-foreground text-pretty">
                Find answers to common questions about the Hindu Heritage Club. If you don't see your question here,
                feel free to contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqSections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-orange-600" />
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>

                  <Card>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {section.questions.map((faq, index) => (
                          <AccordionItem
                            key={`${sectionIndex}-${index}`}
                            value={`${sectionIndex}-${index}`}
                            className="border-b last:border-b-0"
                          >
                            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                              <span className="font-medium text-base">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <MessageCircle className="w-12 h-12 text-orange-600 mx-auto" />
              <h2 className="text-3xl font-bold">Still Have Questions?</h2>
              <p className="text-muted-foreground text-lg">
                We're here to help! Reach out to us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/events">Join Our Next Meeting</Link>
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
