import { styled } from '@mui/material/styles'

interface AnchorProps {
  isActive: boolean
}

export const Header = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  height: 80,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[200] : '#212121',
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
    isActive ? theme.palette.common.white : 'transparent'
  }`,
  '&:hover': {
    color: '#0bceaf',
  },
}))
