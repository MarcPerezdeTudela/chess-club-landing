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
          number={200}
          title="Active Members"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaTrophy}
          number={12}
          title="Weekly Tournaments"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaGraduationCap}
          number={18}
          title="Monthly Classes"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <NumbersItem
          Icon={FaCrown}
          number={20}
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
  max-width: 20ch;
  font-weight: 340;
  line-height: 1.25em;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
`

const NumbersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.l};
  padding-top: ${({ theme }) => theme.spaces.m};
`
