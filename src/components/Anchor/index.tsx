import React from 'react'
import * as S from './styles'

interface AnchorProps {
  children: React.ReactNode
  isActive: boolean
  onClick?: () => void
}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, isActive, onClick }, ref) => {
    return (
      <S.Anchor ref={ref} isActive={isActive} onClick={onClick}>
        {children}
      </S.Anchor>
    )
  },
)

Anchor.displayName = 'Anchor'

export { Anchor }
