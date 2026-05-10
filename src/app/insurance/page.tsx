import { AFFILIATES } from '@/lib/affiliates'

export const metadata = {
  title: 'Travel Insurance | Tralvana',
  description: 'Compare the best travel insurance for your trip. Single trip, annual multi-trip and backpacker cover from trusted providers.',
}

const providers = [
  {
    name: 'World Nomads',
    logo: '🌏',
    tagline: 'Travel insurance for adventurous travellers',
    commission: 'Standard commission',
    features: [
      'Covers 150+ adventure activities',
      'Medical expenses up to £5,000,000',
      'Trip cancellation & interruption',
      'Emergency evacuation cover',
      '24/7 emergency assistance',
      'Covers 150+ countries',
    ],
    bestFor: 'Adventure travel, backpackers, long-term travellers',
    href: (AFFILIATES.worldNomads as any).base,
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    name: 'SafetyWing',
    logo: '🛡',
    tagline: 'Affordable travel & health insurance',
    commission: 'Affiliate programme',
    features: [
      'From $42 per 4 weeks',
      'Automatic monthly renewal',
      'Works in 180+ countries',
      'COVID-19 cover included',
      'Home country coverage (15 days/90 days)',
      'Ideal for digital nomads',
    ],
    bestFor: 'Remote workers, digital nomads, long-term travellers',
    href: 'https://safetywing.com',
    cta: 'Get Covered',
    highlight: false,
  },
]

const coverTypes = [
  { icon: '✈', title: 'Single Trip', desc: 'One trip, one price. Perfect for a one-off holiday or business trip.' },
  { icon: '🌍', title: 'Annual Multi-Trip', desc: 'Unlimited trips in 12 months. Best value if you travel twice or more per year.' },
  { icon: '🎒', title: 'Backpacker', desc: 'Extended cover for longer trips — typically 3 to 18 months of continuous travel.' },
  { icon: '👨‍👩‍👧', title: 'Family Cover', desc: 'One policy for the whole family. Usually covers up to 2 adults and all dependent children.' },
]

const whyInsuranceItems = [
  { icon: '🏥', title: 'Medical Emergencies', desc: 'A medical emergency abroad can cost tens of thousands of pounds without insurance. One hospitalisation in the USA averages £25,000+.' },
  { icon: '🚁', title: 'Emergency Evacuation', desc: 'If you need airlifting to the nearest hospital or repatriation back to the UK, evacuation alone can cost £50,000 or more.' },
  { icon: '❌', title: 'Cancellations', desc: 'Flight cancellations, illness before departure, or a family emergency can result in losing your entire holiday cost without cover.' },
  { icon: '🧳', title: 'Lost Luggage', desc: 'Airlines lose over 25 million bags per year. Insurance covers replacement of belongings and essential items while you wait.' },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-tralvana-black">

      {/* Hero */}
      <div className="relative h-[45vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tralvana-black/60 via-tralvana-black/40 to-tralvana-black" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Protection</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">Travel Insurance</h1>
          <p className="text-tralvana-muted text-lg max-w-xl mx-auto">
            Don't leave home without it. Compare trusted providers for single trip, annual and adventure cover.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">

        {/* Why you need it */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-6 mb-12">
          {whyInsuranceItems.map(item => (
            <div key={item.title} className="glass-card rounded-2xl p-5 gold-border text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-tralvana-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Providers */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Recommended <span className="text-gold-gradient">Providers</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map(provider => (
              <div
                key={provider.name}
                className={`glass-card rounded-2xl p-6 ${provider.highlight ? 'gold-border ring-1 ring-tralvana-gold/20' : 'border border-tralvana-border'} flex flex-col`}
              >
                {provider.highlight && (
                  <div className="inline-flex items-center gap-1 bg-tralvana-gold/10 border border-tralvana-gold/30 rounded-full px-3 py-1 text-xs text-tralvana-gold font-medium mb-4 self-start">
                    ⭐ Recommended
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{provider.logo}</span>
                  <div>
                    <h3 className="text-white font-display font-bold text-lg">{provider.name}</h3>
                    <p className="text-tralvana-muted text-xs">{provider.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 flex-1">
                  {provider.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-tralvana-muted">
                      <span className="text-tralvana-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-tralvana-border mb-4">
                  <p className="text-xs text-tralvana-muted">
                    <span className="text-tralvana-gold font-medium">Best for:</span> {provider.bestFor}
                  </p>
                </div>
                <a
                  href={provider.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all uppercase tracking-wider ${
                    provider.highlight
                      ? 'bg-tralvana-gold text-tralvana-black hover:bg-tralvana-gold-light'
                      : 'border border-tralvana-gold text-tralvana-gold hover:bg-tralvana-gold/10'
                  }`}
                >
                  {provider.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Types of cover */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Types of <span className="text-gold-gradient">Cover</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coverTypes.map(type => (
              <div key={type.title} className="glass-card rounded-xl p-5 gold-border">
                <div className="text-2xl mb-3">{type.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">{type.title}</h3>
                <p className="text-tralvana-muted text-xs leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist before you buy */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="text-white font-semibold mb-5 text-lg">What to check before you buy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Does it cover your destination country?',
              'Are your planned activities covered (skiing, diving, etc)?',
              'What is the medical cover limit? (£2m+ recommended)',
              'Is COVID-19 cancellation included?',
              'What is the excess per claim?',
              'Does it cover pre-existing medical conditions?',
              'Is travel disruption (delays, missed connections) included?',
              'What is the baggage cover limit?',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-tralvana-muted">
                <span className="text-tralvana-gold mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
