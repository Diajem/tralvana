import { AFFILIATES } from '@/lib/affiliates'

export const metadata = {
  title: 'Sports Travel | Tralvana',
  description: 'Travel packages for sports events worldwide. Premier League, Champions League, World Cup 2026, NFL London and more.',
}

const events = [
  { emoji: '⚽', title: 'Premier League', desc: 'Match day packages to Old Trafford, Anfield, Emirates, Stamford Bridge and all 20 Premier League grounds. Flights + hotel + tickets.', tag: 'UK Inbound & Domestic', coming: false },
  { emoji: '🏆', title: 'UEFA Champions League', desc: 'Travel to Champions League knockout rounds and finals across Europe. Group stage, quarter-finals, semis and the final.', tag: 'European Travel', coming: false },
  { emoji: '🌍', title: 'FIFA World Cup 2026', desc: 'USA, Canada and Mexico host the biggest tournament on earth. Full travel packages — flights, hotels, match tickets, transfers.', tag: 'USA · Canada · Mexico', coming: true },
  { emoji: '🏉', title: 'Six Nations Rugby', desc: 'Twickenham, Cardiff, Edinburgh, Dublin, Paris and Rome. The greatest rugby championship in the world.', tag: 'Europe', coming: false },
  { emoji: '🏈', title: 'NFL London Games', desc: 'American football comes to Wembley and Tottenham Hotspur Stadium. Perfect for US visitors coming to the UK.', tag: 'London', coming: false },
  { emoji: '🏀', title: 'NBA Global Games', desc: 'NBA regular season games hosted in London and across Europe. US teams, European fans.', tag: 'London · Paris', coming: true },
  { emoji: '🎾', title: 'Wimbledon', desc: 'The most prestigious tennis tournament in the world. Centre Court packages, hotel and travel all arranged.', tag: 'London', coming: false },
  { emoji: '🏁', title: 'Formula 1', desc: 'British Grand Prix at Silverstone plus European F1 calendar — Monaco, Monza, Spa. Grandstand packages included.', tag: 'UK & Europe', coming: false },
  { emoji: '🌍', title: 'Africa Cup of Nations', desc: 'AFCON — the premier continental football tournament. Travel packages for diaspora fans following their national teams.', tag: 'Africa', coming: true },
  { emoji: '🏏', title: 'Cricket World Cup & Ashes', desc: 'England home summers, Ashes in Australia, ICC tournaments. Full cricket travel packages.', tag: 'UK & Worldwide', coming: false },
  { emoji: '🥊', title: 'Boxing & MMA Events', desc: 'Major boxing cards in the UK, USA and beyond. Ringside and premium packages for marquee fights.', tag: 'UK · USA · Middle East', coming: false },
  { emoji: '🏊', title: 'Olympics & Major Athletics', desc: 'Olympic Games and World Athletics Championships. Premium packages for the greatest sporting spectacle on earth.', tag: 'Worldwide', coming: true },
]

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-tralvana-black">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/60 via-tralvana-black/40 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Sports Travel</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Travel For <span className="text-gold-gradient">The Game</span>
          </h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            Premier League, Champions League, World Cup 2026, F1, Wimbledon and more. We arrange travel for fans travelling to and from the UK, Europe and worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">

        {/* Register Interest Banner */}
        <div className="glass-card rounded-2xl p-6 gold-border -mt-6 mb-12 text-center">
          <p className="text-white font-medium mb-2">⚽ Sports Travel packages launching soon</p>
          <p className="text-tralvana-muted text-sm mb-4">Register your interest and be first to hear about match day packages, group travel and exclusive deals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white placeholder-tralvana-muted focus:outline-none focus:border-tralvana-gold text-sm" />
            <button className="px-6 py-3 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm whitespace-nowrap">
              Register Interest
            </button>
          </div>
        </div>

        {/* Expedia Summer of Football */}
        <div style={{
          background: '#1a1a2e',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
          border: '1px solid rgba(201,168,76,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem' }}>⚽</div>
          <h2 style={{
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}>
            Summer of Football — Travel Packages
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', maxWidth: '500px' }}>
            Expedia&apos;s dedicated football travel hub. Flights, hotels and
            packages for the biggest matches in the UK and Europe.
            Book your match day trip now.
          </p>
          <a
            href="https://summeroffootball.expedia.co.uk/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              background: '#C9A84C',
              color: '#0A0A0F',
              padding: '12px 32px',
              borderRadius: '10px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Browse Football Travel Packages →
          </a>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Events We <span className="text-gold-gradient">Cover</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <div key={event.title} className="glass-card rounded-2xl p-5 gold-border relative">
                {event.coming && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-tralvana-gold/20 border border-tralvana-gold/30 text-tralvana-gold">Coming Soon</span>
                )}
                <div className="text-3xl mb-3">{event.emoji}</div>
                <h3 className="font-display font-semibold text-white mb-1">{event.title}</h3>
                <p className="text-tralvana-gold text-xs mb-2 font-medium">{event.tag}</p>
                <p className="text-tralvana-muted text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6 gold-border">
            <h3 className="font-display text-xl font-bold text-white mb-3">🌍 Coming To The UK?</h3>
            <p className="text-tralvana-muted text-sm leading-relaxed mb-4">
              Travelling from Africa, the Caribbean, USA or Europe to watch Premier League, Champions League or other UK sporting events? We arrange your full travel package — flights, hotels near the ground, transfers and match day support.
            </p>
            <a href={AFFILIATES.expedia.packages} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex px-5 py-2.5 bg-tralvana-gold text-tralvana-black text-sm font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all">
              Plan Your Trip →
            </a>
          </div>
          <div className="glass-card rounded-2xl p-6 gold-border">
            <h3 className="font-display text-xl font-bold text-white mb-3">🇬🇧 UK Fan Travelling Abroad?</h3>
            <p className="text-tralvana-muted text-sm leading-relaxed mb-4">
              Following your club or national team to Europe, the Americas or Africa? Champions League away days, World Cup 2026 in the USA, AFCON packages — we cover the full itinerary from any UK airport.
            </p>
            <a href={AFFILIATES.expedia.flights} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex px-5 py-2.5 border border-tralvana-gold text-tralvana-gold text-sm font-semibold rounded-xl hover:bg-tralvana-gold/10 transition-all">
              Search Flights →
            </a>
          </div>
        </div>

        {/* Book now via Expedia while sports packages build */}
        <div className="glass-card rounded-2xl p-6 gold-border text-center">
          <p className="text-tralvana-muted text-sm mb-4">Book flights and hotels for upcoming sports events now while dedicated packages are being prepared</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={AFFILIATES.expedia.flights} target="_blank" rel="noopener noreferrer sponsored" className="px-5 py-2.5 bg-tralvana-gold text-tralvana-black text-sm font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all">✈ Book Flights</a>
            <a href={AFFILIATES.expedia.hotels} target="_blank" rel="noopener noreferrer sponsored" className="px-5 py-2.5 border border-tralvana-gold text-tralvana-gold text-sm font-semibold rounded-xl hover:bg-tralvana-gold/10 transition-all">🏨 Book Hotels</a>
            <a href={AFFILIATES.expedia.cars} target="_blank" rel="noopener noreferrer sponsored" className="px-5 py-2.5 border border-tralvana-border text-tralvana-muted text-sm font-semibold rounded-xl hover:border-tralvana-gold hover:text-tralvana-gold transition-all">🚗 Book Car Hire</a>
          </div>
        </div>
      </div>
    </div>
  )
}
