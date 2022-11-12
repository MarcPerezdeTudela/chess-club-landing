import type { NextPage } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { NewsSections } from '@/components/sections/NewsSections'
import { SubscribeSection } from '@/components/sections/SubscribeSection'
import styled from 'styled-components'

const Home: NextPage = () => (
  <Container>
    <HeroSection />
    <FeaturesSection />
    <NumbersSection />
    <SubscribeSection />
    <NewsSections />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
`

export default Home
