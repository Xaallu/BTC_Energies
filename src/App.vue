<template>
  <div id="app">
    <v-app>
      <HeaderMobile @toggleSidebar="toggleSidebar" />
      <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />

      <!-- Contenu principal -->
      <div class="layout-wrapper lg:ml-[260px]">
        <div class="layout-content pt-[68px] sm:pt-[76px] lg:pt-0 px-3 sm:px-4 lg:px-0">
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
  { code: 'fr', hreflang: 'fr', og: 'fr_FR' },
  { code: 'en', hreflang: 'en', og: 'en_US' },
  { code: 'es', hreflang: 'es', og: 'es_ES' },
  { code: 'it', hreflang: 'it', og: 'it_IT' },
  { code: 'de', hreflang: 'de', og: 'de_DE' },
  { code: 'jp', hreflang: 'ja', og: 'ja_JP' },
  { code: 'cn', hreflang: 'zh-CN', og: 'zh_CN' }
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
 
  links.push({ rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${path}?lang=fr` })

  return links
})

const canonicalUrl = computed(() => `${SITE_URL}${route.path || '/'}`)

const ogLocale = computed(() => {
  return localeMap.find((entry) => entry.code === locale.value)?.og || 'fr_FR'
})

const ogAlternateLocales = computed(() =>
  localeMap
    .map((entry) => entry.og)
    .filter((og) => og && og !== ogLocale.value)
)

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'BTC Énergies',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo_sidebar.png`
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33 6 29 56 07 56',
          contactType: 'customer service',
          email: 'direction@btc-energies.fr',
          availableLanguage: ['fr', 'en', 'es', 'it', 'de', 'ja', 'zh-CN']
        }
      ]
      // sameAs: ['https://www.linkedin.com/company/...', 'https://www.youtube.com/@...']
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'BTC Énergies',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['fr', 'en', 'es', 'it', 'de', 'ja', 'zh-CN']
    }
  ]
}

useHead(() => ({
  htmlAttrs: { lang: langAttr.value },
  titleTemplate: (title) => {
    if (!title) return 'BTC Énergies'
    return title.includes('BTC Énergies') ? title : `${title} | BTC Énergies`
  },
  link: [
    ...alternateLinks.value,
    { rel: 'canonical', href: canonicalUrl.value }
  ],
  meta: [
    { name: 'theme-color', content: '#001032' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'format-detection', content: 'telephone=no' },
    { property: 'og:site_name', content: 'BTC Énergies' },
    { property: 'og:locale', content: ogLocale.value },
    ...ogAlternateLocales.value.map((value) => ({ property: 'og:locale:alternate', content: value }))
  ],
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


