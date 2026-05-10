// PartnersBar.tsx
export default function PartnersBar() {
  const partners = [
    { name: 'Expedia', logo: '✈ Expedia' },
    { name: 'Travelpayouts', logo: '🌐 Travelpayouts' },
    { name: 'Opodo', logo: '🔍 Opodo' },
    { name: 'Viator', logo: '🗺 Viator' },
    { name: 'WorldSIM', logo: '📱 WorldSIM' },
    { name: 'Bee Parking', logo: '🅿 Bee Parking' },
    { name: 'Amazon', logo: '📦 Amazon' },
    { name: 'Priority Pass', logo: '🛋 Priority Pass' },
  ]

  return (
    <section className="py-12 px-4 border-t border-tralvana-border bg-tralvana-dark">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs text-tralvana-muted uppercase tracking-widest mb-8">
          Trusted Partners & Affiliate Programmes
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((p) => (
            <div key={p.name} className="text-tralvana-muted/50 hover:text-tralvana-gold transition-colors text-sm font-medium">
              {p.logo}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-tralvana-muted mt-8">
          Tralvana earns affiliate commissions from partner bookings. This does not affect our editorial recommendations or the price you pay.
        </p>
      </div>
    </section>
  )
}
