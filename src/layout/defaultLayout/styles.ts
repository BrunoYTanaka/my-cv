import { styled } from '@mui/material/styles'

export const Container = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: 1140,
  padding: '0 1rem',
  margin: '0 auto 5rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: 1000,
    marginBottom: 0,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'none',
  },
}))
