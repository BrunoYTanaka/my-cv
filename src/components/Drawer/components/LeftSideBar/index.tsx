import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styles'
import { CustomLink } from '@/components/CustomLink'
import { links } from '@/config'
import { useMenuContext } from '@/hooks/useMenu'
import { useTranslation } from 'next-i18next'

function LeftSidebar() {
  const { t } = useTranslation('header')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { toggleLeftDrawer } = useMenuContext()

  const handleClick = (index: number) => {
    setCurrentIndex(index)
    toggleLeftDrawer(false)
  }

  return (
    <S.Sidebar>
      <Box textAlign="end">
        <IconButton onClick={() => toggleLeftDrawer(false)}>
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
            {t(item.text)}
          </CustomLink>
        ))}
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { LeftSidebar }
