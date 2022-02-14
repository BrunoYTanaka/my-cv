import React from 'react'

interface MenuContextData {
  isMenuOpen: boolean
  isLeftDrawerOpen: boolean
  handleOpenMenu: () => void
  toggleLeftDrawer: (value: boolean) => void
}

const MenuContext = React.createContext({} as MenuContextData)

interface MenuContextProviderProps {
  children: React.ReactNode
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isLeftDrawerOpen, isSetLeftDrawerOpen] = React.useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLeftDrawer = (value: boolean) => {
    isSetLeftDrawerOpen(value)
  }

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, isLeftDrawerOpen, handleOpenMenu, toggleLeftDrawer }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = (): MenuContextData => {
  const { isMenuOpen, handleOpenMenu, isLeftDrawerOpen, toggleLeftDrawer } =
    React.useContext(MenuContext)

  return {
    isMenuOpen,
    isLeftDrawerOpen,
    handleOpenMenu,
    toggleLeftDrawer,
  }
}
