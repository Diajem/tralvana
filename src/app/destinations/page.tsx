import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destinations | Tralvana',
  description: 'Explore the world with Tralvana. Caribbean, Africa, Europe, Americas, Asia Pacific, Middle East and Sports Travel.',
}

const regions = [
  {
    id: 'caribbean',
    label: 'Caribbean',
    subtitle: 'Jamaica · Barbados · Bahamas · Antigua · St Lucia · Trinidad',
    image: '/image/WhatsApp%20Image%202026-05-10%20at%2010.43.41.jpeg',
    href: '/destinations/caribbean',
    tag: 'Beach & Island',
    flag: '🌴',
  },
  {
    id: 'africa',
    label: 'Africa',
    subtitle: 'Nigeria · Ghana · Kenya · South Africa · Tanzania · Morocco',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    href: '/destinations/africa',
    tag: 'Safari & Culture',
    flag: '🌍',
  },
  {
    id: 'europe',
    label: 'Europe',
    subtitle: 'Paris · Rome · Barcelona · Amsterdam · Lisbon · Santorini',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    href: '/destinations/europe',
    tag: 'City & Culture',
    flag: '🏛️',
  },
  {
    id: 'americas',
    label: 'The Americas',
    subtitle: 'New York · Miami · Toronto · Cancun · Rio · Havana',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
    href: '/destinations/americas',
    tag: 'City & Adventure',
    flag: '🗽',
  },
  {
    id: 'asia',
    label: 'Asia Pacific',
    subtitle: 'Bangkok · Bali · Tokyo · Singapore · Sydney · Phuket',
    image: 'https://images.unsplash.com/photo-1535139262971-ab8d5d6c8ec9?w=800&q=80',
    href: '/destinations/asia',
    tag: 'Luxury & Culture',
    flag: '🏯',
  },
  {
    id: 'middle-east',
    label: 'Middle East',
    subtitle: 'Dubai · Abu Dhabi · Doha · Istanbul · Riyadh',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    href: '/destinations/middle-east',
    tag: 'Luxury & Modern',
    flag: '🕌',
  },
  {
    id: 'sports',
    label: 'Sports Travel',
    subtitle: 'Premier League · Champions League · World Cup · NFL London',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    href: '/sports',
    tag: 'Coming Soon',
    flag: '⚽',
  },
]

export default function DestinationsPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero banner */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: '40vh', minHeight: '280px',
          backgroundImage: 'url(/image/WhatsApp%20Image%202026-05-10%20at%2010.43.30.jpeg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          marginTop: '64px',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>Tralvana</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Where Do You Want To Go?
          </h1>
          <p className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Flights, hotels, tours and experiences across 6 regions worldwide
          </p>
        </div>
      </div>

      {/* Region grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link
              key={region.id}
              href={region.href}
              className="group block rounded-2xl overflow-hidden transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${region.image})`,
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#C9A84C', color: '#0A0A0F' }}>
                    {region.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-3xl">{region.flag}</div>
              </div>

              {/* Content */}
              <div className="p-5" style={{ background: '#FFFFFF' }}>
                <h2 className="font-display font-bold text-xl mb-1" style={{ color: '#1F2937' }}>
                  {region.label}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {region.subtitle}
                </p>
                <div className="mt-3 text-sm font-medium" style={{ color: '#C9A84C' }}>
                  Explore {region.label} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
