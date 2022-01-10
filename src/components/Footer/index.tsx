import { ReactElement } from 'react'
import { Typography } from '@mui/material'
import * as S from './styles'
import { List, ListItemButton } from '@/components'
import { layout } from '@/config'
import { icons } from '@/constants/icons'
import { MotionBox } from '../MotionBox'

function Footer(): ReactElement {
  const year = new Date().getFullYear()

  const { socialMedia } = layout.contact

  return (
    <MotionBox>
      <S.Footer>
        <Typography>@ {year} All right reserved</Typography>
        <List direction="row" gap={20} mt={0} mb={0}>
          {socialMedia.map((media) => {
            const Icon = icons[media.icon]
            console.log(Icon)
            return (
              <ListItemButton
                key={media.id}
                href={media.link}
                icon={<Icon fontSize="medium" />}
              />
            )
          })}
        </List>
      </S.Footer>
    </MotionBox>
  )
}

export { Footer }
