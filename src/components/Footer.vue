<template>
  <footer class="footer-global text-white text-sm">
    <div class="max-w-[1200px] mx-auto px-6 py-6 text-center">
      <p class="mb-1">{{ $t('Footer.siteoptimise') }}</p>
      <p>
        {{ $t('Footer.Site conçu et') }}
        <a href="#" @click.prevent="openCookies" class="underline hover:text-gray-300">
          {{ $t('Footer.Cookies') }}
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    openCookies() {
      if (window.tarteaucitron && window.tarteaucitron.userInterface) {
        window.tarteaucitron.userInterface.openPanel();
      } else {
        alert('Panneau cookies indisponible.');
      }
    }
  }
}
</script>

<style scoped>
.footer-global {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #0d111c;
}
</style>
