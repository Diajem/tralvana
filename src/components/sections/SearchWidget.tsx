'use client'
import { useRef, useEffect } from 'react'

export default function SearchWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.innerHTML = ''
    const script = document.createElement('script')
    script.src = 'https://tpwdg.com/content?trs=432320&shmarker=493614&width=600&height=535&powered_by=true&campaign_id=146&promo_id=4428'
    script.async = true
    script.charset = 'utf-8'
    containerRef.current.appendChild(script)
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <section id="search" style={{
      background: '#0f1320',
      padding: '48px 20px',
      borderTop: '3px solid #C9A84C',
      borderBottom: '3px solid #C9A84C',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>

        <h2 style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: 'white',
          fontFamily: 'Playfair Display, serif',
          margin: 0
        }}>
          Search &amp; Book Your Trip
        </h2>

        <p style={{
          textAlign: 'center',
          color: '#9CA3AF',
          fontSize: '14px',
          margin: 0
        }}>
          Flights · Hotels · Cars · Bundle &amp; Save
        </p>

        <div
          ref={containerRef}
          style={{
            width: '100%',
            maxWidth: '800px',
            minHeight: '535px',
          }}
        />

        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '13px', color: '#6B7280' }}>
            Popular:
          </span>
          {['Jamaica', 'Accra', 'Dubai', 'New York',
            'Lagos', 'Barbados', 'Paris', 'Nairobi'
          ].map((dest) => (
            <a
              key={dest}
              href={`/destinations/${dest.toLowerCase().replace(' ', '-')}`}
              style={{
                fontSize: '13px',
                color: '#C9A84C',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              {dest}
            </a>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#4B5563',
          margin: 0
        }}>
          Need more options?
          <a href="/flights" style={{ color: '#C9A84C', marginLeft: '8px', marginRight: '8px' }}>Flights</a>·
          <a href="/hotels" style={{ color: '#C9A84C', marginLeft: '8px', marginRight: '8px' }}>Hotels</a>·
          <a href="/cars" style={{ color: '#C9A84C', marginLeft: '8px', marginRight: '8px' }}>Car Hire</a>·
          <a href="/tours" style={{ color: '#C9A84C', marginLeft: '8px' }}>Tours</a>
        </p>

      </div>
    </section>
  )
}
