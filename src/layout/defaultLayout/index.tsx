import { Footer, Header, Sidebar } from '@/components'
import { MenuContextProvider } from '@/hooks/useMenu'
import { useThemeMode } from '@/hooks/useThemeMode'
import { LeftDrawer } from '@/components/Drawer'
import { ThemeProvider } from '@mui/material/styles'
import * as S from './styles'
import { IntlContextProvider } from '@/hooks/useIntl'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <IntlContextProvider>
        <MenuContextProvider>
          <Header />
          <Sidebar />
          <LeftDrawer />
          <S.Container>{children}</S.Container>
          <Footer />
        </MenuContextProvider>
      </IntlContextProvider>
    </ThemeProvider>
  )
}

export { DefaultLayout }
