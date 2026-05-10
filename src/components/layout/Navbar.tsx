'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Globe, ChevronDown, Plane, Hotel, Car, Map, Tv, BookOpen, ShoppingBag, Trophy, Home } from 'lucide-react'
import { useCurrency } from '@/lib/CurrencyContext'
import type { Currency } from '@/lib/currency'

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Flights', href: '/flights', icon: Plane },
  { label: 'Hotels', href: '/hotels', icon: Hotel },
  { label: 'Car Hire', href: '/cars', icon: Car },
  { label: 'Tours', href: '/tours', icon: Map },
  {
    label: 'Destinations',
    href: '/destinations',
    icon: Globe,
    children: [
      { label: 'Caribbean', href: '/destinations/caribbean' },
      { label: 'Africa', href: '/destinations/africa' },
      { label: 'Europe', href: '/destinations/europe' },
      { label: 'Americas', href: '/destinations/americas' },
      { label: 'Asia Pacific', href: '/destinations/asia' },
      { label: 'Middle East', href: '/destinations/middle-east' },
    ],
  },
  { label: 'Tralvana TV', href: '/tv', icon: Tv },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Travel Shop', href: '/shop', icon: ShoppingBag },
  { label: '⚽ Sports Travel', href: '/sports', icon: Trophy },
]

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

const currencies: { code: Currency; symbol: string; label: string }[] = [
  { code: 'GBP', symbol: '£', label: 'GBP' },
  { code: 'USD', symbol: '$', label: 'USD' },
  { code: 'EUR', symbol: '€', label: 'EUR' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const { config, setCurrency } = useCurrency()

  return (
    <nav style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }} className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Tralvana"
              style={{ height: '45px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors duration-200"
                  style={{ color: '#1F2937' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-48">
                    <div className="rounded-xl py-2 shadow-lg" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm transition-colors"
                          style={{ color: '#1F2937' }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-2">

            {/* More Links */}
            {navLinks.slice(6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm rounded-lg transition-colors"
                style={{ color: '#1F2937' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {link.label}
              </Link>
            ))}

            {/* Currency Switcher */}
            <div className="relative">
              <button
                onClick={() => { setCurrencyOpen(!currencyOpen); setLangOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all"
                style={{ color: '#1F2937', border: '1px solid #D1D5DB' }}
              >
                <span>{config.symbol}</span>
                <span>{config.code}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full pt-2 w-36 z-50">
                  <div className="rounded-xl py-2 shadow-lg" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => { setCurrency(c.code); setCurrencyOpen(false) }}
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                        style={{ color: config.code === c.code ? '#C9A84C' : '#1F2937' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        {c.symbol} {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => { setLangOpen(!langOpen); setCurrencyOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all"
                style={{ color: '#1F2937', border: '1px solid #D1D5DB' }}
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full pt-2 w-40 z-50">
                  <div className="rounded-xl py-2 shadow-lg" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setCurrentLang(lang.code); setLangOpen(false) }}
                        className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors"
                        style={{ color: currentLang === lang.code ? '#C9A84C' : '#1F2937' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            style={{ color: '#1F2937' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm"
                  style={{ color: '#1F2937' }}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-8 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm"
                        style={{ color: '#6B7280' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Currency & Language */}
            <div className="pt-4 flex gap-2" style={{ borderTop: '1px solid #E5E7EB' }}>
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className="px-3 py-1.5 text-sm rounded-lg border transition-all"
                  style={{
                    border: `1px solid ${config.code === c.code ? '#C9A84C' : '#D1D5DB'}`,
                    color: config.code === c.code ? '#C9A84C' : '#1F2937',
                  }}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className="px-3 py-1.5 text-sm rounded-lg border transition-all"
                  style={{
                    border: `1px solid ${currentLang === lang.code ? '#C9A84C' : '#D1D5DB'}`,
                    color: currentLang === lang.code ? '#C9A84C' : '#1F2937',
                  }}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
