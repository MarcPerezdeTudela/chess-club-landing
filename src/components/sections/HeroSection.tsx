import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import HeroImage from '@/public/images/heroImage.png'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'

export const HeroSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          priority
          alt={'heroSection'}
          src={HeroImage}
          layout={'fill'}
          objectFit={'cover'}
        ></Image>
      </ImageContainer>
      <Content>
        <Title>Chess Club</Title>
        <SubTitle>Play chess with real people</SubTitle>
        <ButtonContainer>
          <PrimaryButton text="Subscribe" />
          <SecondaryButton text="Contact" />
        </ButtonContainer>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  height: 680px;
  width: 100%;
`
const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  -webkit-mask-image: ${({ theme }) => theme.gradients.heroImage};
  mask-image: ${({ theme }) => theme.gradients.heroImage};
`
const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  align-items: center;
  padding: ${({ theme }) => theme.spaces.xl} ${({ theme }) => theme.spaces.m};
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  max-width: 280px;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.m};
`
