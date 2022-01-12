import { styled } from '@mui/material/styles'

export const Footer = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: 80,
  backgroundColor: theme.palette.neutral,
}))
