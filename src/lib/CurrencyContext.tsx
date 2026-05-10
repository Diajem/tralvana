'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCurrencyConfig, type CurrencyConfig, type Currency } from '@/lib/currency'

interface CurrencyContextType {
  config: CurrencyConfig
  setCurrency: (currency: Currency) => void
  isLoading: boolean
}

const CurrencyContext = createContext<CurrencyContextType>({
  config: getCurrencyConfig('GB'),
  setCurrency: () => {},
  isLoading: true,
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<CurrencyConfig>(getCurrencyConfig('GB'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Try to detect location via IP
    const detectLocation = async () => {
      try {
        // Check localStorage for manual override
        const saved = localStorage.getItem('tralvana_currency')
        if (saved) {
          setConfig(getCurrencyConfig(saved))
          setIsLoading(false)
          return
        }

        // Free IP geolocation
        const res = await fetch('https://ipapi.co/json/')
        const data = await res.json()
        if (data.country_code) {
          setConfig(getCurrencyConfig(data.country_code))
        }
      } catch {
        // Default to GBP if detection fails
        setConfig(getCurrencyConfig('GB'))
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  const setCurrency = (currency: Currency) => {
    const countryMap: Record<Currency, string> = {
      GBP: 'GB',
      USD: 'US',
      EUR: 'FR',
    }
    const countryCode = countryMap[currency]
    setConfig(getCurrencyConfig(countryCode))
    localStorage.setItem('tralvana_currency', countryCode)
  }

  return (
    <CurrencyContext.Provider value={{ config, setCurrency, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext)
