import { styled } from '@mui/material/styles'

export const Sidebar = styled('div')(() => ({
  padding: '1.25rem',
}))

export const SidebarWrapper = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: '4rem',
  gap: '0.625rem', //10px
}))
