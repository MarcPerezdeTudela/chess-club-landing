import React from 'react'
import styled, { useTheme } from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import { FaUserEdit, FaRegCalendarAlt } from 'react-icons/fa'
import { ThemeInterface } from '@/types/theme'

interface Props {
  title: string
  author: string
  date: string
  coverImage: StaticImageData
}

export const NewItem = ({ coverImage, title, date, author }: Props) => {
  const theme = useTheme() as ThemeInterface
  return (
    <Container>
      <Cover>
        <CoverImageContainer>
          <Image
            alt={'New image'}
            src={coverImage}
            layout={'fill'}
            objectFit={'cover'}
          />
          <CoverImageGradient />
        </CoverImageContainer>
        <CoverTitle>{title}</CoverTitle>
        <DateAndAuthor>
          <Date>
            <FaRegCalendarAlt fill={theme.colors.secondary} />
            <DateString>{date}</DateString>
          </Date>
          <Author>
            <FaUserEdit fill={theme.colors.secondary} />
            <AuthorName>{author}</AuthorName>
          </Author>
        </DateAndAuthor>
      </Cover>
      <Summary>
        Praesent diam quam, fringilla in quam sit amet, convallis ultrices urna.
        maximus ultrices. Donec convallis lectus at aliquet dapibus.
      </Summary>
    </Container>
  )
}
const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  filter: ${({ theme }) => theme.shadows.cardShadow};
  padding: ${({ theme }) => theme.spaces.s};
  gap: ${({ theme }) => theme.spaces.s};
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    width: 5em;
    height: 5em;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-style: solid;
    content: ' ';
  }
  &:before {
    top: 0;
    left: 0;
    border-width: 1px 0 0 1px;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-width: 0 1px 1px 0;
  }
`
const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 16em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spaces.s};
`
const CoverImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
const CoverImageGradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.gradients.newCoverGradient}; ;
`

const CoverTitle = styled.h5`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 ${({ theme }) => theme.spaces.xxs};
  line-height: 1.75em;
  font-weight: 340;
  z-index: 1;
`
const DateAndAuthor = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.xs};
  padding-left: ${({ theme }) => theme.spaces.xs};
  padding-right: ${({ theme }) => theme.spaces.xs};
  padding-bottom: ${({ theme }) => theme.spaces.xs};
  z-index: 1;
`

const Author = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xs};
`
const AuthorName = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1em;
  font-weight: 390;
`
const Date = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xs};
`
const DateString = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1em;
  font-weight: 390;
`
const Summary = styled.p`
  text-align: center;
  line-height: 1.625em;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spaces.m} ${({ theme }) => theme.spaces.xs};
`
