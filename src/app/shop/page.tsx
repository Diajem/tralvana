'use client'
import { buildAmazonLink } from '@/lib/currency'
import { useCurrency } from '@/lib/CurrencyContext'

const products = [
  {
    title: 'Luggage & Suitcases',
    search: 'travel luggage suitcase',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop',
    badge: 'Best Seller',
    desc: 'Hard shell, soft case, carry-on and checked luggage for every journey',
    tag: 'Travel Essential',
  },
  {
    title: 'Packing Cubes',
    search: 'packing cubes travel organiser set',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
    badge: 'Top Rated',
    desc: 'Compression packing cubes to maximise suitcase space',
    tag: 'Organisation',
  },
  {
    title: 'Universal Travel Adapters',
    search: 'universal travel adapter multi port USB',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    badge: '150+ Countries',
    desc: 'Multi-port USB and USB-C adapters that work worldwide',
    tag: 'Tech Essential',
  },
  {
    title: 'Noise-Cancelling Headphones',
    search: 'noise cancelling headphones travel',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop',
    badge: 'Premium',
    desc: 'Block engine noise on long-haul flights to Jamaica, Dubai and beyond',
    tag: 'Audio',
  },
  {
    title: 'Portable Power Banks',
    search: 'portable charger power bank travel',
    image: 'https://images.unsplash.com/photo-1609592806596-b9d6f7e9e8b8?w=400&h=250&fit=crop',
    badge: 'Must Have',
    desc: 'Compact power banks to keep all your devices charged on the go',
    tag: 'Tech',
  },
  {
    title: 'Travel Wallets & Passport Holders',
    search: 'travel wallet passport holder RFID blocking',
    image: 'https://images.unsplash.com/photo-1553531384-397c80973a0b?w=400&h=250&fit=crop',
    badge: 'RFID Safe',
    desc: 'RFID-blocking passport holders and slim travel wallets',
    tag: 'Security',
  },
  {
    title: 'Toiletry & Wash Bags',
    search: 'travel toiletry bag TSA approved',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=400&h=250&fit=crop',
    badge: 'TSA Approved',
    desc: 'TSA-approved clear zip bags and hanging wash bags',
    tag: 'Toiletries',
  },
  {
    title: 'Luggage Scales & Locks',
    search: 'luggage scale digital TSA lock',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=250&fit=crop',
    badge: 'Save Money',
    desc: 'Avoid overweight baggage fees with digital luggage scales',
    tag: 'Smart Travel',
  },
  {
    title: 'Neck Pillows & Sleep Masks',
    search: 'travel neck pillow memory foam sleep mask',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=250&fit=crop',
    badge: 'Comfort',
    desc: 'Sleep better on long-haul flights with memory foam pillows',
    tag: 'Comfort',
  },
  {
    title: 'Travel Backpacks',
    search: 'travel backpack cabin approved carry on',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=250&fit=crop',
    badge: 'Cabin Approved',
    desc: 'Lightweight cabin-approved backpacks for carry-on only travel',
    tag: 'Luggage',
  },
  {
    title: 'Insulated Water Bottles',
    search: 'insulated water bottle travel stainless steel',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=250&fit=crop',
    badge: 'Eco Friendly',
    desc: 'Keep drinks hot or cold for 24 hours with insulated bottles',
    tag: 'Hydration',
  },
  {
    title: 'Action Cameras & Gear',
    search: 'action camera travel photography accessories',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=250&fit=crop',
    badge: 'Capture Everything',
    desc: 'Action cameras, gimbals and accessories for your travel adventures',
    tag: 'Photography',
  },
]

export default function ShopPage() {
  const { config } = useCurrency()

  const regionLabel: Record<string, string> = {
    UK: '🇬🇧 Amazon UK',
    US: '🇺🇸 Amazon US',
    DE: '🇩🇪 Amazon DE',
    FR: '🇫🇷 Amazon FR',
    ES: '🇪🇸 Amazon ES',
    IT: '🇮🇹 Amazon IT',
  }

  const label = regionLabel[config.amazonRegion] ?? '🇬🇧 Amazon UK'

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', paddingTop: '80px' }}>

      {/* Header */}
      <div style={{ background: 'white', padding: '48px 20px 40px', borderBottom: '1px solid #E5E7EB', textAlign: 'center' }}>
        <p style={{ color: '#C9A84C', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}>Travel Shop</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '12px' }}>
          Pack Smart. <span style={{ color: '#C9A84C' }}>Travel Better.</span>
        </h1>
        <p style={{ color: '#6B7280', maxWidth: '500px', margin: '0 auto 20px', lineHeight: '1.6' }}>
          Curated travel gear for every journey. Everything you need before you fly — all available on Amazon with fast delivery.
        </p>
        <p style={{ fontSize: '13px', color: '#9CA3AF' }}>
          Currently showing: <strong style={{ color: '#C9A84C' }}>{label}</strong>
        </p>
      </div>

      {/* Products Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {products.map((product) => (
            <a
              key={product.title}
              href={buildAmazonLink('', config.amazonRegion, product.search)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  border: '1px solid #F3F4F6',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: '#C9A84C', color: '#0A0A0F',
                    padding: '4px 10px', borderRadius: '20px',
                    fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px',
                  }}>
                    {product.badge}
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: 'rgba(0,0,0,0.6)', color: 'white',
                    padding: '4px 10px', borderRadius: '20px',
                    fontSize: '10px', fontWeight: '600',
                  }}>
                    {product.tag}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '16px 20px 20px' }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem', fontWeight: '700',
                    color: '#1F2937', marginBottom: '8px', lineHeight: '1.3',
                  }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.5', marginBottom: '16px' }}>
                    {product.desc}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 14px', background: '#FF9900',
                    borderRadius: '8px', color: '#0A0A0F',
                    fontWeight: '700', fontSize: '13px',
                  }}>
                    <span>Shop on Amazon</span>
                    <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Disclosure */}
        <div style={{ marginTop: '48px', padding: '20px', background: 'white', borderRadius: '12px', textAlign: 'center', border: '1px solid #E5E7EB' }}>
          <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.6' }}>
            <strong style={{ color: '#6B7280' }}>Amazon Associates Disclosure:</strong> As an Amazon Associate, Tralvana earns from qualifying purchases.
            Prices shown on Amazon may vary. You pay the same price — we earn a small commission that helps keep Tralvana free to use.
          </p>
        </div>
      </div>
    </div>
  )
}
