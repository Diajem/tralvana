import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import DestinationsSection from '@/components/sections/DestinationsSection'

const SearchWidget = dynamic(() => import('@/components/sections/SearchWidget'), { ssr: false })
import FeaturedDeals from '@/components/sections/FeaturedDeals'
import TralvanaTV from '@/components/sections/TralvanaTV'
import BlogPreview from '@/components/sections/BlogPreview'
import ShopPreview from '@/components/sections/ShopPreview'
import PartnersBar from '@/components/sections/PartnersBar'
import AirportServices from '@/components/sections/AirportServices'
import SportsTeaser from '@/components/sections/SportsTeaser'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchWidget />
      <DestinationsSection />
      <FeaturedDeals />
      <AirportServices />
      <TralvanaTV />
      <SportsTeaser />
      <BlogPreview />
      <ShopPreview />
      <PartnersBar />
    </>
  )
}
