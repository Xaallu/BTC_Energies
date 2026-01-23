<template>
  <div id="app">
    <v-app>
      <HeaderMobile @toggleSidebar="toggleSidebar" />
      <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />

      <!-- Contenu principal -->
      <div class="layout-wrapper lg:ml-[260px]">
        <div class="layout-content">
          <router-view />
          
          <Footer />
        </div>
      </div>

      <!-- Rubie Chatbot flottant -->
      <!-- <RubieChat /> -->
    </v-app>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
// import FooterBand from './components/FooterBand.vue'
import HeaderMobile from './components/HeaderMobile.vue'
// import RubieChat from './components/RubieChat.vue'

const SITE_URL = 'https://www.btc-energies.fr'
const localeMap = [
  { code: 'fr', hreflang: 'fr' },
  { code: 'en', hreflang: 'en' },
  { code: 'es', hreflang: 'es' },
  { code: 'it', hreflang: 'it' },
  { code: 'de', hreflang: 'de' },
  { code: 'jp', hreflang: 'ja' },
  { code: 'cn', hreflang: 'zh-CN' }
]

const { locale } = useI18n()
const route = useRoute()

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const normalizeLang = (value) => {
  if (!value || typeof value !== 'string') return null
  const code = value.toLowerCase()
  return localeMap.find((entry) => entry.code === code)?.code || null
}

const setLocaleFromQuery = (lang) => {
  const normalized = normalizeLang(lang)
  if (!normalized || normalized === locale.value) return
  locale.value = normalized
  localStorage.setItem('lang', normalized)
}

onMounted(() => {
  setLocaleFromQuery(route.query.lang)
})

watch(
  () => route.query.lang,
  (lang) => {
    setLocaleFromQuery(lang)
  }
)

const langAttr = computed(() => {
  return localeMap.find((entry) => entry.code === locale.value)?.hreflang || 'fr'
})

const alternateLinks = computed(() => {
  const path = route.path || '/'
  const links = localeMap.map(({ code, hreflang }) => ({
    rel: 'alternate',
    hreflang,
    href: `${SITE_URL}${path}?lang=${code}`
  }))
  links.push({ rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${path}` })
  return links
})

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'BTC Energies',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo_sidebar.png`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33 6 29 56 07 56',
          contactType: 'customer service',
          email: 'direction@btc-energies.fr',
          availableLanguage: ['fr', 'en', 'es', 'it', 'de', 'ja', 'zh-CN']
        }
      ]
    },
    {
      '@type': 'WebSite',
      name: 'BTC Energies',
      url: `${SITE_URL}/`,
      inLanguage: ['fr', 'en', 'es', 'it', 'de', 'ja', 'zh-CN']
    }
  ]
}

useHead(() => ({
  htmlAttrs: { lang: langAttr.value },
  link: alternateLinks.value,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaOrg)
    }
  ]
}))
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100vw;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
