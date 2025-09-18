import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Hindu Heritage Club Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-lg font-semibold">Hindu Heritage Club</h3>
                <p className="text-sm text-muted-foreground">Colonel By Secondary School</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              A welcoming space where students explore and celebrate Sanātana Dharma's culture, values and philosophy.
              <span className="block mt-2 font-medium kesari-accent">
                Vasudhaiva Kutumbakam — the world is one family.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/mantras" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mantras
                </Link>
              </li>
              <li>
                <Link href="/stotrams" className="text-muted-foreground hover:text-foreground transition-colors">
                  Stotrams
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Colonel By Secondary School</li>
              <li>2381 Ogilvie Rd</li>
              <li>Gloucester, ON K1J 7N4</li>
              <li className="pt-2">
                <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Join the Club →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Hindu Heritage Club of Colonel By Secondary School. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/code-of-conduct"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
