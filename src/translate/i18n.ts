import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales } from './languages'

i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'pt-BR',
        ns: ['translations'],
        resources: locales
    })

export { i18n }