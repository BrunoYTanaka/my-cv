import { styled } from '@mui/material/styles'

export const Container = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: 1140,
  padding: '0 15px',
  margin: '0 auto',
  [theme.breakpoints.down('xl')]: {
    maxWidth: 900,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'none',
  },
}))
