import React from 'react'
import * as S from './styles'

interface AnchorProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick?: () => void
}

function CustomLink({ children, to, onClick }: AnchorProps) {
  return (
    <S.Anchor
      onClick={onClick}
      to={to}
      smooth={true}
      duration={500}
      offset={-120}
      spy={true}
    >
      {children}
    </S.Anchor>
  )
}

export { CustomLink }
