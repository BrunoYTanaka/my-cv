import React from 'react'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import { grey, purple } from '@mui/material/colors'

interface ThemeModeContextData {
  theme: ThemeOptions
  toggleThemeMode: () => void
}

export const ThemeModeContext = React.createContext({} as ThemeModeContextData)

interface ThemeModeContextProviderProps {
  children: React.ReactNode
}

type Mode = 'light' | 'dark'

export function ThemeModeContextProvider({
  children,
}: ThemeModeContextProviderProps) {
  const [mode, setMode] = React.useState<Mode>('dark')

  const toggleThemeMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }, [])

  React.useEffect(() => {
    const themeLS = localStorage.getItem('@theme')
    if (themeLS) {
      setMode(themeLS as Mode)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('@theme', mode)
  }, [mode])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: purple,
          ...(mode === 'light'
            ? {
                neutral: grey[300],
              }
            : {
                neutral: '#212121',
              }),
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
