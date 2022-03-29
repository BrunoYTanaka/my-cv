import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

function Metadata() {
  const { t } = useTranslation('metadata')
  return (
    <Head>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} key="desc" />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('ogDescription')} />
      <meta property="og:image" content="/nextjs-logo.svg" />
    </Head>
  )
}

export { Metadata }
