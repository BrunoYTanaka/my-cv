import React, { ReactElement } from 'react'
import * as S from './styles'
import NextLink from 'next/link'
import { useMenuContext } from '@/hooks/useMenu'
import { Anchor } from '..'

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
    <S.Sidebar isOpen={isMenuOpen} ref={sidebarRef}>
      <S.SidebarWrapper>
        {['home', 'about', 'skills', 'experiences'].map((item, index) => (
          <NextLink href={`/#${item}`} key={item} passHref>
            <Anchor
              isActive={currentIndex === index}
              onClick={() => handleClick(index)}
            >
              {item}
            </Anchor>
          </NextLink>
        ))}
      </S.SidebarWrapper>
    </S.Sidebar>
  )
}

export { Sidebar }
