import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'
import es from './locales/es.json'
import it from './locales/it.json'

const savedLang = localStorage.getItem('lang') || 'fr'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLang,
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    es,
    it,
  },
})

export default i18n
