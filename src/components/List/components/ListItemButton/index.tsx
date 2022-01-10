import { ReactElement } from 'react'
import NextLink from 'next/link'
import * as S from './styles'

interface ListItemButtonProps {
  icon: React.ReactNode
  href: string
}

function ListItemButton({ icon, href }: ListItemButtonProps): ReactElement {
  return (
    <S.ListItemButton>
      <NextLink href={href}>
        <a target="_blank">
          <S.ListItemIcon>{icon}</S.ListItemIcon>
        </a>
      </NextLink>
    </S.ListItemButton>
  )
}

export { ListItemButton }
