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
import { Drawer } from '../Drawer'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [visibleSection, setVisibleSection] = React.useState('home')
  const { toggleLeftDrawer, toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const onClick = (to: string) => {
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
              <IconButton onClick={() => toggleLeftDrawer(true)}>
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
      {isMobileScreen && <Drawer direction="left" />}
    </>
  )
}

export { Header }
