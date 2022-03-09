import React from 'react'
import * as S from './styles'

interface CustomLinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick?: () => void
}

function CustomLink({ children, to, onClick }: CustomLinkProps) {
  return (
    <S.CustomLink
      onClick={onClick}
      to={to}
      smooth={true}
      duration={500}
      offset={-120}
      spy={true}
    >
      {children}
    </S.CustomLink>
  )
}

export { CustomLink }
