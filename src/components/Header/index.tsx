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
import { Box, SwipeableDrawer } from '@mui/material'
import { MenuHeader } from './components/MenuHeader'

const getDimensions = (ele: HTMLElement) => {
  const { height } = ele.getBoundingClientRect()

  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

interface RefData {
  current: HTMLElement
  section: string
}

function Header(): ReactElement {
  const { t } = useTranslation('header')
  const [visibleSection, setVisibleSection] = React.useState('home')
  const [refs, setRefs] = React.useState<RefData[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const { toggleRightDrawer } = useDrawer()
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  React.useEffect(() => {
    if (refs.length === 0) {
      const elements = LINKS.map((link) => {
        return {
          current: document.getElementById(link.to) as HTMLElement,
          section: link.to,
        }
      })
      setRefs(elements)
    }
  }, [refs])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      const selected = refs.find((ref) => {
        const { offsetBottom, offsetTop } = getDimensions(ref.current)
        return scrollPosition > offsetTop && scrollPosition < offsetBottom
      })

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refs, visibleSection])

  const onClick = (to: string) => {
    setIsDrawerOpen(false)
    const section = document.getElementById(to)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <>
      <S.Header>
        <S.HeaderWrapper>
          <S.LinkWrapper>
            {isMobileScreen ? (
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              LINKS.map((item) => (
                <CustomLink
                  to={item.to}
                  key={item.id}
                  isActive={visibleSection === item.to}
                  onClick={onClick}
                >
                  {t(item.text)}
                </CustomLink>
              ))
            )}
          </S.LinkWrapper>
          <IconButton onClick={() => toggleRightDrawer(true)}>
            <SettingsIcon />
          </IconButton>
        </S.HeaderWrapper>
      </S.Header>
      {isMobileScreen && (
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onOpen={() => setIsDrawerOpen(true)}
        >
          <Box sx={{ width: 360 }} role="presentation">
            <MenuHeader
              onClose={() => setIsDrawerOpen(false)}
              onClickLink={onClick}
              visibleSection={visibleSection}
            />
          </Box>
        </SwipeableDrawer>
      )}
    </>
  )
}

export { Header }
