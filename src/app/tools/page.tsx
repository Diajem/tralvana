'use client'
import { useState, useEffect } from 'react'

const CURRENCIES = [
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
  { code: 'GHS', name: 'Ghana Cedi', symbol: 'GH₵', flag: '🇬🇭' },
  { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$', flag: '🇯🇲' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
]

const PACKING_CATEGORIES = [
  {
    name: 'Documents & Money',
    emoji: '📋',
    items: ['Passport', 'Travel insurance documents', 'Flight tickets / boarding passes', 'Hotel confirmations', 'Credit / debit cards', 'Local cash', 'Travel visa (if required)', 'Emergency contact list', 'Driving licence (if hiring a car)'],
  },
  {
    name: 'Clothing',
    emoji: '👕',
    items: ['T-shirts / tops', 'Trousers / jeans', 'Shorts', 'Underwear', 'Socks', 'Pyjamas', 'Smart outfit for evenings', 'Light jacket / cardigan', 'Waterproof jacket', 'Swimwear', 'Comfortable walking shoes', 'Flip flops / sandals', 'Smart shoes'],
  },
  {
    name: 'Toiletries',
    emoji: '🧴',
    items: ['Toothbrush & toothpaste', 'Deodorant', 'Shampoo & conditioner', 'Body wash / soap', 'Moisturiser / sunscreen (SPF 50+)', 'Lip balm with SPF', 'Razor & shaving cream', 'Feminine hygiene products', 'Makeup / skincare', 'Nail clippers', 'Hair brush / comb', 'Hairdryer (check voltage)'],
  },
  {
    name: 'Health & Safety',
    emoji: '💊',
    items: ['Prescription medication (enough for full trip)', 'Pain relief (paracetamol, ibuprofen)', 'Antihistamine / allergy tablets', 'Antidiarrhoea tablets', 'Plasters & blister packs', 'Insect repellent', 'Hand sanitiser', 'Face masks', 'First aid kit', 'Rehydration sachets'],
  },
  {
    name: 'Tech & Gadgets',
    emoji: '📱',
    items: ['Phone & charger', 'Portable power bank', 'Universal travel adaptor', 'Earphones / AirPods', 'Camera & memory cards', 'Laptop / tablet (if needed)', 'Download offline maps (Google Maps)', 'Travel eSIM or local SIM card', 'Kindle / e-reader'],
  },
  {
    name: 'Comfort & Extras',
    emoji: '🎒',
    items: ['Travel pillow', 'Eye mask', 'Earplugs', 'Reusable water bottle', 'Snacks for journey', 'Small day bag / backpack', 'Padlock for luggage', 'Luggage tags', 'Dry bag / waterproof pouches', 'Travel towel (for beach destinations)'],
  },
]

export default function ToolsPage() {
  const [rates, setRates] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [amount, setAmount] = useState('100')
  const [fromCurrency, setFromCurrency] = useState('GBP')
  const [toCurrency, setToCurrency] = useState('USD')
  const [result, setResult] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetchRates()
  }, [])

  async function fetchRates() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/GBP')
      if (!res.ok) throw new Error('Rate fetch failed')
      const data = await res.json()
      setRates(data.rates)
      setLastUpdated(new Date(data.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
    } catch {
      setError('Could not fetch live rates. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function convert() {
    if (!rates[fromCurrency] || !rates[toCurrency]) {
      setError('Rates not loaded yet.')
      return
    }
    const num = parseFloat(amount)
    if (isNaN(num) || num <= 0) {
      setError('Please enter a valid amount.')
      return
    }
    setError('')
    const inGBP = num / rates[fromCurrency]
    const converted = inGBP * rates[toCurrency]
    const fromSymbol = CURRENCIES.find(c => c.code === fromCurrency)?.symbol || ''
    const toSymbol = CURRENCIES.find(c => c.code === toCurrency)?.symbol || ''
    setResult(`${fromSymbol}${num.toLocaleString()} ${fromCurrency} = ${toSymbol}${converted.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${toCurrency}`)
  }

  function swapCurrencies() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult(null)
  }

  function toggleItem(key: string) {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function clearAll() {
    setChecked({})
  }

  const totalItems = PACKING_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length

  return (
    <div className="min-h-screen bg-tralvana-black pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">Travel Tools</span>
            <div className="h-px w-10 bg-tralvana-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Travel <span className="text-gold-gradient">Tools</span></h1>
          <p className="text-tralvana-muted max-w-xl mx-auto">Free tools to help you plan smarter. Currency converter with live rates, packing checklist and more.</p>
        </div>

        {/* Currency Converter */}
        <div className="glass-card rounded-2xl p-6 gold-border mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-tralvana-gold/10 border border-tralvana-gold/30 flex items-center justify-center text-xl">💱</div>
            <div>
              <h2 className="text-white font-display text-xl font-bold">Currency Converter</h2>
              <p className="text-tralvana-muted text-xs">
                {lastUpdated ? `Live rates · Updated ${lastUpdated}` : 'Live exchange rates'}
              </p>
            </div>
            <button
              onClick={fetchRates}
              disabled={loading}
              className="ml-auto text-xs text-tralvana-gold border border-tralvana-gold/40 rounded-lg px-3 py-1.5 hover:bg-tralvana-gold/10 transition-all disabled:opacity-50"
            >
              {loading ? 'Loading...' : '↻ Refresh'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-4">
            {/* From */}
            <div>
              <label className="block text-tralvana-muted text-xs mb-1.5 uppercase tracking-wider">From</label>
              <div className="flex gap-2">
                <select
                  value={fromCurrency}
                  onChange={e => { setFromCurrency(e.target.value); setResult(null) }}
                  className="flex-1 bg-tralvana-card border border-tralvana-border text-white rounded-xl px-3 py-3 text-sm focus:border-tralvana-gold focus:outline-none"
                >
                  {CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                  ))}
                </select>
              </div>
              <input
                type="number"
                value={amount}
                min="0"
                onChange={e => { setAmount(e.target.value); setResult(null) }}
                placeholder="Enter amount"
                className="w-full mt-2 bg-tralvana-card border border-tralvana-border text-white rounded-xl px-4 py-3 text-sm focus:border-tralvana-gold focus:outline-none placeholder:text-tralvana-muted"
              />
            </div>

            {/* Swap */}
            <button
              onClick={swapCurrencies}
              className="self-center w-10 h-10 rounded-full border border-tralvana-gold/40 text-tralvana-gold hover:bg-tralvana-gold/10 transition-all flex items-center justify-center text-lg mx-auto"
              title="Swap currencies"
            >
              ⇄
            </button>

            {/* To */}
            <div>
              <label className="block text-tralvana-muted text-xs mb-1.5 uppercase tracking-wider">To</label>
              <select
                value={toCurrency}
                onChange={e => { setToCurrency(e.target.value); setResult(null) }}
                className="w-full bg-tralvana-card border border-tralvana-border text-white rounded-xl px-3 py-3 text-sm focus:border-tralvana-gold focus:outline-none"
              >
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                ))}
              </select>
              {result ? (
                <div className="mt-2 bg-tralvana-card border border-tralvana-gold/40 rounded-xl px-4 py-3 text-tralvana-gold font-semibold text-sm">
                  {result}
                </div>
              ) : (
                <div className="mt-2 bg-tralvana-card border border-tralvana-border rounded-xl px-4 py-3 text-tralvana-muted text-sm">
                  Result will appear here
                </div>
              )}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

          <button
            onClick={convert}
            disabled={loading || Object.keys(rates).length === 0}
            className="w-full py-3 bg-tralvana-gold text-tralvana-black font-semibold rounded-xl hover:bg-tralvana-gold-light transition-all disabled:opacity-50 text-sm uppercase tracking-wider"
          >
            {loading ? 'Loading rates...' : 'Convert'}
          </button>

          {/* Quick rate reference */}
          {Object.keys(rates).length > 0 && (
            <div className="mt-6 pt-5 border-t border-tralvana-border">
              <p className="text-tralvana-muted text-xs uppercase tracking-wider mb-3">1 GBP equals</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['USD', 'EUR', 'NGN', 'GHS', 'JMD', 'CAD', 'AUD', 'AED'].map(code => {
                  const c = CURRENCIES.find(x => x.code === code)
                  const rate = rates[code]
                  if (!c || !rate) return null
                  return (
                    <div key={code} className="bg-tralvana-card rounded-lg p-2.5 text-center">
                      <div className="text-base mb-0.5">{c.flag}</div>
                      <div className="text-white text-xs font-semibold">{rate.toLocaleString('en-GB', { maximumFractionDigits: 2 })}</div>
                      <div className="text-tralvana-muted text-xs">{code}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Packing Checklist */}
        <div className="glass-card rounded-2xl p-6 gold-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-tralvana-gold/10 border border-tralvana-gold/30 flex items-center justify-center text-xl">🎒</div>
            <div className="flex-1">
              <h2 className="text-white font-display text-xl font-bold">Packing Checklist</h2>
              <p className="text-tralvana-muted text-xs">Never forget a thing — tick items as you pack</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-tralvana-muted mb-1.5">
              <span>{checkedCount} of {totalItems} packed</span>
              <button onClick={clearAll} className="text-tralvana-gold hover:underline">Clear all</button>
            </div>
            <div className="h-2 bg-tralvana-card rounded-full overflow-hidden">
              <div
                className="h-full bg-tralvana-gold transition-all duration-300 rounded-full"
                style={{ width: totalItems > 0 ? `${(checkedCount / totalItems) * 100}%` : '0%' }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {PACKING_CATEGORIES.map(cat => {
              const catChecked = cat.items.filter(item => checked[`${cat.name}::${item}`]).length
              return (
                <div key={cat.name}>
                  <h3 className="text-tralvana-gold text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                    <span className="text-tralvana-muted font-normal normal-case tracking-normal text-xs ml-auto">{catChecked}/{cat.items.length}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cat.items.map(item => {
                      const key = `${cat.name}::${item}`
                      const isChecked = !!checked[key]
                      return (
                        <label
                          key={item}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-tralvana-gold/10 border border-tralvana-gold/30'
                              : 'bg-tralvana-card border border-tralvana-border hover:border-tralvana-gold/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleItem(key)}
                            className="w-4 h-4 rounded accent-tralvana-gold cursor-pointer"
                          />
                          <span className={`text-sm transition-all ${isChecked ? 'line-through text-tralvana-muted' : 'text-white'}`}>
                            {item}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {checkedCount === totalItems && totalItems > 0 && (
            <div className="mt-6 text-center py-4 bg-tralvana-gold/10 border border-tralvana-gold/30 rounded-xl">
              <p className="text-tralvana-gold font-semibold">All packed! Have a great trip ✈</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
