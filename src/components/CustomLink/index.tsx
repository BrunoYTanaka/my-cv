import React from 'react'
import NextLink from 'next/link'
import * as S from './styles'

interface AnchorProps {
  children: React.ReactNode
  isActive: boolean
  href: string
  onClick?: () => void
}

function CustomLink({ children, isActive, href, onClick }: AnchorProps) {
  return (
    <NextLink href={href}>
      <S.Anchor isActive={isActive} onClick={onClick}>
        {children}
      </S.Anchor>
    </NextLink>
  )
}

export { CustomLink }
