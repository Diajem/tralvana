'use client'
import { useState } from 'react'

const CATEGORIES = [
  {
    name: 'Documents & Money',
    emoji: '📋',
    color: '#3B82F6',
    items: [
      'Passport (check expiry — min 6 months)',
      'Travel visa (if required)',
      'Flight tickets / boarding passes',
      'Hotel confirmation printout',
      'Travel insurance documents',
      'Credit card / debit card',
      'Local cash (destination currency)',
      'Driving licence (if hiring a car)',
      'Emergency contact list',
      'Copies of all documents (email to yourself)',
    ],
  },
  {
    name: 'Clothing',
    emoji: '👕',
    color: '#8B5CF6',
    items: [
      'T-shirts / tops',
      'Trousers / jeans',
      'Shorts',
      'Underwear (enough for each day + 1)',
      'Socks',
      'Pyjamas / sleepwear',
      'Smart outfit for evenings out',
      'Light jacket or cardigan',
      'Waterproof jacket / rain mac',
      'Swimwear',
      'Comfortable walking shoes / trainers',
      'Flip flops / sandals',
      'Smart shoes (if needed)',
      'Sun hat or cap',
    ],
  },
  {
    name: 'Toiletries',
    emoji: '🧴',
    color: '#EC4899',
    items: [
      'Toothbrush & toothpaste',
      'Deodorant',
      'Shampoo & conditioner',
      'Body wash / soap',
      'Moisturiser',
      'Sunscreen (SPF 50+)',
      'Lip balm with SPF',
      'Razor & shaving cream',
      'Feminine hygiene products',
      'Makeup & skincare',
      'Nail clippers / file',
      'Hair brush / comb',
      'Hairdryer (check voltage for destination)',
      'Perfume / cologne (travel size)',
    ],
  },
  {
    name: 'Tech & Gadgets',
    emoji: '📱',
    color: '#10B981',
    items: [
      'Phone & charger cable',
      'Universal travel adaptor',
      'Portable power bank',
      'Earphones / AirPods / headphones',
      'Camera & memory cards',
      'Camera charger',
      'Laptop / tablet (if needed)',
      'Laptop charger',
      'Download offline maps (Google Maps)',
      'Travel eSIM or local SIM card',
      'E-reader / Kindle',
    ],
  },
  {
    name: 'Travel Accessories',
    emoji: '🎒',
    color: '#F59E0B',
    items: [
      'Travel pillow',
      'Eye mask',
      'Earplugs',
      'Luggage locks (TSA-approved)',
      'Luggage tags with your name',
      'Packing cubes',
      'Day bag / backpack',
      'Reusable water bottle',
      'Dry bag / waterproof pouch',
      'Travel towel (beach destinations)',
      'Snacks for the journey',
      'Small umbrella',
    ],
  },
  {
    name: 'Health & Safety',
    emoji: '💊',
    color: '#EF4444',
    items: [
      'Prescription medication (full trip supply)',
      'Copy of prescriptions',
      'Pain relief (paracetamol / ibuprofen)',
      'Antihistamine / allergy tablets',
      'Anti-diarrhoea tablets',
      'Plasters & blister packs',
      'Insect repellent',
      'Hand sanitiser',
      'Face masks',
      'Rehydration sachets',
      'Thermometer',
      'Any required vaccinations completed',
    ],
  },
]

const ALL_KEYS = CATEGORIES.flatMap(cat => cat.items.map(item => `${cat.name}::${item}`))

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  function toggle(key: string) {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function reset() {
    setChecked({})
  }

  function handlePrint() {
    window.print()
  }

  const totalItems   = ALL_KEYS.length
  const checkedCount = ALL_KEYS.filter(k => checked[k]).length
  const pct          = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0
  const allDone      = checkedCount === totalItems

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 16px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ height: '1px', width: '40px', background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>Travel Tools</span>
            <div style={{ height: '1px', width: '40px', background: '#C9A84C' }} />
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
            Packing Checklist
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Tick each item as you pack — never forget anything again
          </p>
        </div>

        {/* Progress card */}
        <div style={{ background: '#FFFFFF', border: '2px solid #C9A84C', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', boxShadow: '0 4px 16px rgba(201,168,76,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: '800', color: '#111827' }}>
                {pct}%
              </span>
              <span style={{ color: '#6B7280', fontSize: '14px', marginLeft: '8px' }}>
                packed · {checkedCount} of {totalItems} items
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handlePrint}
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                  border: '1px solid #D1D5DB', background: '#F9FAFB', color: '#374151', cursor: 'pointer',
                }}
              >
                🖨 Print
              </button>
              <button
                onClick={reset}
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                  border: '1px solid #D1D5DB', background: '#F9FAFB', color: '#374151', cursor: 'pointer',
                }}
              >
                ↺ Reset
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: '10px', background: '#F3F4F6', borderRadius: '99px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%', borderRadius: '99px',
                background: allDone ? '#22C55E' : '#C9A84C',
                width: `${pct}%`, transition: 'width 0.3s ease',
              }}
            />
          </div>

          {allDone && (
            <div style={{ marginTop: '14px', background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '12px 16px', textAlign: 'center' }}>
              <span style={{ color: '#16A34A', fontWeight: '700', fontSize: '15px' }}>
                ✅ All packed! Have an amazing trip ✈
              </span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {CATEGORIES.map(cat => {
            const catKeys    = cat.items.map(item => `${cat.name}::${item}`)
            const catChecked = catKeys.filter(k => checked[k]).length
            const catDone    = catChecked === cat.items.length

            return (
              <div
                key={cat.name}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                {/* Category header */}
                <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '22px' }}>{cat.emoji}</span>
                    <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#111827' }}>{cat.name}</h2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{catChecked}/{cat.items.length}</span>
                    {catDone && <span style={{ fontSize: '16px' }}>✅</span>}
                  </div>
                </div>

                {/* Items grid */}
                <div style={{ padding: '12px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '6px' }}>
                  {cat.items.map(item => {
                    const key       = `${cat.name}::${item}`
                    const isChecked = !!checked[key]
                    return (
                      <label
                        key={item}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '10px',
                          padding: '10px 12px', borderRadius: '10px', cursor: 'pointer',
                          background: isChecked ? '#F0FDF4' : '#F9FAFB',
                          border: `1px solid ${isChecked ? '#86EFAC' : '#E5E7EB'}`,
                          transition: 'all 0.15s',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(key)}
                          style={{ width: '16px', height: '16px', accentColor: '#C9A84C', cursor: 'pointer', flexShrink: 0 }}
                        />
                        <span style={{
                          fontSize: '13px', lineHeight: '1.4',
                          color: isChecked ? '#6B7280' : '#374151',
                          textDecoration: isChecked ? 'line-through' : 'none',
                          transition: 'all 0.15s',
                        }}>
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

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '13px', color: '#9CA3AF' }}>
          <a href="/tools" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: '600' }}>← Back to all Travel Tools</a>
          {' · '}
          <a href="/tools/currency" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: '600' }}>Currency Converter →</a>
        </p>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          nav, header, footer, .no-print { display: none !important; }
          body { background: white; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
