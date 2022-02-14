import React from 'react'

import { useRouter } from 'next/router'

interface IntlContextData {
  switchLang: (newLang: Lang) => void
}

const IntlContext = React.createContext({} as IntlContextData)

interface IntlContextProviderProps {
  children: React.ReactNode
}

type Lang = 'en' | 'pt'

export function IntlContextProvider({ children }: IntlContextProviderProps) {
  const router = useRouter()

  const switchLang = (newLang: Lang) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLang })
  }

  return (
    <IntlContext.Provider value={{ switchLang }}>
      {children}
    </IntlContext.Provider>
  )
}

export const useIntl = (): IntlContextData => {
  const { switchLang } = React.useContext(IntlContext)
  return { switchLang }
}
