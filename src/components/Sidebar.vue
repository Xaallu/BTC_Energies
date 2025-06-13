<template>
  <!-- ░░░ Sidebar Desktop ░░░ -->
  <div
    class="hidden lg:flex fixed top-0 left-0 h-full w-72
           bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]
           text-white flex-col z-50 shadow-lg"
  >
    <div class="flex flex-col h-full justify-between py-8">
      
      <!-- === Haut === -->
      <div class="flex flex-col items-center">
        <img ref="logoL" src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-32 w-auto mb-2" />
        <img ref="logoS" src="/LeSoDeDe.png" alt="Les solutions de demain" class="h-24 w-auto mt-4" />

        <!-- Sélecteur de langue -->
        <div class="relative mt-6 w-22">
          <button
            @click="toggleDropdown"
            class="w-full text-xs px-4 py-2 rounded bg-[#475C79] text-white hover:bg-[#3a4e6a]
                   transition flex items-center justify-between gap-2"
          >
            <span class="flex items-center gap-2">
              <img
                v-if="currentLang.flag"
                :src="currentLang.flag"
                :alt="currentLang.label"
                class="w-6 h-4 rounded-sm"
              />
              <span>{{ currentLang.label }}</span>
            </span>

            <!-- Flèche -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-if="showDropdown"
            class="absolute left-14 mt-2 w-full bg-gray-400 text-black rounded shadow z-10"
          >
            <ul>
              <li
                v-for="lang in availableLocales"
                :key="lang.code"
                @click="setLocale(lang.code)"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img :src="lang.flag" :alt="lang.label" class="w-6 h-4 rounded-sm" />
                {{ lang.label }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Petite flèche décorative -->
        <div class="menu-arrow_H mt-12"></div>
      </div>

      <!-- === Menu Desktop === -->
      <ul
        ref="menuList"
        class="menu-scroll flex-1 text-center space-y-4 overflow-x-hidden
               scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent"
      >
        <li v-for="(item, index) in menuItems" :key="index" class="relative">
        <router-link
          :to="item.route"
          :class="[ 
            'block transform transition duration-300 ease-out hover:scale-110 focus:outline-none',
            $route.path === item.route
              ? 'text-green-400'
              : 'text-white hover:text-green-400'
          ]"
          style="font-size:16.5px;"
        >
          {{ $t(item.label) }}
        </router-link>


        </li>
      </ul>

      <!-- Flèche bas -->
      <div class="flex flex-col items-center pb-4">
        <div class="menu-arrow_B"></div>
      </div>
    </div>
  </div>

  <!-- ░░░ Overlay Mobile ░░░ -->
  <div
    v-if="props.isSidebarOpen"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
    @click="toggleSidebar"
  ></div>

  <!-- ░░░ Sidebar Mobile ░░░ -->
  <div
    class="fixed top-0 left-0 h-full w-72 bg-white text-gray-700 z-50
           flex flex-col shadow-lg transition-transform duration-300 ease-in-out lg:hidden"
    :class="props.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Bouton fermeture -->
    <button @click="toggleSidebar" class="absolute top-4 right-4 text-3xl">&times;</button>

    <div class="flex flex-col h-full pt-16 px-6">
      <div class="mb-8 flex justify-center">
        <img src="/favicon.jpg" alt="BTC Énergies Logo" class="h-24 w-auto" />
      </div>

      <!-- Sélecteur de langue -->
        <div class="relative mt-6 w-22">
          <button
            @click="toggleDropdown"
            class="w-full text-xs px-4 py-2 rounded bg-[#475C79] text-white hover:bg-[#3a4e6a]
                   transition flex items-center justify-between gap-2"
          >
            <span class="flex items-center gap-2">
              <img
                v-if="currentLang.flag"
                :src="currentLang.flag"
                :alt="currentLang.label"
                class="w-6 h-4 rounded-sm"
              />
              <span>{{ currentLang.label }}</span>
            </span>

            <!-- Flèche -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-if="showDropdown"
            class="absolute left-0 mt-2 w-full bg-gray-400 text-black rounded shadow z-10"
          >
            <ul>
              <li
                v-for="lang in availableLocales"
                :key="lang.code"
                @click="setLocale(lang.code)"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img :src="lang.flag" :alt="lang.label" class="w-6 h-4 rounded-sm" />
                {{ lang.label }}
              </li>
            </ul>
          </div>
        </div>

      <!-- Menu Mobile -->
      <ul class="flex-grow space-y-4 border-t border-gray-200 pt-4">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="border-b border-gray-200 pb-2"
        >
          <router-link
            :to="item.route"
            class="block text-gray-700 hover:text-green-600 font-medium"
            @click="handleLinkClick"
          >
            {{ $t(item.label) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

/* ░░░ Props & Emits ░░░ */
const props = defineProps({ isSidebarOpen: Boolean })
const emit  = defineEmits(['toggleSidebar'])

/* ░░░ i18n ░░░ */
const { locale, t } = useI18n()

/* ░░░ Langues ░░░ */
const availableLocales = [
  { code: 'fr', label: 'Fr', flag: '/Flag/flag_fr.jpg' },
  { code: 'en', label: 'Gb', flag: '/Flag/flag_en.jpg' },
  { code: 'es', label: 'Es', flag: '/Flag/flag_es.jpg' },
  { code: 'it', label: 'It', flag: '/Flag/flag_it.jpg' },
  { code: 'de', label: 'De', flag: '/Flag/flag_de.jpg' },
  { code: 'jp', label: 'Jp', flag: '/Flag/flag_JP.jpg' },
  { code: 'cn', label: 'Cn', flag: '/Flag/flag_cn.jpg' },
]

const currentLang = computed(
  () => availableLocales.find(l => l.code === locale.value) || { flag: '', label: '🌍' }
)

/* ░░░ Menu ░░░ */
const menuItems = [
  { label: 'menu.accueil',        route: '/' },
  { label: 'menu.constat',        route: '/Constat' },
  { label: 'menu.solutions',      route: '/Solutions' },
  { label: 'menu.partenaires',    route: '/Partenaires' },
  { label: 'menu.equipe',         route: '/equipe' },
  { label: 'menu.contact',        route: '/contact' },
  { label: 'menu.etDemain',       route: '/EtDemain' },
  { label: 'menu.mentions',       route: '/mentions-legales' },
]

/* ░░░ États ░░░ */
const showDropdown = ref(false)
const isDesktop    = ref(window.innerWidth >= 1024)

/* ░░░ Méthodes ░░░ */
function toggleDropdown () { showDropdown.value = !showDropdown.value }
function setLocale(code)  { locale.value = code; showDropdown.value = false }
function toggleSidebar()  { emit('toggleSidebar') }
function handleLinkClick(){ emit('toggleSidebar') }
function updateIsDesktop(){ isDesktop.value = window.innerWidth >= 1024 }

/* ░░░ Animations GSAP ░░░ */
const logoL = ref(null)
const logoS = ref(null)
const menuList = ref(null)

onMounted(() => {
  window.addEventListener('resize', updateIsDesktop)

  gsap.from([logoL.value, logoS.value], {
    opacity: 0,
    y: -20,
    duration: 2.8,
    stagger: 0.5,
    ease: 'power2.out',
  })

  if (menuList.value) {
    gsap.from(menuList.value.children, {
      opacity: 0,
      x: -40,
      stagger: 0.1,
      duration: 2.8,
      delay: 0.8,
      ease: 'power2.out',
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsDesktop)
})
</script>

<style scoped>
.menu-arrow_H,
.menu-arrow_B {
  width: 6px;
  height: 6px;
  border-left: 3px solid #22b17a;
  border-bottom: 3px solid #22b17a;
  margin: 0 auto;
  background: transparent;
}
.menu-arrow_H { transform: rotate(135deg); margin-bottom: 0.6rem; }
.menu-arrow_B { transform: rotate(315deg); margin-top: 0.6rem; }

.menu-scroll      { scrollbar-width: none; -ms-overflow-style: none; }
.menu-scroll::-webkit-scrollbar { display: none; }
</style>
