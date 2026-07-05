import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, LANGUAGES, translations, Translation } from './translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translation
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('filanwaa-lang')
    if (saved === 'so' || saved === 'en' || saved === 'ar') return saved
    return 'so'
  })

  const dir = LANGUAGES[lang].dir

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    localStorage.setItem('filanwaa-lang', lang)
  }, [lang, dir])

  const setLang = (newLang: Language) => setLangState(newLang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
