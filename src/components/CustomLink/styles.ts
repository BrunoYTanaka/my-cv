import { styled } from '@mui/material/styles'

interface AnchorProps {
  isActive: boolean
}

export const Anchor = styled('a')<AnchorProps>(({ theme, isActive }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontSize: 18,
  lineHeight: '30px',
  fontWeight: 700,
  cursor: 'pointer',
  paddingBottom: 8,
  transition: 'all ease-in-out .2s',
  textTransform: 'capitalize',
  borderBottom: `1px solid ${
    isActive ? theme.palette.text.primary : 'transparent'
  }`,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))
