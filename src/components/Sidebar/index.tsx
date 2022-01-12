import React, { ReactElement } from 'react'
import * as S from './styles'
import { useMenuContext } from '@/hooks/useMenu'
import { CustomLink } from '..'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { links } from '@/config'

function Sidebar(): ReactElement {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const { isMenuOpen, handleOpenMenu } = useMenuContext()

  const handleClick = (index: number) => {
    setCurrentIndex(index)
    handleOpenMenu()
  }

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        handleOpenMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, handleOpenMenu])

  return (
    <S.Sidebar open={isMenuOpen} ref={sidebarRef}>
      <Box textAlign="end">
        <IconButton onClick={handleOpenMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
      <S.SidebarWrapper>
        {links.map((item, index) => (
          <CustomLink
            to={item.to}
            key={item.id}
            isActive={currentIndex === index}
            onClick={() => handleClick(index)}
          >
            {item.text}
          </CustomLink>
        ))}
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { Sidebar }
