// lib/currency.ts
// Auto-detects user location and sets currency + Amazon affiliate ID

export type Currency = 'GBP' | 'USD' | 'EUR'
export type AmazonRegion = 'UK' | 'US' | 'ES' | 'DE' | 'FR' | 'IT'

export interface CurrencyConfig {
  code: Currency
  symbol: string
  locale: string
  amazonRegion: AmazonRegion
  amazonTrackingId: string
  amazonBaseUrl: string
}

const AMAZON_IDS: Record<AmazonRegion, string> = {
  UK: process.env.NEXT_PUBLIC_AMAZON_UK || 'diajemglobal-21',
  US: process.env.NEXT_PUBLIC_AMAZON_US || 'diajemgroup-20',
  ES: process.env.NEXT_PUBLIC_AMAZON_ES || 'diajemgroup00-21',
  DE: process.env.NEXT_PUBLIC_AMAZON_DE || 'diajemgroup0c-21',
  FR: process.env.NEXT_PUBLIC_AMAZON_FR || 'diajemgroup0a-21',
  IT: process.env.NEXT_PUBLIC_AMAZON_IT || 'diajemgroup04-21',
}

const AMAZON_URLS: Record<AmazonRegion, string> = {
  UK: 'https://www.amazon.co.uk',
  US: 'https://www.amazon.com',
  ES: 'https://www.amazon.es',
  DE: 'https://www.amazon.de',
  FR: 'https://www.amazon.fr',
  IT: 'https://www.amazon.it',
}

// Maps country codes to currency + Amazon region
const COUNTRY_CONFIG: Record<string, { currency: Currency; amazonRegion: AmazonRegion }> = {
  GB: { currency: 'GBP', amazonRegion: 'UK' },
  US: { currency: 'USD', amazonRegion: 'US' },
  CA: { currency: 'USD', amazonRegion: 'US' },
  AU: { currency: 'USD', amazonRegion: 'US' },
  ES: { currency: 'EUR', amazonRegion: 'ES' },
  DE: { currency: 'EUR', amazonRegion: 'DE' },
  FR: { currency: 'EUR', amazonRegion: 'FR' },
  IT: { currency: 'EUR', amazonRegion: 'IT' },
  NL: { currency: 'EUR', amazonRegion: 'DE' },
  BE: { currency: 'EUR', amazonRegion: 'FR' },
  PT: { currency: 'EUR', amazonRegion: 'ES' },
  // Africa — default USD
  NG: { currency: 'USD', amazonRegion: 'UK' },
  GH: { currency: 'USD', amazonRegion: 'UK' },
  KE: { currency: 'USD', amazonRegion: 'UK' },
  ZA: { currency: 'USD', amazonRegion: 'UK' },
  // Caribbean — USD
  JM: { currency: 'USD', amazonRegion: 'US' },
  BB: { currency: 'USD', amazonRegion: 'US' },
  TT: { currency: 'USD', amazonRegion: 'US' },
}

export function getCurrencyConfig(countryCode?: string): CurrencyConfig {
  const config = countryCode ? COUNTRY_CONFIG[countryCode.toUpperCase()] : null

  const currency = config?.currency || 'GBP'
  const amazonRegion = config?.amazonRegion || 'UK'

  const currencyDetails: Record<Currency, { symbol: string; locale: string }> = {
    GBP: { symbol: '£', locale: 'en-GB' },
    USD: { symbol: '$', locale: 'en-US' },
    EUR: { symbol: '€', locale: 'fr-FR' },
  }

  return {
    code: currency,
    symbol: currencyDetails[currency].symbol,
    locale: currencyDetails[currency].locale,
    amazonRegion,
    amazonTrackingId: AMAZON_IDS[amazonRegion],
    amazonBaseUrl: AMAZON_URLS[amazonRegion],
  }
}

export function buildAmazonLink(
  asin: string,
  region: AmazonRegion = 'UK',
  searchTerm?: string
): string {
  const baseUrl = AMAZON_URLS[region]
  const trackingId = AMAZON_IDS[region]

  if (asin) {
    return `${baseUrl}/dp/${asin}?tag=${trackingId}`
  }
  if (searchTerm) {
    return `${baseUrl}/s?k=${encodeURIComponent(searchTerm)}&tag=${trackingId}`
  }
  return `${baseUrl}?tag=${trackingId}`
}

export function formatPrice(amount: number, currency: Currency): string {
  const locales: Record<Currency, string> = {
    GBP: 'en-GB',
    USD: 'en-US',
    EUR: 'fr-FR',
  }
  return new Intl.NumberFormat(locales[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
