import React from 'react'

interface MenuContextData {
  isLeftDrawerOpen: boolean
  isRightDrawerOpen: boolean
  toggleLeftDrawer: (value: boolean) => void
  toggleRightDrawer: (value: boolean) => void
}

const MenuContext = React.createContext({} as MenuContextData)

interface MenuContextProviderProps {
  children: React.ReactNode
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isLeftDrawerOpen, isSetLeftDrawerOpen] = React.useState(false)
  const [isRightDrawerOpen, isSetRightDrawerOpen] = React.useState(false)

  const toggleLeftDrawer = (value: boolean) => {
    isSetLeftDrawerOpen(value)
  }
  const toggleRightDrawer = (value: boolean) => {
    isSetRightDrawerOpen(value)
  }

  return (
    <MenuContext.Provider
      value={{
        isLeftDrawerOpen,
        isRightDrawerOpen,
        toggleLeftDrawer,
        toggleRightDrawer,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = (): MenuContextData => {
  const {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  } = React.useContext(MenuContext)

  return {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  }
}
