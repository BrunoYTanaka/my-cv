import { ReactElement } from 'react'

import Grid from '@mui/material/Grid'

import { Avatar, AvatarContainer, Container, GreetingText } from './styles'
import { Typography } from '../../Typography'
import { List, ListItem, ListItemButton, MotionBox } from '@/components'
import { icons } from '@/constants/icons'
interface ContactData {
  id: number
  icon: string
  text: string
}

interface socialMedia {
  id: number
  icon: string
  link: string
}

interface ContactProps {
  greetings: string
  name: string
  avatarUrl: string
  job: string
  contacts: ContactData[]
  socialMedia: socialMedia[]
}

function Contact({
  greetings,
  name,
  avatarUrl,
  job,
  contacts,
  socialMedia,
}: ContactProps): ReactElement {
  return (
    <Container container justifyContent="center" alignItems="center" id="home">
      <Grid item sm={6}>
        <MotionBox delay={0.1}>
          <GreetingText variant="body1">{greetings}</GreetingText>
        </MotionBox>
        <MotionBox delay={0.2}>
          <Typography mt={1.25} mb={1.25} variant="h4">
            {name}
          </Typography>
        </MotionBox>
        <MotionBox delay={0.3}>
          <Typography mt={1} mb={3.75} variant="h5">
            {job}
          </Typography>
        </MotionBox>
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
            />
          </AvatarContainer>
        </MotionBox>
      </Grid>
    </Container>
  )
}

export { Contact }
