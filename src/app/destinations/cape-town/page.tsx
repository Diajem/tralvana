import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Cape Town Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Cape Town, South Africa. Table Mountain, Winelands, Garden Route and beyond.',
}

export default function CapeTownPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Cape Town</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>South Africa</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Cape Town is one of the most breathtaking cities on earth — a place where dramatic mountains meet a sparkling Atlantic coastline, world-class cuisine sits beside vibrant townships, and a rich, complex history unfolds at every corner. Framed by the iconic Table Mountain, the Mother City delivers an experience that stays with you long after you leave.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          From the rolling Winelands of Stellenbosch and Franschhoek to the penguin colonies of Boulders Beach and the epic Garden Route stretching east along the coast, Cape Town is the perfect base for exploring southern Africa's finest landscapes. Direct flights from London make it surprisingly accessible for UK travellers.
        </p>

        <a
          href="https://tp.media/r?marker=493614&trs=432320&p=4114&u=https%3A%2F%2Fwww.aviasales.com"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Cape Town
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Cape Town</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do In Cape Town</h2>
          <TravelpayoutsWidget src={destinationWidget('Cape Town')} minHeight="280px" />
        </div>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🚗 Car Hire in Cape Town</h2>
          <TravelpayoutsWidget src={WIDGETS.carsDiscover} minHeight="260px" />
        </div>

        <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #16162A 0%, #1C1C35 100%)', border: '1px solid rgba(201,168,76,0.3)' }}>
          <h2 className="font-display text-xl font-bold text-white mb-2">Explore More of Africa</h2>
          <p className="text-sm mb-4" style={{ color: '#8A8AA0' }}>Lagos · Accra · Nairobi · Zanzibar · Marrakech · Cairo</p>
          <Link
            href="/destinations/africa"
            className="inline-flex px-6 py-2.5 font-semibold text-sm rounded-xl"
            style={{ background: '#C9A84C', color: '#0A0A0F' }}
          >
            View All Africa Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}
