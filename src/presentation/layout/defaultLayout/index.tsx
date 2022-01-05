import { useThemeMode } from '@/presentation/hooks/useThemeMode'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from './styles'
interface DefaultLayout {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayout) {
  const { theme } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}
