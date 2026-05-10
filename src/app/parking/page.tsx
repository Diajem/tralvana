import { AFFILIATES } from '@/lib/affiliates'

export const metadata = { title: 'Airport Parking | Tralvana — Bee Parking Heathrow' }

export default function ParkingPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest">Airport Parking</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Airport <span className="text-gold-gradient">Parking</span></h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">Secure, convenient parking at UK airports. Book in advance and save — meet and greet, short stay and long stay options available.</p>
        </div>

        {/* Bee Parking Feature */}
        <div className="glass-card rounded-2xl p-8 gold-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🅿</div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-1">Bee Parking Heathrow</h2>
              <p className="text-tralvana-gold text-sm">Official Airport Parking Partner</p>
            </div>
          </div>
          <p className="text-tralvana-muted mb-6 leading-relaxed">
            Bee Parking offers secure, convenient parking at Heathrow Airport — one of the world's busiest international airports and a major hub for travel to Africa, the Caribbean, the Americas and beyond. Whether you need meet and greet service, short stay or long stay parking, Bee Parking has you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { emoji: '🤝', title: 'Meet & Greet', desc: 'A driver collects your car at the terminal drop-off. No walking, no shuttle bus.' },
              { emoji: '⏱', title: 'Short Stay', desc: 'Perfect for quick pickups and drop-offs. Close to the terminal.' },
              { emoji: '📅', title: 'Long Stay', desc: 'Best value for holidays and extended trips. Secure covered and open parking.' },
            ].map((opt) => (
              <div key={opt.title} className="bg-tralvana-black rounded-xl p-4 border border-tralvana-border">
                <div className="text-2xl mb-2">{opt.emoji}</div>
                <h3 className="text-white font-medium mb-1">{opt.title}</h3>
                <p className="text-tralvana-muted text-xs">{opt.desc}</p>
              </div>
            ))}
          </div>
          <a href={AFFILIATES.awin.beeParking.url} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex px-8 py-3.5 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm uppercase tracking-wider">
            Book Bee Parking Heathrow →
          </a>
        </div>

        {/* Tips */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="font-display text-xl font-bold text-white mb-4">💡 Airport Parking Tips</h2>
          <ul className="space-y-3 text-tralvana-muted text-sm">
            {[
              'Book in advance — parking prices rise closer to your travel date, just like flights',
              'Meet and greet is worth it for early morning or late night departures when shuttles are less frequent',
              'Always compare long stay vs short stay — for trips over 5 days, long stay is almost always cheaper',
              'Check if your hotel near the airport offers Park and Fly packages — often great value',
              'Take a photo of where you park in multi-storey car parks to avoid confusion on return',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-tralvana-gold mt-0.5 flex-shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
