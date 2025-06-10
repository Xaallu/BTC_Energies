// main.js

import { createApp } from 'vue'
import App from './App.vue'

// Styles globaux
import 'vuetify/styles'
import './style.css'
import './assets/tailwind.css'

// Vuetify et Router
import vuetify from './plugins/vuetify'
import router from './router'

// Traductions
import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'
import es from './locales/es.json'

// Langue enregistrée (ou fr par défaut)
const savedLocale = localStorage.getItem('lang') || 'fr'

// Instance i18n
const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: { fr, en, es},
  missingWarn: false,
  fallbackWarn: false  
})

// Création de l’application Vue
const app = createApp(App)

// Ajout des plugins
app.use(vuetify)
app.use(router)
app.use(i18n)

// Montre l'application
app.mount('#app')
