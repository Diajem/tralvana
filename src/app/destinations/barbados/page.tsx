import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Barbados Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Barbados. Bridgetown, Oistins, Crane Beach and beyond.',
}

export default function BarbadosPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1580902394724-b08ff9f97c46?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Barbados</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Caribbean</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Barbados is the sophisticate of the Caribbean — a polished island of pink-sand beaches, rum distilleries, and coral reef diving set against impossibly blue water. Bridgetown, the capital, blends a UNESCO World Heritage historic district with a modern waterfront of fine restaurants and boutique shopping.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          From the Friday night fish fry at Oistins to sunrise at the stunning Crane Beach, Barbados offers a blend of elegance and warmth that few Caribbean islands can match. Direct flights from London Gatwick make it one of the most accessible island escapes for UK travellers.
        </p>

        <a
          href="https://tp.media/r?marker=493614&trs=432320&p=4114&u=https%3A%2F%2Fwww.aviasales.com"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Barbados
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Barbados</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Barbados</h2>
          <TravelpayoutsWidget src={destinationWidget('Barbados')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
