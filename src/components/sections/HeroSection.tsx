'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const slides = [
  { image: '/image/WhatsApp%20Image%202026-05-10%20at%2010.43.30.jpeg', location: 'Negril, Jamaica', local: true },
  { image: '/image/WhatsApp%20Image%202026-05-10%20at%2010.43.41.jpeg', location: 'Negril, Jamaica', local: true },
  { image: '/image/WhatsApp%20Image%202026-05-10%20at%2010.47.10.jpeg', location: 'Negril, Jamaica', local: true },
  { image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80', location: 'Paris, France', local: false },
  { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80', location: 'Dubai, UAE', local: false },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />

      <div className="absolute top-24 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(22,22,42,0.8)', border: '1px solid rgba(201,168,76,0.4)' }}>
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A84C' }} />
        <span className="text-xs" style={{ color: '#8A8AA0' }}>{slides[current].location}</span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12" style={{ background: '#C9A84C' }} />
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#C9A84C' }}>Premium Travel</span>
          <div className="h-px w-12" style={{ background: '#C9A84C' }} />
        </div>

        <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
          Your World
          <br />
          <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Starts Here
          </span>
        </h1>

        <p className="text-base max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Flights, hotels, tours and experiences across Africa, Caribbean, Europe, Americas and beyond. One platform. Every destination.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a href="#search" className="px-6 py-2.5 font-semibold rounded-xl text-sm uppercase tracking-wider" style={{ background: '#C9A84C', color: '#0A0A0F' }}>
            Start Planning
          </a>
          <Link href="/destinations" className="px-6 py-2.5 font-semibold rounded-xl text-sm uppercase tracking-wider" style={{ border: '1px solid rgba(255,255,255,0.6)', color: '#FFFFFF' }}>
            Explore Destinations
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '500+', label: 'Destinations' },
            { value: '1M+', label: 'Hotels Worldwide' },
            { value: '24/7', label: 'Support' },
            { value: '50+', label: 'Airlines' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-xl font-bold" style={{ color: '#C9A84C' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? '2rem' : '0.5rem', height: '0.5rem', background: i === current ? '#C9A84C' : 'rgba(138,138,160,0.4)' }}
          />
        ))}
      </div>

      {slides[current].local && (
        <div className="absolute bottom-8 left-6" style={{ fontSize: '11px', color: '#C9A84C', opacity: 0.85 }}>
          Photos taken on location in Jamaica
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#search" style={{ color: '#8A8AA0' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  )
}
