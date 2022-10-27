import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export const SecondaryButton = ({ text }: Props) => {
  return <Button>{text}</Button>
}

const Button = styled.button`
  height: 42px;
  width: 140px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};
`
