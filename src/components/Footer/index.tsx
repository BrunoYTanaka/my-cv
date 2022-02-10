import { ReactElement } from 'react'
import { Typography } from '@/components/Typography'
import { List, ListItemButton } from '@/components'
import { layout } from '@/config'
import { icons } from '@/constants/icons'
import { defaultTransition, fadeInUpVariants } from '@/constants/framerMotion'
import * as S from './styles'

function Footer(): ReactElement {
  const year = new Date().getFullYear()

  const { socialMedia } = layout.contact

  return (
    <S.Footer
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
      transition={defaultTransition}
    >
      <Typography>@ {year} All right reserved</Typography>
      <List direction="row" gap={20} mt={0} mb={0}>
        {socialMedia.map((media) => {
          const Icon = icons[media.icon]
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
  )
}

export { Footer }
