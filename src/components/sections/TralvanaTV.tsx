'use client'
import { Play, Youtube } from 'lucide-react'
import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: 'Exploring Negril, Jamaica',
    subtitle: 'Caribbean Collection',
    duration: '8:24',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    youtubeId: null, // Add YouTube ID when ready
    featured: true,
  },
  {
    id: 2,
    title: 'Safari in the Serengeti',
    subtitle: 'Africa Series',
    duration: '12:10',
    thumbnail: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
    youtubeId: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Weekend in Paris',
    subtitle: 'Europe Collection',
    duration: '6:45',
    thumbnail: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
    youtubeId: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Luxury Cruise — Caribbean',
    subtitle: 'Client Journey',
    duration: '15:30',
    thumbnail: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80',
    youtubeId: null,
    featured: false,
  },
]

function VideoCard({ video, featured = false }: { video: typeof videos[0]; featured?: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer hover-lift gold-border ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{ height: featured ? '400px' : '200px' }}
    >
      {/* Thumbnail */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/90 via-tralvana-black/30 to-transparent" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-tralvana-gold/90 flex items-center justify-center shadow-gold">
          <Play className="w-6 h-6 text-tralvana-black fill-tralvana-black ml-1" />
        </div>
      </div>

      {/* Duration */}
      <div className="absolute top-3 right-3 bg-tralvana-black/80 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
        {video.duration}
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-tralvana-gold text-xs uppercase tracking-wider mb-1">{video.subtitle}</p>
        <h3 className={`font-display font-bold text-white ${featured ? 'text-2xl' : 'text-base'}`}>
          {video.title}
        </h3>
      </div>
    </div>
  )
}

export default function TralvanaTV() {
  return (
    <section className="section-padding px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-tralvana-gold" />
              <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Watch</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Tralvana <span className="text-gold-gradient">TV</span>
            </h2>
            <p className="text-tralvana-muted mt-2 max-w-md">
              Real journeys. Client travel stories. Destination guides and cruise experiences.
            </p>
          </div>
          <Link
            href="/tv"
            className="hidden md:flex items-center gap-2 text-tralvana-gold text-sm font-medium border border-tralvana-gold/30 px-5 py-2.5 rounded-xl hover:border-tralvana-gold transition-colors"
          >
            <Youtube className="w-4 h-4" />
            All Videos
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} featured={video.featured} />
          ))}
        </div>

        {/* Upload CTA */}
        <div className="mt-8 glass-card rounded-2xl p-6 gold-border text-center">
          <p className="text-tralvana-muted text-sm mb-2">
            🎬 <span className="text-white font-medium">Have you travelled with Tralvana?</span>
          </p>
          <p className="text-tralvana-muted text-sm">
            Share your journey and we may feature it on Tralvana TV.{' '}
            <Link href="/contact" className="text-tralvana-gold hover:underline">
              Get in touch →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
