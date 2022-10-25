import { ReactElement } from 'react'
import { List, ListItemButton } from '@/components/List'
import { layout } from '@/config'
import { icons } from '@/constants/icons'
import * as S from './styles'
import { Typography } from '../Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useTranslation } from 'next-i18next'

function Footer(): ReactElement {
  const { t } = useTranslation('footer')
  const { socialMedia } = layout.contact

  return (
    <S.Footer>
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
      <S.FooterMessage>
        <Typography useAnimation={false} variant="subtitle1">
          {t('thank-you-for-coming')}
        </Typography>
        <FavoriteIcon color="error" />
      </S.FooterMessage>
    </S.Footer>
  )
}

export { Footer }
