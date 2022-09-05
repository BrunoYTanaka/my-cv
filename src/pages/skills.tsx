import { SkillsScreen } from '@/screens/Skills'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SSRConfig } from 'next-i18next'
// import api from '@/services/api'
import { skills } from '@/settings'

interface SkillsProps extends SSRConfig {
  layout: LayoutProps
}

export default function SkillsPage(props: SkillsProps) {
  return <SkillsScreen {...props} />
}

export async function getStaticProps({ locale }: { locale: string }) {
  // const data = api.get<LayoutProps>('/1').then((response) => response.data)
  const data = { skills }

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      layout: data,
    },
  }
}
