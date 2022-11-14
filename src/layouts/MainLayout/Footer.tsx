import { ThemeInterface } from '@/types/theme'
import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaTelegram } from 'react-icons/fa'
import styled, { useTheme } from 'styled-components'

export const Footer = () => {
  const theme = useTheme() as ThemeInterface
  return (
    <Container>
      <SocialMedia>
        <Icon>
          <FaFacebook size={'100%'} fill={theme.colors.secondary} />
        </Icon>
        <Icon>
          <FaTwitter size={'100%'} fill={theme.colors.secondary} />
        </Icon>
        <Icon>
          <FaLinkedinIn size={'100%'} fill={theme.colors.secondary} />
        </Icon>
        <Icon>
          <FaTelegram size={'100%'} fill={theme.colors.secondary} />
        </Icon>
      </SocialMedia>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spaces.s};
`
const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  max-width: 30em;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.m};

  & > * {
    cursor: pointer;
  }
`
const Icon = styled.div`
  display: flex;
  width: 2em;
  height: 2em;
`
