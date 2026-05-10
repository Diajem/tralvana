// SportsTeaser.tsx
import Link from 'next/link'

export default function SportsTeaser() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '200px' }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tralvana-black/90 via-tralvana-black/70 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⚽</span>
                <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Coming Soon</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Sports Travel
              </h2>
              <p className="text-tralvana-muted max-w-lg">
                Premier League, Champions League, World Cup and major sporting events. Travel packages for fans travelling to the UK and Europe to watch live football — and UK fans heading to the Americas, Africa and beyond.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Premier League', 'Champions League', 'World Cup 2026', 'Africa Cup of Nations', 'NFL London'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-tralvana-gold/30 text-tralvana-gold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/sports"
              className="flex-shrink-0 px-6 py-3 border border-tralvana-gold text-tralvana-gold rounded-xl hover:bg-tralvana-gold hover:text-tralvana-black transition-all font-medium text-sm"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
