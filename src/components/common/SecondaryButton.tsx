import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export const SecondaryButton = ({ text }: Props) => {
  return <Button>{text}</Button>
}

const Button = styled.button`
  height: 3em;
  width: 8.5em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.3125em;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};
  cursor: pointer;
`
