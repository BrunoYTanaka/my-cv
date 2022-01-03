import Grid from '@mui/material/Grid'
import { Container, GreetingText, Text } from './styles'
import { List, ListItem } from '@/components'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Home() {
  return (
    <Container container justifyContent="center" alignItems="center">
      <Grid item sm={6}>
        <GreetingText variant="body1">Hello I'm</GreetingText>
        <Text marginBottom={10} marginTop={10} variant="h3">
          Bruno
        </Text>
        <Text marginBottom={30} marginTop={0} variant="h4">
          Frontend Programmer
        </Text>
        <List>
          <ListItem Icon={EmailIcon} text="brunoyoichi@hotmail.com" />
          <ListItem Icon={PhoneIcon} text="+55 (67) 9 8175-2148" />
          <ListItem Icon={LocationOnIcon} text="MS, Dourados, Brazil" />
        </List>
      </Grid>
      <Grid item sm={6}></Grid>
    </Container>
  )
}

export { Home }
