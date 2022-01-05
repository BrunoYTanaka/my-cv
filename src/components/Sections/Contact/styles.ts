import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface TextData {
  marginTop: number
  marginBottom: number
}

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  padding: '180px 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    maxWidth: 'none',
    padding: '60px 0',
    textAlign: 'center',
  },
}))

export const GreetingText = styled(Typography)(() => ({
  display: 'inline-block',
  backgroundColor: '#0bceaf',
  padding: '10px 30px',
  fontWeight: 'bold',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 0,
  marginBottom: 30,
}))

export const Text = styled(Typography)(
  ({ marginTop, marginBottom }: TextData) => ({
    marginTop: marginTop,
    marginBottom: marginBottom,
    fontWeight: 'bold',
  }),
)

export const AvatarContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  border: '20px solid rgba(0, 0, 0, 0.9)',
  borderRadius: '50%',
  margin: '0 auto',
  width: 360,
  height: 360,

  [theme.breakpoints.down('sm')]: {
    margin: '30px 0',
    width: 240,
    height: 240,
  },
}))

export const Avatar = styled(Image)({
  borderRadius: '50%',
})
