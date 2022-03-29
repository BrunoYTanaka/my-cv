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
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={t('title')} />
      <meta property="twitter:description" content={t('ogDescription')} />
      <meta
        property="twitter:image"
        content="https://avatars.githubusercontent.com/u/37604496?v=4"
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/37604496?v=4"
      />
    </Head>
  )
}

export { Metadata }
