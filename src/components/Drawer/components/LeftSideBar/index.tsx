import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styles'
import { CustomLink } from '@/components/CustomLink'
import { LINKS } from '@/constants/links'
import { useDrawer } from '@/hooks/useDrawer'
import { useTranslation } from 'next-i18next'

function LeftSidebar() {
  const { t } = useTranslation('header')
  const { toggleLeftDrawer } = useDrawer()

  const onClick = (to: string) => {
    toggleLeftDrawer(false)

    const section = document.getElementById(to)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <S.Sidebar>
      <Box textAlign="end">
        <IconButton onClick={() => toggleLeftDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <S.SidebarWrapper>
        {LINKS.map((item) => (
          <CustomLink
            to={item.to}
            key={item.id}
            isActive={false}
            onClick={onClick}
          >
            {t(item.text)}
          </CustomLink>
        ))}
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { LeftSidebar }
