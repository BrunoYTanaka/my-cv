import { useEffect, useState } from 'react'
import * as S from './styles'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'

function BackToTop() {
  const [showScroll, setShowScroll] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 250) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 250) {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScroll])

  return (
    <S.ButtonWrapper hidden={!showScroll}>
      <IconButton type="button" size="large" onClick={scrollTop}>
        <KeyboardArrowUpIcon fontSize="large" />
      </IconButton>
    </S.ButtonWrapper>
  )
}

export { BackToTop }
