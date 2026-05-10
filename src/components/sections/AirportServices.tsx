import { Car, Smartphone, Phone, Shield, Wifi, Star } from 'lucide-react'
import { AFFILIATES } from '@/lib/affiliates'

const services = [
  {
    icon: Car,
    title: 'Bee Parking Heathrow',
    subtitle: 'Official Airport Parking',
    description: 'Secure, convenient parking at Heathrow Airport. Meet & greet, short stay, long stay — all options available.',
    href: AFFILIATES.awin.beeParking.url,
    tag: 'UK Exclusive',
    cta: 'Book Parking',
  },
  {
    icon: Wifi,
    title: 'WorldSIM',
    subtitle: 'Global Travel SIM',
    description: 'Stay connected in 200+ countries with one SIM card. No roaming charges. Perfect for Africa, Caribbean & worldwide travel.',
    href: AFFILIATES.awin.worldSim.url,
    tag: 'Travel Essential',
    cta: 'Get WorldSIM',
  },
  {
    icon: Phone,
    title: 'TTfone',
    subtitle: 'Simple Travel Phones',
    description: 'Affordable, unlocked mobile phones perfect for travel. Easy to use, long battery life — ideal for every destination.',
    href: AFFILIATES.awin.ttfone.url,
    tag: 'Budget Friendly',
    cta: 'Shop Phones',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    subtitle: 'World Nomads',
    description: 'Comprehensive travel insurance for adventurers. Covers Africa, Caribbean, worldwide. Medical, cancellation and more.',
    href: AFFILIATES.worldNomads.base,
    tag: 'Peace of Mind',
    cta: 'Get Covered',
  },
  {
    icon: Star,
    title: 'Airport Lounges',
    subtitle: 'Priority Pass',
    description: 'Access 1,300+ airport lounges worldwide. Relax before your flight to Jamaica, Lagos, Dubai or anywhere else.',
    href: AFFILIATES.priorityPass.base,
    tag: 'Premium',
    cta: 'Join Priority Pass',
  },
  {
    icon: Smartphone,
    title: 'Travel eSIM',
    subtitle: 'Holafly',
    description: 'Instant data plans for 200+ destinations. No SIM swap needed. Connect the moment you land anywhere in the world.',
    href: AFFILIATES.holafly.base,
    tag: 'Instant Connect',
    cta: 'Get eSIM',
  },
]

export default function AirportServices() {
  return (
    <section className="section-padding px-4 bg-tralvana-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Essentials</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold text-white">
            Everything You Need
            <br />
            <span className="text-gold-gradient">Before You Fly</span>
          </h2>
          <p className="text-tralvana-muted mt-4 max-w-xl mx-auto">
            Parking, SIM cards, insurance, lounge access — all the essentials sorted in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group glass-card rounded-2xl p-6 hover-lift gold-border transition-all duration-300"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-tralvana-gold/10 border border-tralvana-gold/20 text-tralvana-gold">
                  {service.tag}
                </span>
                <service.icon className="w-5 h-5 text-tralvana-muted group-hover:text-tralvana-gold transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-white mb-1">{service.title}</h3>
              <p className="text-tralvana-gold text-xs font-medium mb-3">{service.subtitle}</p>
              <p className="text-tralvana-muted text-sm leading-relaxed mb-5">{service.description}</p>

              {/* CTA */}
              <div className="text-sm font-medium text-tralvana-gold group-hover:text-tralvana-gold-light transition-colors flex items-center gap-1">
                {service.cta} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
