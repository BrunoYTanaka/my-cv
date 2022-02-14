import { Footer, Header, Sidebar } from '@/components'
import { IntlContextProvider } from '@/hooks/useIntl'
import { MenuContextProvider } from '@/hooks/useMenu'
import { useThemeMode } from '@/hooks/useThemeMode'
import { ThemeProvider } from '@mui/material/styles'
import * as S from './styles'

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
          <S.Container>{children}</S.Container>
          <Footer />
        </MenuContextProvider>
      </IntlContextProvider>
    </ThemeProvider>
  )
}

export { DefaultLayout }
