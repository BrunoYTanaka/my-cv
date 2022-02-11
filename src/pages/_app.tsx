import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { DefaultLayout } from '@/layout/defaultLayout'
import { ThemeModeContextProvider } from '@/hooks/useThemeMode'
// http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two.html

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeContextProvider>
      <DefaultLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeModeContextProvider>
  )
}

export default appWithTranslation(MyApp)
