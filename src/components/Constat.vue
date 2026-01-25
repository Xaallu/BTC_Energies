<template>
  <section class="w-full overflow-hidden relative">
    <div class="relative aspect-[1/1] sm:aspect-video md:aspect-[5/2] w-full">
 
     <video
       autoplay
       loop
       muted
       playsinline
       class="absolute top-0 left-0 w-full h-full object-cover object-center"
     >
       <source src="/videos/Bienvenuesurnotresite.mp4" type="video/mp4" />
       Votre navigateur ne supporte pas la lecture de vidéos HTML5.
     </video>
   </div>
 </section>

  <div class="w-full py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
    <div class="w-full max-w-[1200px] mx-auto px-4">
      <div class="text-center">
        <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>
        <h1
          class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
          style="font-size: clamp(2.1rem, 2.8vw, 3rem);"
        >
          {{ $t("notre_constat.constat_titre") }}
        </h1>
        <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>
        <br>
        <h1
          class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
          style="font-size: clamp(0.9rem, 1.7vw, 2rem);"
        >
          {{ $t("texte_bandeau_bleu") }}
        </h1>
      </div>
    </div>
  </div>

  <div class="main-content-wrapper">
    <div class="constat-body w-full flex flex-col gap-10">
      <v-container fluid class="min-h-screen px-0 py-8">
        <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-6xl w-full mx-auto lg:mx-0">
          <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">
            <br />
            <br />
            <div class="text-[#475C79] text-center font-bold">
              <p>{{ $t('notre_constat.intro1_Le monde continue') }}</p>
              <br />
              <p>{{ $t('notre_constat.intro2_Ces solutions sont vastes') }}</p>
            </div>

            <br />
            <br />
            <v-row justify="center">
              <v-col cols="12" md="10">
                <div class="aspect-video">
                  <iframe
                    class="w-full h-full"
                    src="https://www.youtube.com/embed/hOIWuE_eEsM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </v-col>
            </v-row>

            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
            <br />

            <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
              <v-col cols="12" md="6">
                <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                  {{ $t('notre_constat.titre2_Technologie') }}
                  <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                </h3>
                <p class="indent-8">
                  {{ $t('notre_constat.intro3_Les avancees technologiques') }}
                </p>
              </v-col>
              <br>
              <v-col cols="12" md="6">
                <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                  {{ $t('notre_constat.titre3_Durabilite environnementale') }} 
                  <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                </h3>
                <p class="indent-8">
                  {{ $t('notre_constat.intro4_Face aux defis') }}
                </p>
              </v-col>
            </v-row>

            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
            <br />

            <v-row justify="center" class="my-6">
              <v-col cols="12" md="8" class="text-center">
                  <img src="/Q_C_C.png" alt="Nos services BTC Energies" loading="lazy" class="w-full max-w-3xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
                <div class="flex justify-center items-center gap-4 text-sm mt-2 text-gray-600">
                  <p>{{ $t('notre_constat.um') }}</p>
                  <p>{{ $t('notre_constat.ugh') }}</p>
                </div>
              </v-col>
            </v-row>

            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
            <br>

            <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
              <v-col cols="12" md="4">
                <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                  <p>{{ $t('notre_constat.titre5_Environnement') }}</p>
                  <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                </h3>
                <p class="indent-8">
                  {{ $t('notre_constat.intro5_Nous nous sommes') }}
                </p>
              </v-col>
              <br>
              <v-col cols="12" md="4">
                <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                  {{ $t('notre_constat.titre6_Economie circulaire') }}
                  <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                </h3>
                <p class="indent-8">
                  {{ $t('notre_constat.intro6_Nous croyons en la') }} 
                </p>
                <br>
              </v-col>
              <v-col cols="12" md="4">
                <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                  {{ $t('notre_constat.titre7_Innovation durable') }}
                  <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                </h3>
                <p class="indent-8">
                  {{ $t('notre_constat.intro7_Nous soutenons') }}
                </p>
              </v-col>
            </v-row>

            <br>
            <br>
            <v-row justify="center">
              <v-col cols="12" md="10">
                <p class="text-center text-[#475C79] font-bold">
                  {{ $t('notre_constat.intro8_En tant qu entreprise') }}
                </p>
                <br />
                <p class="text-center text-[#475C79] font-bold">
                  {{ $t('notre_constat.intro9_Notre industrie') }}
                </p>
                <div class="flex flex-col items-center text-center">
                  <br>
                  <br>
                  <a
                    href="/solutions"
                    class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner flex items-center gap-2"
                  >                    
                    {{ $t('notre_constat.clic1_Nos Solutions') }}
                  </a>
                </div>
              </v-col>
            </v-row>

            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHead } from '@vueuse/head'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export default {
  name: 'Constat',
  setup() {
    onMounted(() => {
      if (prefersReducedMotion) {
        gsap.set('.bandeau_bleu-trait', { scaleX: 1 });
        gsap.set('.bandeau_bleu-text', { opacity: 1 });
        return;
      }
      // Animation d'apparition progressive des titres <h3>
      gsap.utils.toArray('h3').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: "play none none reset",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // ✅ Animation des traits verts
      gsap.utils.toArray('.bandeau_bleu-trait').forEach((trait) => {
        gsap.fromTo(
          trait,
          { scaleX: 0, transformOrigin: 'center' },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: trait,
              start: 'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      const bandeauBleuText = document.querySelector('.bandeau_bleu-text');
      if (bandeauBleuText) {
        gsap.fromTo(bandeauBleuText, { opacity: 0, y: -40, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 3.1, ease: 'power2.out' });
      }

      // Animation des paragraphes
      gsap.utils.toArray('p').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: "play none none reset",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
        })
      })

      // Animation du logo dans le bandeau
      gsap.from('.bandeau_bleu img', {
        scrollTrigger: {
          trigger: '.bandeau_bleu',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        },
        scale: 0.5,
        opacity: 0,
        duration: 5,
        ease: 'back.out(1.7)',
      })
    })
  },
}

// 👉 SEO dynamique - Page "Notre Constat"
useHead({
  title: 'Notre Constat - BTC Énergies',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le constat de BTC Énergies sur les enjeux environnementaux, technologiques et durables de demain. Vidéos, explications et vision claire.',
    },
    {
      name: 'keywords',
      content: 'transition énergétique, environnement, économie circulaire, innovation durable, BTC Énergies, écologie, technologies vertes',
    },
    {
      property: 'og:title',
      content: 'Notre Constat - BTC Énergies',
    },
    {
      property: 'og:description',
      content: 'BTC Énergies vous présente son analyse des défis environnementaux et ses solutions durables. Découvrez notre vision pour un avenir meilleur.',
    },
    {
      property: 'og:image',
      content: 'https://btc-energies.fr/favicon.jpg',
    },
    {
      property: 'og:url',
      content: 'https://btc-energies.com/constat',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
});
</script>

<style scoped>
.v-main {
  padding: 0 !important;
  margin: 0 !important;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
.v-application--wrap {
  max-width: 100vw !important;
}

.video-full-width_gif {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}
.video-full-width_gif video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.main-content-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 140px);
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}

@media (max-width: 1280px) {
  .main-content-wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 768px) {
  .main-content-wrapper,
  .constat-body {
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }

  .main-content-wrapper {
    width: 100vw;
    margin-left: 0;
  }

  .constat-body {
    width: 100vw;
  }

  .constat-body > .v-container,
  .constat-body .bg-white {
    width: 100%;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
}

.constat-body {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ✅ Version mobile */
@media (max-width: 960px) {
  .video-full-width_gif {
    margin-left: 0;
    width: 100%;
  }
}
</style>
