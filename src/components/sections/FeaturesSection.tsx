import React from 'react'
import styled from 'styled-components'
import PlayCardImage from '@/public/images/cards/play-card.png'
import EventsCardImage from '@/public/images/cards/events-card.png'
import ConnectCardImage from '@/public/images/cards/connect-card.png'
import { FeatureCard } from '../common/FeatureCard'
import { SectionTitle } from '../common/SectionTitle'

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
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.m};
  padding-bottom: ${({ theme }) => theme.spaces.l};
`
const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 26px;
  text-align: center;
  max-width: 320px;
`

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
  padding-top: ${({ theme }) => theme.spaces.l};
`
