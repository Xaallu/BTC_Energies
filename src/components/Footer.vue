<template>
  <footer class="footer-global text-white text-xs sm:text-sm">
    <div class="w-full sm:max-w-[1200px] sm:mx-auto px-4 sm:px-6 py-5 sm:py-6 text-center">
      <p class="mb-1">{{ $t('Footer.siteoptimise') }}</p>
      <p>
        {{ $t('Footer.Site conçu et') }}
        <a href="#" @click.prevent="openCookies" class="underline hover:text-gray-300">
          {{ $t('Footer.Cookies') }}
        </a>
      </p>
    </div>
    <div
      v-if="showCookiesPanel"
      class="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-3 sm:px-4 py-4 sm:py-6 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookies-title"
      @click.self="closeCookies"
    >
      <div class="w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-white text-gray-900 shadow-2xl max-h-[90vh] overflow-y-auto">
  <div class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 py-4">
    <h2 id="cookies-title" class="text-base sm:text-lg font-semibold text-gray-900">
      {{ $t('cookies.title') }}
    </h2>
    <button
      type="button"
      class="rounded-full px-2 py-1 text-gray-500 hover:text-gray-700"
      @click="closeCookies"
      :aria-label="$t('common.close')"
    >
      X
    </button>
  </div>

  <div class="px-4 sm:px-6 py-5 text-xs sm:text-sm leading-relaxed text-gray-700">
    <p class="mb-4">
      {{ $t('cookies.description') }}
    </p>

    <p class="mb-4 font-medium text-gray-900">
      {{ $t('cookies.currentChoice') }} : {{ cookieChoiceLabel }}
    </p>

    <router-link to="/mentions-legales" class="text-[#0d5f2c] underline">
      {{ $t('cookies.policyLink') }}
    </router-link>
  </div>

  <div class="flex flex-col gap-3 border-t border-gray-200 px-4 sm:px-6 py-4 sm:flex-row sm:justify-end">
    <button
      type="button"
      class="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-xs sm:text-sm font-semibold text-red-700 hover:bg-red-100 w-full sm:w-auto"
      @click="setCookiesChoice('declined')"
    >
      {{ $t('cookies.decline') }}
    </button>

    <button
      type="button"
      class="rounded-full bg-[#0d5f2c] px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#0b4d24] w-full sm:w-auto"
      @click="setCookiesChoice('accepted')"
    >
      {{ $t('cookies.accept') }}
    </button>
  </div>
</div>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showCookiesPanel: false,
      cookieChoice: null
    };
  },
  computed: {
    cookieChoiceLabel() {
      if (this.cookieChoice === 'accepted') return 'Acceptes';
      if (this.cookieChoice === 'declined') return 'Refuses';
      return 'Non defini';
    }
  },
  mounted() {
    const storedChoice = localStorage.getItem('btc_cookie_consent');
    if (storedChoice) {
      this.cookieChoice = storedChoice;
    }
  },
  methods: {
    openCookies() {
      this.showCookiesPanel = true;
    },
    closeCookies() {
      this.showCookiesPanel = false;
    },
    setCookiesChoice(choice) {
      this.cookieChoice = choice;
      localStorage.setItem('btc_cookie_consent', choice);
      this.showCookiesPanel = false;
    }
  }
}
</script>

<style scoped>
.footer-global {
  width: 100%;
  position: relative;
  background-color: #0d111c;
}
</style>

