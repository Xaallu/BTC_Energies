<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Sidebar -->
        <v-col cols="12" md="2" class="pa-0 hidden">
          <div class="sidebar">
            <Sidebar />
          </div>
        </v-col>

        <!-- Contenu principal -->
        <v-col class="pa-0 ma-0 etdemain-page">
          <div class="main-content">
            <Header />


             <!-- Video GIF haut de page -->
                   <section class="w-full overflow-hidden relative">
                     <div class="relative aspect-[1/1] sm:aspect-video md:aspect-[5/2] w-full">
                  
                      <video
                        autoplay
                        loop
                        muted
                        playsinline
                        class="absolute top-0 left-0 w-full h-full object-cover object-center"
                      >
                        <source src="/videos/Bienvenuesurnotresite.web.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos HTML5.
                      </video>
                    </div>
                  </section>
            
            
            <!-- Bandeau bleu -->
            <div class="w-full py-12 sm:py-16 lg:py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)] etdemain-banner">
              <div class="w-full max-w-[1200px] mx-auto px-4 sm:px-6 etdemain-banner-inner">
            
                <!-- Groupe centré mais décalé vers la gauche -->
                <div class="text-center">
                  <!-- Trait supérieur -->
                  <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>
            
                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                       style="font-size: clamp(2.1rem, 2.8vw, 3rem);">
                    {{ $t("Etdemain.titre") }}
                  </h1>
            
                  <!-- Trait inférieur -->
                  <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>
                  <div class="h-4 sm:h-6"></div>
                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(0.9rem, 1.7vw, 2rem);">
                    {{ $t("Etdemain.textIntroHead") }}
                  </h1>
                </div>
            
              </div>
            </div>
            

            <!-- Bloc blanc après la vidéo -->
            
              <section>
              
             <v-container fluid class="min-h-screen flex items-center justify-center px-0 sm:px-4 py-6 sm:py-8 etdemain-content-wrapper">
               <div class="w-full px-0 sm:px-6 md:px-10 lg:px-12 xl:px-16 etdemain-content-inner">

                <div class="bg-white rounded-none sm:rounded-2xl shadow-md w-full sm:max-w-5xl sm:mx-auto px-4 py-6 sm:p-6 md:p-8 etdemain-white-block">
                  <section class="bg-white py-6 sm:py-10 px-3 sm:px-6 md:px-10 lg:px-16">

                  <div class="gsap-bloc sm:hover:scale-[1.08] transition-transform duration-300 ease-in-out">
                    

                    <!-- Titre principal -->
                <h1 class="text-2xl sm:text-3xl font-bold text-[#777777] text-left">
                  {{ $t('Etdemain.titrePrincipal') }}
                </h1>
                <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-2"></div>
                <div class="h-5 sm:h-8"></div> 

                <!-- Image -->
                <div class="flex justify-center mt-6 sm:mt-8">
                <img height="403" width="585" decoding="async" loading="lazy"
                    src="/etdemain.png"
                    alt="Avenir de BTC Energie"
                    class="w-[240px] sm:w-[420px] md:w-[560px] lg:w-[650px] max-w-full h-auto object-contain transition-transform duration-300 ease-in-out sm:hover:scale-110"
                  />
                </div>

                <!-- Intro -->
                <p class="text-[#475C79] font-bold text-center mt-6 text-sm sm:text-base max-w-2xl mx-auto">
                  {{ $t('Etdemain.intro') }}
                </p>

                <!-- Bloc 1 -->
                <div class="gsap-bloc mt-6 sm:mt-12">
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto"></div>
                  <div class="h-5 sm:h-8"></div>

                  <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {{ $t('Etdemain.bloc1_phrase') }}
                  </p>

                  <ul class="list-disc pl-5 sm:pl-8 text-gray-600 text-sm sm:text-base space-y-1 sm:space-y-2 mt-4">
                    <li>{{ $t('Etdemain.bloc1_liste1') }}</li>
                    <li>{{ $t('Etdemain.bloc1_liste2') }}</li>
                    <li>{{ $t('Etdemain.bloc1_liste3') }}</li>
                  </ul>
                </div>

                <!-- Bloc 2 -->
                <div class="gsap-bloc mt-6 sm:mt-12">
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                  <div class="h-5 sm:h-8"></div>

                  <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ $t('Etdemain.bloc2_phrase1') }}</p>
                  <div class="mb-4"></div>
                  <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ $t('Etdemain.bloc2_phrase2') }}</p>
                  <div class="mb-4"></div>
                  <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ $t('Etdemain.bloc2_phrase3') }}</p>

                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-8 sm:mt-10"></div>
                  <div class="h-5 sm:h-8"></div>

                  <p class="text-xl sm:text-2xl md:text-3xl text-[#8BC367] font-semibold text-center mt-6">
                    {{ $t('Etdemain.citation') }}
                  </p>
                </div>

              </div>
            </section>
          </div>
        </div>
      </v-container>
            
    </section>
         
        </div>
      </v-col>

   
                        
      </v-row>
    </v-main>
  </v-app>
</template>


<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import { useHead } from '@vueuse/head';

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);
const prefersReducedMotion =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

onMounted(async () => {
  await nextTick();

  if (prefersReducedMotion) {
    gsap.set('.gsap-bloc', { opacity: 1, y: 0 });
    gsap.set('.bandeau_bleu-trait', { scaleX: 1 });
    gsap.set('.bandeau_bleu-text', { opacity: 1 });
    return;
  }

  // Animation scroll des blocs de contenu
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        // markers: true, // ← active pour debug
      },
    });
  });

  // Animation du logo dans le bandeau bleu
  gsap.from(logoSidebar.value, {
    scrollTrigger: {
      trigger: logoSidebar.value,
      start: 'top 90%',
      toggleActions: 'play reverse play reverse',
    },
    scale: 0,
    opacity: 0,
    duration: 5,
    ease: 'back.out(1.7)',
  });

   // Animation du texte du bandeau bleu
    gsap.utils.toArray('.bandeau_bleu-text').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: -40, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 3.1, ease: 'power2.out' }
    );
  });

      // ✅ Animation des traits verts
  gsap.utils.toArray('.bandeau_bleu-trait').forEach((trait) => {
    gsap.fromTo(
      trait,
      { scaleX: 0, transformOrigin: 'center' },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: trait,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
  
});

useHead({
  title: 'Et Demain - BTC Energies',
  meta: [
    {
      name: 'description',
      content:
        'Decouvrez la vision de BTC Energies pour demain : innovation, transition energetique et engagement durable.',
    },
    { property: 'og:url', content: 'https://www.btc-energies.fr/etdemain' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/etdemain' }],
});
</script>

<style scoped>
.etdemain-hero,
.etdemain-banner {
  width: 100%;
}

.etdemain-banner-inner,
.etdemain-content-inner {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.etdemain-white-block {
  width: 100%;
}

@media (max-width: 1280px) {
  .etdemain-banner-inner,
  .etdemain-content-inner,
  .etdemain-white-block {
    max-width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin: 0;
  }

  .etdemain-banner,
  .etdemain-content-wrapper,
  .etdemain-hero {
    padding-left: 0;
    padding-right: 0;
  }

  .etdemain-white-block {
    border-radius: 0;
  }

  :global(.main-content) {
    margin-left: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
