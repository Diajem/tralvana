import Link from 'next/link'

export const metadata = {
  title: 'Travel Blog | Tralvana',
  description: 'Travel guides, destination inspiration, tips and stories from around the world. Africa, Caribbean, Europe, Americas and beyond.',
}

const posts = [
  { slug: 'best-time-to-visit-jamaica', title: 'Best Time to Visit Jamaica: A Complete Season Guide', excerpt: 'Everything you need to know about when to book your Jamaica trip — weather, festivals, prices and insider tips.', category: 'Caribbean', readTime: '5 min', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', date: 'May 2026' },
  { slug: 'uk-to-africa-flight-guide', title: 'Flying from the UK to Africa: Airlines, Routes & Best Deals', excerpt: 'A practical guide to booking flights from London to Lagos, Accra, Nairobi and beyond.', category: 'Africa', readTime: '8 min', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', date: 'April 2026' },
  { slug: 'europe-weekend-breaks-from-uk', title: '10 Best European Weekend Breaks from the UK in 2026', excerpt: 'Short on time but big on wanderlust? These are the best European city breaks you can do in 48 hours.', category: 'Europe', readTime: '6 min', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', date: 'April 2026' },
  { slug: 'premier-league-travel-guide', title: 'The Ultimate Premier League Match Day Travel Guide', excerpt: 'Everything fans from outside the UK need to know to plan their perfect Premier League match day trip.', category: 'Sports Travel', readTime: '10 min', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80', date: 'March 2026' },
  { slug: 'dubai-on-a-budget', title: 'Dubai on a Budget: How to Experience Luxury for Less', excerpt: 'Dubai does not have to break the bank. Here is how to enjoy the UAE\'s most glamorous city without overspending.', category: 'Middle East', readTime: '7 min', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', date: 'March 2026' },
  { slug: 'caribbean-cruise-guide', title: 'Your Complete Caribbean Cruise Guide for 2026', excerpt: 'Which cruise line, which islands, which cabin — everything you need to plan the perfect Caribbean cruise.', category: 'Caribbean', readTime: '12 min', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80', date: 'February 2026' },
  { slug: 'airport-parking-heathrow-guide', title: 'Best Airport Parking at Heathrow: A Traveller\'s Guide', excerpt: 'Meet and greet, short stay, long stay — we break down every parking option at Heathrow with honest prices.', category: 'Travel Tips', readTime: '5 min', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', date: 'February 2026' },
  { slug: 'travel-esim-guide', title: 'Do You Need a Travel eSIM? A Complete Beginner\'s Guide', excerpt: 'What is an eSIM, how does it work, which countries does it cover and is it worth it? All answered here.', category: 'Travel Tech', readTime: '6 min', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', date: 'January 2026' },
  { slug: 'new-york-48-hour-guide', title: 'New York City in 48 Hours: The Perfect Itinerary', excerpt: 'Two days, one of the world\'s greatest cities. How to see the best of New York without wasting a minute.', category: 'Americas', readTime: '8 min', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80', date: 'January 2026' },
]

const categories = ['All', 'Caribbean', 'Africa', 'Europe', 'Americas', 'Middle East', 'Sports Travel', 'Travel Tips', 'Travel Tech']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-tralvana-black pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Guides</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Inspiration & <span className="text-gold-gradient">Expert Advice</span>
          </h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">
            Destination guides, travel tips, sports travel and real journeys from the Tralvana team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm transition-all border ${cat === 'All' ? 'border-tralvana-gold bg-tralvana-gold/10 text-tralvana-gold' : 'border-tralvana-border text-tralvana-muted hover:border-tralvana-gold hover:text-tralvana-gold'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${posts[0].slug}`} className="group block mb-8">
          <div className="relative overflow-hidden rounded-2xl gold-border" style={{ height: '380px' }}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${posts[0].image})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/95 via-tralvana-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-xs px-3 py-1 rounded-full bg-tralvana-gold text-tralvana-black font-semibold">Featured</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-tralvana-gold text-xs uppercase tracking-wider">{posts[0].category} · {posts[0].readTime} read · {posts[0].date}</span>
              <h2 className="font-display text-3xl font-bold text-white mt-2 mb-3 group-hover:text-tralvana-gold transition-colors">{posts[0].title}</h2>
              <p className="text-tralvana-muted max-w-2xl">{posts[0].excerpt}</p>
            </div>
          </div>
        </Link>

        {/* Goddiva — Travel Fashion Card */}
        <div style={{
          margin: '32px 0',
          padding: '20px 24px',
          background: '#FFF8EC',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          border: '1px solid #F3D99A'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '2rem' }}>✨</div>
            <div>
              <div style={{ fontSize: '10px', color: '#92700A', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3px' }}>
                Travel Fashion Partner
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1F2937', marginBottom: '3px' }}>
                Goddiva — Summer &amp; Holiday Wear
              </div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                Find the perfect outfit for your next adventure
              </div>
            </div>
          </div>
          <a
            href="https://www.awin1.com/cread.php?s=3861504&v=2894&q=512086&r=1773696"
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              background: '#92700A',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            Browse Collection →
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group glass-card rounded-2xl overflow-hidden hover-lift gold-border">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-tralvana-gold/20 border border-tralvana-gold/40 text-tralvana-gold font-medium backdrop-blur-sm">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-tralvana-muted text-xs mb-2">{post.readTime} read · {post.date}</p>
                <h3 className="font-display font-semibold text-white text-base leading-snug mb-2 group-hover:text-tralvana-gold transition-colors">{post.title}</h3>
                <p className="text-tralvana-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
