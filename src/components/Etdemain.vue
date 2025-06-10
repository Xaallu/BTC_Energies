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

        <!-- Contenu principal -->
        <v-col class="pa-0 ma-0">
          <div class="main-content">
            <Header />

            <!-- Bloc vidéo -->
            <section class="video-banner relative w-full h-[90vh] overflow-hidden">
              <video autoplay loop muted playsinline preload="auto" class="relative aspect-[1/1] sm:aspect-video md:aspect-[5/2] w-full">
                <source src="/videos/animation_eau2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos HTML5.
              </video>

              <!-- Logo -->
              <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-16 sm:w-20 md:w-24 lg:w-28 h-auto" />
              </div>

              <!-- Texte centré -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">{{ $t('Etdemain.titre') }}</h2>
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                 {{ $t('Etdemain.textIntroHead') }}
                </p>
                <div class="mb-8"></div> 
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
              </div>
            </section>

            <!-- Bloc blanc après la vidéo -->
            
              <section>
              
             <v-container class="min-h-screen flex items-center justify-center px-4 py-8">
               <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
                <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">
                  <section class="bg-white py-10 px-6 md:px-16">

                  <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
                    

                    <!-- Titre principal -->
                <h1 class="text-3xl font-bold text-[#777777] text-left">
                  {{ $t('Etdemain.titrePrincipal') }}
                </h1>
                <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-2"></div>
                <div class="mb-8"></div> 

                <!-- Image -->
                <div class="flex justify-center mt-8">
                  <img
                    src="/etdemain.png"
                    alt="Avenir de BTC Energie"
                    class="w-[320px] sm:w-[500px] md:w-[650px] h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                <!-- Intro -->
                <p class="text-[#475C79] font-bold text-center mt-6">
                  {{ $t('Etdemain.intro') }}
                </p>

                <!-- Bloc 1 -->
                <div class="gsap-bloc mt-12">
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto"></div>
                  <div class="mb-8"></div>

                  <p class="text-gray-600">
                    {{ $t('Etdemain.bloc1_phrase') }}
                  </p>

                  <ul class="list-disc pl-8 text-gray-600 space-y-2 mt-4">
                    <li>{{ $t('Etdemain.bloc1_liste1') }}</li>
                    <li>{{ $t('Etdemain.bloc1_liste2') }}</li>
                    <li>{{ $t('Etdemain.bloc1_liste3') }}</li>
                  </ul>
                </div>

                <!-- Bloc 2 -->
                <div class="gsap-bloc mt-12">
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                  <div class="mb-8"></div>

                  <p class="text-gray-600">{{ $t('Etdemain.bloc2_phrase1') }}</p>
                  <div class="mb-4"></div>
                  <p class="text-gray-600">{{ $t('Etdemain.bloc2_phrase2') }}</p>
                  <div class="mb-4"></div>
                  <p class="text-gray-600">{{ $t('Etdemain.bloc2_phrase3') }}</p>

                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-10"></div>
                  <div class="mb-8"></div>

                  <p class="text-3xl text-[#8BC367] font-semibold text-center mt-6">
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
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">{{ $t('Etdemain.Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
                {{ $t('Etdemain.Nos Coordonnées') }}
              </a>
            </div>
          </div>
        </div>
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

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

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
});
</script>
