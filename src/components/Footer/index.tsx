import { ReactElement } from 'react'
import { List, ListItemButton } from '@/components/List'
import { layout } from '@/config'
import { icons } from '@/constants/icons'
import { defaultTransition, fadeInUpVariants } from '@/constants/framerMotion'
import * as S from './styles'

function Footer(): ReactElement {
  const { socialMedia } = layout.contact

  return (
    <S.Footer
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
      transition={defaultTransition}
    >
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
