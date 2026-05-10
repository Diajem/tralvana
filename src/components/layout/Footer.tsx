import Link from 'next/link'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  'Travel': [
    { label: 'Flights', href: '/flights' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Car Hire', href: '/cars' },
    { label: 'Tours & Experiences', href: '/tours' },
    { label: 'Travel Insurance', href: '/insurance' },
    { label: 'Airport Transfers', href: '/transfers' },
    { label: 'Airport Parking', href: '/parking' },
  ],
  'Destinations': [
    { label: 'Caribbean', href: '/destinations/caribbean' },
    { label: 'Africa', href: '/destinations/africa' },
    { label: 'Europe', href: '/destinations/europe' },
    { label: 'Americas', href: '/destinations/americas' },
    { label: 'Asia Pacific', href: '/destinations/asia' },
    { label: 'Middle East', href: '/destinations/middle-east' },
    { label: '⚽ Sports Travel', href: '/sports' },
  ],
  'Tralvana': [
    { label: 'About Us', href: '/about' },
    { label: 'Tralvana TV', href: '/tv' },
    { label: 'Travel Blog', href: '/blog' },
    { label: 'Travel Shop', href: '/shop' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
  'Partners & Tools': [
    { label: 'Bee Parking Heathrow', href: 'https://www.awin1.com/cread.php?awinmid=121428&awinaffid=1773696', external: true },
    { label: 'WorldSIM Travel SIM', href: 'https://www.awin1.com/cread.php?awinmid=104675&awinaffid=1773696', external: true },
    { label: 'TTfone Travel Phones', href: 'https://www.awin1.com/cread.php?awinmid=28737&awinaffid=1773696', external: true },
    { label: 'Travel eSIM', href: '/esim' },
    { label: 'Currency Converter', href: '/tools/currency' },
    { label: 'Travel Checklist', href: '/tools/checklist' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-tralvana-dark border-t border-tralvana-border">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Tralvana"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-tralvana-muted text-sm leading-relaxed mb-6">
              Your World Starts Here. Premium travel booking for flights, hotels, tours and experiences across Africa, Caribbean, Europe, Americas and beyond.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-tralvana-border flex items-center justify-center text-tralvana-muted hover:text-tralvana-gold hover:border-tralvana-gold transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-tralvana-gold mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-sm text-tralvana-muted hover:text-tralvana-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-tralvana-muted hover:text-tralvana-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliate Disclosure Bar */}
      <div className="border-t border-tralvana-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-tralvana-muted text-center leading-relaxed">
            <span className="text-tralvana-gold font-medium">Affiliate Disclosure:</span> Tralvana earns commissions from partner bookings through Expedia, Travelpayouts, Awin, Amazon Associates and other affiliate programmes. This does not affect our editorial independence or the price you pay.{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-tralvana-gold">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-tralvana-border bg-tralvana-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-tralvana-muted">
            © {new Date().getFullYear()} Tralvana. All rights reserved.
          </p>
          <p className="text-xs text-tralvana-muted">
            Built by{' '}
            <a
              href="https://diajemmarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tralvana-gold hover:underline"
            >
              Diajem Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
