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
      <source src="/videos/Bienvenuesurnotresite.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos HTML5.
    </video>
  </div>
</section>

            <!-- Bandeau bleu -->
<div class="w-full py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
  <div class="w-full max-w-[1200px] mx-auto px-4">

    <!-- Groupe centré mais décalé vers la gauche -->
    <div class="text-center">
      <!-- Trait supérieur -->
      <div class="w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(0.7rem, 2.6vw, 2rem);">
        {{ $t("nos_partenaires.Financements et partenaires") }}
      </h1>

        <!-- Trait inférieur -->
          <div 
            class="w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
          
<br><br>
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(0.7rem, 1.4vw, 2rem);">
        {{ $t("nos_partenaires.textHe_Pour realiser") }}
      </h1>
    </div>
    

  </div>
</div>

    
        
             <!-- Section Notre Constat -->
               <v-container class="min-h-screen flex items-center justify-center px-4 py-8">
               <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
              <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">
             

              

              <h2 class="text-3xl font-bold text-[#777777] mb-6 text-center">
                {{ $t('nos_partenaires.titre1_Financement participatif') }}
              </h2>
              <!-- Trait vert-->
              <div class="w-16 h-0.5 bg-[#B2D799] mx-auto mb-8"></div>

              <div class="flex justify-center items-center my-6">
            <a href="https://fr.ulule.com/projet-promethee-energies-renouvelables/"
               target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/ulule.png" alt="Ulule" class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>

          <p class="text-gray-400 text-xl text-center">{{ $t('nos_partenaires.text2_Cliquez sur') }}</p>

          <p class="mb-10"></p>
        
          
          <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

          <p class="mb-8"></p>

                  <!-- Partenaires -->
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold text-[#777777] mb-2">{{ $t('nos_partenaires.titre2_Nos partenaires') }}</h2>

          <!-- Trait vert-->
              <div class="w-16 h-0.5 bg-[#B2D799] mx-auto mb-8"></div>

          <p class="text-gray-500 text-xl">2024</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://www.lafrenchtechtoulouse.com/outils-pour-entrepreneurs/programmes/creation-et-amorcage/"
               target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/lafrenchtechtremplin.png" alt="French Tech Tremplin"
                   class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-xl">{{ $t('nos_partenaires.text2_French Tech') }}</p>
          
          <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
        </div>
       

        <div class="text-center">
          <p class="text-gray-500 text-xl">2024 - 2025</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://lafrenchtechtoulouse.com" target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/lafrenchtechtoulouse.png" alt="French Tech Toulouse"
                   class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-xl">{{ $t('nos_partenaires.text3_French Tech Tou') }}</p>
        </div>
        
                

              
                <br>

                <!-- Ligne de sépartion verte-->
               <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br />
                <!-- Texte final -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <p class="text-center text-[#475C79] font-bold">
                      {{ $t('nos_partenaires.text4_Chez BTC Energies') }}
                    </p>
                    <br />
                   
                  
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
             <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

              
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
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white"> {{ $t('nos_solutions.Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
                {{ $t('nos_solutions.Nos Coordonnees') }}
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
});
</script>
