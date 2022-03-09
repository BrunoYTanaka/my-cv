import { styled } from '@mui/material/styles'
import { Link } from 'react-scroll'

export const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontSize: '1.125rem', //18px
  lineHeight: '1.875rem', //30px
  fontWeight: 700,
  cursor: 'pointer',
  paddingBottom: '0.5rem', //8px
  transition: 'all ease-in-out .2s',
  textTransform: 'capitalize',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '&.active': {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}))
