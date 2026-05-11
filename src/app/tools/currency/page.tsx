'use client'
import { useState, useEffect } from 'react'

const CURRENCIES = [
  { code: 'GBP', symbol: '£',    name: 'British Pound',          flag: '🇬🇧' },
  { code: 'USD', symbol: '$',    name: 'US Dollar',              flag: '🇺🇸' },
  { code: 'EUR', symbol: '€',    name: 'Euro',                   flag: '🇪🇺' },
  { code: 'NGN', symbol: '₦',   name: 'Nigerian Naira',         flag: '🇳🇬' },
  { code: 'GHS', symbol: '₵',   name: 'Ghana Cedi',             flag: '🇬🇭' },
  { code: 'JMD', symbol: 'J$',  name: 'Jamaican Dollar',        flag: '🇯🇲' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling',        flag: '🇰🇪' },
  { code: 'ZAR', symbol: 'R',   name: 'South African Rand',     flag: '🇿🇦' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham',             flag: '🇦🇪' },
  { code: 'CAD', symbol: 'C$',  name: 'Canadian Dollar',        flag: '🇨🇦' },
  { code: 'AUD', symbol: 'A$',  name: 'Australian Dollar',      flag: '🇦🇺' },
  { code: 'XCD', symbol: '$',   name: 'East Caribbean Dollar',  flag: '🏝️' },
]

function getCurrencyMeta(code: string) {
  return CURRENCIES.find(c => c.code === code) ?? CURRENCIES[0]
}

export default function CurrencyPage() {
  const [rates, setRates]             = useState<Record<string, number>>({})
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState('')
  const [amount, setAmount]           = useState('100')
  const [from, setFrom]               = useState('GBP')
  const [to, setTo]                   = useState('USD')
  const [result, setResult]           = useState<string | null>(null)
  const [resultSub, setResultSub]     = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => { fetchRates() }, [])

  async function fetchRates() {
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/GBP')
      if (!res.ok) throw new Error('fetch failed')
      const data = await res.json()
      setRates(data.rates)
      setLastUpdated(new Date(data.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
    } catch {
      setError('Could not load live rates. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function convert() {
    const num = parseFloat(amount)
    if (!amount || isNaN(num) || num <= 0) { setError('Please enter a valid amount.'); return }
    if (!rates[from] || !rates[to]) { setError('Rates not loaded yet — please refresh.'); return }
    setError('')
    const inGBP     = num / rates[from]
    const converted = inGBP * rates[to]
    const fromMeta  = getCurrencyMeta(from)
    const toMeta    = getCurrencyMeta(to)
    setResult(`${toMeta.symbol}${converted.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${to}`)
    setResultSub(`${fromMeta.symbol}${num.toLocaleString()} ${from} at today's rate`)
  }

  function swap() {
    setFrom(to)
    setTo(from)
    setResult(null)
    setResultSub(null)
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter') convert()
  }

  const fromMeta = getCurrencyMeta(from)
  const toMeta   = getCurrencyMeta(to)

  // Quick reference pairs relative to GBP
  const quickPairs = [
    { from: 'GBP', to: 'USD' }, { from: 'GBP', to: 'EUR' },
    { from: 'GBP', to: 'NGN' }, { from: 'GBP', to: 'GHS' },
    { from: 'GBP', to: 'JMD' }, { from: 'GBP', to: 'KES' },
    { from: 'GBP', to: 'ZAR' }, { from: 'GBP', to: 'AED' },
  ]

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 16px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ height: '1px', width: '40px', background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>Travel Tools</span>
            <div style={{ height: '1px', width: '40px', background: '#C9A84C' }} />
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
            Currency Converter
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Live exchange rates for travellers heading to Africa, Caribbean &amp; beyond
          </p>
        </div>

        {/* Main card */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>

          {/* Amount */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontWeight: '600' }}>
              Amount
            </label>
            <input
              type="number"
              value={amount}
              min="0"
              step="any"
              onChange={e => { setAmount(e.target.value); setResult(null) }}
              onKeyDown={handleKey}
              placeholder="Enter amount"
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '14px 16px', fontSize: '1.4rem', fontWeight: '600',
                border: '2px solid #E5E7EB', borderRadius: '12px',
                color: '#111827', outline: 'none', background: '#F9FAFB',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#C9A84C'}
              onBlur={e => e.currentTarget.style.borderColor = '#E5E7EB'}
            />
          </div>

          {/* FROM / SWAP / TO row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'end', marginBottom: '24px' }}>
            {/* FROM */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontWeight: '600' }}>
                From
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px' }}>
                  {fromMeta.flag}
                </span>
                <select
                  value={from}
                  onChange={e => { setFrom(e.target.value); setResult(null) }}
                  style={{
                    width: '100%', padding: '14px 12px 14px 44px',
                    fontSize: '14px', fontWeight: '600',
                    border: '2px solid #E5E7EB', borderRadius: '12px',
                    color: '#111827', background: '#F9FAFB',
                    appearance: 'none', cursor: 'pointer', outline: 'none',
                  }}
                >
                  {CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap button */}
            <button
              onClick={swap}
              title="Swap currencies"
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '2px solid #C9A84C', background: '#FFFFFF',
                color: '#C9A84C', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                alignSelf: 'center', marginTop: '24px', flexShrink: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#C9A84C' }}
            >
              ⇄
            </button>

            {/* TO */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontWeight: '600' }}>
                To
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px' }}>
                  {toMeta.flag}
                </span>
                <select
                  value={to}
                  onChange={e => { setTo(e.target.value); setResult(null) }}
                  style={{
                    width: '100%', padding: '14px 12px 14px 44px',
                    fontSize: '14px', fontWeight: '600',
                    border: '2px solid #E5E7EB', borderRadius: '12px',
                    color: '#111827', background: '#F9FAFB',
                    appearance: 'none', cursor: 'pointer', outline: 'none',
                  }}
                >
                  {CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Convert button */}
          <button
            onClick={convert}
            disabled={loading || Object.keys(rates).length === 0}
            style={{
              width: '100%', padding: '16px',
              background: loading ? '#D1D5DB' : '#C9A84C',
              color: '#0A0A0F', fontWeight: '700', fontSize: '15px',
              textTransform: 'uppercase', letterSpacing: '1.5px',
              border: 'none', borderRadius: '12px', cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.2s', marginBottom: '20px',
            }}
          >
            {loading ? 'Loading rates…' : 'Convert'}
          </button>

          {/* Error */}
          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', color: '#DC2626', fontSize: '14px' }}>
              {error}
            </div>
          )}

          {/* Result */}
          {result && (
            <div style={{ background: 'linear-gradient(135deg, #FBF7EC 0%, #FDF4D8 100%)', border: '2px solid #C9A84C', borderRadius: '14px', padding: '24px', textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#111827', fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
                {result}
              </div>
              {resultSub && (
                <div style={{ color: '#6B7280', fontSize: '13px', marginTop: '8px' }}>{resultSub}</div>
              )}
            </div>
          )}

          {/* Last updated + disclaimer */}
          <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
              {lastUpdated ? `Rates updated: ${lastUpdated}` : loading ? 'Loading rates…' : 'Rate data unavailable'}
            </span>
            <button
              onClick={fetchRates}
              disabled={loading}
              style={{ fontSize: '12px', color: '#C9A84C', background: 'none', border: 'none', cursor: 'pointer', padding: '2px 6px', fontWeight: '600' }}
            >
              ↻ Refresh
            </button>
          </div>
          <p style={{ fontSize: '11px', color: '#B0B7C3', marginTop: '8px', lineHeight: '1.5' }}>
            Rates are indicative and may differ from rates offered by banks, bureaux de change or card providers at time of travel.
          </p>
        </div>

        {/* Quick reference table */}
        {Object.keys(rates).length > 0 && (
          <div style={{ marginTop: '24px', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#374151', textTransform: 'uppercase', letterSpacing: '1px' }}>
                1 GBP Today
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {quickPairs.map(({ from: f, to: t }, i) => {
                const rate  = rates[t] / rates[f]
                const meta  = getCurrencyMeta(t)
                const isLast = i === quickPairs.length - 1
                const isSecondLast = i === quickPairs.length - 2
                return (
                  <div
                    key={t}
                    style={{
                      padding: '14px 20px',
                      borderBottom: (isLast || isSecondLast) ? 'none' : '1px solid #F3F4F6',
                      borderRight: i % 2 === 0 ? '1px solid #F3F4F6' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: '#6B7280' }}>{meta.flag} {meta.code}</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>
                      {meta.symbol}{rate.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: '#9CA3AF' }}>
          <a href="/tools" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: '600' }}>← Back to all Travel Tools</a>
        </p>
      </div>
    </div>
  )
}
