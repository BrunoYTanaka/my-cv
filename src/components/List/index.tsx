import * as S from './styles'
import { ListItem } from './components/ListItem'
import { ListItemButton } from './components/ListItemButton'
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

export { List, ListItem, ListItemButton }
