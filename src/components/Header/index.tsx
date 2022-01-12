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

function Header(): ReactElement {
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
            <IconButton>
              <MenuIcon onClick={handleOpenMenu} />
            </IconButton>
          ) : (
            links.map((item, index) => (
              <CustomLink
                href={item.link}
                key={item.id}
                isActive={currentIndex === index}
                onClick={() => handleClick(index)}
              >
                {item.text}
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
