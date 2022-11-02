import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/common/SectionTitle'
import { NumbersItem } from '@/components/common/NumbersItem'
import { FaUserAlt, FaTrophy, FaGraduationCap, FaCrown } from 'react-icons/fa'

export const NumbersSection = () => {
  return (
    <Container>
      <SectionTitle text="Our Numbers" />
      <SectionSubTitle>Actually we have more than:</SectionSubTitle>
      <NumbersContainer>
        <NumbersItem
          Icon={FaUserAlt}
          iconSize={64}
          number={100}
          title="Active Members"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaTrophy}
          iconSize={72}
          number={3}
          title="Weekly Tournaments"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaGraduationCap}
          iconSize={72}
          number={8}
          title="Monthly Classes"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaCrown}
          iconSize={72}
          number={10}
          title="Titled Players"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
      </NumbersContainer>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.m};
  align-items: center;
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.m};
  padding-bottom: ${({ theme }) => theme.spaces.l};
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

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  align-items: center;
  padding-top: ${({ theme }) => theme.spaces.m};
`
