import React, { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { IconType } from 'react-icons'
import { ThemeInterface } from '@/types/theme'
import { animate, motion, useAnimationControls, useInView } from 'framer-motion'

interface Props {
  number: number
  title: string
  description: string
  Icon: IconType
  iconSize: number
}
export const NumbersItem = ({
  Icon,
  iconSize,
  number,
  title,
  description,
}: Props) => {
  const theme = useTheme() as ThemeInterface
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: true, amount: 0.3 })
  const containerControls = useAnimationControls()
  const numberRef = useRef<HTMLSpanElement | null>(null)
  const numberInView = useInView(numberRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (containerInView) void containerControls.start({ opacity: 1, y: 0 })
    if (numberInView) {
      animate(0, number, {
        duration: 1,
        onUpdate: (v) => {
          const node = numberRef.current
          if (node !== null) node.textContent = `+${v.toFixed(0)}`
        },
      })
    }
  })

  return (
    <Container
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      animate={containerControls}
      ref={containerRef}
    >
      <Icon size={iconSize} fill={theme.colors.secondary} />
      <Number ref={numberRef}>+{number}</Number>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xs};
  align-items: center;
`

const Number = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 450;
  line-height: 56px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: 340;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
`

const Description = styled.p`
  margin-top: ${({ theme }) => theme.spaces.s};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  max-width: 220px;
`
