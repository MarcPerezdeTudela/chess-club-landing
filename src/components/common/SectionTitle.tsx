import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}
export const SectionTitle = ({ text }: Props) => {
  return (
    <SectionTitleContainer>
      <Title>{text}</Title>
      <Separator />
    </SectionTitleContainer>
  )
}

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 330;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
`

const Separator = styled.hr`
  width: 94px;
  height: 1px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
`
