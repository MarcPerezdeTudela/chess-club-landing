import type { NextPage } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { NewsSections } from '@/components/sections/NewsSections'
import { SubscribeSection } from '@/components/sections/SubscribeSection'

const Home: NextPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <NumbersSection />
    <SubscribeSection />
    <NewsSections />
  </>
)

export default Home
