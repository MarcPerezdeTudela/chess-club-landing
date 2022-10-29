import type { NextPage } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'

const Home: NextPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
  </>
)

export default Home
