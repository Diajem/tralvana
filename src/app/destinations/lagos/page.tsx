import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Nigeria Travel Guide | Tralvana',
  description: 'Plan your trip to Nigeria. Explore Lagos, Abuja, Calabar, Port Harcourt and Kano — flights, hotels and things to do across Nigeria.',
}

const cities = [
  {
    name: 'Lagos',
    emoji: '🌊',
    highlight: 'Victoria Island · Eko Atlantic · Lekki',
    desc: "Nigeria's commercial capital and Africa's largest city. Victoria Island buzzes with restaurants, rooftop bars and art galleries. Eko Atlantic is a stunning new city rising from the ocean. Lekki offers beaches, markets and the legendary Lekki Conservation Centre.",
  },
  {
    name: 'Abuja',
    emoji: '🏛️',
    highlight: 'Aso Rock · Millennium Park · Wuse Market',
    desc: "Nigeria's modern capital is clean, planned and surprisingly green. Aso Rock — a 400-metre monolith — dominates the skyline. Millennium Park is perfect for a stroll, and the city's wide boulevards and embassies give it a cosmopolitan feel unlike anywhere else in Nigeria.",
  },
  {
    name: 'Calabar',
    emoji: '🎉',
    highlight: 'Calabar Carnival · Cross River · Tinapa',
    desc: 'Known as the "People\'s Paradise", Calabar hosts Africa\'s biggest street party — the Calabar Carnival — every December. The Cross River offers stunning jungle scenery, gorilla sanctuaries and eco-tourism. A hidden gem for travellers who venture beyond Lagos.',
  },
  {
    name: 'Port Harcourt',
    emoji: '🛢️',
    highlight: 'Oil City · Isaac Boro Park · Rivers State',
    desc: "The heart of Nigeria's oil industry, Port Harcourt (PH) is a vibrant, youthful city with a thriving music and nightlife scene. Isaac Boro Park, the waterfront and the city's legendary pepper soup joints make it a destination in its own right.",
  },
  {
    name: 'Kano',
    emoji: '🕌',
    highlight: 'Ancient City Walls · Kurmi Market · Emir\'s Palace',
    desc: "One of Africa's oldest cities, Kano is a window into Nigeria's rich northern heritage. The ancient city walls date back to the 15th century. Kurmi Market is one of West Africa's largest traditional markets. The Emir's Palace and Gidan Makama Museum are unmissable.",
  },
]

export default function NigeriaPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '55vh', minHeight: '380px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1555990793-da11153b9a71?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Nigeria</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>West Africa · The Giant of Africa</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Nigeria is Africa's most populous nation and one of its most dynamic — a country of 220 million people, over 500 languages, world-class music, extraordinary cuisine and landscapes that range from the beaches of Lagos to the ancient desert cities of the north.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          From the electrifying streets of Lagos to the ceremonial grandeur of Abuja, the carnival culture of Calabar to the ancient walled city of Kano — Nigeria rewards every type of traveller. Direct flights from London make it easier than ever to explore the Giant of Africa.
        </p>

        <a
          href="https://tp.media/r?marker=493614&trs=432320&p=4114&u=https%3A%2F%2Fwww.aviasales.com"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Nigeria
        </a>

        {/* Cities Grid */}
        <h2 className="font-display font-bold mb-6" style={{ color: '#1F2937', fontSize: '1.5rem' }}>
          Explore Nigeria by City
        </h2>
        <div className="grid gap-5 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {cities.map((city) => (
            <div key={city.name} className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB', background: '#FAFAFA' }}>
              <div className="flex items-center gap-2 mb-1">
                <span style={{ fontSize: '1.4rem' }}>{city.emoji}</span>
                <h3 className="font-display font-bold" style={{ color: '#1F2937', fontSize: '1.1rem' }}>{city.name}</h3>
              </div>
              <p style={{ fontSize: '11px', color: '#C9A84C', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>{city.highlight}</p>
              <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>{city.desc}</p>
            </div>
          ))}
        </div>

        {/* Hotels */}
        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Nigeria</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>
      </div>
    </div>
  )
}
