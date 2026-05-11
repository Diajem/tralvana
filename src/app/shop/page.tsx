'use client'

const products = [
  {
    name: 'Luggage & Suitcases',
    badge: 'Best Seller',
    category: 'Travel Essential',
    description: 'Hard shell, soft case, carry-on and checked luggage for every journey',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=travel+luggage+suitcase&tag=diajemglobal-21',
  },
  {
    name: 'Packing Cubes',
    badge: 'Top Rated',
    category: 'Organisation',
    description: 'Compression packing cubes to maximise suitcase space',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=packing+cubes+travel+organiser+set&tag=diajemglobal-21',
  },
  {
    name: 'Universal Travel Adapters',
    badge: '150+ Countries',
    category: 'Tech Essential',
    description: 'Multi-port USB and USB-C adapters that work worldwide',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=universal+travel+adapter+multi+port+USB&tag=diajemglobal-21',
  },
  {
    name: 'Noise-Cancelling Headphones',
    badge: 'Premium',
    category: 'Audio',
    description: 'Block engine noise on long-haul flights to Jamaica, Dubai and beyond',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=noise+cancelling+headphones+travel&tag=diajemglobal-21',
  },
  {
    name: 'Portable Power Banks',
    badge: 'Must Have',
    category: 'Tech',
    description: 'Compact power banks to keep all your devices charged on the go',
    image: 'https://images.unsplash.com/photo-1609592806596-b9d6f7e9e8b8?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=portable+charger+power+bank+travel&tag=diajemglobal-21',
  },
  {
    name: 'Travel Wallets & Passport Holders',
    badge: 'RFID Safe',
    category: 'Security',
    description: 'RFID-blocking passport holders and slim travel wallets',
    image: 'https://images.unsplash.com/photo-1614267861476-0d129972a0f4?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=travel+wallet+passport+holder+RFID+blocking&tag=diajemglobal-21',
  },
  {
    name: 'Toiletry & Wash Bags',
    badge: 'TSA Approved',
    category: 'Toiletries',
    description: 'TSA-approved clear zip bags and hanging wash bags',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=travel+toiletry+bag+TSA+approved&tag=diajemglobal-21',
  },
  {
    name: 'Luggage Scales & Locks',
    badge: 'Save Money',
    category: 'Smart Travel',
    description: 'Avoid overweight baggage fees with digital luggage scales',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=luggage+scale+digital+TSA+lock&tag=diajemglobal-21',
  },
  {
    name: 'Neck Pillows & Sleep Masks',
    badge: 'Comfort',
    category: 'Comfort',
    description: 'Sleep better on long-haul flights with memory foam pillows',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=travel+neck+pillow+memory+foam+sleep+mask&tag=diajemglobal-21',
  },
  {
    name: 'Travel Backpacks',
    badge: 'Cabin Approved',
    category: 'Luggage',
    description: 'Lightweight cabin-approved backpacks for carry-on only travel',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=travel+backpack+cabin+approved+carry+on&tag=diajemglobal-21',
  },
  {
    name: 'Insulated Water Bottles',
    badge: 'Eco Friendly',
    category: 'Hydration',
    description: 'Keep drinks hot or cold for 24 hours with insulated bottles',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=insulated+water+bottle+travel+stainless+steel&tag=diajemglobal-21',
  },
  {
    name: 'Action Cameras & Gear',
    badge: 'Capture Everything',
    category: 'Photography',
    description: 'Action cameras, gimbals and accessories for your travel adventures',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
    url: 'https://www.amazon.co.uk/s?k=action+camera+travel+photography+accessories&tag=diajemglobal-21',
  },
]

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 text-center border-b border-white/10">
        <p className="text-sm uppercase tracking-widest text-[#C9A84C] mb-3">Travel Shop</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Pack Smart. Travel Better.
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg">
          Curated travel gear for every journey. Everything you need before you fly — all available on Amazon with fast delivery.
        </p>
        <p className="mt-4 text-white/40 text-sm">Currently showing: <strong className="text-white/60">🇬🇧 Amazon UK</strong></p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#C9A84C] text-black text-xs font-semibold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-black/60 text-white/80 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-base mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm flex-1 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold text-sm py-2.5 px-4 rounded-lg transition-colors duration-200"
                >
                  Shop on Amazon 🇬🇧
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <p className="text-center text-white/30 text-xs mt-12 max-w-2xl mx-auto">
          <strong className="text-white/50">Amazon Associates Disclosure:</strong> As an Amazon Associate, Tralvana earns from qualifying purchases. Prices shown on Amazon may vary. You pay the same price — we earn a small commission that helps keep Tralvana free to use.
        </p>
      </section>
    </main>
  )
}
