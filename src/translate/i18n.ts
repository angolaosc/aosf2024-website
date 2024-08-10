import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales } from './languages'

i18n
    .use(LanguageDetector)
    .init({
        debug: true,
        defaultNS: ['translations'],
        fallbackLng: 'en',
        lng: 'en',
        ns: ['translations'],
        interpolation: {
            escapeValue: false
        },
        resources: locales
    })

export { i18n }