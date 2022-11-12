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
        <TitleContainer>
          <Title>Chess Club</Title>
          <SubTitle>Play chess with real people</SubTitle>
        </TitleContainer>
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
  width: 100%;
`
const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 81.25em;
  overflow: hidden;
  -webkit-mask-image: ${({ theme }) => theme.gradients.heroImage};
  mask-image: ${({ theme }) => theme.gradients.heroImage};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces.l};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces.xl} ${({ theme }) => theme.spaces.m};
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.s};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  max-width: 16ch;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.l};
`
