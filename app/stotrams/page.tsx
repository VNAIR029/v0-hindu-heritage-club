import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AudioPlayer } from "@/components/audio-player"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, BookOpen } from "lucide-react"

const stotrams = [
  {
    id: "hanuman-chalisa",
    title: "Hanuman Chalisa",
    devanagari: "हनुमान चालीसा",
    transliteration: "Hanumān Cālīsā",
    translation: "Forty Verses in Praise of Hanuman",
    description: "A devotional hymn dedicated to Lord Hanuman, consisting of forty verses.",
    excerpt: "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि। बरनउं रघुवर बिमल जसु, जो दायकु फल चारि।।",
    excerptTranslation:
      "With the dust of my Guru's lotus feet, I cleanse the mirror of my mind, and then narrate the pure fame of Raghuvar, which bestows the four fruits of life.",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    pdfUrl: "#",
    tags: ["Devotional", "Hanuman", "Popular"],
    benefits: [
      "Removes obstacles and fears",
      "Increases courage and strength",
      "Provides protection from negative energies",
      "Enhances devotion and spiritual growth",
    ],
  },
  {
    id: "vishnu-sahasranama",
    title: "Viṣṇu Sahasranāma",
    devanagari: "विष्णु सहस्रनाम",
    transliteration: "Viṣṇu Sahasranāma",
    translation: "The Thousand Names of Vishnu",
    description: "A sacred hymn containing 1000 names of Lord Vishnu, found in the Mahabharata.",
    excerpt: "विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः। भूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः।।",
    excerptTranslation:
      "He is the Universe, He is Vishnu, He is the Vedic sound Vashat, He is the Lord of past, present and future...",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    pdfUrl: "#",
    tags: ["Advanced", "Vishnu", "Vedic"],
    benefits: [
      "Purifies the mind and heart",
      "Brings peace and prosperity",
      "Enhances spiritual knowledge",
      "Provides divine protection",
    ],
  },
  {
    id: "shiva-ashtakam",
    title: "Śiva Aṣṭakam",
    devanagari: "शिव अष्टकम्",
    transliteration: "Śiva Aṣṭakam",
    translation: "Eight Verses in Praise of Shiva",
    description: "A beautiful hymn of eight verses dedicated to Lord Shiva, highlighting his divine qualities.",
    excerpt: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि।।",
    excerptTranslation:
      "I bow to Shiva, who is white like camphor, the embodiment of compassion, the essence of the world, who wears the king of serpents as a garland...",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    pdfUrl: "#",
    tags: ["Intermediate", "Shiva", "Meditation"],
    benefits: [
      "Calms the mind and reduces stress",
      "Enhances meditation practice",
      "Develops devotion to Lord Shiva",
      "Brings inner peace and clarity",
    ],
  },
]

export default function StotramsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Stotrams & Ashtakams</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Devotional hymns and prayers with translations, audio recitations, and downloadable resources. Each
                stotram includes practice guidance and spiritual benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Stotrams List */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {stotrams.map((stotram, index) => (
                <Card key={stotram.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl lg:text-3xl">{stotram.title}</CardTitle>
                        <CardDescription className="text-lg devanagari">{stotram.devanagari}</CardDescription>
                        <p className="text-base text-muted-foreground">{stotram.transliteration}</p>
                        <p className="text-sm font-medium">{stotram.translation}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stotram.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Text Content */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Description</h4>
                          <p className="text-muted-foreground">{stotram.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">Sample Verse</h4>
                          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                            <p className="text-lg devanagari leading-relaxed">{stotram.excerpt}</p>
                            <p className="text-sm text-muted-foreground italic">{stotram.excerptTranslation}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Spiritual Benefits
                          </h4>
                          <ul className="space-y-2">
                            {stotram.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Audio & Downloads */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Audio Recitation</h4>
                          <AudioPlayer
                            src={stotram.audioSrc}
                            title={`${stotram.title} Recitation`}
                            downloadUrl={stotram.downloadUrl}
                          />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">Downloads</h4>
                          <div className="space-y-3">
                            <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                              <a href={stotram.pdfUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF (Sanskrit & Translation)
                              </a>
                            </Button>
                            <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                              <a href={stotram.downloadUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Download Audio (MP3)
                              </a>
                            </Button>
                          </div>
                        </div>

                        <div className="bg-primary/5 rounded-lg p-4">
                          <h5 className="font-medium mb-2">Practice Tip</h5>
                          <p className="text-sm text-muted-foreground">
                            Start by listening to the audio while following along with the text. Focus on pronunciation
                            first, then gradually incorporate the meaning into your practice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Continue Your Journey</h2>
              <p className="text-muted-foreground">
                Explore our other resources to deepen your understanding and practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/mantras">Learn Mantras</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/study">Study Corner</Link>
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
