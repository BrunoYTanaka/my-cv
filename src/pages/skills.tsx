import { SkillsScreen } from '@/screens/Skills'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '@/layout/defaultLayout'
import { SSRConfig } from 'next-i18next'
import api from '@/services/api'

interface SkillsProps extends SSRConfig {
  layout: LayoutProps
}

export default function SkillsPage(props: SkillsProps) {
  return (
    <DefaultLayout>
      <SkillsScreen {...props} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const data = api.get<LayoutProps>('/1').then((response) => response.data)

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      layout: await data,
    },
  }
}
