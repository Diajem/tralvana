import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'best-time-to-visit-jamaica',
    title: 'Best Time to Visit Jamaica: A Complete Season Guide',
    excerpt: 'Everything you need to know about when to book your Jamaica trip — weather, festivals, prices and insider tips from our travel team.',
    category: 'Caribbean',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    date: 'May 2026',
  },
  {
    slug: 'uk-to-africa-flight-guide',
    title: 'Flying from the UK to Africa: Airlines, Routes & Best Deals',
    excerpt: 'A practical guide to booking flights from London to Lagos, Accra, Nairobi and beyond. Which airlines to use, when to book and how to save.',
    category: 'Africa',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
    date: 'April 2026',
  },
  {
    slug: 'europe-weekend-breaks-from-uk',
    title: '10 Best European Weekend Breaks from the UK in 2026',
    excerpt: 'Short on time but big on wanderlust? These are the best European city breaks you can do in 48 hours from any UK airport.',
    category: 'Europe',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
    date: 'April 2026',
  },
]

export default function BlogPreview() {
  return (
    <section className="section-padding px-4 bg-tralvana-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-tralvana-gold" />
              <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Guides</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Inspiration &
              <br />
              <span className="text-gold-gradient">Expert Advice</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-tralvana-gold text-sm font-medium hover:gap-3 transition-all"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card rounded-2xl overflow-hidden hover-lift gold-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-tralvana-gold/20 border border-tralvana-gold/40 text-tralvana-gold font-medium backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-tralvana-muted mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg leading-snug mb-2 group-hover:text-tralvana-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-tralvana-muted text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-tralvana-gold text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
