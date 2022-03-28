import React, { ReactElement } from 'react'
import * as S from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { useMenuContext } from '@/hooks/useMenu'
import { CustomLink } from '..'
import { links } from '@/config'
import { useTranslation } from 'next-i18next'
import SettingsIcon from '@mui/icons-material/Settings'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { toggleLeftDrawer, toggleRightDrawer } = useMenuContext()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LinkWrapper>
          {isMobileScreen ? (
            <IconButton onClick={() => toggleLeftDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            links.map((item, index) => (
              <CustomLink
                to={item.to}
                key={item.id}
                isActive={currentIndex === index}
                onClick={() => handleClick(index)}
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
  )
}

export { Header }
