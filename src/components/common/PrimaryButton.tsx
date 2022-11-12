import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}
export const PrimaryButton = ({ text }: Props) => {
  return <Button>{text}</Button>
}

const Button = styled.button`
  height: 3em;
  width: 8.5em;
  border: none;
  border-radius: 0.3125em;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};
  box-shadow: ${({ theme }) => theme.shadows.primaryButton};
  cursor: pointer;
`
