import { styled } from '@mui/material/styles'

interface SidebarProps {
  open: boolean
}
export const Sidebar = styled('div')<SidebarProps>(({ theme, open }) => ({
  height: '100vh',
  width: 250,
  position: 'fixed',
  top: 0,
  left: open ? '0' : '-100%',
  padding: '1.25rem',
  transition: '350ms',
  zIndex: 10,
  backgroundColor: theme.palette.neutral,
}))

export const SidebarWrapper = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: '4rem',
  gap: '0.625rem', //10px
}))
