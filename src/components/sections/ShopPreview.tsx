'use client'
import { ShoppingBag, ExternalLink } from 'lucide-react'
import { useCurrency } from '@/lib/CurrencyContext'
import { buildAmazonLink } from '@/lib/currency'
import Link from 'next/link'

const shopCategories = [
  {
    title: 'Luggage & Bags',
    searchTerm: 'travel luggage suitcase',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    description: 'Hard shell, soft case, carry-on and checked luggage for every journey',
  },
  {
    title: 'Travel Accessories',
    searchTerm: 'travel accessories packing cubes',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80',
    description: 'Packing cubes, travel pillows, organisers and essential travel gear',
  },
  {
    title: 'Universal Adapters',
    searchTerm: 'universal travel adapter',
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80',
    description: 'Stay charged in 150+ countries with multi-port travel adapters',
  },
  {
    title: 'Travel Tech',
    searchTerm: 'travel tech portable charger noise cancelling headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    description: 'Headphones, power banks, trackers and smart travel gadgets',
  },
  {
    title: 'Travel Wallets',
    searchTerm: 'travel wallet passport holder',
    image: 'https://images.unsplash.com/photo-1517456093218-f9d8ed22b6e7?w=400&q=80',
    description: 'Passport holders, money belts and RFID-blocking travel wallets',
  },
  {
    title: 'Toiletry Bags',
    searchTerm: 'travel toiletry bag TSA approved',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80',
    description: 'TSA-approved toiletry bags and travel-size containers',
  },
]

export default function ShopPreview() {
  const { config } = useCurrency()

  return (
    <section className="section-padding px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-tralvana-gold" />
              <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Shop</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Pack Smart.
              <br />
              <span className="text-gold-gradient">Travel Better.</span>
            </h2>
            <p className="text-tralvana-muted mt-2 text-sm">
              Curated travel gear — shipping to {config.code === 'GBP' ? 'UK' : config.code === 'USD' ? 'US' : 'Europe'} via Amazon
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-tralvana-gold text-sm font-medium border border-tralvana-gold/30 px-5 py-2.5 rounded-xl hover:border-tralvana-gold transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Full Shop
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shopCategories.map((cat) => (
            <a
              key={cat.title}
              href={buildAmazonLink('', config.amazonRegion, cat.searchTerm)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group glass-card rounded-2xl overflow-hidden hover-lift gold-border"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/60 to-transparent" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-tralvana-gold rounded-full p-1.5">
                    <ExternalLink className="w-3 h-3 text-tralvana-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-white text-base mb-1 group-hover:text-tralvana-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-tralvana-muted text-xs leading-relaxed">{cat.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-tralvana-gold font-medium">
                  Shop on Amazon {config.amazonRegion === 'UK' ? '🇬🇧' : config.amazonRegion === 'US' ? '🇺🇸' : '🇪🇺'}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Amazon Disclosure */}
        <p className="mt-6 text-center text-xs text-tralvana-muted">
          As Amazon Associates, we earn from qualifying purchases. Prices and availability vary by region.
        </p>
      </div>
    </section>
  )
}
