import { Home } from '@/screens/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default Home

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
