'use client'
import { buildAmazonLink } from '@/lib/currency'
import { useCurrency } from '@/lib/CurrencyContext'

export default function ShopPage() {
  const { config } = useCurrency()

  const categories = [
    { title: 'Luggage & Suitcases', search: 'travel luggage suitcase hard shell', emoji: '🧳', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', desc: 'Hard shell, soft case, carry-on and checked luggage' },
    { title: 'Packing Cubes', search: 'packing cubes travel organiser', emoji: '📦', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80', desc: 'Compression packing cubes and travel organisers' },
    { title: 'Universal Adapters', search: 'universal travel adapter multi port USB', emoji: '🔌', image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80', desc: 'Stay charged in 150+ countries' },
    { title: 'Noise-Cancelling Headphones', search: 'noise cancelling headphones travel', emoji: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', desc: 'Block engine noise on long-haul flights' },
    { title: 'Portable Chargers', search: 'portable charger power bank travel', emoji: '🔋', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80', desc: 'Compact power banks for all devices' },
    { title: 'Travel Wallets', search: 'travel wallet passport holder RFID', emoji: '📔', image: 'https://images.unsplash.com/photo-1517456093218-f9d8ed22b6e7?w=400&q=80', desc: 'RFID-blocking passport holders and wallets' },
    { title: 'Toiletry Bags', search: 'travel toiletry bag TSA approved', emoji: '🪥', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80', desc: 'TSA-approved toiletry and wash bags' },
    { title: 'Neck Pillows', search: 'travel neck pillow memory foam sleep mask', emoji: '😴', image: 'https://images.unsplash.com/photo-1520080816374-2f1d8e5c0b40?w=400&q=80', desc: 'Memory foam pillows and blackout eye masks' },
    { title: 'Travel Backpacks', search: 'travel backpack carry on cabin bag', emoji: '🎒', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', desc: 'Cabin-approved backpacks for weekend breaks' },
    { title: 'Water Bottles', search: 'insulated water bottle travel', emoji: '💧', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', desc: 'Insulated stainless steel water bottles' },
    { title: 'Camera Gear', search: 'travel camera action camera accessories', emoji: '📸', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', desc: 'Action cameras, gimbals and accessories' },
    { title: 'Luggage Scales & Locks', search: 'luggage scale TSA lock travel', emoji: '⚖️', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80', desc: 'Avoid overweight fees with digital scales' },
  ]

  const regionLabel = config.amazonRegion === 'UK' ? '🇬🇧 Amazon UK' : config.amazonRegion === 'US' ? '🇺🇸 Amazon US' : `🇪🇺 Amazon ${config.amazonRegion}`

  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Shop</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Pack Smart. <span className="text-gold-gradient">Travel Better.</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto mb-2">
            Curated travel gear for every journey. Luggage, tech, accessories and essentials — all sourced from trusted sellers.
          </p>
          <p className="text-xs text-tralvana-muted">
            Currently showing products for {regionLabel} based on your location.
          </p>
        </div>

        {/* Currency region toggle */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { label: '🇬🇧 UK', region: 'UK' },
            { label: '🇺🇸 USA', region: 'US' },
            { label: '🇩🇪 Germany', region: 'DE' },
            { label: '🇫🇷 France', region: 'FR' },
            { label: '🇪🇸 Spain', region: 'ES' },
            { label: '🇮🇹 Italy', region: 'IT' },
          ].map((r) => (
            <span key={r.region} className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer transition-all ${config.amazonRegion === r.region ? 'border-tralvana-gold text-tralvana-gold' : 'border-tralvana-border text-tralvana-muted'}`}>
              {r.label}
            </span>
          ))}
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={buildAmazonLink('', config.amazonRegion, cat.search)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group glass-card rounded-2xl gold-border hover-lift overflow-hidden flex flex-col"
            >
              <img
                src={cat.image}
                alt={cat.title}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px 8px 0 0', marginBottom: '12px' }}
              />
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-xs text-tralvana-muted group-hover:text-tralvana-gold transition-colors">Shop →</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1 group-hover:text-tralvana-gold transition-colors">{cat.title}</h3>
                  <p className="text-tralvana-muted text-sm leading-relaxed">{cat.desc}</p>
                </div>
                <div className="text-xs text-tralvana-gold font-medium mt-auto">
                  View on {regionLabel}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Amazon Disclosure */}
        <div className="glass-card rounded-xl p-4 gold-border text-center">
          <p className="text-xs text-tralvana-muted">
            <span className="text-tralvana-gold font-medium">Amazon Associates Disclosure:</span> As an Amazon Associate, Tralvana earns from qualifying purchases through these links. Prices and availability are shown on Amazon and may vary. You pay the same price — we earn a small commission that helps keep Tralvana free to use.
          </p>
        </div>
      </div>
    </div>
  )
}
