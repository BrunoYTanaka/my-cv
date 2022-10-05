import { ReactElement } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'next-i18next'
import { Avatar, AvatarContainer, Container, GreetingText } from './styles'
import { Typography } from '../../Typography'
import { List, ListItem, ListItemButton } from '@/components/List'
import { MotionBox } from '@/components/MotionBox'
import { icons } from '@/constants/icons'

function Contact({
  name,
  avatarUrl,
  contacts,
  socialMedia,
}: ContactProps): ReactElement {
  const { t } = useTranslation('contact')

  const [text] = useTypewriter({
    words: [t('contact-iam'), t('contact-job'), t('contact-love')],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <Container container justifyContent="center" alignItems="center" id="home">
      <Grid item sm={6}>
        <MotionBox delay={0.1}>
          <GreetingText variant="body1"> {t('contact-greeting')}</GreetingText>
        </MotionBox>
        <Typography delay={0.2} mt={1.25} mb={1.25} variant="h4">
          {text}
          <Cursor />
        </Typography>
        <MotionBox delay={0.4}>
          <List>
            {contacts?.map((contact) => {
              const Icon = icons[contact.icon]
              return (
                <ListItem
                  key={contact.id}
                  icon={<Icon fontSize="small" />}
                  text={contact.text}
                />
              )
            })}
          </List>
        </MotionBox>
        <MotionBox delay={0.7}>
          <List direction="row" gap={30}>
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
        </MotionBox>
      </Grid>
      <Grid item sm={6}>
        <MotionBox delay={0.6}>
          <AvatarContainer>
            <Avatar
              alt={name}
              src={avatarUrl}
              layout="fill"
              objectFit="cover"
              priority
            />
          </AvatarContainer>
        </MotionBox>
      </Grid>
    </Container>
  )
}

export { Contact }
