import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Asia Pacific Travel | Tralvana',
  description: 'Flights, hotels and experiences across Asia Pacific. Dubai, Bangkok, Bali, Tokyo, Singapore and more.',
}

const destinations = [
  { name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', image: 'https://images.unsplash.com/photo-1535139262971-ab8d5d6c8ec9?w=400&q=80', highlight: 'Grand Palace · Khao San · Floating Markets' },
  { name: 'Bali', country: 'Indonesia', flag: '🇮🇩', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', highlight: 'Ubud · Seminyak · Tanah Lot Temple' },
  { name: 'Tokyo', country: 'Japan', flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80', highlight: 'Shibuya · Shinjuku · Mt Fuji' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80', highlight: 'Marina Bay · Gardens by the Bay · Sentosa' },
  { name: 'Sydney', country: 'Australia', flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', highlight: 'Opera House · Bondi Beach · Harbour Bridge' },
  { name: 'Phuket', country: 'Thailand', flag: '🇹🇭', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&q=80', highlight: 'Patong Beach · Phi Phi · Old Town' },
]

export default function AsiaPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535139262971-ab8d5d6c8ec9?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Asia Pacific</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">Ancient temples, pristine beaches, futuristic cities and the world's finest street food. Asia Pacific delivers it all.</p>
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
          <h2 className="font-display text-3xl font-bold text-white mb-6">Top <span className="text-gold-gradient">Destinations</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🎯 Things To Do In Asia <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span></h2>
          <TravelpayoutsWidget src={destinationWidget('Bangkok')} minHeight="280px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🚗 Car Hire In Asia <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span></h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>
      </div>
    </div>
  )
}
