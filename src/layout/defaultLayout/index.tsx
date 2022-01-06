import { useThemeMode } from '@/hooks/useThemeMode'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export { DefaultLayout }
