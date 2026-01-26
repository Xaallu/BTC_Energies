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
                <source src="/videos/Bienvenuesurnotresite.min.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos HTML5.
              </video>
            </div>
          </section>
     

            <!-- Bandeau bleu -->
<div class="w-full py-12 sm:py-16 lg:py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
  <div class="w-full max-w-[1200px] mx-auto px-4 sm:px-6">

    <!-- Groupe centré mais décalé vers la gauche -->
    <div class="text-center">
      <!-- Trait supérieur -->
      <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(1rem, 2.8vw, 2rem);">
        {{ $t("nos_partenaires.Financements et partenaires") }}
      </h1>

        <!-- Trait inférieur -->
          <div 
            class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>
          
      <div class="h-4 sm:h-6"></div>
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(0.9rem, 1.7vw, 2rem);">
        {{ $t("nos_partenaires.textHe_Pour realiser") }}
      </h1>
    </div>
    

  </div>
</div>

    
        
             <!-- Section Notre Constat -->
               <v-container fluid class="min-h-screen flex items-center justify-center px-0 sm:px-4 py-6 sm:py-8">
               <div class="w-full px-0 sm:px-6 md:px-10 lg:px-12 xl:px-16">
            
              <div class="bg-white rounded-none sm:rounded-2xl shadow-md w-full sm:max-w-5xl sm:mx-auto px-4 py-6 sm:p-6 md:p-8">
             

              

              <h2 class="text-2xl sm:text-3xl font-bold text-[#777777] mb-6 text-center">
                {{ $t('nos_partenaires.titre1_Financement participatif') }}
              </h2>

              <!-- Trait vert-->
              <div class="w-16 h-0.5 bg-[#B2D799] mx-auto mb-8"></div>

              <div class="flex justify-center items-center my-6">
            <a href="https://fr.ulule.com/projet-promethee-energies-renouvelables/"
               target="_blank" rel="noopener noreferrer">
              <img height="227" width="239" decoding="async" loading="lazy" src="/partenaire/ulule.png" alt="Ulule" class="w-32 sm:w-36 md:w-40 sm:hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>

          <p class="text-gray-400 text-sm sm:text-base text-center">{{ $t('nos_partenaires.text2_Cliquez sur') }}</p>

          <div class="h-6 sm:h-8"></div>
        
          
          <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

          <div class="h-6 sm:h-8"></div>

                  <!-- Partenaires -->
        <div class="text-center mb-20">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#777777] mb-2">{{ $t('nos_partenaires.titre2_Nos partenaires') }}</h2>

          <!-- Trait vert-->
              <div class="w-16 h-0.5 bg-[#B2D799] mx-auto mb-8"></div>

              <p class="text-gray-500 text-sm sm:text-base">2025</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://h2medproject.com/fr/le-premier-grand-corridor-dhydrogene-vert-deurope/"
               target="_blank" rel="noopener noreferrer">
              <img height="496" width="795" decoding="async" loading="lazy" src="/h2med.png" alt="French Tech Tremplin"
                   class="w-36 sm:w-40 md:w-44 sm:hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">{{ $t('nos_partenaires.text2_h2med') }}</p>

          <div class="h-4 sm:h-6"></div>
          <!-- Trait vert-->
              <div class="w-16 h-0.5 bg-[#B2D799] mx-auto mb-8"></div>

          <p class="text-gray-500 text-sm sm:text-base">2024</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://www.lafrenchtechtoulouse.com/outils-pour-entrepreneurs/programmes/creation-et-amorcage/"
               target="_blank" rel="noopener noreferrer">
              <img height="262" width="264" decoding="async" loading="lazy" src="/partenaire/lafrenchtechtremplin.png" alt="French Tech Tremplin"
                   class="w-32 sm:w-36 md:w-40 sm:hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">{{ $t('nos_partenaires.text2_French Tech') }}</p>
          
          <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
        </div>
       

        <div class="text-center">
          <p class="text-gray-500 text-sm sm:text-base">2024 - 2025</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://lafrenchtechtoulouse.com" target="_blank" rel="noopener noreferrer">
              <img height="296" width="250" decoding="async" loading="lazy" src="/partenaire/lafrenchtechtoulouse.png" alt="French Tech Toulouse"
                   class="w-32 sm:w-36 md:w-40 sm:hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">{{ $t('nos_partenaires.text3_French Tech Tou') }}</p>
        </div>
        
                

              
                <div class="h-4 sm:h-6"></div>

                <!-- Ligne de sépartion verte-->
               <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <div class="h-4 sm:h-6"></div>
                <!-- Texte final -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <p class="text-center text-[#475C79] font-bold text-sm sm:text-base">
                      {{ $t('nos_partenaires.text4_Chez BTC Energies') }}
                    </p>
                    <div class="h-3"></div>
                   
                  
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
             <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

              
              </div>
             
            </div>
          </v-container>
            
            

        
          </v-col>
        </v-row>
      
    </v-main>
  </v-app>
</template>
            


<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useHead } from '@vueuse/head';

gsap.registerPlugin(ScrollTrigger);

// ✅ Ref sur le logo
const logoSidebar = ref(null);

onMounted(() => {
  // ✅ Animation du logo : zoom de 0 à 100% en 3 secondes
  if (logoSidebar.value) {
    gsap.fromTo(
      logoSidebar.value,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logoSidebar.value,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }

  // ✅ Animation traits verts
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

  // ✅ Animation blocs GSAP
  gsap.utils.toArray(".gsap-bloc").forEach((bloc, i) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 90%",
        toggleActions: "play none none reset",
      }
    });
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
  title: 'Partenaires énergie – GDF, Enedis & BTC Énergies',
  meta: [
    {
      name: 'description',
      content: 'Nous collaborons avec GDF, Enedis et d’autres partenaires institutionnels pour valoriser les déchets et produire de l’énergie durable.',
    },
    { name: 'keywords', content: 'partenaire Enedis, partenaire GDF, valorisation énergétique, BTC Énergies, transition énergétique, partenariat énergie, biogaz industriel' },
    { property: 'og:title', content: 'BTC Énergies – Partenaire de GDF et Enedis' },
    { property: 'og:description', content: 'BTC Énergies, expert en valorisation énergétique, travaille avec GDF, Enedis et les acteurs de la transition écologique.' },
    { property: 'og:url', content: 'https://www.btc-energies.fr/partenaires' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/partenaires' }]
});
</script>




