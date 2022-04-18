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
import { AnimateSharedLayout } from 'framer-motion'
import { Events } from 'react-scroll'

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { toggleLeftDrawer, toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [disable, setDisable] = React.useState(true)
  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  const changeCurrentIndex = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      setDisable(false)
    })
    Events.scrollEvent.register('end', () => {
      setDisable(true)
    })

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [setDisable])

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
              {LINKS.map((item, index) => (
                <CustomLink
                  to={item.to}
                  key={item.id}
                  position={index}
                  isActive={currentIndex === index}
                  onClick={() => handleClick(index)}
                  changeCurrentIndex={changeCurrentIndex}
                  disable={disable}
                >
                  {t(item.text)}
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
