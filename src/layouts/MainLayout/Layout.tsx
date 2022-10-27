import React from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Body>{children}</Body>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.gradients.bodyBackground};
  height: 200vh;
`
const Header = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
`

const Body = styled.main`
  flex-grow: 1;
`
