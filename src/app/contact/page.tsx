export const metadata = { title: 'Contact Tralvana | Get In Touch' }

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest">Contact</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Get In <span className="text-gold-gradient">Touch</span></h1>
          <p className="text-tralvana-muted">Questions, partnerships, media enquiries or video submissions — we want to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { emoji: '✈', title: 'Travel Enquiries', desc: 'Group bookings, custom itineraries, sports travel packages' },
            { emoji: '🤝', title: 'Partnerships', desc: 'Affiliate opportunities, press trips, sponsored content' },
            { emoji: '🎬', title: 'Tralvana TV', desc: 'Submit your travel video or become a content partner' },
            { emoji: '💼', title: 'Business Travel', desc: 'Corporate travel accounts and bulk booking arrangements' },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-5 gold-border">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-tralvana-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 gold-border">
          <h2 className="font-display text-xl font-bold text-white mb-6">Send Us a Message</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-tralvana-muted mb-1.5 uppercase tracking-wider">Your Name</label>
                <input type="text" placeholder="Full name" className="w-full bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white placeholder-tralvana-muted focus:outline-none focus:border-tralvana-gold text-sm" />
              </div>
              <div>
                <label className="block text-xs text-tralvana-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white placeholder-tralvana-muted focus:outline-none focus:border-tralvana-gold text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-tralvana-muted mb-1.5 uppercase tracking-wider">Subject</label>
              <select className="w-full bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tralvana-gold text-sm appearance-none">
                <option>Travel Enquiry</option>
                <option>Group Booking</option>
                <option>Sports Travel Package</option>
                <option>Partnership / Affiliate</option>
                <option>Tralvana TV Submission</option>
                <option>Press / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-tralvana-muted mb-1.5 uppercase tracking-wider">Message</label>
              <textarea rows={5} placeholder="Tell us about your travel plans or enquiry..." className="w-full bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white placeholder-tralvana-muted focus:outline-none focus:border-tralvana-gold text-sm resize-none" />
            </div>
            <button className="w-full py-3.5 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm uppercase tracking-wider">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
