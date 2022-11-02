import React from 'react'
import styled, { useTheme } from 'styled-components'
import { StaticImageData } from 'next/image'
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
      <Content>
        <Cover coverImage={coverImage}>
          <CoverTitle>{title}</CoverTitle>
          <DateAndAuthor>
            <Date>
              <FaRegCalendarAlt size={18} fill={theme.colors.secondary} />
              <DateString>{date}</DateString>
            </Date>
            <Author>
              <FaUserEdit size={18} fill={theme.colors.secondary} />
              <AuthorName>{author}</AuthorName>
            </Author>
          </DateAndAuthor>
        </Cover>
        <Summary>
          Praesent diam quam, fringilla in quam sit amet, convallis ultrices
          urna. maximus ultrices. Donec convallis lectus at aliquet dapibus.
        </Summary>
      </Content>
    </Container>
  )
}
const Container = styled.article`
  position: relative;
  height: 480px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  filter: ${({ theme }) => theme.shadows.cardShadow};
  max-width: 420px;
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces.s};

  &:before,
  &:after {
    position: absolute;
    width: 80px;
    height: 80px;
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

const Content = styled.div`
  height: 100%;
  gap: ${({ theme }) => theme.spaces.s};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Cover = styled.div<{ coverImage: StaticImageData }>`
  display: flex;
  width: 100%;
  height: 480px;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spaces.xs};
  padding: ${({ theme }) => theme.spaces.s};
  background-image: ${({ theme }) => theme.gradients.newCoverGradient},
    ${({ coverImage }) => `url(${coverImage.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Summary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0 ${({ theme }) => theme.spaces.xs};
`
const CoverTitle = styled.h5`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 28px;
  font-weight: 340;
`
const DateAndAuthor = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.xs};
  padding-left: ${({ theme }) => theme.spaces.xs};
  padding-right: ${({ theme }) => theme.spaces.xs};
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
  line-height: 16px;
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
  line-height: 16px;
  font-weight: 390;
`
