import { HomeScreen } from '@/screens/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SSRConfig } from 'next-i18next'
// import api from '@/services/api'
import { contact } from '@/settings'

interface HomeProps extends SSRConfig {
  layout: LayoutProps
}

export default function HomePage(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getStaticProps({ locale }: { locale: string }) {
  // const data = api.get<LayoutProps>('/1').then((response) => response.data)
  const data = { contact }

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      layout: data,
    },
  }
}
