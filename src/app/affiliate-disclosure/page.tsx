export const metadata = { title: 'Affiliate Disclosure | Tralvana' }

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Affiliate <span className="text-gold-gradient">Disclosure</span></h1>
          <p className="text-tralvana-muted text-sm">Last updated: May 2026</p>
        </div>
        <div className="glass-card rounded-2xl p-8 gold-border space-y-6 text-tralvana-muted leading-relaxed text-sm">
          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Our Commitment to Transparency</h2>
            <p>Tralvana participates in various affiliate marketing programmes. This means we may earn a commission when you click on certain links and make a purchase or booking. This does not affect the price you pay — you pay exactly the same whether you book through Tralvana or go directly to the provider.</p>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Our Affiliate Partners</h2>
            <p className="mb-3">We currently partner with the following affiliate programmes:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Expedia Group Affiliate Programme — flights, hotels, car hire and packages',
                'Travelpayouts — including Aviasales, Agoda, DiscoverCars, GetYourGuide and others',
                'Awin Network — including Bee Parking Heathrow, WorldSIM and TTfone',
                'Amazon Associates — UK, US, Germany, France, Spain and Italy',
                'World Nomads — travel insurance',
                'Holafly — travel eSIM services',
                'Safari.com — Africa safari packages',
                'Sandals Resorts — via CJ Affiliate network',
                'Priority Pass — airport lounge access',
              ].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-tralvana-gold mt-0.5">→</span>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Editorial Independence</h2>
            <p>Our affiliate relationships do not influence our editorial content. We recommend products and services we genuinely believe will help our users — not based on commission rates.</p>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Amazon Associates</h2>
            <p>Tralvana is a participant in the Amazon Services LLC Associates Programme and equivalent programmes in the UK, Germany, France, Spain and Italy. As an Amazon Associate we earn from qualifying purchases.</p>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Questions</h2>
            <p>If you have any questions about our affiliate relationships, please <a href="/contact" className="text-tralvana-gold hover:underline">contact us</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
