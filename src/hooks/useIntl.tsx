import React from 'react'
import { useRouter } from 'next/router'

interface IntlContextData {
  lang: string
  switchLang: (newLang: Lang) => void
}

const IntlContext = React.createContext({} as IntlContextData)

interface IntlContextProviderProps {
  children: React.ReactNode
}

type Lang = 'en' | 'pt'

export function IntlContextProvider({ children }: IntlContextProviderProps) {
  const [lang, setLang] = React.useState<Lang>('en')
  const router = useRouter()

  React.useEffect(() => {
    const langLS = localStorage.getItem('@lang')
    if (langLS) {
      setLang(langLS as Lang)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('@lang', lang)
  }, [lang])

  const switchLang = (newLang: Lang) => {
    const { pathname, asPath, query } = router
    router.replace({ pathname, query }, asPath, { locale: newLang })
  }

  return (
    <IntlContext.Provider value={{ lang, switchLang }}>
      {children}
    </IntlContext.Provider>
  )
}

export const useIntl = (): IntlContextData => {
  const { lang, switchLang } = React.useContext(IntlContext)
  return { lang, switchLang }
}
