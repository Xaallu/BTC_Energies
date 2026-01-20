<template>
  
  <v-app>
    
  <v-main class="pa-0 ma-0">
    
    <v-row no-gutters class="pa-0 ma-0">
      
      <!-- Sidebar -->
      <v-col cols="12" md="2" class="pa-0">
        <div class="sidebar">
          <Sidebar />
        </div>
      </v-col>

      <!-- Contenu principal avec la vidéo -->
      <v-col class="pa-0">

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
    
        
             <!-- Section Notre Constat -->

              <!-- Bandeau bleu -->
        <div class="w-full py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
          <div class="w-full max-w-[1200px] mx-auto px-4">

            <!-- Groupe centré -->
            <div class="text-center">
              <!-- Trait supérieur -->
              <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>

              <!-- Texte -->
              <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                  style="font-size: clamp(0.9rem, 2.9vw, 3.2rem);">
                {{ $t("notre_constat.constat_titre") }}
              </h1>

              <!-- Trait inférieur -->
              <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
            </div>

          </div>
        </div>

              <v-container fluid class="min-h-screen px-0 py-6 sm:py-8">
               
               <div class="w-full px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16">
                
                  <div class="constat-card bg-white rounded-xl sm:rounded-2xl shadow-md w-full mx-auto p-5 sm:p-6 md:p-8">


                    

                    <div class="h-4 sm:h-6"></div>
                    <div class="text-[#475C79] text-center font-bold text-sm sm:text-base">
                      <p>{{ $t('notre_constat.intro1_Le monde continue') }}</p>
                      <div class="h-3"></div>
                      <p>{{ $t('notre_constat.intro2_Ces solutions sont vastes') }}</p>
                    </div>
                    
                <div class="h-6 sm:h-8"></div>
                <!-- Vidéo YouTube responsive -->
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

                
                  <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <div class="h-4 sm:h-6"></div>

                
                <!-- Grid x2 -->
                <v-row class="py-6 sm:py-10 px-2 sm:px-6 md:px-10 lg:px-16 text-[#475C79]">
                  <v-col cols="12" md="6">
                    <h3 class="text-center text-green-600 text-xl sm:text-2xl font-semibold mb-4 relative">
                      {{ $t('notre_constat.titre2_Technologie') }}
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-0 sm:indent-8">
                      {{ $t('notre_constat.intro3_Les avancees technologiques') }}
                    </p>
                  </v-col>

                  <v-col cols="12" md="6" class="mt-6 md:mt-0">
                    <h3 class="text-center text-green-600 text-xl sm:text-2xl font-semibold mb-4 relative">
                     {{ $t('notre_constat.titre3_Durabilite environnementale') }} 
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    
                    <p class="indent-0 sm:indent-8">
                      {{ $t('notre_constat.intro4_Face aux defis') }}
                    </p>
                  </v-col>
                </v-row>

                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <div class="h-4 sm:h-6"></div>

                <!-- Image + légendes -->
                <v-row justify="center" class="my-6">
                  <v-col cols="12" md="8" class="text-center">
                    <img height="654" width="855" decoding="async" loading="lazy" src="/Q_C_C.png" alt="Nos services BTC Energies" class="w-full max-w-3xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
                    <div class="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm mt-2 text-gray-600">
                      <p>{{ $t('notre_constat.um') }}</p>
                      <p>{{ $t('notre_constat.ugh') }}</p>
                    </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <div class="h-4 sm:h-6"></div>
                
                <!-- Grid x3 -->
                <v-row class="py-6 sm:py-10 px-2 sm:px-6 md:px-10 lg:px-16 text-[#475C79]">
                  <v-col cols="12" md="4">
                    <h3 class="text-center text-green-600 text-xl sm:text-2xl font-semibold mb-4 relative">
                      <p>{{ $t('notre_constat.titre5_Environnement') }}</p>
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-0 sm:indent-8">
                      {{ $t('notre_constat.intro5_Nous nous sommes') }}
                    </p>
                  </v-col>
                  <v-col cols="12" md="4" class="mt-6 md:mt-0">
                    <h3 class="text-center text-green-600 text-xl sm:text-2xl font-semibold mb-4 relative">
                      {{ $t('notre_constat.titre6_Economie circulaire') }}
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-0 sm:indent-8">
                     {{ $t('notre_constat.intro6_Nous croyons en la') }} 
                    </p>
                  </v-col>

                  <v-col cols="12" md="4" class="mt-6 md:mt-0">
                    <h3 class="text-center text-green-600 text-xl sm:text-2xl font-semibold mb-4 relative">
                     {{ $t('notre_constat.titre7_Innovation durable') }}
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-0 sm:indent-8">
                      {{ $t('notre_constat.intro7_Nous soutenons') }}
                    </p>
                  </v-col>
                </v-row>

                <div class="h-6 sm:h-8"></div>
                <!-- Texte final -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <p class="text-center text-[#475C79] font-bold text-sm sm:text-base">
                      {{ $t('notre_constat.intro8_En tant qu entreprise') }}
                    </p>
                    <div class="h-3"></div>
                    <p class="text-center text-[#475C79] font-bold text-sm sm:text-base">
                     {{ $t('notre_constat.intro9_Notre industrie') }}
                    </p>
                    <div class="flex flex-col items-center text-center">
                  
                  <div class="h-4 sm:h-6"></div>
                  <a href="/solutions"
                  class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                    hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                    active:scale-95 active:shadow-inner flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">                    
                    {{ $t('notre_constat.clic1_Nos Solutions') }}
                  </a>
                </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
              
              </div>
             
            </div>
          </v-container>
            

                 <!-- Bandeau bas -->
        <div class="w-full mt-10 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
          <div class="bandeau_bleu img grid grid-cols-1 sm:grid-cols-3 items-center text-white px-4 sm:px-8 py-6 gap-6">
            <!-- Colonne 1 : Logo -->
            <div class="flex justify-center">
              <img height="526" width="595" decoding="async" loading="lazy"
                src="/logo_sidebar.png"
                ref="logoSidebar"
                alt="BTC Énergies Logo"
                class="w-28 sm:w-40 h-auto max-h-32"
              />
            </div>

            <!-- Colonne 2 : Vide ou contenu futur -->
            <div></div>

            <!-- Colonne 3 : Texte et bouton .-->
            <div class="flex flex-col items-center text-center">
              <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl mb-4 text-white">{{ $t('notre_constat.clic2_Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                      {{ $t('notre_constat.clic3_Nos Coordonnees') }}
              </a>
            </div>
          </div>
        </div>
          </v-col>
        </v-row>
      
    </v-main>
  </v-app>
</template>

<script>
import { onMounted } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHead } from '@vueuse/head';


gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Constat',
  components: {
    Sidebar,
    Header,
  },
  setup() {
    onMounted(() => {
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
          content: 'https://www.btc-energies.fr/constat',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/constat' }],
    });

</script>



<style scoped>

.v-main {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw;
  max-width: 100vw;
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

/* ✅ Version mobile */
@media (max-width: 960px) {
  .video-full-width_gif {
    margin-left: 0;
    width: 100%;
  }
}

.constat-card {
  max-width: 100%;
}

@media (min-width: 768px) {
  .constat-card {
    max-width: 960px;
  }
}

@media (min-width: 1280px) {
  .constat-card {
    max-width: 1080px;
  }
}
</style>
