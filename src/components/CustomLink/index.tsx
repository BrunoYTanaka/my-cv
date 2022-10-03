import React from 'react'
import * as S from './styles'
import Link from 'next/link'

interface CustomLinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick?: () => void
}

function CustomLink({ children, to, isActive, onClick }: CustomLinkProps) {
  return (
    <Link passHref href={to}>
      <S.CustomLink onClick={onClick}>
        {children}
        {isActive && <S.Underline layoutId="underline" />}
      </S.CustomLink>
    </Link>
  )
}

export { CustomLink }
