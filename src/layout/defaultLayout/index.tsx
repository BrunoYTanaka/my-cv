import { Footer, Header, Sidebar } from '@/components'
import { MenuContextProvider } from '@/hooks/useMenu'
import { useThemeMode } from '@/hooks/useThemeMode'
import { LeftDrawer } from '@/components/Drawer'
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
        <MenuContextProvider>
          <Header />
          <LeftDrawer toggleThemeMode={toggleThemeMode} />
          <S.Container>{children}</S.Container>
          <Sidebar />
          <Footer />
        </MenuContextProvider>
      </IntlContextProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}

export { DefaultLayout }
