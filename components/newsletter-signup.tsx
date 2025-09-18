"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
          <h3 className="text-lg font-medium">Thank you for subscribing!</h3>
          <p className="text-sm text-muted-foreground">You'll receive updates about club events and activities.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <Mail className="w-8 h-8 text-orange-600 mx-auto mb-2" />
        <CardTitle>Stay Updated</CardTitle>
        <CardDescription>Get notified about club events, meetings, and important announcements.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newsletter-email">Email Address</Label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="your.email@ocdsb.ca"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter-consent" required />
            <Label htmlFor="newsletter-consent" className="text-sm">
              I agree to receive email updates from the Hindu Heritage Club
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe to Updates"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
