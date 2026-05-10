import { AFFILIATES } from '@/lib/affiliates'

export const metadata = { title: 'Travel eSIM & SIM Cards | Tralvana' }

export default function EsimPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest">Stay Connected</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Travel <span className="text-gold-gradient">eSIM & SIM Cards</span></h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">Stay connected in 200+ countries without the roaming charges. Instant digital SIM cards and physical travel SIMs — perfect for Africa, Caribbean, Europe and beyond.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Holafly */}
          <div className="glass-card rounded-2xl p-6 gold-border">
            <div className="text-3xl mb-3">📱</div>
            <h2 className="font-display text-xl font-bold text-white mb-1">Holafly eSIM</h2>
            <p className="text-tralvana-gold text-xs mb-3">Instant Digital SIM · 200+ Countries</p>
            <p className="text-tralvana-muted text-sm mb-4 leading-relaxed">No physical SIM needed. Download and activate instantly before you travel. Unlimited data plans available. Keep your UK number active while using local data.</p>
            <ul className="space-y-1 mb-5 text-xs text-tralvana-muted">
              {['Works on iPhone & Android', 'Activate before you fly', 'Keep your regular number for calls & texts', 'Covers Africa, Caribbean, Europe, USA and more'].map(f => <li key={f} className="flex gap-2"><span className="text-tralvana-gold">✓</span>{f}</li>)}
            </ul>
            <a href={AFFILIATES.holafly.base} target="_blank" rel="noopener noreferrer sponsored"
              className="block text-center px-5 py-3 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm">
              Get Holafly eSIM →
            </a>
          </div>

          {/* WorldSIM */}
          <div className="glass-card rounded-2xl p-6 gold-border">
            <div className="text-3xl mb-3">🌐</div>
            <h2 className="font-display text-xl font-bold text-white mb-1">WorldSIM</h2>
            <p className="text-tralvana-gold text-xs mb-3">Physical Travel SIM · 200+ Countries</p>
            <p className="text-tralvana-muted text-sm mb-4 leading-relaxed">One physical SIM card that works across 200+ countries. No contract, no monthly fees. Top up as you go. Perfect if you prefer a traditional SIM card experience.</p>
            <ul className="space-y-1 mb-5 text-xs text-tralvana-muted">
              {['One SIM for all destinations', 'No roaming charges', 'Calls, texts and data included', 'Free incoming calls in 100+ countries'].map(f => <li key={f} className="flex gap-2"><span className="text-tralvana-gold">✓</span>{f}</li>)}
            </ul>
            <a href={AFFILIATES.awin.worldSim.url} target="_blank" rel="noopener noreferrer sponsored"
              className="block text-center px-5 py-3 border border-tralvana-gold text-tralvana-gold font-semibold rounded-xl hover:bg-tralvana-gold/10 transition-all text-sm">
              Get WorldSIM →
            </a>
          </div>
        </div>

        {/* Which to choose */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <h2 className="font-display text-xl font-bold text-white mb-4">Which Should I Choose?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-tralvana-muted">
            <div>
              <p className="text-white font-medium mb-2">Choose Holafly eSIM if:</p>
              <ul className="space-y-1">{['Your phone supports eSIM (most phones from 2020+)', 'You want instant activation — no waiting for delivery', 'You travel frequently and want unlimited data'].map(i => <li key={i} className="flex gap-2"><span className="text-tralvana-gold">→</span>{i}</li>)}</ul>
            </div>
            <div>
              <p className="text-white font-medium mb-2">Choose WorldSIM if:</p>
              <ul className="space-y-1">{['You prefer a physical SIM card', 'You travel to very remote destinations', 'You want a single SIM that lasts years across all trips'].map(i => <li key={i} className="flex gap-2"><span className="text-tralvana-gold">→</span>{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
