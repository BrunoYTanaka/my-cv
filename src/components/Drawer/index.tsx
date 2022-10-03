import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useDrawer } from '@/hooks/useDrawer'
import { RightSidebar, LeftSidebar } from './components'

interface DrawerProps {
  toggleThemeMode?: (theme: Mode) => void
  direction?: 'right' | 'left'
}

function Drawer({ toggleThemeMode, direction = 'right' }: DrawerProps) {
  const {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  } = useDrawer()

  const handleChangeTheme = (theme: Mode) => {
    toggleThemeMode && toggleThemeMode(theme)
  }

  const isRight = direction === 'right'

  return (
    <SwipeableDrawer
      anchor={direction}
      open={isRight ? isRightDrawerOpen : isLeftDrawerOpen}
      onClose={() =>
        isRight ? toggleRightDrawer(false) : toggleLeftDrawer(false)
      }
      onOpen={() =>
        isRight ? toggleRightDrawer(true) : toggleLeftDrawer(true)
      }
    >
      <Box sx={{ width: 360 }} role="presentation">
        {isRight ? (
          <RightSidebar handleChangeTheme={handleChangeTheme} />
        ) : (
          <LeftSidebar />
        )}
      </Box>
    </SwipeableDrawer>
  )
}

export { Drawer }
