import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
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
import { AnimateSharedLayout } from 'framer-motion'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const { toggleLeftDrawer, toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LinkWrapper>
          {isMobileScreen ? (
            <IconButton onClick={() => toggleLeftDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <AnimateSharedLayout>
              {LINKS.map((link) => (
                <CustomLink
                  to={link.to}
                  key={link.id}
                  isActive={router.pathname === link.to}
                >
                  {t(link.text)}
                </CustomLink>
              ))}
            </AnimateSharedLayout>
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
