import { ThemeInterface } from '@/types/theme'
import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaTelegram } from 'react-icons/fa'
import styled, { useTheme } from 'styled-components'

export const Footer = () => {
  const theme = useTheme() as ThemeInterface
  return (
    <Container>
      <SocialMedia>
        <FaFacebook size={36} fill={theme.colors.secondary} />
        <FaTwitter size={36} fill={theme.colors.secondary} />
        <FaLinkedinIn size={36} fill={theme.colors.secondary} />
        <FaTelegram size={36} fill={theme.colors.secondary} />
      </SocialMedia>
    </Container>
  )
}

const Container = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`
const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  & > * {
    cursor: pointer;
  }
`
