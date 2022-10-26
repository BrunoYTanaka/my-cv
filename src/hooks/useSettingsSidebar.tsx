import React from 'react'

interface DrawerContextData {
  isSettingsSidebarOpen: boolean
  handleSettingsSidebar: (value: boolean) => void
}

const DrawerContext = React.createContext({} as DrawerContextData)

interface DrawerContextProviderProps {
  children: React.ReactNode
}

export function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [isSettingsSidebarOpen, isSetRightDrawerOpen] = React.useState(false)

  const handleSettingsSidebar = (value: boolean) => {
    isSetRightDrawerOpen(value)
  }

  return (
    <DrawerContext.Provider
      value={{
        isSettingsSidebarOpen,
        handleSettingsSidebar,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export const useSettingsSidebar = (): DrawerContextData => {
  const { isSettingsSidebarOpen, handleSettingsSidebar } =
    React.useContext(DrawerContext)

  return {
    isSettingsSidebarOpen,
    handleSettingsSidebar,
  }
}
