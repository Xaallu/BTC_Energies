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

           <!-- Bloc vidéo -->
      <section class="video-banner relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/animation_eau2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos HTML5.
        </video>
   
        <!-- Logo -->
        <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <img height="526" width="595" decoding="async" loading="lazy" src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-14 sm:w-16 h-auto max-w-full" />
        </div>

            <!-- Texte centré -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">{{ $t('MentionsLégales.titre') }}</h2>

                <!-- Trait visible sous le texte -->
                <div class="w-24 h-[2px] bg-white opacity-90"></div>

              </div>
            </section>

            

           <!-- Section Mentions Légales -->
            
         
           <v-container class="bg-gray-100 flex flex-col items-start px-3 sm:px-4 md:px-6 lg:px-8 py-5 sm:py-8 gsap-mentions">



              <!-- Titre + soulignement -->
            
             <div class="w-full text-center mb-10">
             <!--  <h1 class="text-4xl font-bold text-[#555]">{{ $t('MentionsLégales.titre') }}Mentions Légales</h1> -->
              <!--<div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1 mx-auto"></div> -->
            </div>

              <!-- Bloc principal : Logo à gauche / Infos à droite -->
            <div class="flex flex-col md:flex-row items-start justify-start gap-5 sm:gap-8 md:gap-12 w-full px-0 sm:px-4">

                <!-- Colonne gauche : Logo + Coordonnées -->
                <div class="flex flex-col items-center md:items-start ml-0 md:ml-6">
                <img height="1735" width="1793" decoding="async" loading="lazy"
                  src="/favicon2.jpg"
                  alt="Logo BTC Energies"
                  class="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto rounded-md object-cover transition-transform duration-300 ease-in-out sm:hover:scale-110 mb-4"
                />
              </div>


             <!-- CGU -->
          <div id="cgu" class="w-full mt-8 sm:mt-16 text-gray-800 sm:max-w-4xl sm:mx-auto text-sm sm:text-base">
            <h1 class="text-gray-600 text-2xl sm:text-3xl space-y-3">{{ $t('MentionsLégales.titreCGU') }}</h1>

            <!-- Titre souligner-->
            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-2"></div>

            <div class="h-6 sm:h-8"></div>

            <p class="mb-4"><span class="ml-5"></span>{{ $t('MentionsLégales.cguIntro') }}</p>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit"></p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">{{ $t('MentionsLégales.accesTitre') }}</h2>
           <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.accesTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">{{ $t('MentionsLégales.proprieteTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">
              {{ $t('MentionsLégales.proprieteTexte') }}
            </p>


            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">{{ $t('MentionsLégales.responsabiliteTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.responsabiliteTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3 mt-6">{{ $t('MentionsLégales.droitTitre') }}</h2>
            <p>{{ $t('MentionsLégales.droitTexte') }}</p>
          </div>

          <!-- Politique de confidentialité -->
          <div id="confidentialite" class="w-full mt-8 sm:mt-16 text-gray-800 sm:max-w-4xl sm:mx-auto text-sm sm:text-base">
            <h1 class="text-gray-600 text-2xl sm:text-3xl space-y-3">{{ $t('MentionsLégales.titreConfidentialite') }}</h1>
            <div class="w-20 h-1 bg-[#8BC367] rounded-full mt-2"></div>

            <div class="h-6 sm:h-8"></div>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">1. {{ $t('MentionsLégales.donneesTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.donneesTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">2. {{ $t('MentionsLégales.finaliteTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.finaliteTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">3. {{ $t('MentionsLégales.legaleTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.legaleTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">4. {{ $t('MentionsLégales.destinatairesTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.destinatairesTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">5. {{ $t('MentionsLégales.dureeTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.dureeTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">6. {{ $t('MentionsLégales.droitsTitre') }}</h2>
            <p class="mb-4 relative pb-2 border-b-2 border-[#8BC367] w-fit">{{ $t('MentionsLégales.droitsTexte') }}</p>

            <h2 class="text-gray-600 text-lg sm:text-xl space-y-3">7. {{ $t('MentionsLégales.cookiesTitre') }}</h2>
            <p>{{ $t('MentionsLégales.cookiesTexte') }}</p>
          </div>


                  <div class="h-6 sm:h-8"></div>
                    
              </div>

                <!-- Ligne de sépartion verte-->
        <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-12 mx-auto mt-6"></div>

<div class="h-6 sm:h-8"></div>

    <!-- Colonne droite : Infos légales -->


      <div class="w-full flex justify-center px-2 sm:px-4">
  <div class="flex-1 max-w-4xl">
        <ul class="text-gray-600 text-base sm:text-lg md:text-xl space-y-3">
           <h2 class="text-gray-600 text-xl sm:text-2xl md:text-3xl space-y-3">{{ $t('MentionsLégales.contactTitre') }}</h2>
           <div class="w-12 h-1 bg-[#8BC367] rounded-full mt-2"></div>
 

  <li>
  {{ $t('MentionsLégales.contactQuestion') }}
  <span class="text-[#8BC367]">direction@btc-energies.fr</span>
</li>

  <div class="h-6 sm:h-8"></div>

          <li><strong>{{ $t('MentionsLégales.raisonSociale') }}</strong></li>
          <li>{{ $t('MentionsLégales.formeJuridique') }}</li>
          <li>{{ $t('MentionsLégales.capitalSocial') }}</li>
          <li>{{ $t('MentionsLégales.adresseSiege') }}</li>
          <!-- Ligne de sépartion verte-->
        <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-12 mx-auto mt-6"></div>
        </ul>

        <div class="h-6 sm:h-8"></div>

        

        <div class="h-6 sm:h-8"></div>


         <!-- Coordonnées -->
        <div class="mt-4 space-y-2 text-left">
                <p class="text-base sm:text-lg italic font-semibold text-gray-700">
          {{ $t('MentionsLégales.telephoneLabel') }}
          <span class="text-[#8BC367]">{{ $t('MentionsLégales.telephoneNumero') }}</span>
        </p>
        <p class="text-base sm:text-lg italic font-semibold text-gray-700">
            {{ $t('MentionsLégales.emailLabel') }}
          </p>

          <!-- Adresses email vertes, sans effet hover visible -->
          <a
            href="mailto:direction@btc-energies.fr"
            class="block text-base sm:text-lg md:text-xl text-[#8BC367] hover:text-[#8BC367] visited:text-[#8BC367] focus:text-[#8BC367] active:text-[#8BC367] transition-transform duration-200 sm:hover:scale-105"
          >
            direction@btc-energies.fr
          </a>
          <a
            href="mailto:kermon31@gmail.com"
             class="block text-base sm:text-lg md:text-xl text-[#8BC367] hover:text-[#8BC367] visited:text-[#8BC367] focus:text-[#8BC367] active:text-[#8BC367] no-underline transition-transform duration-200 sm:hover:scale-105"
          >
            kermon31@gmail.com
          </a>
        </div>
      </div>
      </div>

            <!-- Ligne de séparation verte -->
      <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

        <!-- Marge interne -->
        <div class="h-3 sm:h-4"></div>

        <!-- Bloc RCS & TVA parfaitement centré avec alignement propre -->
        <div class="w-full flex justify-center px-3 sm:px-4">
        <p class="text-gray-700 text-sm sm:text-base text-center max-w-4xl leading-relaxed">
          <span class="font-semibold">{{ $t('MentionsLégales.rcsLabel') }}</span>
          {{ $t('MentionsLégales.rcsValue') }}
          <span class="mx-4 text-[#8BC367]">|</span>
          <span class="font-semibold">{{ $t('MentionsLégales.tvaLabel') }}</span>
          {{ $t('MentionsLégales.tvaValue') }}
        </p>
      </div>



      </v-container>
   

            

                <!-- Bandeau bas -->
        <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
          <div class="grid grid-cols-1 sm:grid-cols-3 items-center text-white px-4 sm:px-8 py-6 gap-6">
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

            <!-- Colonne 3 : Texte et bouton -->
            <div class="flex flex-col items-center text-center">
              <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl mb-4 text-white">{{ $t('MentionsLégales.Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                {{ $t('MentionsLégales.Nos Coordonnées') }}
              </a>
            </div>
          </div>
        </div>
          </v-col>
        </v-row>
      
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import { useHead } from '@vueuse/head';

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animation du container "Mentions légales"
  gsap.from(".gsap-mentions", {
    scrollTrigger: {
      trigger: ".gsap-mentions",
      start: "top 80%", // quand 20% du container entre dans la vue
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 3.2,
    ease: "power3.out"
  });

  //  Animation du logo au scroll
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

useHead({
  title: 'Mentions legales - BTC Energies',
  meta: [
    {
      name: 'description',
      content:
        'Mentions legales, politique de confidentialite et informations legales de BTC Energies.',
    },
    { property: 'og:url', content: 'https://www.btc-energies.fr/mentions-legales' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/mentions-legales' }],
});
</script>




