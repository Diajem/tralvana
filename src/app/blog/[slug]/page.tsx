import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AFFILIATES } from '@/lib/affiliates'

// ── Styled prose helpers ────────────────────────────────────────────────────
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-tralvana-muted leading-relaxed mb-5 text-[15px]">{children}</p>
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-10 mb-4 leading-snug">{children}</h2>
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-lg font-semibold text-tralvana-gold mt-6 mb-2">{children}</h3>
}
function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-white font-semibold">{children}</strong>
}
function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 glass-card rounded-xl p-4 gold-border border-l-4 border-tralvana-gold">
      <p className="text-tralvana-muted text-sm leading-relaxed">{children}</p>
    </div>
  )
}
function AffiliateBox({ href, label, note }: { href: string; label: string; note?: string }) {
  if (!href || href.startsWith('#')) return null
  return (
    <div className="my-8 glass-card rounded-2xl p-6 gold-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        className="shrink-0 px-6 py-2.5 bg-tralvana-gold text-tralvana-black text-sm font-semibold rounded-xl hover:opacity-90 transition-all">
        {label}
      </a>
      {note && <p className="text-tralvana-muted text-sm">{note}</p>}
    </div>
  )
}

// ── Post data ────────────────────────────────────────────────────────────────
type PostData = {
  title: string
  category: string
  readTime: string
  date: string
  image: string
  excerpt: string
  content: () => React.ReactElement
}

