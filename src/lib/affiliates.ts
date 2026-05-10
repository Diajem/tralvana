// lib/affiliates.ts
// Central management of all Tralvana affiliate links
// Travelpayouts Marker: 493614

const TP_MARKER = process.env.NEXT_PUBLIC_TRAVELPAYOUTS_MARKER || '493614'
const AWIN_ID = process.env.NEXT_PUBLIC_AWIN_ID || '1773696'

export const AFFILIATES = {

  // ── EXPEDIA ──────────────────────────────────────────────
  expedia: {
    base: process.env.NEXT_PUBLIC_EXPEDIA_AFFILIATE || 'https://expedia.com/affiliate/mZObD29',
    flights: 'https://expedia.com/affiliate/mZObD29',
    hotels: 'https://expedia.com/affiliate/mZObD29',
    cars: 'https://expedia.com/affiliate/mZObD29',
    packages: 'https://expedia.com/affiliate/mZObD29',
  },

  // ── AWIN ─────────────────────────────────────────────────
  awin: {
    id: process.env.NEXT_PUBLIC_AWIN_ID || '1773696',
    beeParking: {
      merchantId: process.env.NEXT_PUBLIC_AWIN_BEE_PARKING || '121428',
      url: `https://www.awin1.com/cread.php?awinmid=121428&awinaffid=1773696`,
      name: 'Bee Parking Heathrow',
    },
    ttfone: {
      merchantId: process.env.NEXT_PUBLIC_AWIN_TTFONE || '28737',
      url: `https://www.awin1.com/cread.php?awinmid=28737&awinaffid=1773696`,
      name: 'TTfone',
    },
    worldSim: {
      merchantId: process.env.NEXT_PUBLIC_AWIN_WORLDSIM || '104675',
      url: `https://www.awin1.com/cread.php?awinmid=104675&awinaffid=1773696`,
      name: 'WorldSIM',
    },
    // Add more AWIN merchants here as you register them
    // tripCom: { merchantId: 'XXXX', url: `https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=1773696`, name: 'Trip.com' },
    // intuiTransfer: { merchantId: 'XXXX', url: `https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=1773696`, name: 'Intui Travel Transfer' },
  },

  // ── TRAVELPAYOUTS ─────────────────────────────────────────
  travelpayouts: {
    marker: process.env.NEXT_PUBLIC_TRAVELPAYOUTS_MARKER || '',
    flights: (marker: string) => `https://tp.media/r?marker=${marker}&trs=232507&p=4114&u=https%3A%2F%2Fwww.aviasales.com`,
    hotels: (marker: string) => `https://tp.media/r?marker=${marker}&trs=232507&p=4114&u=https%3A%2F%2Fhotellook.com`,
  },

  // ── OPODO ─────────────────────────────────────────────────
  opodo: {
    base: process.env.NEXT_PUBLIC_OPODO_AFFILIATE || '#opodo-placeholder',
    flights: process.env.NEXT_PUBLIC_OPODO_AFFILIATE || '#opodo-placeholder',
  },

  // ── BOOKING.COM ───────────────────────────────────────────
  booking: {
    base: process.env.NEXT_PUBLIC_BOOKING_AFFILIATE
      ? `https://www.booking.com?aid=${process.env.NEXT_PUBLIC_BOOKING_AFFILIATE}`
      : '#booking-placeholder',
  },

  // ── SKYSCANNER ────────────────────────────────────────────
  skyscanner: {
    base: process.env.NEXT_PUBLIC_SKYSCANNER_AFFILIATE || '#skyscanner-placeholder',
  },

  // ── VIATOR ───────────────────────────────────────────────
  viator: {
    base: process.env.NEXT_PUBLIC_VIATOR_AFFILIATE
      ? `https://www.viator.com?pid=${process.env.NEXT_PUBLIC_VIATOR_AFFILIATE}`
      : '#viator-placeholder',
  },

  // ── GETYOURGUIDE ─────────────────────────────────────────
  getyourguide: {
    base: process.env.NEXT_PUBLIC_GETYOURGUIDE_AFFILIATE || '#gyg-placeholder',
  },

  // ── DISCOVER CARS ─────────────────────────────────────────
  discoverCars: {
    base: process.env.NEXT_PUBLIC_DISCOVERCARS_AFFILIATE || 'https://www.discovercars.com',
  },

  // ── SANDALS (Caribbean) ───────────────────────────────────
  sandals: {
    base: process.env.NEXT_PUBLIC_SANDALS_AFFILIATE || 'https://www.sandals.com',
  },

  // ── SAFARI.COM (Africa) ───────────────────────────────────
  safari: {
    base: process.env.NEXT_PUBLIC_SAFARI_AFFILIATE || 'https://www.safari.com',
  },

  // ── PRIORITY PASS ─────────────────────────────────────────
  priorityPass: {
    base: process.env.NEXT_PUBLIC_PRIORITYPASS_AFFILIATE || 'https://www.prioritypass.com/affiliates',
  },

  // ── HOLAFLY eSIM ──────────────────────────────────────────
  holafly: {
    base: process.env.NEXT_PUBLIC_HOLAFLY_AFFILIATE || 'https://esim.holafly.com',
  },

  // ── WORLD NOMADS Insurance ────────────────────────────────
  worldNomads: {
    base: process.env.NEXT_PUBLIC_WORLDNOMADS_AFFILIATE || 'https://www.worldnomads.com',
  },
}

// Helper — build a tracked outbound link
export function affiliateLink(url: string, label?: string): string {
  if (url.startsWith('#')) return url // placeholder — not yet registered
  return url
}

export function isActive(url: string): boolean {
  return !url.startsWith('#')
}
