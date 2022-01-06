import React, { ReactElement } from 'react'

import Grid from '@mui/material/Grid'

import { Avatar, AvatarContainer, Container, GreetingText } from './styles'
import { Typography } from '../../Typography'
import { List, ListItem, ListItemButton } from '@/components'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import { SvgIconComponent } from '@mui/icons-material'

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
  const icons: { [name: string]: SvgIconComponent } = {
    github: GitHubIcon,
    email: EmailIcon,
    phone: PhoneIcon,
    location: LocationOnIcon,
    twitter: TwitterIcon,
  }
  return (
    <Container container justifyContent="center" alignItems="center">
      <Grid item sm={6}>
        <GreetingText variant="body1">{greetings}</GreetingText>
        <Typography margin="10px 0" variant="h4">
          {name}
        </Typography>
        <Typography margin="10px 0 30px" variant="h5">
          {job}
        </Typography>
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
      </Grid>
      <Grid item sm={6}>
        <AvatarContainer>
          <Avatar alt={name} src={avatarUrl} layout="fill" objectFit="cover" />
        </AvatarContainer>
      </Grid>
    </Container>
  )
}

export { Contact }
