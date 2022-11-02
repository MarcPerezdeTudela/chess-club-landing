import React from 'react'
import styled from 'styled-components'
import { NewItem } from '@/components/common/NewItem'
import { SectionTitle } from '@/components/common/SectionTitle'
import PostImage1 from '@/public/images/news/wooden_board.jpg'
import PostImage2 from '@/public/images/news/pieces_sunshine.jpg'
import PostImage3 from '@/public/images/news/pawn_stands.jpg'

export const NewsSections = () => {
  return (
    <Container>
      <SectionTitle text="Latest Posts" />
      <NewsList>
        <NewItem
          title="Strategy in chess"
          author={'John Doe'}
          date={'Sept 2 2022'}
          coverImage={PostImage1}
        />
        <NewItem
          title="Improve as an adult"
          author={'Jane Doe'}
          date={'Aug 24 2022'}
          coverImage={PostImage2}
        />
        <NewItem
          title="Chess an self-confidence"
          author={'John Doe'}
          date={'Aug 12 2022'}
          coverImage={PostImage3}
        />
      </NewsList>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  align-content: center;
  padding-bottom: ${({ theme }) => theme.spaces.l};
`

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  align-items: center;
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.m};
`
