import React from 'react'

interface DrawerContextData {
  isLeftDrawerOpen: boolean
  isRightDrawerOpen: boolean
  toggleLeftDrawer: (value: boolean) => void
  toggleRightDrawer: (value: boolean) => void
}

const DrawerContext = React.createContext({} as DrawerContextData)

interface DrawerContextProviderProps {
  children: React.ReactNode
}

export function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [isLeftDrawerOpen, isSetLeftDrawerOpen] = React.useState(false)
  const [isRightDrawerOpen, isSetRightDrawerOpen] = React.useState(false)

  const toggleLeftDrawer = (value: boolean) => {
    isSetLeftDrawerOpen(value)
  }
  const toggleRightDrawer = (value: boolean) => {
    isSetRightDrawerOpen(value)
  }

  return (
    <DrawerContext.Provider
      value={{
        isLeftDrawerOpen,
        isRightDrawerOpen,
        toggleLeftDrawer,
        toggleRightDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = (): DrawerContextData => {
  const {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  } = React.useContext(DrawerContext)

  return {
    isLeftDrawerOpen,
    isRightDrawerOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
  }
}
