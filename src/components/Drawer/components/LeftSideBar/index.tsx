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
import { useRouter } from 'next/router'

function LeftSidebar() {
  const { t } = useTranslation('header')
  const { toggleLeftDrawer } = useDrawer()

  const router = useRouter()
  return (
    <S.Sidebar>
      <Box textAlign="end">
        <IconButton onClick={() => toggleLeftDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <S.SidebarWrapper>
        <AnimateSharedLayout>
          {LINKS.map((link) => (
            <CustomLink
              to={link.to}
              key={link.id}
              isActive={router.pathname === link.to}
            >
              {t(link.text)}
            </CustomLink>
          ))}
        </AnimateSharedLayout>
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { LeftSidebar }
