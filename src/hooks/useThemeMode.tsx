import React from 'react'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

interface ThemeModeData {
  theme: ThemeOptions
  toggleThemeMode: (theme: Mode) => void
}

export const useThemeMode = (): ThemeModeData => {
  const [mode, setMode] = React.useState<Mode>('dark')

  const toggleThemeMode = React.useCallback((theme: Mode) => {
    setMode(theme)
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
          ...(mode === 'light'
            ? {
                neutral: grey[300],
                progressBar: '#8c8c8c',
              }
            : {
                neutral: '#212121',
                progressBar: grey[500],
              }),
        },
      }),
    [mode],
  )

  return { theme, toggleThemeMode }
}
