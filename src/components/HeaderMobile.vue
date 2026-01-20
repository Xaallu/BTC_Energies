<template>
  <div class="flex items-center justify-between gap-2 bg-[#061832] text-white px-2 sm:px-4 py-2 sm:py-3 lg:hidden fixed top-0 left-0 right-0 z-50">
    <!-- Logo -->
    <div class="flex items-center shrink-0">
      <img src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-9 sm:h-11 md:h-12 w-auto" />
    </div>

    <div class="flex-1 flex justify-center">
      <img
        ref="logoS"
        src="/LeSoDeDe.png"
        alt="Les solutions de demain"
        class="h-7 sm:h-9 md:h-11 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px]"
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
