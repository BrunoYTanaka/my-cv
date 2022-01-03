import * as S from './styles'

import NextLink from 'next/link'

import { SvgIconComponent } from '@mui/icons-material'

interface ListItemProps {
  Icon: SvgIconComponent
  text: string
}

function ListItem({ Icon, text }: ListItemProps) {
  return (
    <NextLink href="#">
      <S.ListItem>
        <S.ListItemIcon>
          <Icon fontSize="small" />
        </S.ListItemIcon>
        <S.ListItemText variant="button">{text}</S.ListItemText>
      </S.ListItem>
    </NextLink>
  )
}

export { ListItem }
