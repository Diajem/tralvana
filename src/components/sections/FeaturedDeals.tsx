// FeaturedDeals.tsx
'use client'
import { useCurrency } from '@/lib/CurrencyContext'
import { formatPrice } from '@/lib/currency'
import { AFFILIATES } from '@/lib/affiliates'
import { Star, ArrowRight } from 'lucide-react'

const deals = [
  {
    id: 1,
    type: 'Hotel',
    name: 'Sandals Royal Barbados',
    location: 'Barbados, Caribbean',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    priceGBP: 1299,
    priceUSD: 1649,
    priceEUR: 1499,
    rating: 5,
    nights: 7,
    tag: 'All Inclusive',
    href: 'https://expedia.com/affiliate/mZObD29',
  },
  {
    id: 2,
    type: 'Safari Package',
    name: 'Serengeti & Zanzibar',
    location: 'Tanzania, Africa',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
    priceGBP: 2499,
    priceUSD: 3149,
    priceEUR: 2899,
    rating: 5,
    nights: 10,
    tag: 'Premium Safari',
    href: 'https://expedia.com/affiliate/mZObD29',
  },
  {
    id: 3,
    type: 'City Break',
    name: 'Paris City Escape',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
    priceGBP: 399,
    priceUSD: 499,
    priceEUR: 449,
    rating: 4,
    nights: 3,
    tag: 'Weekend Break',
    href: 'https://expedia.com/affiliate/mZObD29',
  },
  {
    id: 4,
    type: 'Cruise',
    name: 'Caribbean Island Hopper',
    location: 'Multiple Islands',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80',
    priceGBP: 1799,
    priceUSD: 2299,
    priceEUR: 2099,
    rating: 5,
    nights: 14,
    tag: 'Cruise Package',
    href: 'https://expedia.com/affiliate/mZObD29',
  },
]

export default function FeaturedDeals() {
  const { config } = useCurrency()

  const getPrice = (deal: typeof deals[0]) => {
    if (config.code === 'GBP') return formatPrice(deal.priceGBP, 'GBP')
    if (config.code === 'USD') return formatPrice(deal.priceUSD, 'USD')
    return formatPrice(deal.priceEUR, 'EUR')
  }

  return (
    <section className="section-padding px-4 bg-tralvana-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-tralvana-gold" />
              <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Deals</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Featured <span className="text-gold-gradient">Packages</span>
            </h2>
          </div>
          <a href={AFFILIATES.expedia.base} target="_blank" rel="noopener noreferrer sponsored"
            className="hidden md:flex items-center gap-2 text-tralvana-gold text-sm font-medium hover:gap-3 transition-all">
            All Deals <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map((deal) => (
            <a key={deal.id} href={deal.href} target="_blank" rel="noopener noreferrer sponsored"
              className="group glass-card rounded-2xl overflow-hidden hover-lift gold-border">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${deal.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-tralvana-gold text-tralvana-black font-semibold">{deal.tag}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-tralvana-muted text-xs mb-1">{deal.type} · {deal.location}</p>
                <h3 className="font-display font-semibold text-white mb-2 group-hover:text-tralvana-gold transition-colors">{deal.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: deal.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-tralvana-gold text-tralvana-gold" />
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-tralvana-muted">From</p>
                    <p className="font-bold text-tralvana-gold text-lg">{getPrice(deal)}</p>
                    <p className="text-xs text-tralvana-muted">per person · {deal.nights} nights</p>
                  </div>
                  <div className="text-xs text-tralvana-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Book →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
