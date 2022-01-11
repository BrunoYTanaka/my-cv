import { styled } from '@mui/material/styles'

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
