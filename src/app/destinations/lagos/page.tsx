import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Lagos Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Lagos, Nigeria. Eko Atlantic, Victoria Island, Lekki and beyond.',
}

export default function LagosPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Lagos</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Nigeria, West Africa</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Lagos is Africa's largest city and one of its most electrifying — a metropolis of over 20 million people that pulses with energy, creativity and commerce day and night. From the upscale towers of Eko Atlantic to the colourful markets of Balogun, Lagos is a city that demands to be experienced fully.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          The Afrobeats scene, world-class Nigerian cuisine, Art Lagos, and the buzzing restaurant strip of Victoria Island make this one of Africa's most exciting cities for culture lovers. With direct flights from London, Lagos is closer than you think — and unforgettable once you arrive.
        </p>

        <a
          href="https://expedia.com/affiliate/mZObD29"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Lagos
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Lagos</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Lagos</h2>
          <TravelpayoutsWidget src={destinationWidget('Lagos')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
