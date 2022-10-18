import React from 'react'
import * as S from './styles'

interface CustomLinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick: (to: string) => void
}

function CustomLink({ children, to, isActive, onClick }: CustomLinkProps) {
  return (
    <S.CustomLink onClick={() => onClick(to)}>
      {children}
      {isActive && <S.Underline layoutId="underline" />}
    </S.CustomLink>
  )
}

export { CustomLink }
