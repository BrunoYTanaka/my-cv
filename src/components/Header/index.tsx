import React, { ReactElement } from 'react'
import * as S from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { useMenuContext } from '@/hooks/useMenu'
import { CustomLink } from '..'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { links } from '@/config'
import { useThemeMode } from '@/hooks/useThemeMode'
import { useTranslation } from 'next-i18next'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { toggleThemeMode } = useThemeMode()
  const { handleOpenMenu } = useMenuContext()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleChangeTheme = () => {
    toggleThemeMode()
  }

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LinkWrapper>
          {isMobileScreen ? (
            <IconButton onClick={handleOpenMenu}>
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

        <IconButton onClick={handleChangeTheme}>
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export { Header }
