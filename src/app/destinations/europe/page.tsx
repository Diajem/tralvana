import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Europe Travel | Tralvana',
  description: 'Flights, hotels and experiences across Europe. Paris, Rome, Barcelona, Amsterdam and more. Perfect for UK travellers and visitors to Europe.',
}

const destinations = [
  { name: 'Paris', country: 'France', flag: '🇫🇷', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80', highlight: 'Eiffel Tower · Louvre · Montmartre' },
  { name: 'Rome', country: 'Italy', flag: '🇮🇹', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80', highlight: 'Colosseum · Vatican · Trastevere' },
  { name: 'Barcelona', country: 'Spain', flag: '🇪🇸', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80', highlight: 'Sagrada Família · La Rambla · Barceloneta' },
  { name: 'Amsterdam', country: 'Netherlands', flag: '🇳🇱', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&q=80', highlight: 'Canal Ring · Rijksmuseum · Vondelpark' },
  { name: 'London', country: 'UK', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80', highlight: 'West End · Hyde Park · Tower Bridge' },
  { name: 'Lisbon', country: 'Portugal', flag: '🇵🇹', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=400&q=80', highlight: 'Alfama · Sintra · Belém Tower' },
  { name: 'Santorini', country: 'Greece', flag: '🇬🇷', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', highlight: 'Oia · Caldera · Perissa Beach' },
  { name: 'Istanbul', country: 'Turkey', flag: '🇹🇷', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&q=80', highlight: 'Hagia Sophia · Grand Bazaar · Bosphorus' },
]

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Europe</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            From weekend city breaks to grand tours. Europe's finest cities, coastlines and culture — all within easy reach.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Quick Search Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-6 mb-10">
          <div className="glass-card rounded-2xl p-4 gold-border">
            <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">✈ Search Flights <span className="text-xs text-tralvana-gold font-normal">Booking.com</span></h3>
            <TravelpayoutsWidget src={WIDGETS.flightsBooking} minHeight="180px" />
          </div>
          <div className="glass-card rounded-2xl p-4 gold-border">
            <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">🏨 Find Hotels <span className="text-xs text-tralvana-gold font-normal">Agoda</span></h3>
            <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="180px" />
          </div>
        </div>

        {/* UK Travellers Note */}
        <div className="glass-card rounded-xl p-4 gold-border mb-8 flex items-start gap-3">
          <span className="text-2xl">🇬🇧</span>
          <div>
            <p className="text-white text-sm font-medium mb-1">Travelling from the UK?</p>
            <p className="text-tralvana-muted text-xs">We cover flights from all major UK airports — London Heathrow, Gatwick, Stansted, Manchester, Birmingham, Edinburgh and more — to every European destination.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Top <span className="text-gold-gradient">Cities</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={`/destinations/${dest.name.toLowerCase()}`} className="group relative overflow-hidden rounded-2xl hover-lift gold-border" style={{ height: '200px' }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${dest.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 to-transparent" />
                <div className="absolute top-3 left-3 text-xl">{dest.flag}</div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-bold text-white">{dest.name}</h3>
                  <p className="text-tralvana-muted text-xs">{dest.highlight}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🎯 Things To Do In Europe <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span></h2>
          <TravelpayoutsWidget src={destinationWidget('Europe')} minHeight="280px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">✈ European Flights <span className="text-xs text-tralvana-gold font-normal">Powered by Booking.com</span></h2>
          <TravelpayoutsWidget src={WIDGETS.flightsBooking} minHeight="200px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🚗 Car Hire Across Europe <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span></h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>
      </div>
    </div>
  )
}
