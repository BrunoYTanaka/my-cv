import { useThemeMode } from '@/presentation/hooks/useThemeMode'
import { ThemeProvider } from '@mui/material/styles'

interface DefaultLayout {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayout) {
  const { theme } = useThemeMode()
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
