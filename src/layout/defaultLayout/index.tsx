import { Footer, Header, Sidebar } from '@/components'
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
      <MenuContextProvider>
        <Header />
        <Sidebar />
        <S.Container>{children}</S.Container>
        <Footer />
      </MenuContextProvider>
    </ThemeProvider>
  )
}

export { DefaultLayout }
