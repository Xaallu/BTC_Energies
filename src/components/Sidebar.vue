<template>
  <!-- Sidebar Desktop -->
  <div class="hidden lg:flex fixed top-0 left-0 h-full w-72 bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e] text-white flex-col z-50 shadow-lg">
    <div class="flex flex-col h-full justify-between py-8">


      <!-- Haut : logos + flèche haut -->
      <div>
        <div class="flex flex-col items-center">
          <img ref="logoL" src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-32 w-auto mb-2" />
          <br>
          <img ref="logoS" src="/LeSoDeDe.png" alt="Les solutions de demain" class="h-24 w-auto mb-2 mt-4" />

          <!-- Espace -->
  <div class="mt-6"></div>

       <!-- Bouton langue avec flèche -->
<div class="relative">
  <button
    @click="toggleDropdown"
    class="text-xs px-4 py-2 rounded bg-[#475C79] text-white hover:bg-[#3a4e6a] transition flex items-center gap-2 w-full justify-between"
  >
    <div class="flex items-center gap-2">
  <img
    v-if="currentLang.flag"
    :src="currentLang.flag"
    :alt="currentLang.label"
    class="w-6 h-4 rounded-sm"
  />
  <span>
    {{
      locale === 'fr' ? '🇫🇷' :
      locale === 'en' ? '🇬🇧' :
      locale === 'es' ? '🇪🇸' : '🌍'
    }}
  </span>
</div>


    <!-- Flèche -->
    <svg
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Liste déroulante -->
  <div
    v-if="showDropdown"
    class="absolute mt-2 bg-white text-black rounded shadow w-full z-10"
  >
    <ul>
      <li
        v-for="lang in availableLocales"
        :key="lang.code"
        @click="setLocale(lang.code)"
        class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2"
      >
        <img :src="lang.flag" :alt="lang.label" class="w-6 h-4 rounded-sm" />
        <span>{{ lang.label }}</span>
      </li>
    </ul>
  </div>
</div>

<!-- Espace -->
<div class="mt-12"></div>

              <div class="menu-arrow_H"></div>
            </div>
          </div>



      <!-- Centre : menu avec scroll -->
      <ul ref="menuList" class="menu-scroll text-center space-y-4 overflow-x-hidden flex-1 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent">
        <li v-for="(item, index) in menuItems" :key="index" class="relative">
          <router-link
            :to="item.route"
            class="block hover:text-green-400 transition-colors duration-300"
             style="font-size: 16.5px;"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <!-- Bas : flèche bas -->
      <div class="flex flex-col items-center pb-4">
        <div class="menu-arrow_B"></div>
      </div>

    </div>
  </div>

  <!-- Overlay Mobile -->
  <div
    v-if="props.isSidebarOpen"
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
    @click="toggleSidebar"
  ></div>

  <!-- Sidebar Mobile -->
  <div
    class="fixed top-0 left-0 h-full w-72 bg-white text-gray-700 z-50 flex flex-col shadow-lg transition-transform duration-300 ease-in-out lg:hidden"
    :class="props.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <button
      @click="toggleSidebar"
      class="absolute top-4 right-4 text-gray-700 text-3xl focus:outline-none"
    >
      &times;
    </button>

    <div class="flex flex-col h-full pt-16 px-6">
      <!-- Logo -->
      <div class="mb-8 flex justify-center">
        <img src="/favicon.jpg" alt="BTC Énergies Logo" class="h-24 w-auto" />
      </div>

      <!-- Menu Mobile -->
      <ul class="flex-grow space-y-4 border-t border-gray-200 pt-4">
        <li v-for="(item, index) in menuItems" :key="index" class="border-b border-gray-200 pb-2">
          <router-link
            :to="item.route"
            class="block text-gray-700 hover:text-green-600 font-medium"
            @click="handleLinkClick"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { computed } from 'vue'

const props = defineProps({ isSidebarOpen: Boolean })
const emit = defineEmits(['toggleSidebar'])
const isDesktop = ref(window.innerWidth >= 1024)
const showDropdown = ref(false)


const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024
}

const currentLang = computed(() => {
  return availableLocales.find(lang => lang.code === locale.value) || { flag: '', label: '' }
})

 const availableLocales = [
  { code: 'fr', label: '🇫🇷', flag: '/Flag/flag_fr.jpg' },
  { code: 'en', label: '🇬🇧', flag: '/Flag/flag_en.jpg' },
  { code: 'es', label: '🇪🇸', flag: '/Flag/flag_es.jpg' },
]

function setLocale(code) {
  locale.value = code
  showDropdown.value = false
  // Si tu utilises vue-i18n :
  // i18n.global.locale.value = code
}



function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function handleOutsideClick(event) {
  const dropdown = document.querySelector('.relative')
  if (dropdown && !dropdown.contains(event.target)) {
    showDropdown.value = false
  }
}



onMounted(() => {
  window.addEventListener('resize', updateIsDesktop)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsDesktop)
})
document.removeEventListener('click', handleOutsideClick)


document.addEventListener('click', handleOutsideClick)

const logoL = ref(null)
const logoS = ref(null)
const menuList = ref(null)

const menuItems = [
  { label: 'Accueil', route: '/' },
  { label: 'Notre Constat', route: '/Constat' },
  { label: 'Nos solutions', route: '/Solutions' },
  { label: 'Financements et partenaires', route: '/Partenaires' },
  { label: 'Notre équipe', route: '/equipe' },
  { label: 'Contact', route: '/contact' },
  { label: 'Et demain ?', route: '/EtDemain' },
  { label: 'Mentions légales', route: '/mentions-legales' },
]

const toggleSidebar = () => {
  emit('toggleSidebar')
}

const handleLinkClick = () => {
  emit('toggleSidebar')
}

onMounted(() => {
  gsap.from(logoL.value, {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power2.out',
  })

  gsap.from(logoS.value, {
    opacity: 0,
    y: -30,
    duration: 5.5,
    delay: 0.5,
    ease: 'power2.out',
  })

  if (menuList.value) {
    gsap.from(menuList.value.children, {
      opacity: 0,
      x: -50,
      stagger: 0.1,
      duration: 0.9,
      delay: 0.8,
      ease: 'power2.out',
    })

    Array.from(menuList.value.children).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3, ease: 'power2.out' })
      })
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
  }
})

/* Changemment de langue */
import { useI18n } from 'vue-i18n'


const { locale } = useI18n();

const switchLang = () => {
  if (locale.value === 'fr') {
    locale.value = 'en'
  } else if (locale.value === 'en') {
    locale.value = 'es'
  } else {
    locale.value = 'fr'
  }
  localStorage.setItem('lang', locale.value)
}


</script>

<style scoped>
.menu-arrow_H,
.menu-arrow_B {
  width: 6px;
  height: 6px;
  background-color: transparent;
  border-left: 3px solid #22b17a;
  border-bottom: 3px solid #22b17a;
  margin: 0 auto;
}
.menu-arrow_H {
  transform: rotate(135deg);
  margin-bottom: 0.6rem;
}
.menu-arrow_B {
  transform: rotate(315deg);
  margin-top: 0.6rem;
}

.menu-list {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer et Edge */
}

.menu-list::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background: transparent; /* facultatif, pour Safari */
}

.menu-scroll {
  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;       /* IE 10+ */
}

.menu-scroll::-webkit-scrollbar {
  display: none;                  /* Chrome, Safari */
}


/* Scrollbar customisée */

.emoji-compatible {
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", system-ui, sans-serif;
}
</style>
