// About page
export const metadata = { title: 'About Tralvana | Your World Starts Here' }

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest">About</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">About <span className="text-gold-gradient">Tralvana</span></h1>
        </div>

        <div className="space-y-6 text-tralvana-muted leading-relaxed">
          <div className="glass-card rounded-2xl p-8 gold-border">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Your World Starts Here</h2>
            <p className="mb-4">Tralvana is a premium international travel platform built for the global traveller. We cover flights, hotels, tours, car hire and travel experiences across Africa, the Caribbean, Europe, the Americas, Asia Pacific and the Middle East.</p>
            <p className="mb-4">We were built with one mission: to make world-class travel accessible, affordable and seamless — regardless of where you are starting your journey or where you are headed.</p>
            <p>Whether you are a UK resident heading to Lagos for a family visit, an American flying into London for a Premier League match, a Jamaican couple planning a European honeymoon, or a Nigerian entrepreneur booking business travel — Tralvana is built for you.</p>
          </div>

          <div className="glass-card rounded-2xl p-8 gold-border">
            <h2 className="font-display text-xl font-bold text-white mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: '✈', title: 'Flights', desc: 'Global flight search powered by Aviasales and Booking.com' },
                { emoji: '🏨', title: 'Hotels', desc: '2M+ properties worldwide via Agoda and partner networks' },
                { emoji: '🚗', title: 'Car Hire', desc: '650+ suppliers across 145 countries via DiscoverCars' },
                { emoji: '🗺', title: 'Tours', desc: 'Experiences worldwide via GetYourGuide and Viator' },
                { emoji: '🅿', title: 'Airport Parking', desc: 'Heathrow parking via our Bee Parking partnership' },
                { emoji: '📱', title: 'Travel eSIM', desc: 'Global data via Holafly in 200+ destinations' },
                { emoji: '🛡', title: 'Travel Insurance', desc: 'Coverage via World Nomads for adventurous travellers' },
                { emoji: '📺', title: 'Tralvana TV', desc: 'Real travel stories, client journeys and destination guides' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="text-white text-sm font-medium">{item.title}</div>
                    <div className="text-tralvana-muted text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 gold-border">
            <h2 className="font-display text-xl font-bold text-white mb-4">Built by Diajem Marketing</h2>
            <p className="mb-4">Tralvana is a product of <a href="https://diajemmarketing.com" className="text-tralvana-gold hover:underline" target="_blank" rel="noopener noreferrer">Diajem Marketing</a> — a digital agency specialising in AI-powered web development, content creation and digital business growth.</p>
            <p>We build digital businesses that work while you sleep. Tralvana is one of them.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
