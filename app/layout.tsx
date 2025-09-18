import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hindu Heritage Club — Colonel By Secondary School",
  description:
    "A welcoming space where students explore and celebrate Sanātana Dharma's culture, values and philosophy. All students are invited to learn; participation is voluntary.",
  generator: "v0.app",
  keywords: [
    "Hindu Heritage Club",
    "Colonel By Secondary School",
    "Sanātana Dharma",
    "culture",
    "philosophy",
    "student club",
  ],
  authors: [{ name: "Hindu Heritage Club" }],
  openGraph: {
    title: "Hindu Heritage Club — Colonel By Secondary School",
    description:
      "A welcoming space where students explore and celebrate Sanātana Dharma's culture, values and philosophy.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${poppins.variable} ${inter.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
