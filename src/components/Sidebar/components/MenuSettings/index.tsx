import React from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { Typography } from '@/components/Typography'
import { useTranslation } from 'next-i18next'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from '@mui/material/styles'
import { useIntl } from '@/hooks/useIntl'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useSettingsSidebar } from '@/hooks/useSettingsSidebar'
import * as S from './styles'

interface MenuSettingsProps {
  handleChangeTheme: (theme: Mode) => void
}

const MenuSettings = ({ handleChangeTheme }: MenuSettingsProps) => {
  const { t, i18n } = useTranslation('glossary')
  const { handleSettingsSidebar } = useSettingsSidebar()
  const { switchLang } = useIntl()
  const theme = useTheme()

  return (
    <>
      <Box
        textAlign="end"
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          fontSize={1}
          lineHeight={1.5}
          fontWeight={700}
          useAnimation={false}
        >
          {t('settings')}
        </Typography>
        <IconButton onClick={() => handleSettingsSidebar(false)}>
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
          useAnimation={false}
        >
          {t('mode')}
        </Typography>
        <S.ButtonsWrapper>
          <S.Button
            onClick={() => handleChangeTheme('light')}
            isSelected={theme.palette?.mode === 'light'}
          >
            <LightModeIcon />
            {t('light')}
          </S.Button>
          <S.Button
            onClick={() => handleChangeTheme('dark')}
            isSelected={theme.palette?.mode === 'dark'}
          >
            <DarkModeIcon />
            {t('dark')}
          </S.Button>
        </S.ButtonsWrapper>
      </Box>
      <Box pr={1} pl={1}>
        <Typography
          fontSize={0.6875}
          lineHeight={1.5}
          fontWeight={700}
          letterSpacing={0.08}
          margin="20px 0px 10px"
          useAnimation={false}
        >
          {t('mode')}
        </Typography>
        <S.LanguageButton
          onClick={() => switchLang('pt')}
          isSelected={i18n.language === 'pt'}
        >
          {t('portuguese')}
        </S.LanguageButton>
        <S.LanguageButton
          onClick={() => switchLang('en')}
          isSelected={i18n.language === 'en'}
        >
          {t('english')}
        </S.LanguageButton>
      </Box>
    </>
  )
}

export { MenuSettings }
