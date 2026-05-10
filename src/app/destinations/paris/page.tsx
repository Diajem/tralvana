import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Paris Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Paris, France. Eiffel Tower, Louvre, Montmartre and beyond.',
}

export default function ParisPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Paris</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>France, Europe</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Paris is the world's most visited city for good reason — it is simply incomparable. The city of light enchants visitors with the grandeur of the Eiffel Tower, the artistic wealth of the Louvre and Musée d'Orsay, and the effortless chic of its café culture and fashion boutiques along the Champs-Élysées.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          Beyond the postcard landmarks lies a city of intimate neighbourhoods — the bohemian lanes of Montmartre, the medieval charm of the Marais, and the literary legacy of Saint-Germain-des-Prés. Paris rewards slow exploration, and every visit reveals something new in one of Europe's most endlessly captivating capitals.
        </p>

        <a
          href="https://expedia.com/affiliate/mZObD29"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Paris
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Paris</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Paris</h2>
          <TravelpayoutsWidget src={destinationWidget('Paris')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
