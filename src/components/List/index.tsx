import * as S from './styles'

interface ListProps {
  children: React.ReactNode
  direction?: 'row' | 'column'
  gap?: number
}

function List({ children, direction = 'column', gap = 10 }: ListProps) {
  return (
    <S.List direction={direction} gap={gap}>
      {children}
    </S.List>
  )
}

export { List }
