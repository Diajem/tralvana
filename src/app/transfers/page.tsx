import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'

export const metadata = {
  title: 'Airport Transfers | Tralvana',
  description: 'Book reliable airport transfers worldwide. Private cars, shared shuttles and luxury chauffeur services from trusted providers.',
}

const providers = [
  {
    name: 'GetTransfer',
    logo: '🚗',
    tagline: 'Private transfers in 130+ countries',
    features: [
      'Fixed prices — no surge pricing',
      '24/7 booking, instant confirmation',
      'Meet & greet at arrivals',
      'Free cancellation up to 24hrs',
      'Business, economy & luxury classes',
      'Flight tracking included',
    ],
    bestFor: 'Private airport transfers, business travel',
    href: 'https://gettransfer.com',
    cta: 'Book a Transfer',
    highlight: true,
  },
  {
    name: 'Bookaway',
    logo: '🚌',
    tagline: 'Buses, shuttles & ferries worldwide',
    features: [
      '20,000+ routes worldwide',
      'Shared shuttles from budget prices',
      'Bus, minibus, ferry options',
      'Instant e-ticket delivery',
      'Popular for SE Asia, Latin America',
      'Compare multiple operators',
    ],
    bestFor: 'Budget travel, shared shuttles, Southeast Asia',
    href: 'https://www.bookaway.com',
    cta: 'Find Shuttles',
    highlight: false,
  },
]

const transferTypes = [
  {
    icon: '✈',
    title: 'Airport to Hotel',
    desc: 'Direct private transfer from arrivals hall to your hotel. Driver meets you by name, luggage included.',
  },
  {
    icon: '🏨',
    title: 'Hotel to Airport',
    desc: 'Never miss a flight — scheduled collection from your hotel with real-time flight tracking.',
  },
  {
    icon: '🏙',
    title: 'City to City',
    desc: 'Intercity transfers for longer journeys. Comfortable, door-to-door with no changes.',
  },
  {
    icon: '👔',
    title: 'Executive Class',
    desc: 'Business travel in luxury vehicles. Chauffeur-driven Mercedes, BMW or similar.',
  },
]

const popularRoutes = [
  { from: 'London Heathrow (LHR)', to: 'Central London', time: '45–60 min', icon: '🇬🇧' },
  { from: 'Dubai Airport (DXB)', to: 'Dubai Marina', time: '20–30 min', icon: '🇦🇪' },
  { from: 'New York JFK', to: 'Manhattan', time: '45–75 min', icon: '🇺🇸' },
  { from: 'Cancun Airport (CUN)', to: 'Hotel Zone', time: '15–20 min', icon: '🇲🇽' },
  { from: 'Bangkok Suvarnabhumi (BKK)', to: 'Bangkok City', time: '45–60 min', icon: '🇹🇭' },
  { from: 'Lagos Airport (LOS)', to: 'Victoria Island', time: '60–90 min', icon: '🇳🇬' },
]

export default function TransfersPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">

      {/* Hero */}
      <div className="relative h-[45vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/60 via-tralvana-black/40 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Ground Transport</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Airport Transfers</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            Pre-booked, fixed-price transfers to and from any airport worldwide. No queues, no surprises.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">

        {/* Transfer types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-6 mb-12">
          {transferTypes.map(type => (
            <div key={type.title} className="glass-card rounded-2xl p-5 gold-border text-center">
              <div className="text-3xl mb-3">{type.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2">{type.title}</h3>
              <p className="text-tralvana-muted text-xs leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Providers */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Trusted <span className="text-gold-gradient">Providers</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map(provider => (
              <div
                key={provider.name}
                className={`glass-card rounded-2xl p-6 flex flex-col ${provider.highlight ? 'gold-border ring-1 ring-tralvana-gold/20' : 'border border-tralvana-border'}`}
              >
                {provider.highlight && (
                  <div className="inline-flex items-center gap-1 bg-tralvana-gold/10 border border-tralvana-gold/30 rounded-full px-3 py-1 text-xs text-tralvana-gold font-medium mb-4 self-start">
                    ⭐ Recommended
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{provider.logo}</span>
                  <div>
                    <h3 className="text-white font-display font-bold text-lg">{provider.name}</h3>
                    <p className="text-tralvana-muted text-xs">{provider.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 flex-1">
                  {provider.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-tralvana-muted">
                      <span className="text-tralvana-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-tralvana-border mb-4">
                  <p className="text-xs text-tralvana-muted">
                    <span className="text-tralvana-gold font-medium">Best for:</span> {provider.bestFor}
                  </p>
                </div>
                <a
                  href={provider.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all uppercase tracking-wider ${
                    provider.highlight
                      ? 'bg-tralvana-gold text-tralvana-black hover:bg-tralvana-gold-light'
                      : 'border border-tralvana-gold text-tralvana-gold hover:bg-tralvana-gold/10'
                  }`}
                >
                  {provider.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Popular routes */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Popular <span className="text-gold-gradient">Routes</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularRoutes.map(route => (
              <div key={route.from} className="glass-card rounded-xl p-4 gold-border">
                <div className="text-xl mb-2">{route.icon}</div>
                <p className="text-white text-sm font-medium">{route.from}</p>
                <p className="text-tralvana-gold text-xs my-1">→ {route.to}</p>
                <p className="text-tralvana-muted text-xs">Journey time: {route.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tours widget for experiences at destination */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            🚗 Search Car Hire
            <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span>
          </h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>

        {/* Tips */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-5 text-lg">Tips for booking transfers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Book in advance — airport taxis are often 2-3x more expensive',
              'Share your flight number so the driver can track delays',
              'Confirm the pickup point before you land — arrivals or departures',
              'Check if child seats are available if travelling with children',
              'For group travel, a minivan transfer is often cheaper per person',
              'Save the driver\'s phone number before you board your flight',
              'Choose meet & greet for unfamiliar airports — saves significant stress',
              'Compare private vs shared shuttle prices for budget routes',
            ].map(tip => (
              <div key={tip} className="flex items-start gap-2 text-sm text-tralvana-muted">
                <span className="text-tralvana-gold mt-0.5 flex-shrink-0">✓</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
