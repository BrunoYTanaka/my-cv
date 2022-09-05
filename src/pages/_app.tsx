import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { DefaultLayout } from '@/layout/defaultLayout'
import '../styles/global.css'

// http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two.html

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default appWithTranslation(MyApp)
