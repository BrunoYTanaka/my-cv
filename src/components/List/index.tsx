import * as S from './styles'

interface ListProps {
  children: React.ReactNode
}

function List({ children }: ListProps) {
  return <S.List>{children}</S.List>
}

export { List }
