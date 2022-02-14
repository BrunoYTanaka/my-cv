import React from 'react'
import { i18n } from 'next-i18next'

interface IntlContextData {
  lang: string
  switchLang: (newLang: Lang) => void
}

const IntlContext = React.createContext({} as IntlContextData)

interface IntlContextProviderProps {
  children: React.ReactNode
}

type Lang = 'eng' | 'pt'

export function IntlContextProvider({ children }: IntlContextProviderProps) {
  const [lang, setLang] = React.useState<Lang>('pt')

  const switchLang = (newLang: Lang) => {
    setLang(newLang)
    i18n?.changeLanguage(newLang)
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
