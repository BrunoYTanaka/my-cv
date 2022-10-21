import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  padding: '180px 0 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    maxWidth: 'none',
    paddingBottom: '3.75rem', //60px
    textAlign: 'center',
  },
}))

export const LeftWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}))

export const RightWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: '3.125rem', //50px
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    paddingLeft: 0,
    marginBottom: '4rem',
  },
}))
