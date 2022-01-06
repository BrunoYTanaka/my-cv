import React from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { DefaultLayout } from '@/layout/defaultLayout'
import { ThemeModeContextProvider } from '@/hooks/useThemeMode'

// http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two.html

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeContextProvider>
      <DefaultLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeModeContextProvider>
  )
}
