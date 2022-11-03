import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../common/SectionTitle'
import { SubscribeForm } from '../common/SubscribeForm'

export const SubscribeSection = () => {
  return (
    <Container>
      <SectionTitle text="Connect With Us" />

      <FormContainer>
        <SectionSubTitle>
          Subscribe to our newsletter to get the latest news.
        </SectionSubTitle>
        <SubscribeForm />
      </FormContainer>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.l};
  padding-bottom: ${({ theme }) => theme.spaces.l};
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.m};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.l} ${({ theme }) => theme.spaces.m};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: inset 0px 2px 6px 0px black,
    inset 0px -2px 6px 0px ${({ theme }) => theme.colors.primaryLight};
`
const SectionSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: 340;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 ${({ theme }) => theme.spaces.m};
  text-align: center;
`
