import React from 'react'
import * as S from './styles'
import Link from 'next/link'

interface CustomLinkProps {
  children: React.ReactNode
  to: string
  isActive: boolean
}

function CustomLink({ children, to, isActive }: CustomLinkProps) {
  return (
    <Link href={to} passHref>
      <S.CustomLink>
        {children}
        {isActive && <S.Underline layoutId="underline" />}
      </S.CustomLink>
    </Link>
  )
}

export { CustomLink }
