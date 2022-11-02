import type { NextPage } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { NewsSections } from '@/components/sections/NewsSections'

const Home: NextPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <NumbersSection />
    <NewsSections />
  </>
)

export default Home
