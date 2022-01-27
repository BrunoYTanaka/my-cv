import * as S from './styles'
interface ListProps {
  children: React.ReactNode
  direction?: 'row' | 'column'
  gap?: number
  mt?: number
  mb?: number
}

function List({ children, ...rest }: ListProps) {
  return <S.List {...rest}>{children}</S.List>
}

export { List }
