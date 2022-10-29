import React from 'react'
import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'

interface Props {
  image: StaticImageData
  title: string
  description: string
}
export const FeatureCard = ({ image, title, description }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt={'card image'}
          src={image}
          layout={'fill'}
          objectFit={'cover'}
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Separator />
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
  min-height: 280px;
  width: 100%;
  max-width: 280px;
  padding-left: ${({ theme }) => theme.spaces.m};
  padding-right: ${({ theme }) => theme.spaces.m};
  padding-bottom: ${({ theme }) => theme.spaces.m};
  background-image: ${({ theme }) => theme.gradients.cardBackground};
  filter: ${({ theme }) => theme.shadows.cardShadow};
`
const ImageContainer = styled.div`
  position: relative;
  height: 128px;
  width: 128px;
  margin-top: -64px;
  filter: ${({ theme }) => theme.shadows.cardImage};
`

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: 340;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const Separator = styled.hr`
  width: 64px;
  height: 1px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
`

const Description = styled.p`
  margin-top: ${({ theme }) => theme.spaces.s};
  margin-bottom: ${({ theme }) => theme.spaces.s};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 26px;
  text-align: center;
  font-weight: 300;
`
