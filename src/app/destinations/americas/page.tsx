import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Americas Travel | Tralvana',
  description: 'Flights, hotels and experiences across the Americas. USA, Canada, Caribbean, Latin America and South America.',
}

const destinations = [
  { name: 'New York', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80', highlight: 'Manhattan · Brooklyn · Times Square' },
  { name: 'Miami', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&q=80', highlight: 'South Beach · Art Deco · Little Havana' },
  { name: 'Toronto', country: 'Canada', flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&q=80', highlight: 'CN Tower · Niagara · Distillery District' },
  { name: 'Cancun', country: 'Mexico', flag: '🇲🇽', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=400&q=80', highlight: 'Hotel Zone · Tulum · Chichen Itza' },
  { name: 'Los Angeles', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&q=80', highlight: 'Hollywood · Beverly Hills · Santa Monica' },
  { name: 'Rio de Janeiro', country: 'Brazil', flag: '🇧🇷', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80', highlight: 'Copacabana · Carnival · Christ the Redeemer' },
  { name: 'Havana', country: 'Cuba', flag: '🇨🇺', image: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=400&q=80', highlight: 'Old Havana · Vinales · Varadero' },
  { name: 'Chicago', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80', highlight: 'The Loop · Navy Pier · Deep Dish Pizza' },
]

export default function AmericasPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">The Americas</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            From New York skyscrapers to Amazon rainforest, Cancun beaches to Patagonia glaciers. The western hemisphere in all its glory.
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

        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Top <span className="text-gold-gradient">Cities</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`} className="group relative overflow-hidden rounded-2xl hover-lift gold-border" style={{ height: '200px' }}>
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
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🎯 Things To Do In The Americas <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span></h2>
          <TravelpayoutsWidget src={destinationWidget('USA')} minHeight="280px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">✈ Search Flights <span className="text-xs text-tralvana-gold font-normal">Powered by Aviasales</span></h2>
          <TravelpayoutsWidget src={WIDGETS.flightsBooking} minHeight="200px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🚗 Car Hire <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span></h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>
      </div>
    </div>
  )
}
