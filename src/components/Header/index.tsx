import React, { ReactElement } from 'react'
import * as S from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { useDrawer } from '@/hooks/useDrawer'
import { CustomLink } from '@/components/CustomLink'
import { LINKS } from '@/constants/links'
import { useTranslation } from 'next-i18next'
import SettingsIcon from '@mui/icons-material/Settings'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const { toggleLeftDrawer, toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LinkWrapper>
          {isMobileScreen ? (
            <IconButton onClick={() => toggleLeftDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            LINKS.map((item) => (
              <CustomLink to={item.to} key={item.id} isActive={false}>
                {t(item.text)}
              </CustomLink>
            ))
          )}
        </S.LinkWrapper>
        <IconButton onClick={() => toggleRightDrawer(true)}>
          <SettingsIcon />
        </IconButton>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export { Header }
