import { styled } from '@mui/material/styles'

interface AnchorProps {
  isActive: boolean
}
interface SidebarProps {
  isOpen: boolean
}
export const Sidebar = styled('div')<SidebarProps>(({ theme, isOpen }) => ({
  height: '100vh',
  width: 250,
  position: 'fixed',
  top: 0,
  left: isOpen ? '0' : '-100%',
  padding: '1.25rem',
  transition: '350ms',
  zIndex: 10,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[200] : '#212121',
}))

export const SidebarWrapper = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: '4rem',
  gap: 10,
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
}))
