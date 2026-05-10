import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS, destinationWidget } from '@/lib/widgets'
import Link from 'next/link'

export const metadata = {
  title: 'Jamaica Travel Guide | Tralvana',
  description: 'Flights, hotels and things to do in Jamaica. Negril, Montego Bay, Kingston and beyond.',
}

export default function JamaicaPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <div
        className="relative flex items-end"
        style={{
          height: '50vh', minHeight: '350px',
          backgroundImage: 'url(/image/WhatsApp%20Image%202026-05-10%20at%2010.43.41.jpeg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="relative z-10 px-8 pb-10 pt-20">
          <Link href="/destinations" className="text-sm mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Destinations</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Jamaica</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Caribbean</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '1rem' }}>
          Jamaica is the jewel of the Caribbean — a vibrant island of turquoise waters, white sand beaches, reggae rhythms and warm hospitality. From the cliffs of Negril to the buzz of Montego Bay, Jamaica offers an unforgettable mix of relaxation and culture that keeps travellers coming back year after year.
        </p>
        <p className="leading-relaxed mb-8" style={{ color: '#374151', fontSize: '1rem' }}>
          Explore the birthplace of Bob Marley in Kingston, zip-line through the Blue Mountains, or simply sip rum punch watching the sunset from Seven Mile Beach. Jamaica's food, music and people make it one of the world's most soulful travel destinations.
        </p>

        <a
          href="https://expedia.com/affiliate/mZObD29"
          target="_blank" rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mb-10"
          style={{ background: '#C9A84C', color: '#0A0A0F' }}
        >
          ✈ Search Flights to Jamaica
        </a>

        <div className="rounded-2xl p-5 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🏨 Hotels in Jamaica</h2>
          <TravelpayoutsWidget src={WIDGETS.hotelsAgoda} minHeight="220px" />
        </div>

        <div className="rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
          <h2 className="font-display font-semibold mb-3" style={{ color: '#1F2937', fontSize: '1.1rem' }}>🎯 Things To Do in Jamaica</h2>
          <TravelpayoutsWidget src={destinationWidget('Jamaica')} minHeight="280px" />
        </div>
      </div>
    </div>
  )
}
