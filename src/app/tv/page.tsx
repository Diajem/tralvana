export const metadata = {
  title: 'Tralvana TV | Your World Starts Here',
  description: 'Watch real travel journeys, client experiences, cruise reviews and destination guides on Tralvana TV.',
}

const videos = [
  { id: 1, title: 'Exploring Negril, Jamaica', subtitle: 'Caribbean Collection', duration: '8:24', thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', youtubeId: '', featured: true },
  { id: 2, title: 'Safari in the Serengeti', subtitle: 'Africa Series', duration: '12:10', thumbnail: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', youtubeId: '', featured: false },
  { id: 3, title: 'Weekend in Paris', subtitle: 'Europe Collection', duration: '6:45', thumbnail: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', youtubeId: '', featured: false },
  { id: 4, title: 'Caribbean Cruise Experience', subtitle: 'Client Journey', duration: '15:30', thumbnail: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80', youtubeId: '', featured: false },
  { id: 5, title: 'New York City — 72 Hours', subtitle: 'Americas Collection', duration: '9:15', thumbnail: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80', youtubeId: '', featured: false },
  { id: 6, title: 'Dubai — Luxury & Adventure', subtitle: 'Middle East Series', duration: '11:00', thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', youtubeId: '', featured: false },
]

const playlists = [
  { title: 'Caribbean Collection', count: 8, emoji: '🌴' },
  { title: 'Africa Series', count: 12, emoji: '🦁' },
  { title: 'Europe Collection', count: 15, emoji: '🏛' },
  { title: 'Client Journeys', count: 6, emoji: '🎒' },
  { title: 'Cruise Experiences', count: 4, emoji: '🚢' },
  { title: 'Sports Travel', count: 3, emoji: '⚽' },
]

export default function TVPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Watch</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Tralvana <span className="text-gold-gradient">TV</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            Real journeys. Client travel stories. Destination guides, cruise experiences and sports travel around the world.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden gold-border group cursor-pointer" style={{ height: '400px' }}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${videos[0].thumbnail})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 via-tralvana-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-full bg-tralvana-gold/90 flex items-center justify-center shadow-gold">
                <span className="text-tralvana-black text-2xl ml-1">▶</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-tralvana-gold text-tralvana-black text-xs font-bold px-3 py-1 rounded-full">FEATURED</div>
            <div className="absolute top-4 right-4 bg-tralvana-black/80 text-white text-xs px-2 py-1 rounded-lg">{videos[0].duration}</div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-tralvana-gold text-sm mb-2 uppercase tracking-wider">{videos[0].subtitle}</p>
              <h2 className="font-display text-3xl font-bold text-white">{videos[0].title}</h2>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {videos.slice(1).map((video) => (
            <div key={video.id} className="group relative overflow-hidden rounded-2xl gold-border cursor-pointer hover-lift" style={{ height: '220px' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${video.thumbnail})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 via-tralvana-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-tralvana-gold/90 flex items-center justify-center">
                  <span className="text-tralvana-black text-xl ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-tralvana-black/80 text-white text-xs px-2 py-1 rounded-lg">{video.duration}</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-tralvana-gold text-xs uppercase tracking-wider mb-1">{video.subtitle}</p>
                <h3 className="font-display text-base font-semibold text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Playlists */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Browse <span className="text-gold-gradient">Playlists</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {playlists.map((pl) => (
              <div key={pl.title} className="glass-card rounded-xl p-4 gold-border hover-lift cursor-pointer flex items-center gap-4">
                <div className="text-2xl">{pl.emoji}</div>
                <div>
                  <div className="text-white text-sm font-medium">{pl.title}</div>
                  <div className="text-tralvana-muted text-xs">{pl.count} videos</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Your Journey CTA */}
        <div className="glass-card rounded-2xl p-8 gold-border text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">🎬 Share Your Tralvana Journey</h2>
          <p className="text-tralvana-muted mb-6 max-w-lg mx-auto text-sm">
            Travelled with Tralvana or booked through us? Share your video and we may feature it on Tralvana TV. Reach our global audience of travellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="text" placeholder="Your name or channel" className="flex-1 bg-tralvana-black border border-tralvana-border rounded-xl px-4 py-3 text-white placeholder-tralvana-muted focus:outline-none focus:border-tralvana-gold text-sm" />
            <a href="/contact" className="px-6 py-3 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all text-sm whitespace-nowrap">Submit Video</a>
          </div>
        </div>
      </div>
    </div>
  )
}
