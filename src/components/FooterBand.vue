<template>
  <div class="page-footer-bandeau bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 items-center text-white gap-6">
      <div class="flex justify-center">
        <img
          height="526"
          width="595"
          decoding="async"
          loading="lazy"
          src="/logo_sidebar.png"
          alt="BTC Énergies Logo"
          class="w-28 sm:w-40 h-auto max-h-32"
          ref="footerLogo"
        />
      </div>
      <div></div>
      <div class="flex flex-col items-center text-center">
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
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerLogo = ref(null)
let ctx

onMounted(async () => {
  await nextTick()

  if (!footerLogo.value) return

  // Important: on force un état initial propre
  gsap.set(footerLogo.value, { scale: 0, opacity: 0, transformOrigin: 'center center' })

  ctx = gsap.context(() => {
    gsap.to(footerLogo.value, {
      scale: 1,
      opacity: 1,
      duration: 2.2,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: footerLogo.value,
        start: 'top 85%',              // plus safe que 65%
        toggleActions: 'play none none none', // ne re-cache pas le logo
        invalidateOnRefresh: true,
      },
    })
  }, footerLogo)

  // Refresh pour SPA + images lazy
  ScrollTrigger.refresh()
  window.addEventListener('load', ScrollTrigger.refresh, { once: true })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>



<style scoped>
.bandeau_bleu {
  position: relative;
  z-index: 1;
}
</style>
