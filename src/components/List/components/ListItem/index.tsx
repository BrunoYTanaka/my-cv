import * as S from './styles'

interface ListItemProps {
  icon: React.ReactNode
  text?: string
}

function ListItem({ icon, text }: ListItemProps) {
  return (
    <S.ListItem>
      <S.ListItemIcon>{icon}</S.ListItemIcon>
      {text && <S.ListItemText>{text}</S.ListItemText>}
    </S.ListItem>
  )
}

export { ListItem }
