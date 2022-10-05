import { Home } from '@/screens/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '@/layout/defaultLayout'
import { SSRConfig } from 'next-i18next'
// import api from '@/services/api'
import { layout } from '@/config'

interface HomeProps extends SSRConfig {
  layout: LayoutProps
}

export default function HomePage(props: HomeProps) {
  return (
    <DefaultLayout>
      <Home {...props} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  // const data = api.get<LayoutProps>('/1').then((response) => response.data)
  const data = layout

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      layout: data,
    },
  }
}
