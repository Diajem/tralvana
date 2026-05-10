'use client'
import { buildAmazonLink } from '@/lib/currency'
import { useCurrency } from '@/lib/CurrencyContext'

export default function ShopPage() {
  const { config } = useCurrency()

  const categories = [
    { title: 'Luggage & Suitcases', search: 'travel luggage suitcase hard shell', emoji: '🧳', desc: 'Hard shell, soft case, carry-on and checked luggage for every journey and budget' },
    { title: 'Packing Cubes & Organisers', search: 'packing cubes travel organiser', emoji: '📦', desc: 'Keep your suitcase organised with compression packing cubes and travel organisers' },
    { title: 'Universal Travel Adapters', search: 'universal travel adapter multi port USB', emoji: '🔌', desc: 'Stay charged in 150+ countries with multi-port USB and USB-C travel adapters' },
    { title: 'Noise-Cancelling Headphones', search: 'noise cancelling headphones travel', emoji: '🎧', desc: 'Block out engine noise on long-haul flights with premium noise-cancelling headphones' },
    { title: 'Portable Chargers & Power Banks', search: 'portable charger power bank travel', emoji: '🔋', desc: 'Never run out of battery — compact power banks for phones, tablets and laptops' },
    { title: 'Travel Wallets & Passport Holders', search: 'travel wallet passport holder RFID', emoji: '📔', desc: 'RFID-blocking passport holders and travel wallets to keep documents safe' },
    { title: 'Toiletry & Wash Bags', search: 'travel toiletry bag TSA approved wash bag', emoji: '🪥', desc: 'TSA-approved toiletry bags, clear zip pouches and hanging wash bags' },
    { title: 'Luggage Scales & Locks', search: 'luggage scale TSA lock travel', emoji: '⚖️', desc: 'Avoid overweight baggage fees with digital luggage scales and TSA-approved locks' },
    { title: 'Neck Pillows & Sleep Masks', search: 'travel neck pillow memory foam sleep mask', emoji: '😴', desc: 'Sleep comfortably on long flights with memory foam neck pillows and blackout eye masks' },
    { title: 'Travel Backpacks', search: 'travel backpack carry on cabin bag', emoji: '🎒', desc: 'Cabin-approved travel backpacks for weekend breaks and carry-on only travel' },
    { title: 'Water Bottles & Hydration', search: 'insulated water bottle travel hydration', emoji: '💧', desc: 'Stay hydrated on the go with insulated stainless steel water bottles' },
    { title: 'Camera & Photography Gear', search: 'travel camera action camera accessories', emoji: '📸', desc: 'Capture every moment — action cameras, gimbals, camera bags and accessories' },
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
              className="group glass-card rounded-2xl p-5 gold-border hover-lift flex flex-col gap-3"
            >
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
