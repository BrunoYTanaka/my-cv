import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Divider from '@mui/material/Divider'
import { useMenuContext } from '@/hooks/useMenu'
import * as S from './styles'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Typography } from '@/components/Typography'
import { useTranslation } from 'next-i18next'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeMode } from '@/hooks/useThemeMode'

function LeftDrawer() {
  const { t } = useTranslation('header')
  const { isLeftDrawerOpen, toggleLeftDrawer } = useMenuContext()
  const { theme, toggleThemeMode } = useThemeMode()

  const handleChangeTheme = () => {
    toggleThemeMode()
  }

  const list = () => (
    <Box sx={{ width: 360 }} role="presentation">
      <Box
        textAlign="end"
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={1} lineHeight={1.5} fontWeight={700}>
          Settings
        </Typography>
        <IconButton onClick={() => toggleLeftDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box pr={1} pl={1}>
        <Typography
          fontSize={0.6875}
          lineHeight={1.5}
          fontWeight={700}
          letterSpacing={0.08}
          margin="20px 0px 10px"
        >
          {t('mode')}
        </Typography>
        <S.ButtonsWrapper>
          <S.Button
            onClick={handleChangeTheme}
            isSelected={theme.palette?.mode === 'light'}
          >
            <LightModeIcon style={{ marginRight: 8 }} />
            {t('light')}
          </S.Button>
          <S.Button
            onClick={handleChangeTheme}
            isSelected={theme.palette?.mode === 'dark'}
          >
            <DarkModeIcon style={{ marginRight: 8 }} />
            {t('dark')}
          </S.Button>
        </S.ButtonsWrapper>
      </Box>
    </Box>
  )

  return (
    <SwipeableDrawer
      anchor="right"
      open={isLeftDrawerOpen}
      onClose={() => toggleLeftDrawer(false)}
      onOpen={() => toggleLeftDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  )
}

export { LeftDrawer }
