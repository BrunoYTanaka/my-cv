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
import { Box, SwipeableDrawer } from '@mui/material'
import { MenuHeader } from './components/MenuHeader'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [visibleSection, setVisibleSection] = React.useState('home')
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const { toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const onClick = (to: string) => {
    setIsDrawerOpen(false)
    const section = document.getElementById(to)
    setVisibleSection(to)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <>
      <S.Header>
        <S.HeaderWrapper>
          <S.LinkWrapper>
            {isMobileScreen ? (
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              LINKS.map((item) => (
                <CustomLink
                  to={item.to}
                  key={item.id}
                  isActive={visibleSection === item.to}
                  onClick={onClick}
                >
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
      {isMobileScreen && (
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onOpen={() => setIsDrawerOpen(true)}
        >
          <Box sx={{ width: 360 }} role="presentation">
            <MenuHeader
              onClose={() => setIsDrawerOpen(false)}
              onClickLink={onClick}
            />
          </Box>
        </SwipeableDrawer>
      )}
    </>
  )
}

export { Header }
