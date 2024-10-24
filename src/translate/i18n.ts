import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { locales } from './locales';

i18n.use(LanguageDetector).init({
  debug: false,
  fallbackLng: 'pt',
  ns: 'translations',
  interpolation: {
    escapeValue: true,
  },
  resources: locales,
});

export { i18n };
