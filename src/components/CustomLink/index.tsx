import React from 'react'
import * as S from './styles'

interface CustomLinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  position: number
  onClick?: () => void
  changeCurrentIndex: (index: number) => void
  disable?: boolean
}

function CustomLink({
  children,
  to,
  onClick,
  isActive,
  changeCurrentIndex,
  position,
  disable,
}: CustomLinkProps) {
  const handleOnSetActive = () => {
    if (changeCurrentIndex) {
      changeCurrentIndex(position)
    }
  }
  return (
    <S.CustomLink
      onClick={onClick}
      to={to}
      smooth={true}
      duration={500}
      offset={-120}
      onSetActive={handleOnSetActive}
      spy={disable}
    >
      {children}
      {isActive && <S.Underline layoutId="underline" />}
    </S.CustomLink>
  )
}

export { CustomLink }
