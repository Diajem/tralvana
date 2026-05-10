import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Nairobi Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Nairobi, Kenya. Safari, Maasai Mara, Amboseli and beyond.',
}

export default function NairobiPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1400&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Nairobi</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Kenya, East Africa</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Nairobi is East Africa's most cosmopolitan city — a fast-growing hub of innovation, wildlife and culture perched at 1,700 metres above sea level. Home to the only national park located within a major capital city, Nairobi lets you watch lions roam against a backdrop of skyscrapers, a sight found nowhere else on Earth.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          As the gateway to Kenya's legendary safari circuit, Nairobi is your launchpad for the Maasai Mara, Amboseli and Lake Nakuru. The city's culinary scene, rooftop bars, art galleries and the vibrant Westlands neighbourhood make it a destination worth exploring in its own right before you head into the bush.
        </p>

        <a
          href="https://tp.media/r?marker=493614&trs=432320&p=4114&u=https%3A%2F%2Fwww.aviasales.com"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Nairobi
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Nairobi</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Nairobi</h2>
          <TravelpayoutsWidget src={destinationWidget('Nairobi')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
