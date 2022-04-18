import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styles'
import { CustomLink } from '@/components/CustomLink'
import { LINKS } from '@/constants/links'
import { useDrawer } from '@/hooks/useDrawer'
import { useTranslation } from 'next-i18next'
import { AnimateSharedLayout } from 'framer-motion'

function LeftSidebar() {
  const { t } = useTranslation('header')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { toggleLeftDrawer } = useDrawer()

  const handleClick = (index: number) => {
    setCurrentIndex(index)
    toggleLeftDrawer(false)
  }

  const changeCurrentIndex = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <S.Sidebar>
      <Box textAlign="end">
        <IconButton onClick={() => toggleLeftDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <S.SidebarWrapper>
        <AnimateSharedLayout>
          {LINKS.map((item, index) => (
            <CustomLink
              changeCurrentIndex={changeCurrentIndex}
              position={index}
              to={item.to}
              key={item.id}
              isActive={currentIndex === index}
              onClick={() => handleClick(index)}
              disable={true}
            >
              {t(item.text)}
            </CustomLink>
          ))}
        </AnimateSharedLayout>
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { LeftSidebar }
