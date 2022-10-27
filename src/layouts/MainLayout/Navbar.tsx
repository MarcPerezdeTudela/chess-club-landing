import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <Headroom>
      <NavBar>
        <LogoContainer>
          <Image
            alt="logo"
            src={'/images/chessLogo.svg'}
            width={42}
            height={42}
          />
          <LogoText>
            Chess Club <br /> We Love Chess
          </LogoText>
        </LogoContainer>
        <MenuIcon />
      </NavBar>
    </Headroom>
  )
}

const NavBar = styled.nav`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.spaces.m};
`
const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subText};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.fonts.primary};
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.s};
`
const MenuIcon = styled(AiOutlineMenu)`
  fill: ${({ theme }) => theme.colors.white};
  height: 32px;
  width: 32px;
  cursor: pointer;
`
