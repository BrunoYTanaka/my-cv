import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styles'
import { CustomLink } from '@/components/CustomLink'
import { LINKS } from '@/constants/links'
import { useTranslation } from 'next-i18next'

interface MenuHeaderProps {
  onClose: () => void
  onClickLink: (to: string) => void
  visibleSection: string
}

function MenuHeader({ onClose, onClickLink, visibleSection }: MenuHeaderProps) {
  const { t } = useTranslation('header')

  return (
    <S.MenuHeader>
      <Box textAlign="end">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <S.MenuHeaderWrapper>
        {LINKS.map((item) => (
          <CustomLink
            to={item.to}
            key={item.id}
            isActive={visibleSection === item.to}
            onClick={onClickLink}
          >
            {t(item.text)}
          </CustomLink>
        ))}
      </S.MenuHeaderWrapper>
    </S.MenuHeader>
  )
}

export { MenuHeader }
