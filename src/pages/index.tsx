import { Home } from '@/screens/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '@/layout/defaultLayout'
import { SSRConfig } from 'next-i18next'

export default function HomePage(props: SSRConfig) {
  return (
    <DefaultLayout>
      <Home {...props} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
