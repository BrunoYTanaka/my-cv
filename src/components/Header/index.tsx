import React, { ReactElement } from 'react'
import * as S from './styles'
import NextLink from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { useMenuContext } from '@/hooks/useMenu'

function Header(): ReactElement {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { handleOpenMenu } = useMenuContext()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <S.Header>
      <S.HeaderWrapper>
        {isMobileScreen ? (
          <IconButton>
            <MenuIcon onClick={handleOpenMenu} />
          </IconButton>
        ) : (
          ['home', 'about', 'skills', 'experiences'].map((item, index) => (
            <NextLink href={`/#${item}`} key={item}>
              <S.Anchor
                isActive={currentIndex === index}
                onClick={() => handleClick(index)}
              >
                {item}
              </S.Anchor>
            </NextLink>
          ))
        )}
      </S.HeaderWrapper>
    </S.Header>
  )
}

export { Header }
