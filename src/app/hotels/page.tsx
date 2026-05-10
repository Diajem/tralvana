import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'

export const metadata = {
  title: 'Hotels | Tralvana',
  description: 'Search and book hotels worldwide. 2,000,000+ properties across every destination.',
}

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Hotels</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Stay <span className="text-gold-gradient">Anywhere</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            2,000,000+ hotels, resorts, hostels and apartments worldwide.
            Africa, Caribbean, Europe, Americas and beyond.
          </p>
        </div>

        {/* Agoda Widget — 6% commission */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            🏨 Search Hotels
            <span className="text-xs text-tralvana-gold font-normal">Powered by Agoda</span>
          </h2>
          <TravelpayoutsWidget
            src={WIDGETS.hotelsAgoda}
            minHeight="220px"
          />
        </div>

        {/* Popular Hotel Destinations */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { city: 'Montego Bay', tag: 'Jamaica', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80' },
            { city: 'Cape Town', tag: 'South Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80' },
            { city: 'Dubai', tag: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
            { city: 'Paris', tag: 'France', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80' },
            { city: 'New York', tag: 'USA', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80' },
            { city: 'Nairobi', tag: 'Kenya', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80' },
          ].map((dest) => (
            <div key={dest.city} className="relative overflow-hidden rounded-xl group cursor-pointer hover-lift gold-border" style={{ height: '160px' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${dest.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white font-display font-semibold">{dest.city}</div>
                <div className="text-tralvana-muted text-xs">{dest.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
