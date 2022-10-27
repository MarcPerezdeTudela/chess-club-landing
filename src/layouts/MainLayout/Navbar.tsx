import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'

export const Navbar = () => {
  return (
    <Headroom>
      <NavBar></NavBar>
    </Headroom>
  )
}

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
`
