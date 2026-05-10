import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'

export const metadata = {
  title: 'Search Flights | Tralvana',
  description: 'Search and compare flights worldwide. Africa, Caribbean, Europe, Americas and beyond.',
}

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Book Flights</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Fly <span className="text-gold-gradient">Anywhere</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            Search 500+ airlines worldwide. Africa, Caribbean, Europe, Americas and beyond.
            Compare prices and book in seconds.
          </p>
        </div>

        {/* Main Flight Search — Aviasales 50% commission */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            ✈ Search Flights
            <span className="text-xs text-tralvana-gold font-normal">Powered by Aviasales</span>
          </h2>
          <TravelpayoutsWidget
            src={WIDGETS.flightsAviasales}
            minHeight="200px"
          />
        </div>

        {/* Popular Routes Widget */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-6">
          <h2 className="text-white font-semibold mb-4">🔥 Popular Routes</h2>
          <TravelpayoutsWidget
            src={WIDGETS.flightsPopularRoutes}
            minHeight="200px"
          />
        </div>

        {/* Schedule Widget */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-10">
          <h2 className="text-white font-semibold mb-4">📅 Flight Schedule — London to Bangkok</h2>
          <p className="text-tralvana-muted text-xs mb-4">
            Sample route — customise via your Travelpayouts dashboard to show your most popular routes
          </p>
          <TravelpayoutsWidget
            src={WIDGETS.flightsSchedule}
            minHeight="200px"
          />
        </div>

        {/* Popular Destinations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { city: 'Lagos', country: 'Nigeria', emoji: '🇳🇬' },
            { city: 'Kingston', country: 'Jamaica', emoji: '🇯🇲' },
            { city: 'Accra', country: 'Ghana', emoji: '🇬🇭' },
            { city: 'New York', country: 'USA', emoji: '🇺🇸' },
            { city: 'Dubai', country: 'UAE', emoji: '🇦🇪' },
            { city: 'Nairobi', country: 'Kenya', emoji: '🇰🇪' },
            { city: 'Paris', country: 'France', emoji: '🇫🇷' },
            { city: 'Bridgetown', country: 'Barbados', emoji: '🇧🇧' },
          ].map((dest) => (
            <div key={dest.city} className="glass-card rounded-xl p-4 gold-border text-center hover-lift cursor-pointer">
              <div className="text-2xl mb-2">{dest.emoji}</div>
              <div className="text-white font-medium text-sm">{dest.city}</div>
              <div className="text-tralvana-muted text-xs">{dest.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
