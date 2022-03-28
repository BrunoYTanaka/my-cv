import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useMenuContext } from '@/hooks/useMenu'
import { RightSidebar, LeftSidebar } from './components'

interface DrawerProps {
  toggleThemeMode?: () => void
  direction?: 'right' | 'left'
}

function Drawer({ toggleThemeMode, direction = 'right' }: DrawerProps) {
  const {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  } = useMenuContext()

  const handleChangeTheme = () => {
    toggleThemeMode && toggleThemeMode()
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
