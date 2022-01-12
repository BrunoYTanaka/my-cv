import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import MuiTypography from '@mui/material/Typography'
import Image from 'next/image'

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

export const GreetingText = styled(MuiTypography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.primary.main,
  padding: '10px 30px',
  fontWeight: 'bold',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 0,
  marginBottom: 30,
}))

export const AvatarContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  border: `20px solid ${theme.palette.neutral}`,
  borderRadius: '50%',
  margin: '0 auto',
  width: 360,
  height: 360,

  [theme.breakpoints.down('md')]: {
    margin: '30px 0',
    width: 240,
    height: 240,
  },
}))

export const Avatar = styled(Image)({
  borderRadius: '50%',
})
