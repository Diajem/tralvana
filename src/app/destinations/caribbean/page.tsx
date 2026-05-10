import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import { AFFILIATES } from '@/lib/affiliates'
import Link from 'next/link'

export const metadata = {
  title: 'Caribbean Travel | Tralvana',
  description: 'Flights, hotels, tours and experiences across the Caribbean. Jamaica, Barbados, Bahamas, Antigua and more.',
}

const islands = [
  { name: 'Jamaica', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80', highlight: 'Negril · Montego Bay · Kingston' },
  { name: 'Barbados', image: 'https://images.unsplash.com/photo-1580902394724-b08ff9f97c46?w=400&q=80', highlight: 'Bridgetown · Oistins · Crane Beach' },
  { name: 'Bahamas', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80', highlight: 'Nassau · Paradise Island · Exumas' },
  { name: 'Antigua', image: 'https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?w=400&q=80', highlight: "St John's · English Harbour · 365 Beaches" },
  { name: 'Trinidad', image: 'https://images.unsplash.com/photo-1621544402532-78e18f72c67f?w=400&q=80', highlight: 'Port of Spain · Carnival · Maracas Bay' },
  { name: 'St Lucia', image: 'https://images.unsplash.com/photo-1524786828573-54c7d01ee32f?w=400&q=80', highlight: 'Castries · Pitons · Rodney Bay' },
]

export default function CaribbeanPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/image/WhatsApp%20Image%202026-05-10%20at%2010.43.41.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            The Caribbean
          </h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            Crystal waters, white sands, reggae rhythms and rum punch sunsets. Island life awaits.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">

        {/* Quick Search Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-6 mb-10">
          <div className="glass-card rounded-2xl p-4 gold-border">
            <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">✈ Search Flights <span className="text-xs text-tralvana-gold font-normal">Booking.com</span></h3>
            <TravelpayoutsWidget src="https://tpwdg.com/content?currency=gbp&trs=432320&shmarker=493614&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100" minHeight="180px" />
          </div>
          <div className="glass-card rounded-2xl p-4 gold-border">
            <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">🏨 Find Hotels <span className="text-xs text-tralvana-gold font-normal">Agoda</span></h3>
            <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="180px" />
          </div>
        </div>

        {/* Islands Grid */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Choose Your <span className="text-gold-gradient">Island</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {islands.map((island) => (
              <Link
                key={island.name}
                href={`/destinations/${island.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl hover-lift gold-border"
                style={{ height: '220px' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${island.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white mb-1">{island.name}</h3>
                  <p className="text-tralvana-muted text-xs">{island.highlight}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* GetYourGuide — Caribbean Tours */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            🎯 Things To Do In The Caribbean
            <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span>
          </h2>
          <TravelpayoutsWidget
            src={destinationWidget('Caribbean')}
            minHeight="280px"
          />
        </div>

        {/* Car Hire */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            🚗 Car Hire In The Caribbean
            <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span>
          </h2>
          <TravelpayoutsWidget
            src={WIDGETS.carsDiscover}
            minHeight="260px"
          />
        </div>

        {/* Goddiva — Holiday Fashion Card */}
        <a
          href="https://www.awin1.com/cread.php?s=3861519&v=2894&q=512085&r=1773696"
          target="_blank"
          rel="noopener noreferrer sponsored"
          style={{ display: 'block', textDecoration: 'none' }}
        >
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginTop: '40px', height: '200px' }}>
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
              alt="Goddiva Holiday Fashion"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
              display: 'flex', alignItems: 'center', padding: '32px', justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ color: '#C9A84C', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Holiday Fashion Partner</p>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>Goddiva</h3>
                <p style={{ color: '#E5E7EB', fontSize: '14px' }}>Dresses &amp; resort wear for your Caribbean holiday</p>
              </div>
              <div style={{ background: '#C9A84C', color: '#0A0A0F', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Shop Now →
              </div>
            </div>
          </div>
        </a>

        {/* Sandals Promo */}
        <div className="relative overflow-hidden rounded-2xl gold-border p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #16162A 0%, #1C1C35 100%)' }}>
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Sandals & Beaches All-Inclusive Resorts
          </h2>
          <p className="text-tralvana-muted mb-6 max-w-lg mx-auto text-sm">
            Jamaica, Barbados, Antigua, Bahamas, St Lucia, Grenada, Curaçao and Turks & Caicos.
            Unlimited luxury, dining, drinks and water sports — all included.
          </p>
          <a
            href={AFFILIATES.sandals.base}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex px-8 py-3 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm uppercase tracking-wider"
          >
            Explore Sandals Resorts
          </a>
        </div>

      </div>
    </div>
  )
}
