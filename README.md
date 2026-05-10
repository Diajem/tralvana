# Tralvana — Your World Starts Here

Premium international travel website built with Next.js 14.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your affiliate IDs

# 3. Start development server
npm run dev
# Open http://localhost:3000
```

## Adding Your Affiliate IDs

Open `.env.local` and fill in:

```env
# Already active:
NEXT_PUBLIC_EXPEDIA_AFFILIATE=https://expedia.com/affiliate/mZObD29
NEXT_PUBLIC_AWIN_ID=1773696

# Add when you have them:
NEXT_PUBLIC_TRAVELPAYOUTS_MARKER=your_marker
NEXT_PUBLIC_BOOKING_AFFILIATE=your_id
NEXT_PUBLIC_SKYSCANNER_AFFILIATE=your_id
# etc.
```

## Deploying to Hostinger

```bash
npm run build
```

Then upload the `.next` folder and `package.json` to Hostinger via their Node.js hosting panel, or use their Git deployment.

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── flights/            # Flights page
│   ├── hotels/             # Hotels page
│   ├── cars/               # Car hire page
│   ├── tours/              # Tours page
│   ├── destinations/       # Destination pages
│   ├── tv/                 # Tralvana TV
│   ├── blog/               # Blog
│   └── shop/               # Travel shop
├── components/
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Homepage sections
├── lib/
│   ├── affiliates.ts       # ALL affiliate links (edit here)
│   ├── currency.ts         # Currency detection + Amazon IDs
│   └── CurrencyContext.tsx # Global currency state
└── i18n/
    ├── en.json             # English
    ├── es.json             # Spanish
    └── fr.json             # French
```

## Built by Diajem Marketing
https://diajemmarketing.com
