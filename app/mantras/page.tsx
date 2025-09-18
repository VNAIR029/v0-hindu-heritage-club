import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AudioPlayer } from "@/components/audio-player"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

const mantras = [
  {
    id: "om-namah-shivaya",
    title: "Om Namah Śivāya",
    devanagari: "ॐ नमः शिवाय",
    transliteration: "Om Namaḥ Śivāya",
    translation: "I bow to Shiva",
    description: "A simple 3–5 minute breathing and chanting practice is recommended for beginners.",
    longDescription:
      "This is one of the most popular Hindu mantras and the most important mantra in Shaivism. It means 'I bow to Shiva' and is considered a powerful tool for spiritual transformation.",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    tags: ["Beginner", "Shaivism", "Meditation"],
    practiceNotes: [
      "Sit comfortably with your spine straight",
      "Take a few deep breaths to center yourself",
      "Chant slowly and mindfully, focusing on each syllable",
      "Allow the vibrations to resonate throughout your body",
      "Practice for 3-5 minutes initially, gradually increasing duration",
    ],
  },
  {
    id: "om-gam-ganapataye",
    title: "Om Gam Gaṇapataye Namaḥ",
    devanagari: "ॐ गं गणपतये नमः",
    transliteration: "Om Gaṃ Gaṇapataye Namaḥ",
    translation: "I bow to Lord Ganesha",
    description: "A mantra to invoke Lord Ganesha, the remover of obstacles and patron of arts and sciences.",
    longDescription:
      "This mantra is traditionally chanted at the beginning of any new endeavor, study, or spiritual practice. Ganesha is revered as the remover of obstacles and the patron of arts and sciences.",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    tags: ["Beginner", "New Beginnings", "Study"],
    practiceNotes: [
      "Perfect for starting new projects or studies",
      "Chant before important exams or meetings",
      "Focus on the 'Gam' seed syllable for Ganesha's energy",
      "Visualize obstacles being removed from your path",
    ],
  },
  {
    id: "gayatri-mantra",
    title: "Gāyatrī Mantra",
    devanagari: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
    transliteration: "Om Bhūr Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt",
    translation: "We meditate on the divine light of the Sun; may it illuminate our minds",
    description: "One of the most sacred mantras in Hinduism, traditionally chanted at sunrise and sunset.",
    longDescription:
      "The Gayatri Mantra is considered the mother of all mantras and is one of the most sacred verses from the Vedas. It is a prayer for enlightenment and is traditionally chanted during the three sandhyas (dawn, noon, and dusk).",
    audioSrc: "/abstract-soundscape.png",
    downloadUrl: "#",
    tags: ["Advanced", "Vedic", "Daily Practice"],
    practiceNotes: [
      "Best practiced at sunrise, noon, or sunset",
      "Requires proper pronunciation - consider learning from a teacher",
      "Traditionally chanted 108 times using a mala",
      "Face east during morning practice, west during evening",
    ],
  },
]

export default function MantrasPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Mantras</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Sacred chants and their meanings. Each mantra includes Devanagari script, transliteration, translation,
                and audio guidance for proper pronunciation.
              </p>
            </div>
          </div>
        </section>

        {/* Mantras Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mantras.map((mantra) => (
                <Card key={mantra.id} className="h-fit">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{mantra.title}</CardTitle>
                        <CardDescription className="text-lg devanagari">{mantra.devanagari}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {mantra.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Transliteration and Translation */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Transliteration</h4>
                        <p className="text-lg font-medium">{mantra.transliteration}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Translation</h4>
                        <p className="text-base">{mantra.translation}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-muted-foreground">{mantra.longDescription}</p>
                    </div>

                    {/* Audio Player */}
                    <AudioPlayer
                      src={mantra.audioSrc}
                      title={`${mantra.title} Audio`}
                      downloadUrl={mantra.downloadUrl}
                    />

                    {/* Practice Notes */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Practice Notes
                      </h4>
                      <ul className="space-y-2">
                        {mantra.practiceNotes.map((note, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                            {note}
                          </li>
                        ))}
                      </ul>
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
              <h2 className="text-3xl font-bold">Explore More Resources</h2>
              <p className="text-muted-foreground">
                Continue your spiritual journey with our collection of stotrams, videos, and study materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/stotrams">Explore Stotrams</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/videos">Watch Videos</Link>
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
