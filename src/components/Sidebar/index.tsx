import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useSettingsSidebar } from '@/hooks/useSettingsSidebar'
import { MenuSettings } from './components/MenuSettings'

interface SidebarProps {
  toggleThemeMode?: (theme: Mode) => void
}

function Sidebar({ toggleThemeMode }: SidebarProps) {
  const { isSettingsSidebarOpen, handleSettingsSidebar } = useSettingsSidebar()

  const handleChangeTheme = (theme: Mode) => {
    toggleThemeMode && toggleThemeMode(theme)
  }

  return (
    <SwipeableDrawer
      anchor="right"
      open={isSettingsSidebarOpen}
      onClose={() => handleSettingsSidebar(false)}
      onOpen={() => handleSettingsSidebar(true)}
    >
      <Box sx={{ width: 360 }} role="presentation">
        <MenuSettings handleChangeTheme={handleChangeTheme} />
      </Box>
    </SwipeableDrawer>
  )
}

export { Sidebar }
