import TravelpayoutsWidget from '@/components/affiliates/TravelpayoutsWidget'
import { WIDGETS } from '@/lib/widgets'

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Car Hire</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Hire A <span className="text-gold-gradient">Car</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            Compare 650+ car hire suppliers across 145 countries. Airport pickups, one-way rentals and long-stay deals.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <span className="text-tralvana-gold">✓ Free cancellation</span>
            <span className="text-tralvana-gold">✓ 650+ suppliers</span>
            <span className="text-tralvana-gold">✓ 145 countries</span>
            <span className="text-tralvana-gold">✓ Airport pickups</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 gold-border mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            🚗 Search Car Hire
            <span className="text-xs text-tralvana-gold font-normal">Powered by DiscoverCars</span>
          </h2>
          <TravelpayoutsWidget
            src={WIDGETS.carsDiscover}
            minHeight="280px"
          />
        </div>

      </div>
    </div>
  )
}
