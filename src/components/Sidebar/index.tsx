import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useDrawer } from '@/hooks/useDrawer'
import { MenuSettings } from './components/MenuSettings'

interface SidebarProps {
  toggleThemeMode?: (theme: Mode) => void
}

function Sidebar({ toggleThemeMode }: SidebarProps) {
  const { isRightDrawerOpen, toggleRightDrawer } = useDrawer()

  const handleChangeTheme = (theme: Mode) => {
    toggleThemeMode && toggleThemeMode(theme)
  }

  return (
    <SwipeableDrawer
      anchor="right"
      open={isRightDrawerOpen}
      onClose={() => toggleRightDrawer(false)}
      onOpen={() => toggleRightDrawer(true)}
    >
      <Box sx={{ width: 360 }} role="presentation">
        <MenuSettings handleChangeTheme={handleChangeTheme} />
      </Box>
    </SwipeableDrawer>
  )
}

export { Sidebar }
