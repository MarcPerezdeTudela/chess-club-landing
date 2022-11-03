import React from 'react'
import styled from 'styled-components'

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

export const SubscribeForm = () => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <EmailInput placeholder="Your email" />
      <Button>Subscribe</Button>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: center;
`

const EmailInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spaces.xs};
  flex-grow: 1;
  height: 42px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 5px 0 0 5px;
  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.secondary};
  }
`
const Button = styled.button`
  height: 42px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spaces.xs};
  border-radius: 0 5px 5px 0;
  &:hover {
    cursor: pointer;
  }
`