const posts: Record<string, PostData> = {

  'best-time-to-visit-jamaica': {
    title: 'Best Time to Visit Jamaica: A Complete Season Guide',
    category: 'Caribbean',
    readTime: '5 min',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80',
    excerpt: 'Everything you need to know about when to book your Jamaica trip — weather, festivals, prices and insider tips.',
    content: () => (
      <>
        <P>Jamaica operates on a two-season rhythm that shapes everything from hotel prices to sea conditions. Understanding which season you're booking into is the single most important planning decision you'll make.</P>

        <H2>Peak Season: December to April</H2>
        <P>The <B>dry season runs December through April</B>. Clear skies, calm seas, low humidity and temperatures around 27–30°C — this is Jamaica at its most photogenic. Trade winds from the northeast keep things comfortable even at midday.</P>
        <P>December and January see the biggest influx of visitors from the UK, USA and Canada. Hotels book out months in advance, especially all-inclusive resorts in Montego Bay and Negril. Prices are 30–50% higher than low season for the same property — book 4–6 months ahead for December.</P>
        <P>The experience during peak season is genuinely exceptional. Sea visibility for snorkelling reaches 20+ metres, every beach bar is stocked, and the rum punch flows freely from noon.</P>

        <AffiliateBox href={AFFILIATES.sandals.base} label="Browse Sandals Resorts in Jamaica" note="All-inclusive luxury at Montego Bay, Negril and Ocho Rios" />

        <H2>Shoulder Season: May and November</H2>
        <P>May and November sit at the edges of the wet season but are consistently underrated. Rainfall tends to come in short afternoon showers — mornings are clear and beautiful. Hotel prices drop noticeably, crowds thin out, and you get a more authentic feel for the island. November can be excellent: hurricane season ends 30 November, prices are below December rates, and the island is recovering its pre-Christmas energy.</P>

        <H2>Wet Season: June to October</H2>
        <P>Higher humidity, more rainfall and a genuine risk of tropical storms. Jamaica sits in the hurricane belt; direct hits are relatively rare but tropical storms can disrupt travel. Many savvy travellers deliberately visit in July or August for <B>Reggae Sumfest</B> in Montego Bay — one of the Caribbean's greatest music festivals. A beachfront hotel that costs £350/night in January can drop to £180 in August.</P>

        <H2>Festivals Worth Planning Around</H2>
        <P><B>Jamaica Carnival (April):</B> Multi-week festival culminating in massive street parades in Kingston and Montego Bay. Vibrant costumes, soca music and road marches.<br /><B>Reggae Sumfest (July):</B> The island's biggest music event — a bucket-list experience.<br /><B>Independence Day (6 August):</B> National celebrations with street parties and fireworks island-wide.<br /><B>Port Antonio Fishing Tournament (October):</B> One of the Caribbean's oldest fishing competitions in the stunning Portland parish.</P>

        <H2>Which Parish Should You Stay In?</H2>
        <P><B>Negril</B> (Westmoreland) is the classic beach destination — flat, calm, endless white sand; ideal for first-timers. <B>Montego Bay</B> has the broadest choice of all-inclusive resorts. <B>Ocho Rios</B> puts you closest to Dunns River Falls. <B>Kingston</B> is the cultural heartbeat — music, food and the real Jamaica.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search Flights to Jamaica" note="Compare UK to Montego Bay (MBJ) and Kingston (KIN) — Heathrow, Gatwick and Manchester" />

        <H2>The Verdict</H2>
        <P>Best overall: <B>mid-January to mid-April</B> — post-Christmas quiet, dry season reliability, reasonable (not cheap) prices. Best value: October to early December. Best for music lovers: July for Sumfest. Whatever time you go, Jamaica will be warm, welcoming and worth every penny.</P>
      </>
    ),
  },

  'uk-to-africa-flight-guide': {
    title: 'Flying from the UK to Africa: Airlines, Routes & Best Deals',
    category: 'Africa',
    readTime: '8 min',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1400&q=80',
    excerpt: 'A practical guide to booking flights from London to Lagos, Accra, Nairobi and beyond.',
    content: () => (
      <>
        <P>Flying from the UK to Africa has never been better connected — or more competitively priced. Legacy carriers, Gulf hub airlines and African flag carriers have created a rich network of routes that gives UK travellers genuine choice on price, routing and in-flight product. This guide covers every major corridor, the best airlines for each region, and the tactics experienced Africa travellers use to find the sharpest fares.</P>

        <H2>Direct Flights from London</H2>
        <P><B>British Airways</B> flies direct from Heathrow to Lagos (LOS), Accra (ACC), Nairobi (NBO), Johannesburg (JNB), Cape Town (CPT) and Dar es Salaam (DAR). BA is typically the priciest option but offers consistent service and good baggage allowances on long-haul routes.</P>
        <P><B>Virgin Atlantic</B> operates direct flights to Lagos from Heathrow and is often competitive on price with BA during sales. <B>Kenya Airways</B> flies Heathrow–Nairobi direct; their Dreamliner cabin is excellent for the price. <B>South African Airways</B> and <B>Comair</B> operate on the London–Johannesburg route alongside BA.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search UK to Africa Flights" note="Compare BA, Virgin, Emirates, Ethiopian, Kenya Airways and more on one search" />

        <H2>One-Stop via the Gulf: The Smart Money Route</H2>
        <P>Routing through a Gulf hub consistently delivers the lowest fares and excellent in-flight product, even to destinations with direct options.</P>
        <P><B>Emirates via Dubai (DXB)</B> connects London to Lagos, Accra, Nairobi, Entebbe, Cape Town, Johannesburg and Harare. Their Business Class cabin on this routing is superb value when booked in advance.</P>
        <P><B>Qatar Airways via Doha (DOH)</B> is particularly strong for East Africa (Nairobi, Dar es Salaam, Kigali, Entebbe) and West Africa (Lagos, Accra, Cotonou). Qatar's Qsuite Business Class is regularly rated the world's best.</P>
        <P><B>Etihad via Abu Dhabi (AUH)</B> offers competitive fares to Nigerian destinations in particular — their Lagos and Abuja routings are well-regarded by the diaspora community.</P>

        <H2>African Carriers Worth Considering</H2>
        <P><B>Ethiopian Airlines via Addis Ababa (ADD)</B> is one of the great underrated options. Ethiopian connects virtually every African capital through its hub, with modern aircraft and consistently low fares. London Heathrow to Nairobi via Addis, or Heathrow to Lagos via Addis, are typically among the cheapest available options on any given day.</P>
        <P><B>RwandAir via Kigali (KGL)</B> flies from Heathrow and is excellent for East and Central Africa — Rwanda, Uganda, Tanzania and the Democratic Republic of Congo.</P>

        <H2>When to Book and When to Fly</H2>
        <P>For <B>West Africa</B> (Nigeria, Ghana), the most expensive periods are December, Easter and the summer school holidays — when the diaspora community travels home. Book 4–6 months ahead for these windows.</P>
        <P>For <B>East Africa and safari destinations</B>, the Great Migration (July–October) pushes flight prices up alongside accommodation. The cheapest flying to Nairobi is January–March and May–June. For <B>South Africa</B>, April–June (southern hemisphere autumn) offers the best combination of value and pleasant weather.</P>

        <Tip>Set up fare alerts on Google Flights or Skyscanner for your specific route. Africa fares are volatile and often drop significantly in the 3–6 weeks before departure when airlines need to fill remaining seats.</Tip>

        <H2>Baggage: Know Before You Book</H2>
        <P>Most Africa routes include generous checked baggage — typically 23kg or 30kg per person depending on airline and fare class. Ethiopian Airlines and African carriers are generally the most generous. Budget European airlines are not advisable for Africa routes; the add-on baggage costs negate any headline fare saving.</P>

        <AffiliateBox href={AFFILIATES.safari.base} label="Explore Africa Safari Packages" note="Kenya, Tanzania, South Africa, Botswana and beyond" />

        <H2>Our Route Picks by Destination</H2>
        <P><B>London to Lagos:</B> BA direct or Emirates/Qatar via Gulf (best value). <B>London to Nairobi:</B> Kenya Airways direct or Ethiopian via Addis. <B>London to Accra:</B> BA direct or Emirates via Dubai. <B>London to Cape Town:</B> BA or Virgin direct, or Qatar via Doha. <B>London to Johannesburg:</B> Multiple direct options with healthy competition on price.</P>
      </>
    ),
  },

  'europe-weekend-breaks-from-uk': {
    title: '10 Best European Weekend Breaks from the UK in 2026',
    category: 'Europe',
    readTime: '6 min',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80',
    excerpt: 'Short on time but big on wanderlust? These are the best European city breaks you can do in 48 hours.',
    content: () => (
      <>
        <P>The beauty of living in the UK is that you're within two hours of some of the world's most extraordinary cities. Whether you want cobblestoned historic districts, gallery-hopping or simply sunshine and exceptional food, Europe delivers — and most of it is within a short flight or a Eurostar journey.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search European Flights" note="Compare prices from all UK airports to 50+ European cities" />

        <H2>1. Paris, France — The Perennial Classic</H2>
        <P>Two hours twenty minutes on Eurostar from St Pancras — no airport faff, arriving in the heart of the city. The Louvre, Montmartre, the Seine at dusk and the best croissants in the known universe. Post-Olympics infrastructure improvements have made Paris even better to navigate in 2026. Book the Eurostar at least 3 weeks ahead for the best fares.</P>

        <H2>2. Amsterdam, Netherlands</H2>
        <P>Four hours on Eurostar or a 50-minute flight. Amsterdam is endlessly walkable and bikeable. The Rijksmuseum, Van Gogh Museum, Anne Frank House (book in advance), the canal ring and the Jordaan neighbourhood make this one of Europe's richest 48-hour experiences. Spring, when the tulip fields bloom, is magical — book accommodation months ahead.</P>

        <H2>3. Barcelona, Spain</H2>
        <P>2 hours 15 minutes from most UK airports. Three cities in one: a Gothic medieval centre, a modernist Eixample built around Gaudí's extraordinary buildings, and a proper Mediterranean beach city. The Sagrada Família remains the most astonishing building in Europe. La Boqueria, El Born, Barceloneta — every neighbourhood is distinct and worth exploring.</P>

        <H2>4. Lisbon, Portugal — Europe's Most Underrated City</H2>
        <P>2.5 hours from London. Lisbon has invested heavily in its infrastructure: new boutique hotels in historic palaces, an extraordinary food scene, and natural wines in the bars around Cais do Sodré. Sintra (30 minutes by train) is one of the most beautiful places in all of Europe — allow at least half a day.</P>

        <H2>5. Rome, Italy — The Eternal City</H2>
        <P>2.5 hours from Heathrow. The Colosseum, the Pantheon (free), the Vatican, the Trevi Fountain at 6am before the crowds arrive, pasta cacio e pepe in Trastevere. Two days isn't enough — but it will make you want to return. Book Vatican and Colosseum tickets well in advance; they sell out weeks ahead.</P>

        <H2>6. Prague, Czech Republic</H2>
        <P>2 hours from London, 30–40% cheaper than Paris or Amsterdam for accommodation and food. Prague's Old Town is genuinely one of Europe's most beautiful medieval city centres. Go in November or February for the lowest hotel prices and the most atmospheric winter light.</P>

        <H2>7. Budapest, Hungary — Thermal Baths and Grand Architecture</H2>
        <P>2.5 hours from London. Still one of Europe's great value city breaks. The thermal bath culture (Széchenyi, Gellért), the ruin bars of the Jewish Quarter, the Hungarian Parliament at night from across the Danube — Budapest delivers a distinctly European experience that no other city replicates.</P>

        <H2>8. Seville, Spain — Flamenco and Moorish Splendour</H2>
        <P>2.5 hours from London. Home of flamenco, tapas culture and some of Spain's finest architecture. The Real Alcázar palace (a Game of Thrones filming location) is among the most beautiful buildings in Europe. April's Feria de Abril is a bucket-list event — vibrant, loud and completely intoxicating.</P>

        <H2>9. Copenhagen, Denmark — Hygge and New Nordic Cuisine</H2>
        <P>2 hours from London. Expensive but exceptional. Nyhavn's harbour, Tivoli Gardens, and an astonishing concentration of world-class restaurants. Go in December for the Christmas markets — genuinely the finest in Europe.</P>

        <H2>10. Dubrovnik, Croatia</H2>
        <P>2.5 hours from London. The old town walls, Adriatic views, the cable car to Mount Srđ and the Croatian coastline by boat. Visit in May or September — not July/August when cruise ship crowds overwhelm the small city.</P>

        <AffiliateBox href={AFFILIATES.expedia.hotels} label="Search European Hotels" note="Best rate guarantee across 2 million+ properties worldwide" />

        <H2>Practical Tips</H2>
        <P>Book your outbound flight early Friday morning and return late Sunday evening. Pre-book major attractions (Vatican, Sagrada Família, Colosseum) — walk-up queues routinely exceed 90 minutes. Download each city's public transport app before travelling. Use your hotel's luggage storage to explore from the moment you arrive rather than waiting for your room.</P>
      </>
    ),
  },

  'premier-league-travel-guide': {
    title: 'The Ultimate Premier League Match Day Travel Guide',
    category: 'Sports Travel',
    readTime: '10 min',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80',
    excerpt: "Everything fans from outside the UK need to know to plan their perfect Premier League match day trip.",
    content: () => (
      <>
        <P>The Premier League is the most-watched football league in the world, broadcast in 188 countries and drawing fans from every continent to English stadiums each season. Whether you're travelling from Nigeria, Jamaica, the USA or Australia to watch a match — or making your first trip to a ground you've watched on television for years — this guide covers everything you need to know.</P>

        <H2>Getting Tickets: The Honest Truth</H2>
        <P>The biggest challenge facing international visitors — and worth being completely honest about. Getting tickets to see the biggest clubs (Manchester City, Arsenal, Liverpool, Chelsea, Tottenham) as a non-member is genuinely difficult. Most Premier League clubs operate a membership scheme giving supporters priority access. Walk-up availability at the box office is rare for top-six clubs.</P>
        <P><B>Official routes:</B> Join the club's membership scheme (typically £15–£50/year). For less popular matches (midweek games, lower-table opposition), availability is better. Check the official club website in the week of the match for late releases.</P>
        <P><B>Third-party platforms:</B> Viagogo, StubHub and Ticketmaster Fan-to-Fan are legal resale platforms. Prices are typically 2–5× face value for high-demand fixtures. Always verify you're buying the correct section (home vs away) to avoid being turned away at the gate.</P>
        <P><B>Stadium tours:</B> If you can't get match tickets, every Premier League ground offers behind-the-scenes tours covering dressing rooms, the tunnel and pitch-side access. Old Trafford, Anfield, the Emirates and Stamford Bridge all run excellent tours. Book in advance.</P>

        <H2>Where to Stay</H2>
        <P><B>London clubs:</B> Stay in central London and use the tube. Arsenal's Emirates is two minutes from Holloway Road; Tottenham Hotspur Stadium has its own transport infrastructure; Stamford Bridge is at Fulham Broadway on the District line.</P>
        <P><B>Manchester:</B> Both grounds within easy reach of the city centre. The Etihad (Man City) is a short Metrolink tram ride; Old Trafford (Man United) has its own Metrolink stop. Stay in the Northern Quarter for the best dining and nightlife.</P>
        <P><B>Liverpool:</B> Both Anfield (LFC) and Goodison/Everton Stadium are in north Liverpool, reachable by Merseyrail or bus from the waterfront city centre.</P>

        <AffiliateBox href={AFFILIATES.expedia.hotels} label="Search Match Day Hotels" note="Hotels near Premier League stadiums — book early for big fixtures" />

        <H2>The Match Day Experience</H2>
        <P>Arrive at least 90 minutes before kick-off for your first visit. This gives you time to absorb the atmosphere, find your seat, buy a programme (a genuine piece of match day heritage), and have a drink. Stadium pubs near top grounds are extremely busy — the earlier you arrive, the better.</P>
        <P>Food inside Premier League grounds has improved dramatically. Most stadiums serve proper pies, craft beer and hot food. Prices are high — expect £6 for a pie, £5 for a pint — but this is part of the experience. Stand throughout if you're in an active home end; Premier League crowds are vocal, engaged and usually on their feet.</P>

        <H2>Getting to the Ground</H2>
        <P>Public transport is almost always the best option on match days. Parking near Premier League grounds is limited, expensive and subject to match day restrictions. Every stadium provides clear transport guidance on its official website. The Tube, Metrolink and Merseyrail are all extended and staffed for major fixtures.</P>

        <H2>Beyond the Match: Making a Weekend of It</H2>
        <P>Every Premier League city rewards more than football. A Liverpool trip pairs perfectly with the Beatles Story museum and the Albert Dock food scene. Manchester's Ancoats and Northern Quarter are among the best neighbourhoods for eating and drinking in England. For London — the whole city is on your doorstep.</P>
        <P>Consider booking for a midweek fixture — flights and hotels are significantly cheaper Tuesday–Wednesday, and Champions League or Europa League nights in English grounds are often the most electric atmospheric experiences in European football.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search Flights to UK Cities" note="London, Manchester, Liverpool, Newcastle — all major Premier League cities" />
      </>
    ),
  },

  'dubai-on-a-budget': {
    title: 'Dubai on a Budget: How to Experience Luxury for Less',
    category: 'Middle East',
    readTime: '7 min',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80',
    excerpt: "Dubai does not have to break the bank. Here is how to enjoy the UAE's most glamorous city without overspending.",
    content: () => (
      <>
        <P>Dubai has a reputation as one of the world's most expensive cities. In some respects that reputation is deserved — a weekend at the Burj Al Arab costs more than most people's monthly salary. But Dubai is also one of the most accessible cities for budget-conscious travellers who know where to look. Here's the honest guide.</P>

        <H2>The Budget Window: Travel in Summer</H2>
        <P>The single most powerful lever for affordable Dubai is timing. Visit between <B>May and September</B> and you'll pay a fraction of peak-season prices for everything — hotels, flights and tours. The catch: temperatures regularly exceed 40°C and humidity can be intense outdoors at midday. But Dubai is built for indoor living — malls, museums, restaurants and nightlife are all air-conditioned and fully operational year-round.</P>
        <P>Five-star hotels that cost £400/night in January can be found for £80–£120 in July. Flights from London drop 40–50% in summer. Plan your days around indoor exploration and early morning / late evening outdoor activities, and Dubai is extraordinary value.</P>

        <H2>Free and Cheap Dubai</H2>
        <P>The <B>Dubai Fountain</B> at Dubai Mall runs every evening from 6pm — entirely free and genuinely spectacular. <B>Jumeirah Beach</B> is a free public beach with views of the Burj Al Arab. The <B>Spice Souk</B> and <B>Gold Souk</B> in Deira are free to wander. The traditional <B>abra</B> (wooden water taxi) crossing of Dubai Creek costs just 1 dirham (about 20p) — one of the best travel experiences in the Middle East.</P>
        <P>The <B>Dubai Frame</B> observation landmark costs around £10 and offers one of the best 360° views in the city. The <B>Dubai Creek Heritage Village</B> in Deira is free and provides authentic context for the pre-oil emirate.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search Flights to Dubai" note="Compare prices from Heathrow, Gatwick, Manchester, Birmingham and more" />

        <H2>Where to Stay on a Budget</H2>
        <P>Stay in <B>Deira</B> (northern Dubai) rather than Downtown or the Marina. Deira has excellent 3- and 4-star hotels at significantly lower prices, direct Metro access, and authentic access to the souqs and creek. <B>Al Barsha</B> (near Mall of the Emirates) is another smart choice — well-connected by Metro, surrounded by mid-range restaurants, much cheaper than Downtown for equivalent quality.</P>
        <P>Even on a tight budget, consider splurging on one night at a more luxurious property — Dubai hotel hospitality is genuinely world-class, and summer prices can bring 5-star properties to surprisingly accessible levels.</P>

        <H2>Getting Around: The Dubai Metro</H2>
        <P>Dubai's Metro is clean, air-conditioned, punctual and extremely affordable — a day pass costs around £5 and covers most tourist destinations. The Red Line connects the airport to the Marina; the Gold Line runs through Deira. Careem and Uber are also very affordable — a 20-minute ride rarely costs more than £5. Avoid taxis during the 5–8pm evening rush.</P>

        <H2>Eating Well on a Budget</H2>
        <P>Dubai's food world divides neatly: expensive hotel restaurants, and extraordinary value in the older districts where the city's large South Asian and East African workforce eats. <B>Meena Bazaar</B> in Bur Dubai serves some of the best and cheapest Indian and Pakistani food outside South Asia — full meals under £4. <B>Karama</B> neighbourhood has dozens of excellent South Indian cafeterias. Shawarma stands throughout Deira are among the best in the world for under £2.</P>

        <H2>Big Ticket Attractions: Are They Worth It?</H2>
        <P>The <B>Burj Khalifa</B> observation deck (levels 124/125) costs £25–£50 per person — book online in advance for the best price, and go at dusk to see both the sunset and the city illuminating below you. <B>Desert safaris</B> (dune bashing, camel ride, dinner) start around £50/person in a group — worth doing once. The Dubai Mall, Gold Souk and beach are all free or nearly free.</P>

        <AffiliateBox href={AFFILIATES.expedia.hotels} label="Search Dubai Hotels" note="Compare budget to luxury across hundreds of properties" />

        <H2>The Honest Budget</H2>
        <P>A comfortable Dubai trip visiting main attractions, eating a mix of local and restaurant meals, 3-star hotel: approximately <B>£80–£120 per day in summer</B>, or £150–£200 per day in peak season. Comparable to major Western European cities, and significantly less than London or Paris for the same standard of experience. What changes with budget is the altitude of the pool you're sunbathing beside.</P>
      </>
    ),
  },

  'caribbean-cruise-guide': {
    title: 'Your Complete Caribbean Cruise Guide for 2026',
    category: 'Caribbean',
    readTime: '12 min',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=80',
    excerpt: 'Which cruise line, which islands, which cabin — everything you need to plan the perfect Caribbean cruise.',
    content: () => (
      <>
        <P>A Caribbean cruise is the most efficient way to experience multiple islands in a single trip — waking up in a different port each morning, spending the day exploring, and sailing overnight while you sleep. The 2026 cruise market is enormous and the variety can be bewildering. This guide cuts through the noise.</P>

        <H2>Choosing Your Cruise Line</H2>
        <P><B>Mass-market</B> lines (Royal Caribbean, Carnival, Norwegian, MSC) offer the largest ships, the most on-board activities and the most affordable pricing. Royal Caribbean's Icon of the Seas class ships are essentially floating theme parks — ideal for families and first-time cruisers.</P>
        <P><B>Premium</B> lines (Celebrity Cruises, Princess, Holland America) offer a step up in cabin quality and cuisine with fewer families and a quieter pace. Excellent for couples who want good food and culture alongside the beaches.</P>
        <P><B>Ultra-luxury</B> (Seabourn, Silversea, Regent Seven Seas) offer all-inclusive pricing, butler service and access to smaller ports that larger ships can't reach. Expensive but genuinely extraordinary.</P>

        <H2>Eastern, Western or Southern Caribbean?</H2>
        <P><B>Eastern Caribbean</B> typically includes St Maarten, St Thomas, Puerto Rico and sometimes Barbados or Antigua. Most developed islands with the best tourist infrastructure — ideal for first-timers.</P>
        <P><B>Western Caribbean</B> covers Mexico (Cozumel), Belize City, Roatan (Honduras), Costa Maya and Grand Cayman. Strong on Mayan heritage, snorkelling and reef diving — particularly good for divers.</P>
        <P><B>Southern Caribbean</B> reaches Aruba, Curaçao, Barbados, St Lucia, Grenada and Trinidad. The least visited and arguably the most interesting itinerary — smaller crowds, more culturally distinct destinations and the most consistent sunshine (largely below the hurricane belt).</P>

        <AffiliateBox href={AFFILIATES.sandals.base} label="Sandals All-Inclusive Caribbean Resorts" note="Prefer a land-based holiday? Sandals covers 9 Caribbean islands" />

        <H2>Choosing Your Cabin</H2>
        <P><B>Interior cabins</B> are the cheapest with no window. Fine if you'll spend minimal time in your cabin — many seasoned cruisers book interior as a matter of preference to free up budget for excursions.</P>
        <P><B>Ocean view cabins</B> have a fixed porthole or window. Significantly better for mental wellbeing on a 7-night cruise — natural light matters more than most people anticipate.</P>
        <P><B>Balcony cabins</B> are the sweet spot: a private outdoor space to watch arrival into port, enjoy sea days in real time, and have morning coffee with an ocean view. Worth the upgrade for any cruise of 7+ nights.</P>
        <P><B>Suites</B> include butler service, priority boarding and exclusive restaurants on most mass-market ships. If you've never experienced suite-level cruising, it is a genuinely different product.</P>

        <H2>When to Cruise the Caribbean</H2>
        <P>Peak season: <B>December to April</B> (dry season across most islands). January and February are peak of peak — book many months in advance for the best cabin availability and pricing. Hurricane season (May–November) discounts pricing 30–40% below peak rates; cruise lines reroute itineraries to avoid bad weather, and your cruise will almost certainly proceed.</P>

        <H2>Shore Excursions: Ship or Independent?</H2>
        <P>Ship excursions are more expensive but carry a guarantee: if they run late, the ship waits for you. With independent operators, the ship does not wait. For excursions close to all-aboard time, the premium is worth paying. For most beach days and island exploration, however, local taxi drivers and independent operators offer far better value and more authentic experiences.</P>

        <H2>Drinks Packages: Worth It?</H2>
        <P>Do the maths honestly. Most lines charge £8–£14 per cocktail without a package. A package costs £50–£90 per person per day and covers all beverages. If you'll have more than 5–6 drinks per day, a package saves money. Note: on most lines, both people in a cabin must purchase the same package — important if one of you doesn't drink.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search Flights to Cruise Ports" note="Fly to Miami, Fort Lauderdale, San Juan or Barbados to join your cruise" />

        <H2>Getting the Best Price</H2>
        <P>Book early for the best cabin selection; book late (30–60 days before sailing) for the best remaining inventory price. The sweet spot is 90–120 days out — early-booking discounts apply but good categories haven't sold out. Watch for sales in January (New Year deals), Black Friday, Cyber Monday and September (post-school-holiday window).</P>
      </>
    ),
  },

  'airport-parking-heathrow-guide': {
    title: "Best Airport Parking at Heathrow: A Traveller's Guide",
    category: 'Travel Tips',
    readTime: '5 min',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80',
    excerpt: "Meet and greet, short stay, long stay — we break down every parking option at Heathrow with honest prices.",
    content: () => (
      <>
        <P>Heathrow is the UK's busiest airport and home to some of the most confusing — and expensive — parking options in the country. Understanding your options before you arrive will save both time and money. This guide covers every parking type, honest pricing and the best way to book.</P>

        <H2>The Four Types of Heathrow Parking</H2>
        <P><B>Short Stay</B> is the closest to the terminals — ideal for drop-offs, pick-ups or trips under 24 hours. Expect to pay £35–£50 per day. Never book Short Stay for a week-long holiday unless you enjoy giving money away.</P>
        <P><B>Long Stay</B> is further from terminals and requires a shuttle bus (every 5–10 minutes). Significantly cheaper at £20–£35 per day — a very reasonable trade-off for the 10–15 minute shuttle time on a 7+ night trip.</P>
        <P><B>Business parking</B> is a mid-option between Short Stay and Long Stay, with slightly quicker shuttle times. Good for business travellers who need reliability without Short Stay prices.</P>
        <P><B>Meet and Greet</B> is the most convenient option: drive to the terminal, hand your keys to a valet, walk straight to check-in. On return, your car is brought to arrivals. No shuttle buses — invaluable with young children, heavy luggage or mobility considerations. Prices: £60–£120 per week, heavily dependent on how far in advance you book.</P>

        <H2>The True Cost of Official Heathrow Parking</H2>
        <P>Heathrow's own parking is consistently the most expensive option. Booking at the gate costs substantially more than online booking — sometimes 50–100% more. Even with advance online booking, official Heathrow Long Stay for 7 nights typically costs £80–£130 depending on terminal and season.</P>

        <H2>Third-Party Parking: Much Better Value</H2>
        <P>Heathrow's surrounding area is packed with approved third-party parking operators offering equivalent services at significantly lower prices. These operators are licensed, insured and used by thousands of travellers weekly.</P>

        <AffiliateBox href={AFFILIATES.awin.beeParking.url} label="Book Bee Parking at Heathrow" note="Award-winning Meet & Greet — typically 40–60% cheaper than official Heathrow parking. All terminals." />

        <P><B>Bee Parking</B> is one of the most highly rated Heathrow parking providers, specialising in Meet and Greet at all terminals. Pre-book online, drive to the terminal drop-off zone, hand over your keys. On return, text ahead and your car is waiting within 15 minutes. Prices typically 40–60% lower than official Heathrow Meet and Greet for equivalent service.</P>
        <P>Other reputable operators include APH (Airport Parking & Hotels), Purple Parking and Holiday Extras. Always read recent reviews, verify CCTV and insurance coverage, and book direct through the operator's official website.</P>

        <H2>Tips for Booking Heathrow Parking</H2>
        <P><B>Book as early as possible.</B> Prices increase significantly closer to departure, especially in school holidays, peak summer and Christmas. Booking 4–6 weeks ahead typically saves 30–40% versus the week before.</P>
        <P><B>Check your terminal.</B> Heathrow has four active terminals (T2, T3, T4, T5) that are not adjacent. Short Stay parks are terminal-specific. Most Long Stay and Meet and Greet operators service all terminals but confirm before booking.</P>
        <P><B>Factor in transfer time.</B> At peak times, shuttle queues can add 15–20 minutes to the official Long Stay estimate. Build this into your timeline for early morning flights.</P>

        <H2>Electric Vehicle Parking</H2>
        <P>Both official Heathrow car parks and most major third-party operators now provide EV charging points. Confirm charging speed before booking — some operators offer only slow (7kW) charging while others have faster options available.</P>

        <AffiliateBox href={AFFILIATES.awin.beeParking.url} label="Pre-book Bee Parking — Save up to 60%" note="All terminals covered. Meet & Greet and Long Stay options available." />

        <H2>The Verdict</H2>
        <P>For most travellers, pre-booked third-party Meet and Greet (such as Bee Parking) delivers the best combination of convenience and value. For longer trips on a tighter budget, pre-booked Long Stay parking offers the lowest per-day cost. Whatever you do — don't turn up without a booking. The gate price difference is substantial and entirely avoidable.</P>
      </>
    ),
  },

  'travel-esim-guide': {
    title: "Do You Need a Travel eSIM? A Complete Beginner's Guide",
    category: 'Travel Tech',
    readTime: '6 min',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400&q=80',
    excerpt: "What is an eSIM, how does it work, which countries does it cover and is it worth it? All answered here.",
    content: () => (
      <>
        <P>The travel eSIM has transformed how millions of travellers stay connected abroad. Where once you faced extortionate roaming charges or a hunt for a local SIM at the airport, there's now a third option: a digital SIM card you activate before you leave, costs a fraction of roaming rates, and works in 200+ countries.</P>

        <H2>What Is an eSIM?</H2>
        <P>An eSIM (embedded SIM) is a digital version of the physical SIM chip — soldered directly into modern smartphones and activated by scanning a QR code rather than physically inserting anything. Most modern phones support multiple eSIM profiles simultaneously, meaning you can run your regular home SIM (still receiving calls and texts on your regular number) alongside a travel eSIM providing cheap local data. No more being cut off from home contacts; no more missing WhatsApp messages.</P>

        <H2>Which Phones Support eSIM?</H2>
        <P><B>iPhone:</B> iPhone XS, XR (2018) and all later models. From iPhone 15 in the USA, Apple removed the physical SIM tray entirely — eSIM only.</P>
        <P><B>Samsung:</B> Galaxy S20 series onwards, Galaxy Z Fold and Z Flip series, many Galaxy Note models.</P>
        <P><B>Google Pixel:</B> Pixel 3 onwards. Most flagship Android phones from 2021 onwards support eSIM — check your manufacturer's website if unsure.</P>
        <Tip>Even if your phone model supports eSIM, some carriers lock the functionality. This is most common with budget MVNO contracts. Check with your carrier before travelling if you're unsure.</Tip>

        <H2>Travel eSIM Providers</H2>
        <P><B>Holafly</B> specialises in <B>unlimited data</B> plans in 170+ countries. Flat daily or trip-length rate, unlimited data, instant delivery by email. For data-heavy users — remote workers, content creators, frequent travellers — Holafly's unlimited plans remove the anxiety of watching data drain away.</P>

        <AffiliateBox href={AFFILIATES.holafly.base} label="Get Your Travel eSIM from Holafly" note="Unlimited data plans in 170+ countries — activate in minutes before you fly" />

        <P><B>Airalo</B> is the largest eSIM marketplace — compare regional and country-specific plans from multiple local operators in 200+ countries. Good for occasional travellers who want to shop around on price and data allowance.</P>
        <P><B>WorldSIM</B> offers both physical SIMs and eSIMs covering multiple countries on a single plan — particularly useful for complex multi-destination itineraries where you don't want separate eSIMs for each country.</P>

        <AffiliateBox href={AFFILIATES.awin.worldSim.url} label="WorldSIM — One SIM for Multiple Countries" note="Physical and eSIM options for complex multi-destination trips" />

        <H2>How Much Does a Travel eSIM Cost?</H2>
        <P>A 5GB eSIM for 30 days in a single country typically costs £5–£15. A 20GB regional plan covering 10+ countries for 30 days costs roughly £20–£40. Compare against standard roaming: UK networks typically charge £2–£5 per day for a roaming day pass, often with speed throttling after a low data threshold. For a 10-day trip, that's £20–£50 for capped, potentially throttled data — frequently worse value than a dedicated travel eSIM.</P>

        <H2>How to Activate</H2>
        <P>The process is consistent across providers: (1) Purchase your plan online; (2) Receive a QR code by email; (3) Go to Settings › Mobile Data/Cellular › Add eSIM; (4) Scan the QR code; (5) Your eSIM is installed. Install it before you travel — not struggling with settings at the airport.</P>

        <H2>Should You Keep Your Home SIM Active?</H2>
        <P>Yes. Keep your home SIM as the primary line for calls and SMS. Set the travel eSIM as your primary data line. Most modern smartphones manage this dual-SIM setup automatically — you rarely need to think about it after initial configuration.</P>

        <H2>The Verdict</H2>
        <P>For any trip outside the UK of 3+ days, a travel eSIM almost certainly saves money compared to roaming charges. Setup takes under 10 minutes, costs are predictable, and coverage on major providers in developed countries is indistinguishable from local SIM quality. One of the simplest and most effective travel tech purchases you can make.</P>
      </>
    ),
  },

  'new-york-48-hour-guide': {
    title: 'New York City in 48 Hours: The Perfect Itinerary',
    category: 'Americas',
    readTime: '8 min',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80',
    excerpt: "Two days, one of the world's greatest cities. How to see the best of New York without wasting a minute.",
    content: () => (
      <>
        <P>New York is the most energetic city on earth. It's also one of the most intimidating to plan for — too many options, too many neighbourhoods claiming to be unmissable. A 48-hour trip forces discipline. Discipline produces focus. Here's the itinerary that delivers the most New York per minute.</P>

        <AffiliateBox href={AFFILIATES.expedia.hotels} label="Book Your New York Hotel" note="Midtown, SoHo, Brooklyn or the Village — compare hundreds of NYC properties" />

        <H2>Day 1 Morning: Central Park and the Met</H2>
        <P>Start early. New York before 8am is quieter, more golden and more yours than at any other point in the day. Enter <B>Central Park</B> at the south-east corner (59th Street and 5th Avenue) and walk north. The Bethesda Fountain, the Bow Bridge, the Mall — each is worth 20 minutes. The park is extraordinary in any season.</P>
        <P>From the north end at 72nd Street, walk east to <B>5th Avenue and the Met</B>. The Metropolitan Museum of Art is the world's greatest museum by any reasonable measure. Get there when it opens at 10am. Spend two hours in the Egyptian wing, the Greek and Roman galleries, and European paintings — you will cover 5,000 years of human civilisation in a single morning.</P>

        <H2>Day 1 Afternoon: Midtown and the High Line</H2>
        <P>Take the subway south to Midtown. Walk the blocks around <B>Times Square</B> — overwhelming, commercial and glorious in equal measure. Don't miss the New York Public Library (free, magnificent interior), Bryant Park, and the <B>Top of the Rock</B> observation deck at 30 Rockefeller Plaza for the best city views, including directly down onto Central Park from above.</P>
        <P>Head west to Chelsea and the <B>High Line</B> — a converted elevated railway turned into a 1.5-mile linear park above the streets. Walk the full length from 34th Street south to Gansevoort Street. The Hudson River views from the southern end are outstanding. The neighbourhood below the High Line has the best contemporary art galleries in North America.</P>

        <H2>Day 1 Evening: West Village Dinner</H2>
        <P>The south end of the High Line brings you to the <B>Meatpacking District</B> transitioning into the <B>West Village</B> — two of Manhattan's most atmospheric neighbourhoods. Dinner here is exceptional: the West Village has a concentration of outstanding independent restaurants at more reasonable prices than Midtown. Try Christopher Street, Bedford Avenue or Grove Street for the best options.</P>
        <P>After dinner, walk the West Village streets — irregular, narrow, lined with brownstone townhouses, genuinely unlike the grid of the rest of Manhattan. This is the New York of generations of writers, musicians and creative people.</P>

        <H2>Day 2 Morning: Brooklyn Bridge and DUMBO</H2>
        <P>Take the subway to City Hall station and walk across the <B>Brooklyn Bridge</B>. One of the most iconic walks in the world — allow 45 minutes at a relaxed pace with frequent stops for photographs. The view of Lower Manhattan from the middle of the bridge is incomparable.</P>
        <P>On the Brooklyn side, you arrive in <B>DUMBO</B> — one of New York's most photogenic neighbourhoods. Brunch at Brooklyn Roasting Company, then walk to Brooklyn Bridge Park for the full skyline view. The gap in the streets between the two bridges creates one of New York's most photographed urban frames.</P>

        <H2>Day 2 Afternoon: 9/11 Memorial and Lower Manhattan</H2>
        <P>Take the subway back to Lower Manhattan and visit the <B>9/11 Memorial and Museum</B> (book in advance — it sells out). The reflecting pools in the footprints of the Twin Towers are the most moving public memorial in the United States. Allow 2–3 hours if visiting the museum.</P>
        <P>The <B>Staten Island Ferry</B> is entirely free, runs every 30 minutes from Whitehall Terminal, and passes directly by the Statue of Liberty. You won't get as close as paid ferry tours, but for a free view of one of the world's most recognisable monuments, it's hard to beat.</P>

        <H2>Day 2 Evening: One World Observatory</H2>
        <P>End your New York trip at the top: the <B>One World Observatory</B> on the 100th–102nd floors of One World Trade Center. At dusk you'll watch the sunset over New Jersey while Manhattan lights up below — 360-degree views of the most photogenic city skyline in the world. Book online in advance; it sells out at peak times.</P>

        <H2>Practical Notes</H2>
        <P><B>Transport:</B> Buy a 7-day unlimited Metro Card (~$34) at any subway station — worth it for 48 hours of heavy use. The subway goes everywhere and runs 24 hours.</P>
        <P><B>Tipping:</B> 18–20% on all restaurant bills is standard, not optional.</P>
        <P><B>Reservations:</B> Book popular restaurants 2–3 days in advance on OpenTable or Resy. Walk-in dinner at good NYC restaurants is increasingly rare.</P>

        <AffiliateBox href={AFFILIATES.expedia.flights} label="Search Flights to New York" note="Compare UK airports to JFK, Newark and LaGuardia" />
      </>
    ),
  },
}

// ── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) return { title: 'Post Not Found | Tralvana' }
  return {
    title: `${post.title} | Tralvana Blog`,
    description: post.excerpt,
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  const related = Object.entries(posts)
    .filter(([s]) => s !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <div className="min-h-screen bg-tralvana-black">

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black via-tralvana-black/60 to-tralvana-black/10" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pb-10 pt-24">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-tralvana-muted text-xs hover:text-tralvana-gold transition-colors">Blog</Link>
            <span className="text-tralvana-muted text-xs">›</span>
            <span className="text-tralvana-gold text-xs">{post.category}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-tralvana-muted text-sm">
            <span className="px-3 py-1 rounded-full bg-tralvana-gold/20 border border-tralvana-gold/40 text-tralvana-gold text-xs font-medium">
              {post.category}
            </span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-tralvana-muted leading-relaxed">
          <post.content />
        </div>

        {/* Related posts */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-tralvana-gold" />
            <span className="text-tralvana-gold text-sm uppercase tracking-widest font-medium">More from Tralvana</span>
            <div className="h-px w-8 bg-tralvana-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`}
                className="group glass-card rounded-2xl overflow-hidden hover-lift gold-border">
                <div className="relative h-36 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${r.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-tralvana-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-tralvana-gold text-xs mb-1">{r.category}</p>
                  <h3 className="font-display text-sm font-semibold text-white leading-snug group-hover:text-tralvana-gold transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog"
            className="inline-flex px-6 py-2.5 border border-tralvana-gold text-tralvana-gold text-sm font-medium rounded-xl hover:bg-tralvana-gold/10 transition-all">
            ← Back to all guides
          </Link>
        </div>
      </div>
    </div>
  )
}
