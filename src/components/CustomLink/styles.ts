import { styled } from '@mui/material/styles'
import { Link } from 'react-scroll'

export const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontSize: 18,
  lineHeight: '30px',
  fontWeight: 700,
  cursor: 'pointer',
  paddingBottom: 8,
  transition: 'all ease-in-out .2s',
  textTransform: 'capitalize',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '&.active': {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}))
