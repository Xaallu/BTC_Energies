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
      <v-col>    

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
              <v-container class="min-h-screen flex items-center justify-center px-4 py-8">
               <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
              <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">


                    <h2 class="page-blanche_app-title">
                      {{ $t('notre_constat.constat_titre') }}
                    </h2>

                    <br />
                    <br />
                    <div class="text-[#475C79] text-center font-bold">
                      <p>{{ $t('notre_constat.intro1_Le monde continue') }}</p>
                      <br />
                      <p>{{ $t('notre_constat.intro2_Ces solutions sont vastes') }}</p>
                    </div>
                    

                <br />
                <br />
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

                <br />

                <!-- Grid x2 -->
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

                <!-- Image + légendes -->
                <v-row justify="center" class="my-6">
                  <v-col cols="12" md="8" class="text-center">
                    <img src="/Q_C_C.png" alt="Nos services BTC Energies" class="w-full max-w-3xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
                    <div class="flex justify-center items-center gap-4 text-sm mt-2 text-gray-600">
                      <p>{{ $t('notre_constat.um') }}</p>
                      <p>{{ $t('notre_constat.ugh') }}</p>
                    </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br>
                
                <!-- Grid x3 -->
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
                <!-- Texte final -->
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
                  <a href="/solutions"
                  class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                    hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                    active:scale-95 active:shadow-inner flex items-center gap-2">                    
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
        <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
          <div class="grid grid-cols-1 sm:grid-cols-3 items-center text-white px-4 sm:px-8 py-6 gap-6">
            <!-- Colonne 1 : Logo -->
            <div class="flex justify-center">
              <img
                src="/logo_sidebar.png"
                ref="logoSidebar"
                alt="BTC Énergies Logo"
                class="w-28 sm:w-40 h-auto max-h-32"
              />
            </div>

            <!-- Colonne 2 : Vide ou contenu futur -->
            <div></div>

            <!-- Colonne 3 : Texte et bouton -->
            <div class="flex flex-col items-center text-center">
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">{{ $t('notre_constat.clic2_Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
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
</style>
