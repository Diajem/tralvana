import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'

export const metadata = {
  title: 'Tours & Experiences | Tralvana',
  description: 'Discover tours, activities and experiences worldwide. Africa safaris, Caribbean excursions, European city tours and more.',
}

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Tours & Experiences</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Explore The <span className="text-gold-gradient">World</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            Safaris, city tours, boat trips, cultural experiences, food tours and adventure activities.
            Book with free cancellation on most experiences.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <span className="text-tralvana-gold">✓ Free cancellation</span>
            <span className="text-tralvana-gold">✓ Worldwide coverage</span>
          </div>
        </div>

        {/* GoWithGuide — Local Guide Partner Card */}
        <div style={{
          margin: '0 0 32px 0',
          padding: '20px 24px',
          background: '#F0F7FF',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          border: '1px solid #BFDBFE'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '2rem' }}>🧭</div>
            <div>
              <div style={{ fontSize: '10px', color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3px' }}>
                Local Guide Partner
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1F2937', marginBottom: '3px' }}>
                GoWithGuide — Private Local Guides
              </div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                Book expert local guides in 100+ countries worldwide
              </div>
            </div>
          </div>
          <a
            href="https://www.awin1.com/cread.php?s=4750813&v=87121&q=496538&r=1773696"
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              background: '#1D4ED8',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            Find a Guide →
          </a>
        </div>

        {/* Auto-Update Widget — Top of page, self-managing */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold flex items-center gap-2">
              🌟 Recommended For You
              <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span>
            </h2>
            <span className="text-xs text-tralvana-muted bg-tralvana-card px-2 py-1 rounded-full">
              Auto-updated
            </span>
          </div>
          <TravelpayoutsWidget
            src={WIDGETS.toursAutoUpdate}
            minHeight="280px"
          />
        </div>

        {/* Two column — Popular Tours + City Things To Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Popular Tours */}
          <div className="glass-card rounded-2xl p-6 gold-border">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              🔥 Popular Tours
              <span className="text-xs text-tralvana-gold font-normal">Top rated worldwide</span>
            </h2>
            <TravelpayoutsWidget
              src={WIDGETS.toursPopular}
              minHeight="280px"
            />
          </div>

          {/* Things To Do In A City */}
          <div className="glass-card rounded-2xl p-6 gold-border">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              🗺 Things To Do
              <span className="text-xs text-tralvana-gold font-normal">City experiences</span>
            </h2>
            <TravelpayoutsWidget
              src={WIDGETS.toursCityThingsToDo}
              minHeight="280px"
            />
          </div>
        </div>

        {/* Tour Categories */}
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-white mb-6 text-center">
            Browse By <span className="text-gold-gradient">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Safari & Wildlife', emoji: '🦁', desc: 'Kenya, Tanzania, South Africa' },
              { label: 'Beach & Island', emoji: '🏖', desc: 'Jamaica, Barbados, Maldives' },
              { label: 'City Tours', emoji: '🏙', desc: 'London, Paris, New York, Dubai' },
              { label: 'Adventure', emoji: '🧗', desc: 'Hiking, zip-line, skydiving' },
              { label: 'Cultural Tours', emoji: '🎭', desc: 'History, art, heritage sites' },
              { label: 'Food & Drink', emoji: '🍜', desc: 'Food tours, cooking classes' },
              { label: 'Sports Events', emoji: '⚽', desc: 'Football, rugby, athletics' },
              { label: 'Cruises', emoji: '🚢', desc: 'Caribbean, Mediterranean, Nile' },
            ].map((cat) => (
              <a
                key={cat.label}
                href="/tours"
                className="group glass-card rounded-xl p-4 gold-border hover-lift text-center"
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="text-white text-sm font-medium group-hover:text-tralvana-gold transition-colors mb-1">
                  {cat.label}
                </div>
                <div className="text-tralvana-muted text-xs">{cat.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Destinations with Tours */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="font-display text-2xl font-bold text-white mb-6 text-center">
            Tours By <span className="text-gold-gradient">Destination</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Jamaica', 'Lagos', 'Accra', 'Nairobi', 'Cape Town',
              'London', 'Paris', 'Dubai', 'New York', 'Miami',
              'Barbados', 'Cancun', 'Zanzibar', 'Marrakech', 'Havana',
              'Barcelona', 'Amsterdam', 'Tokyo', 'Bangkok', 'Bali'
            ].map((dest) => (
              <a
                key={dest}
                href={`/destinations/${dest.toLowerCase()}`}
                className="px-4 py-2 rounded-full border border-tralvana-border text-tralvana-muted text-sm hover:border-tralvana-gold hover:text-tralvana-gold transition-all"
              >
                {dest}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
