import React from 'react'
import styled from 'styled-components'
import PlayCardImage from '@/public/images/cards/play-card.png'
import EventsCardImage from '@/public/images/cards/events-card.png'
import ConnectCardImage from '@/public/images/cards/connect-card.png'
import { FeatureCard } from '@/components/common/FeatureCard'
import { SectionTitle } from '@/components/common/SectionTitle'

export const FeaturesSection = () => {
  return (
    <Container>
      <SectionTitle text={'What We Offer'} />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vitae elementum neque, ut fermentum metus.
      </Description>
      <CardList>
        <FeatureCard
          image={PlayCardImage}
          title={'Start Playing Chess'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id scelerisque tortor. Maecenas egestas fringilla consectetur. '
          }
        />
        <FeatureCard
          image={EventsCardImage}
          title={'Participate In Events'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id scelerisque tortor. Maecenas egestas fringilla consectetur. '
          }
        />
        <FeatureCard
          image={ConnectCardImage}
          title={'Connect With People'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id scelerisque tortor. Maecenas egestas fringilla consectetur. '
          }
        />
      </CardList>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.m};
  padding: 0 ${({ theme }) => theme.spaces.m};
`
const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 40ch;
  text-align: center;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.625em;
`
const CardList = styled.div`
  width: 100%;
  max-width: 86rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.xl};
  padding-top: ${({ theme }) => theme.spaces.l};
`
