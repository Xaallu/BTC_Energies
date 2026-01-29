<template>
  <div class="page-footer-bandeau mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 md:grid-cols-[auto_auto] items-center justify-center text-white gap-6 md:gap-12">
      <div class="footer-card flex justify-center">
        <img
          height="526"
          width="595"
          decoding="async"
          loading="eager"
          fetchpriority="high"
          :src="logoSrc"
          alt="BTC Énergies Logo"
          class="w-28 sm:w-40 h-auto max-h-32"
          ref="logoSidebar"
          @error="handleLogoError"
        />
      </div>
      <div class="footer-card flex flex-col items-center text-center">
        <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">{{ $t('nos_solutions.Nous contacter') }}</h2>
        <a
          href="/contact"
          class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner flex items-center gap-2"
        >
          {{ $t('nos_solutions.Nos Coordonnees') }}
        </a>
      </div>
    </div>
  </div>


  <footer class="footer-global text-white text-xs sm:text-sm">
    <div class="w-full sm:max-w-[1200px] sm:mx-auto px-4 sm:px-6 py-5 sm:py-6 text-center">
      <p class="mb-1">{{ $t('Footer.siteoptimise') }}</p>
      <p>
        {{ $t('Footer.siteConcu') }}
        <a href="#" @click.prevent="openCookies" class="underline hover:text-gray-300">
          {{ $t('Footer.Cookies') }}
        </a>
      </p>
    </div>
  </footer>

  <teleport to="body">
    <div
      v-if="shouldShowBanner"
      class="cookie-banner fixed inset-x-0 top-0 z-[60] bg-[#222222] text-white shadow-2xl"
      role="region"
      aria-label="Cookie banner"
    >
      <button
        type="button"
        class="absolute right-3 top-3 text-2xl text-white/70 hover:text-white"
        :aria-label="$t('common.close')"
        @click="declineAll"
      >
        ×
      </button>
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm sm:text-base text-white/90">
          {{ $t('cookies.popupText') }}
        </p>

        <div class="flex flex-col items-start gap-3 sm:items-end">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              class="rounded-md bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-100"
              @click="declineAll"
            >
              {{ $t('cookies.acceptNecessary') }}
            </button>
            <button
              type="button"
              class="rounded-md bg-[#0d5f2c] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#0b4d24]"
              @click="acceptAll"
            >
              {{ $t('cookies.acceptAll') }}
            </button>
          </div>
          <button
            type="button"
            class="text-xs sm:text-sm font-semibold text-white underline underline-offset-4"
            @click="openCookies"
          >
            {{ $t('cookies.openAdvanced') }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="showCookiesPanel"
      class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center px-3 sm:px-4 py-4 sm:py-6 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookies-title"
      @click.self="closeCookies"
    >
      <div class="w-full max-w-2xl rounded-t-2xl sm:rounded-2xl bg-white text-gray-900 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 py-4">
          <h2 id="cookies-title" class="text-base sm:text-lg font-semibold text-gray-900">
            {{ $t('cookies.panelTitle') }}
          </h2>
          <button
            type="button"
            class="rounded-full px-2 py-1 text-gray-500 hover:text-gray-700"
            @click="closeCookies"
            :aria-label="$t('common.close')"
          >
            {{ $t('common.close') }}
          </button>
        </div>

        <div class="px-4 sm:px-8 py-6 text-xs sm:text-sm leading-relaxed text-gray-700 text-center">
          <p class="mb-2 font-medium text-gray-900">{{ $t('cookies.title') }}</p>
          <p class="mb-4">{{ $t('cookies.panelIntro') }}</p>
          <router-link to="/mentions-legales#confidentialite" class="inline-flex items-center gap-2 text-[#0d5f2c] underline">
            {{ $t('cookies.privacyLink') }}
          </router-link>
        </div>

        <div class="border-t border-gray-200 px-4 sm:px-8 py-5 text-xs sm:text-sm text-gray-700">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="font-semibold text-gray-900">{{ $t('cookies.preferencesTitle') }}</p>
            <div class="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                class="rounded-md bg-gray-200 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-300"
                @click="acceptAll"
              >
                {{ $t('cookies.acceptAll') }}
              </button>
              <button
                type="button"
                class="rounded-md bg-gray-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-gray-600"
                @click="declineAll"
              >
                {{ $t('cookies.declineAll') }}
              </button>
            </div>
          </div>
        </div>

        <div class="px-4 sm:px-8 pb-4 text-xs sm:text-sm text-gray-700">
          <div class="border-t border-gray-200 py-4">
            <details open>
              <summary class="cursor-pointer font-semibold text-gray-900">+ {{ $t('cookies.necessaryTitle') }}</summary>
              <div class="mt-3 text-gray-600">
                <p class="mb-2">{{ $t('cookies.necessaryDescription') }}</p>
                <p class="text-xs text-gray-500">{{ $t('cookies.necessaryList') }}</p>
                <div class="mt-3 inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                  {{ $t('cookies.alwaysOn') }}
                </div>
              </div>
            </details>
          </div>

          <div class="border-t border-gray-200 py-4">
            <details open>
              <summary class="cursor-pointer font-semibold text-gray-900">+ {{ $t('cookies.audienceTitle') }}</summary>
              <div class="mt-3 text-gray-600">
                <p class="mb-3">{{ $t('cookies.audienceDescription') }}</p>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p class="font-semibold text-gray-900">{{ $t('cookies.audienceServiceName') }}</p>
                    <p class="text-xs text-gray-500">{{ $t('cookies.audienceServiceDesc') }}</p>
                  </div>
                  <div class="flex gap-2">
                    <button
                      type="button"
                      class="rounded-md bg-gray-200 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-300"
                      @click="setAudiencePreference(true)"
                    >
                      {{ $t('cookies.allow') }}
                    </button>
                    <button
                      type="button"
                      class="rounded-md bg-gray-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-gray-600"
                      @click="setAudiencePreference(false)"
                    >
                      {{ $t('cookies.deny') }}
                    </button>
                  </div>
                </div>
                <router-link to="/mentions-legales#cookies" class="mt-3 inline-block text-[#0d5f2c] underline">
                  {{ $t('cookies.learnMore') }}
                </router-link>
              </div>
            </details>
          </div>
        </div>

        <div class="flex flex-col gap-3 border-t border-gray-200 px-4 sm:px-8 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            class="rounded-full border border-gray-300 px-5 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
            @click="declineAll"
          >
            {{ $t('cookies.declineAll') }}
          </button>
          <button
            type="button"
            class="rounded-full bg-[#0d5f2c] px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#0b4d24] w-full sm:w-auto"
            @click="acceptAll"
          >
            {{ $t('cookies.acceptAll') }}
          </button>
          <button
            type="button"
            class="rounded-full border border-[#0d5f2c] px-5 py-2 text-xs sm:text-sm font-semibold text-[#0d5f2c] hover:bg-[#0d5f2c]/10 w-full sm:w-auto"
            @click="savePreferences"
          >
            {{ $t('cookies.savePreferences') }}
          </button>
        </div>
      </div>

    </div>
  </teleport>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      showCookiesPanel: false,
      cookieChoice: null,
      cookiePrefs: { necessary: true, audience: false },
      logoSrc: '/logo_sidebar.png',

      logoTween: null,
      logoTrigger: null,
    }
  },

  computed: {
    shouldShowBanner() {
      return !this.cookieChoice && !this.showCookiesPanel
    },
    cookieChoiceLabel() {
      if (this.cookieChoice === 'accepted') return this.$t('cookies.choice.accepted')
      if (this.cookieChoice === 'declined') return this.$t('cookies.choice.declined')
      return this.$t('cookies.choice.unknown')
    },
  },

  mounted() {
    const storedChoice = localStorage.getItem('btc_cookie_consent')
    if (storedChoice) this.cookieChoice = storedChoice

    const storedPrefs = localStorage.getItem('btc_cookie_prefs')
    if (storedPrefs) {
      try {
        const parsed = JSON.parse(storedPrefs)
        this.cookiePrefs = {
          necessary: true,
          audience: Boolean(parsed.audience),
        }
      } catch {
        this.cookiePrefs = { necessary: true, audience: false }
      }
    }

    this.$nextTick(() => {
      this.initLogoAnimation()
    })
  },

  watch: {
    // ?? rejoue l’animation à chaque nouvelle page
    $route() {
      this.$nextTick(() => {
        this.initLogoAnimation()
      })
    },
  },

  beforeUnmount() {
    if (this.logoTween) this.logoTween.kill()
    if (this.logoTrigger) this.logoTrigger.kill()
  },

  methods: {
    initLogoAnimation() {
      const el = this.$refs.logoSidebar
      if (!el) return

      // nettoyage si déjà existant
      if (this.logoTween) this.logoTween.kill()
      if (this.logoTrigger) this.logoTrigger.kill()

      this.logoTween = gsap.fromTo(
        el,
        { scale: 0, opacity: 0, transformOrigin: 'center center' },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true, // une fois par page
          },
        }
      )

      this.logoTrigger = this.logoTween.scrollTrigger
    },

    openCookies() {
      this.showCookiesPanel = true
    },
    closeCookies() {
      this.showCookiesPanel = false
    },
    setCookiesChoice(choice) {
      this.cookieChoice = choice
      localStorage.setItem('btc_cookie_consent', choice)
      this.cookiePrefs = { necessary: true, audience: choice === 'accepted' }
      localStorage.setItem('btc_cookie_prefs', JSON.stringify(this.cookiePrefs))
      this.showCookiesPanel = false
    },
    setAudiencePreference(value) {
      this.cookiePrefs.audience = value
    },
    acceptAll() {
      this.setCookiesChoice('accepted')
    },
    declineAll() {
      this.setCookiesChoice('declined')
    },
    savePreferences() {
      const choice = this.cookiePrefs.audience ? 'accepted' : 'declined'
      this.cookieChoice = choice
      localStorage.setItem('btc_cookie_consent', choice)
      localStorage.setItem('btc_cookie_prefs', JSON.stringify(this.cookiePrefs))
      this.showCookiesPanel = false
    },
    handleLogoError() {
      if (this.logoSrc !== '/logo_sidebar.png') {
        this.logoSrc = '/logo_sidebar.png'
      }
    },
  },
}
</script>



<style scoped>
.footer-global {
  width: 100%;
  position: relative;
  background-color: #0d111c;
}

.page-footer-bandeau {
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
}

.footer-card {
  background: transparent;
  padding: 1.25rem 2.25rem;
  border-radius: 0;
  box-shadow: none;
}
</style>

