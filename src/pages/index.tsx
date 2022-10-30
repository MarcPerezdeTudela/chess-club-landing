import type { NextPage } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { NumbersSection } from '@/components/sections/NumbersSection'

const Home: NextPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <NumbersSection />
  </>
)

export default Home
