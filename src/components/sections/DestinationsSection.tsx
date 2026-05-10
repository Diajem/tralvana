'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 'caribbean',
    label: 'Caribbean',
    subtitle: 'Jamaica · Barbados · Bahamas · Antigua',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    href: '/destinations/caribbean',
    tag: 'Beach & Island',
  },
  {
    id: 'africa',
    label: 'Africa',
    subtitle: 'Kenya · Ghana · South Africa · Tanzania',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    href: '/destinations/africa',
    tag: 'Safari & Culture',
  },
  {
    id: 'europe',
    label: 'Europe',
    subtitle: 'Paris · Rome · Barcelona · Amsterdam',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    href: '/destinations/europe',
    tag: 'City & Culture',
  },
  {
    id: 'americas',
    label: 'Americas',
    subtitle: 'New York · Miami · Toronto · Cancun',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
    href: '/destinations/americas',
    tag: 'City & Adventure',
  },
  {
    id: 'asia',
    label: 'Asia Pacific',
    subtitle: 'Dubai · Bangkok · Bali · Tokyo',
    image: 'https://images.unsplash.com/photo-1535139262971-ab8d5d6c8ec9?w=800&q=80',
    href: '/destinations/asia',
    tag: 'Luxury & Culture',
  },
  {
    id: 'middle-east',
    label: 'Middle East',
    subtitle: 'Dubai · Abu Dhabi · Doha · Istanbul',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    href: '/destinations/middle-east',
    tag: 'Luxury & Modern',
  },
]

export default function DestinationsSection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 px-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10" style={{ background: '#C9A84C' }} />
              <span className="text-sm uppercase tracking-widest font-medium" style={{ color: '#C9A84C' }}>Explore</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: '#1F2937' }}>
              Where Do You
              <br />
              <span className="text-gold-gradient">Want To Go?</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: '#C9A84C' }}
          >
            All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, index) => (
            <Link
              key={dest.id}
              href={dest.href}
              className={`dest-card group relative overflow-hidden rounded-2xl hover-lift gold-border ${
                index < 2 ? 'lg:row-span-1' : ''
              }`}
              style={{ height: index < 2 ? '340px' : '240px' }}
            >
              {/* Image */}
              <div
                className="dest-card-img absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 via-tralvana-black/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs px-3 py-1 rounded-full bg-tralvana-gold/20 border border-tralvana-gold/40 text-tralvana-gold font-medium backdrop-blur-sm">
                  {dest.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {dest.label}
                </h3>
                <p className="text-tralvana-muted text-sm mb-3">{dest.subtitle}</p>
                <div className="flex items-center gap-2 text-tralvana-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sports Travel Teaser */}
        <div className="mt-4">
          <Link
            href="/sports"
            className="block relative overflow-hidden rounded-2xl hover-lift gold-border"
            style={{ height: '120px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80)' }}
            />
            <div className="absolute inset-0 bg-tralvana-black/70" />
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div>
                <div className="text-2xl mb-1">⚽</div>
                <h3 className="font-display text-xl font-bold text-white">Sports Travel</h3>
                <p className="text-tralvana-muted text-sm">Premier League · Champions League · World Tours</p>
              </div>
              <div className="flex items-center gap-2 text-tralvana-gold font-medium">
                Coming Soon <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 md:hidden text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-tralvana-gold text-sm font-medium border border-tralvana-gold/30 px-6 py-3 rounded-xl hover:border-tralvana-gold transition-colors"
          >
            All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
