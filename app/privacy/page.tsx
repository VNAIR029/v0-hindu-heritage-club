import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Users, FileText } from "lucide-react"

export default function PrivacyPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                How we collect, use, and protect your information as a student club at Colonel By Secondary School.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 kesari-accent">Student Privacy First</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                      As a student club, we are committed to protecting your privacy and following all school board
                      policies regarding student information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold mb-0">Information We Collect</h2>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Membership Information</h3>
                    <ul className="space-y-2">
                      <li>Name and grade level</li>
                      <li>School email address</li>
                      <li>Areas of interest (optional)</li>
                      <li>Emergency contact information (for events only)</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Event Participation</h3>
                    <ul className="space-y-2">
                      <li>Attendance records for club activities</li>
                      <li>RSVP responses for special events</li>
                      <li>Dietary restrictions or accessibility needs</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Media Consent</h3>
                    <ul className="space-y-2">
                      <li>Photo and video consent for club activities</li>
                      <li>Permission to use images on school-approved platforms</li>
                      <li>Opt-out preferences for media sharing</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold mb-0">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Club Communication</h3>
                    <ul className="space-y-2">
                      <li>Sending meeting reminders and event announcements</li>
                      <li>Sharing educational resources and materials</li>
                      <li>Coordinating volunteer opportunities</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Event Organization</h3>
                    <ul className="space-y-2">
                      <li>Planning appropriate activities and accommodations</li>
                      <li>Ensuring student safety during club events</li>
                      <li>Coordinating with school administration</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Academic Support</h3>
                    <ul className="space-y-2">
                      <li>Providing study materials and resources</li>
                      <li>Organizing study groups and discussion circles</li>
                      <li>Connecting students with similar interests</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold mb-0">Information Protection</h2>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Data Security</h3>
                    <ul className="space-y-2">
                      <li>All student information is stored securely within school-approved systems</li>
                      <li>Access is limited to club officers and faculty advisor only</li>
                      <li>No personal information is shared with external organizations</li>
                      <li>Regular review and deletion of outdated information</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Media Consent</h3>
                    <ul className="space-y-2">
                      <li>Photos and videos are only taken with explicit consent</li>
                      <li>Students can opt out of media sharing at any time</li>
                      <li>Images are only used for school-approved purposes</li>
                      <li>Parents/guardians are notified of media use for students under 18</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold mb-0">Your Rights</h2>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Access and Control</h3>
                    <ul className="space-y-2">
                      <li>Request to see what information we have about you</li>
                      <li>Update or correct your personal information</li>
                      <li>Withdraw consent for media use</li>
                      <li>Request deletion of your information when leaving the club</li>
                    </ul>

                    <h3 className="text-xl font-semibold">Parental Rights (Under 18)</h3>
                    <ul className="space-y-2">
                      <li>Parents/guardians can request information about their child's participation</li>
                      <li>Consent required for certain activities and media sharing</li>
                      <li>Right to withdraw child from club activities</li>
                    </ul>
                  </div>
                </section>

                <section className="text-sm text-muted-foreground border-t pt-8">
                  <p>
                    <strong>Last Updated:</strong> September 2024
                  </p>
                  <p>
                    This privacy policy is subject to the Ottawa-Carleton District School Board's privacy policies and
                    procedures. For more information about student privacy rights, please consult the OCDSB website or
                    contact the school directly.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
