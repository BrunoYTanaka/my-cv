import React from 'react'

interface MenuContextData {
  isMenuOpen: boolean
  handleOpenMenu: () => void
}

const MenuContext = React.createContext({} as MenuContextData)

interface MenuContextProviderProps {
  children: React.ReactNode
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleOpenMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = (): MenuContextData => {
  const { isMenuOpen, handleOpenMenu } = React.useContext(MenuContext)

  return {
    isMenuOpen,
    handleOpenMenu,
  }
}
