import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import { AFFILIATES } from '@/lib/affiliates'
import Link from 'next/link'

export const metadata = {
  title: 'Africa Travel | Tralvana',
  description: 'Flights, hotels, safaris and experiences across Africa. Nigeria, Ghana, Kenya, South Africa, Tanzania and more.',
}

const destinations = [
  { name: 'Lagos', country: 'Nigeria', flag: '🇳🇬', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80', highlight: 'Eko Atlantic · Victoria Island · Lekki' },
  { name: 'Accra', country: 'Ghana', flag: '🇬🇭', image: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=400&q=80', highlight: 'Osu · Labadi Beach · Cape Coast' },
  { name: 'Nairobi', country: 'Kenya', flag: '🇰🇪', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&q=80', highlight: 'Maasai Mara · Serengeti · Amboseli' },
  { name: 'Cape Town', country: 'South Africa', flag: '🇿🇦', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80', highlight: 'Table Mountain · Winelands · Garden Route' },
  { name: 'Zanzibar', country: 'Tanzania', flag: '🇹🇿', image: 'https://images.unsplash.com/photo-1586861203927-800a5acddffd?w=400&q=80', highlight: 'Stone Town · Nungwi · Paje Beach' },
  { name: 'Abuja', country: 'Nigeria', flag: '🇳🇬', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80', highlight: 'Aso Rock · Millennium Park · Wuse' },
  { name: 'Marrakech', country: 'Morocco', flag: '🇲🇦', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&q=80', highlight: 'Medina · Jemaa el-Fna · Atlas Mountains' },
  { name: 'Cairo', country: 'Egypt', flag: '🇪🇬', image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80', highlight: 'Pyramids · Nile · Khan el-Khalili' },
]

export default function AfricaPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/50 via-tralvana-black/30 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Destination</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Africa</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            The motherland. Safaris, coastlines, ancient history, vibrant cities and the warmest hospitality on earth.
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
          <h2 className="font-display text-3xl font-bold text-white mb-6">Top <span className="text-gold-gradient">Destinations</span></h2>
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
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🎯 Things To Do In Africa <span className="text-xs text-tralvana-gold font-normal">Powered by GetYourGuide</span></h2>
          <TravelpayoutsWidget src={destinationWidget('Africa')} minHeight="280px" />
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">🚗 Car Hire Across Africa <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span></h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{ emoji: '🦁', title: 'Safari Packages', desc: 'Kenya · Tanzania · South Africa · Botswana', href: AFFILIATES.safari.base },
            { emoji: '✈', title: 'Flights to Africa', desc: 'London · Manchester · Birmingham to all African hubs', href: AFFILIATES.expedia.flights },
            { emoji: '🏖', title: 'Beach Resorts', desc: 'Zanzibar · Mombasa · Cape Verde · Seychelles', href: AFFILIATES.expedia.hotels }
          ].map((card) => (
            <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer sponsored" className="glass-card rounded-xl p-5 gold-border hover-lift text-center">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-tralvana-muted text-xs">{card.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
