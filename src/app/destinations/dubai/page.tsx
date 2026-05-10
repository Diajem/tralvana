import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Dubai Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Dubai, UAE. Burj Khalifa, desert safaris, The Palm and beyond.',
}

export default function DubaiPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Dubai</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>United Arab Emirates</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Dubai is where ambition meets luxury on a breathtaking scale. Home to the world's tallest building, the most extravagant malls, and an ever-expanding coastline of man-made islands, this desert city has transformed itself into one of the globe's most visited travel destinations in just a few decades.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          Beyond the glittering skyline, Dubai offers thrilling desert safaris, world-class dining, and a rich Emirati heritage waiting to be discovered in the Al Fahidi historic district. With excellent flight connections from across Africa, the UK and the Americas, Dubai makes the perfect stopover or standalone destination.
        </p>

        <a
          href="https://expedia.com/affiliate/mZObD29"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Dubai
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Dubai</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Dubai</h2>
          <TravelpayoutsWidget src={destinationWidget('Dubai')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
