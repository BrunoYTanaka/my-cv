import { styled } from '@mui/material/styles'

export const Header = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  height: 80,
  backgroundColor: theme.palette.neutral,
}))

export const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.25rem 0',
  width: '100%',
  maxWidth: '80%',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'none',
    padding: '1.25rem',
  },
}))

export const LinkWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 50,
}))
