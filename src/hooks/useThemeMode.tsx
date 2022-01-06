import React from 'react'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

interface ThemeModeContextData {
  theme: ThemeOptions
  toggleThemeMode: () => void
}

export const ThemeModeContext = React.createContext({} as ThemeModeContextData)

interface ThemeModeContextProviderProps {
  children: React.ReactNode
}

export function ThemeModeContextProvider({
  children,
}: ThemeModeContextProviderProps) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark')

  const toggleThemeMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ThemeModeContext.Provider
      value={{
        theme,
        toggleThemeMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = (): ThemeModeContextData => {
  const { theme, toggleThemeMode } = React.useContext(ThemeModeContext)

  return { theme, toggleThemeMode }
}
