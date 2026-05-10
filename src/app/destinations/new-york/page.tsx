import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'New York Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in New York City. Manhattan, Brooklyn, Times Square and beyond.',
}

export default function NewYorkPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">New York City</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>USA</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          New York City is the city that never sleeps — a global capital of culture, fashion, food and finance that delivers an experience unlike anywhere else on Earth. From the neon spectacle of Times Square to the tranquil paths of Central Park, NYC packs an extraordinary range of experiences into just five boroughs.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          Explore world-renowned museums on Museum Mile, catch a Broadway show, or devour your way through the incredible diversity of neighbourhood restaurants. Whether you shop in SoHo, hike the High Line, or simply gaze at the skyline from the Brooklyn Bridge, New York never fails to inspire.
        </p>

        <a
          href="https://tp.media/r?marker=493614&trs=432320&p=4114&u=https%3A%2F%2Fwww.aviasales.com"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to New York
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in New York</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in New York</h2>
          <TravelpayoutsWidget src={destinationWidget('New York')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
