import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

// http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two.html

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
