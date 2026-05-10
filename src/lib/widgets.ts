// lib/widgets.ts
// All Travelpayouts widget script URLs — marker 493614
// To add a new widget: paste the src from the <script> tag here

export const WIDGETS = {

  // ── FLIGHTS ────────────────────────────────────────────────

  // Booking.com flight search (promo 2693)
  flightsBooking: 'https://tpwdg.com/content?trs=432320&shmarker=493614&locale=en&sustainable=false&deals=false&border_radius=5&plain=true&powered_by=true&promo_id=2693&campaign_id=84&currency=gbp',

  // Aviasales full flight search form — 50% commission (promo 7879)
  flightsAviasales: 'https://tpwdg.com/content?currency=usd&trs=432320&shmarker=493614&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100',

  // Aviasales schedule widget — shows live flights on a route (promo 2811)
  flightsSchedule: 'https://tpwdg.com/content?currency=usd&trs=432320&shmarker=493614&color_button=%23FF0000&target_host=www.aviasales.com%2Fsearch&locale=en&powered_by=true&origin=LON&destination=BKK&with_fallback=false&non_direct_flights=true&min_lines=5&border_radius=0&color_background=%23FFFFFF&color_text=%23000000&color_border=%23FFFFFF&promo_id=2811&campaign_id=100',

  // Aviasales popular routes widget (promo 4044)
  flightsPopularRoutes: 'https://tpwdg.com/content?currency=usd&trs=432320&shmarker=493614&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100',

  // ── HOTELS ─────────────────────────────────────────────────

  // Agoda hotels search form — 6% commission (promo 8303)
  hotelsAgoda: 'https://tpwdg.com/content?trs=432320&shmarker=493614&locale=en&powered_by=true&primary_override=%235392F9&color_button=%235392F9&color_icons=%235392F9&dark=%23262626&color_border=%235392F9&color_focused=%2332a8dd&border_radius=5&plain=false&promo_id=8303&campaign_id=104',

  // Booking.com hotel search — add when you get the code
  // hotelsBooking: 'https://tpwdg.com/content?...',

  // ── CARS ───────────────────────────────────────────────────

  // DiscoverCars rental search — 23–54% commission, 365 day cookie (promo 3873)
  carsDiscover: 'https://tpwdg.com/content?trs=432320&shmarker=493614&locale=en&powered_by=true&bg_color=%23fad130&font_color=%23333333&button_color=%2300a200&button_font_color=%23ffffff&button_text=Search&rounded_corners=false&benefits=false&dc_powered_by=false&supplier_logos=false&campaign_id=117&promo_id=3873',

  // ── TOURS — GetYourGuide (8% commission, 31 day cookie) ────

  // Auto Update widget — smartest option, self-updating based on visitor behaviour
  // Best for: homepage Tours tab, general tours pages
  toursAutoUpdate: 'https://tpwdg.com/content?trs=432320&shmarker=493614&powered_by=true&campaign_id=108&promo_id=8412',

  // Popular Tours widget — currently set to USA, customisable per destination
  // Best for: Tours page, Americas destination page
  toursPopular: 'https://tpwdg.com/content?trs=432320&shmarker=493614&place=USA&items=3&locale=en&powered_by=true&campaign_id=108&promo_id=4039',

  // Things To Do In A City widget — city-specific experiences
  // Best for: individual destination pages (Caribbean, Africa, Europe etc)
  toursCityThingsToDo: 'https://tpwdg.com/content?trs=432320&shmarker=493614&locale=en&powered_by=true&campaign_id=108&promo_id=4040',

  // NOTE: All three are GetYourGuide widgets — 8% commission, 31 day cookie
  // To target a specific city/region, add &place=CITYNAME to the URL
  // Examples:
  //   &place=Jamaica   → shows Jamaica tours
  //   &place=Lagos     → shows Lagos tours
  //   &place=London    → shows London tours
  //   &place=Paris     → shows Paris tours
  //   &place=Dubai     → shows Dubai tours

}

// ── TAB WIDGET ASSIGNMENTS ────────────────────────────────────
// Controls which widget appears on each search tab
export const TAB_WIDGETS = {
  flights: WIDGETS.flightsBooking,
  hotels: WIDGETS.hotelsAgoda,           // 6% commission
  cars: WIDGETS.carsDiscover,            // 23-54% commission, 365 day cookie
  tours: WIDGETS.toursAutoUpdate,        // 8% commission, auto-updating ✅ LIVE
}

// ── TAB FOOTER LABELS ─────────────────────────────────────────
export const TAB_LABELS = {
  flights: 'Powered by Booking.com · 500+ airlines worldwide',
  hotels: 'Powered by Agoda · 2,000,000+ properties worldwide',
  cars: 'Powered by DiscoverCars · 650+ suppliers · 145 countries · 365-day cookie',
  tours: 'Powered by GetYourGuide · 8% reward rate · 31-day cookie · Free cancellation',
}

// ── DESTINATION PAGE HELPER ───────────────────────────────────
// Generate a city-specific GetYourGuide widget src
// Usage: destinationWidget('Jamaica') → tours for Jamaica
export function destinationWidget(place: string): string {
  const placeMap: Record<string, string> = {
    'Lagos': 'Lagos Nigeria',
    'Accra': 'Accra Ghana',
    'Nairobi': 'Nairobi Kenya',
    'Abuja': 'Abuja Nigeria',
    'Africa': 'Nairobi Kenya',
    'Caribbean': 'Jamaica Caribbean',
    'Jamaica': 'Negril Jamaica',
    'Barbados': 'Bridgetown Barbados',
  }
  const searchPlace = placeMap[place] || place
  return `https://tpwdg.com/content?trs=432320&shmarker=493614&powered_by=true&campaign_id=108&promo_id=8412&q=${encodeURIComponent(searchPlace)}`
}
