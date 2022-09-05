import { AboutMeScreen } from '@/screens/AboutMe'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SSRConfig } from 'next-i18next'
import { aboutMe } from '@/settings'

// import api from '@/services/api'

interface AboutMeProps extends SSRConfig {
  layout: LayoutProps
}

export default function AboutMePage(props: AboutMeProps) {
  return <AboutMeScreen {...props} />
}

export async function getStaticProps({ locale }: { locale: string }) {
  // const data = api.get<LayoutProps>('/1').then((response) => response.data)
  const data = { aboutMe }

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      layout: data,
    },
  }
}
