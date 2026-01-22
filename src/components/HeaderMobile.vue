<template>
  <div class="flex items-center justify-between gap-2 bg-[#061832] text-white px-2 sm:px-4 py-2 sm:py-3 lg:hidden fixed top-0 left-0 right-0 z-50">
    <!-- Logo -->
    <div class="flex items-center shrink-0">
      <img height="526" width="595" decoding="async" loading="lazy" src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-9 sm:h-11 md:h-12 w-auto" />
    </div>

    <div class="flex-1 flex justify-center">
      <img height="115" width="267" decoding="async" loading="lazy"
        ref="logoS"
        src="/LeSoDeDe.png"
        alt="Les solutions de demain"
        class="h-10 sm:h-12 md:h-14 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[260px]"
      />
    </div>


    <!-- Bouton burger -->
    <button @click="$emit('toggleSidebar')" class="text-white focus:outline-none p-1 shrink-0">
      <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</template>

<script setup>
// Pas besoin de script pour l'instant car le composant est très simple et utilise uniquement les events natifs
</script>

<style scoped>
/* Optionnel : tu peux améliorer un peu le focus du bouton burger pour l’accessibilité */
button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
