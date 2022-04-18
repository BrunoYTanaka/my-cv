import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DrawerContextProvider } from '@/hooks/useDrawer'
import { useThemeMode } from '@/hooks/useThemeMode'
import { Drawer } from '@/components/Drawer'
import { ThemeProvider } from '@mui/material/styles'
import { IntlContextProvider } from '@/hooks/useIntl'
import CssBaseline from '@mui/material/CssBaseline'
import * as S from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme, toggleThemeMode } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <IntlContextProvider>
        <DrawerContextProvider>
          <Header />
          <Drawer direction="left" />
          <S.Container>{children}</S.Container>
          <Drawer toggleThemeMode={toggleThemeMode} />
          <Footer />
        </DrawerContextProvider>
      </IntlContextProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}

export { DefaultLayout }
