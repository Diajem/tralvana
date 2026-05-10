import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Accra Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Accra, Ghana. Osu, Labadi Beach, Cape Coast and beyond.',
}

export default function AccraPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Accra</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Ghana, West Africa</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Accra is one of Africa's most dynamic and welcoming capital cities. A thriving hub of culture, music, food and fashion, Ghana's capital has become one of the top destinations for diaspora travellers and adventurous explorers alike. From the vibrant markets of Osu to the historic Cape Coast Castle just a short drive away, Accra rewards every visitor.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          Accra's food scene is world-class — jollof rice, kelewele, fresh seafood and rooftop cocktail bars line the streets of Cantonments and Airport Residential Area. With new direct flights from London and other major hubs, there has never been a better time to visit the Black Star of Africa.
        </p>

        <a
          href="https://expedia.com/affiliate/mZObD29"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Accra
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Accra</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Accra</h2>
          <TravelpayoutsWidget src={destinationWidget('Accra')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
