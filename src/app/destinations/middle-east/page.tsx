import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Middle East Travel | Tralvana',
  description: 'Flights, hotels and luxury experiences across the Middle East. Dubai, Abu Dhabi, Doha, Istanbul and more.',
}

const destinations = [
  { name: 'Dubai', country: 'UAE', flag: '🇦🇪', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', highlight: 'Burj Khalifa · Desert Safari · The Palm' },
  { name: 'Abu Dhabi', country: 'UAE', flag: '🇦🇪', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&q=80', highlight: 'Sheikh Zayed Mosque · Ferrari World · Yas Island' },
  { name: 'Doha', country: 'Qatar', flag: '🇶🇦', image: 'https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=400&q=80', highlight: 'Souq Waqif · Museum of Islamic Art · The Pearl' },
  { name: 'Istanbul', country: 'Turkey', flag: '🇹🇷', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&q=80', highlight: 'Hagia Sophia · Grand Bazaar · Bosphorus Cruise' },
]

export default function MiddleEastPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Middle East</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">Ultra-luxury resorts, ancient souqs, record-breaking architecture and world-class cuisine. The Middle East redefines ambition.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} href={`/destinations/${dest.name.toLowerCase()}`} className="group relative overflow-hidden rounded-2xl hover-lift gold-border" style={{ height: '220px' }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${dest.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 to-transparent" />
                <div className="absolute top-3 left-3 text-xl">{dest.flag}</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white">{dest.name}</h3>
                  <p className="text-tralvana-muted text-xs">{dest.highlight}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🎯 Things To Do <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span></h2>
          <TravelpayoutsWidget src={destinationWidget('Dubai')} minHeight="280px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🚗 Car Hire <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span></h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>
      </div>
    </div>
  )
}
