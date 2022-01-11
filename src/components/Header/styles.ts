import { styled } from '@mui/material/styles'

export const Header = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  height: 80,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[300] : '#212121',
}))

export const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1.25rem 0',
  gap: 50,
  width: '100%',
  maxWidth: '90%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'none',
    padding: '1.25rem',
    justifyContent: 'flex-start',
  },
}))
