<template>
  
      <!-- Sidebar -->
      <v-col cols="12" md="2" class="pa-0">
        <div class="sidebar">
          <Sidebar />
        </div>
      </v-col>

       <div class="main-content-wrapper ">
        <!-- Contenu principal -->
        <v-col class="pa-0 ma-0">
          <div class="main-content">
            <Header />

           <!-- Video GIF haut de page -->
      
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


            <!-- Section Nos Solutions -->
             <v-container class="min-h-screen flex items-center justify-center px-4 py-8">
               <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
                <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">
                  <section class="bg-white py-10 px-6 md:px-16">
                    <h2 class="page-blanche_app-title">
                      {{ $t('nos_solutions.title_nos solutions') }}
                    </h2>
                <div class="flex justify-center mb-6">
<br>              
                  </div>
                 
<br>

    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

               <!-- Logo 1 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo1.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out"
            />
          </div>

          <!-- Titre 1 + soulignement -->
          <div class="indent-8 text-left mb-6">
            <h2 class=" text-3xl font-bold text-[#777777]">{{ $t('nos_solutions.titre2_Preparation') }}</h2>
            <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
          <ol class="indent-12 text-gray-500 text-bolt text-xl space-y-2 px-6">
            <li>1. {{ $t('nos_solutions.text1_Recuperation') }} </li>
            <li>2. {{ $t('nos_solutions.text2_Tri et separation') }}</li>
            <li>3. {{ $t('nos_solutions.text3_Broyage') }}</li>
            <li>4. {{ $t('nos_solutions.text4_Melange') }}</li>
          </ol>
      </div>
<br><br>

    <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">
          <!-- Logo 2 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo4.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <!-- Titre 2 + soulignement -->
          <div class="indent-8 text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]"> {{ $t('nos_solutions.titreVal_Valorisation') }}</h2>
            <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
          <ol class="text-center text-gray-500 text-bolt text-xl space-y-2 px-6">
            <p>{{ $t('nos_solutions.Val_La Gazéification Hydrothermale') }}</p>
          </ol>
      </div>   

<br><br>
 
      <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">
          <!-- Logo 3 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo3.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <!-- Titre 2 + soulignement -->
          <div class="indent-8 text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]">{{ $t('nos_solutions.Exploitation') }}</h2>
            <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
            <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <li>1. {{ $t('nos_solutions.text1_Gaz produits') }} </li>
            <li>2. {{ $t('nos_solutions.text2_Eau récupérée') }}</li>
            <li>3. {{ $t('nos_solutions.text3_Matiere minérale') }}</li>
          </ol>
        </div>  
  <br><br>

        <!-- Ligne de sépartion verte-->
        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

          <!-- Notre offre de services -->
         
    <br>
    <br>    
    
        <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

            <h2 class="page-blanche_app-title ">
               {{ $t('nos_solutions.titre_Notre offre de services') }}
              </h2>
              <br><br>
              <p class="text-[#475C79] font-bold text-xl text-center max-w-4xl mx-auto">
             {{ $t('nos_solutions.texteOffre_Nous pouvons traiter') }}</p>
          </div>        

          <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

              <!-- image 1 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution1.png"
              alt="Nos services BTC Energies"
            />
          </div>

            <!-- Liste image 1 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteOffre_Nous proposons') }}</p>
          </ol>
      </div>
<br>
  

        <!-- Ligne de sépartion verte-->
        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

<br>
<br>
          <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

              <h2 class="page-blanche_app-title">
                {{ $t('nos_solutions.titre_Nos produits fini') }}
              </h2>
          </div> 


        <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

                 <!-- image 2 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution2.png"
              alt="Nos services BTC Energies"
            />
          </div>
        

        <div class="hover:scale-[1.04] transition-transform duration-300 ease-in-out">

          <!-- Liste image 2 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteproduits_Nous destinons') }}</p>
          </ol>
        </div> 
      </div>
<br>

        <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

              <!-- image 3 -->
              <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution3.png"
              alt="Nos services BTC Energies"
             />
          </div>

          <!-- Liste image 3 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteproduits_LHydrogène est') }}</p>
          </ol>
        </div>
<br>

      <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

           <!-- image 4 -->
           <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution4.png"
              alt="Nos services BTC Energies"/>
          </div>

          <!-- Liste image 4 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteproduits_Le CO2 est') }}</p>
        </ol>
      </div> 
<br>
<br>

      <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

        <!-- image 5 -->
        <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution5.png"
              alt="Nos services BTC Energies"/>
          </div>
      
          <!-- Liste image 5 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteproduits_Leau chargee dazote') }}</p>
        </ol>
      </div> 
<br>
<br>

      <div class="gsap-bloc hover:scale-[1.04] transition-transform duration-300 ease-in-out">

        <!-- image 6 -->
        <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/Solution6.png"
              alt="Nos services BTC Energies"
            />
        </div>

          <!-- Liste image 6  -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p class="text-center">{{ $t('nos_solutions.texteproduits_La matiere minerale') }} </p>
        </ol>
      </div>
          
        </section>
      </div>
    </div>
  </v-container>
  
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
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">{{ $t('nos_solutions.Nous contacter') }}</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
                {{ $t('nos_solutions.Nos Coordonnees') }}
              </a>
            </div>
          </div>
        </div>
      </div>
 
</template>

<style>
.v-application--wrap {
  padding-top: 0 !important;
}

.v-col,
.main-content {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

video {
  display: block;
}
</style>


<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

const logoBandeau = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // ✅ Animation sur les blocs avec gsap-bloc
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    // Animation d'entrée au scroll
    gsap.from(bloc, {
      scale: window.innerWidth > 768 ? 1.1 : 1.04,
      duration: 0.9,
      ease: 'power2.out',
      boxShadow:
        window.innerWidth > 768
          ? '0px 10px 20px rgba(0, 0, 0, 0.3)'
          : '0px 5px 10px rgba(0, 0, 0, 0.2)',
      scrollTrigger: {
        trigger: bloc,
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    });

    // ✅ Animation au survol (hover)
    bloc.addEventListener('mouseenter', () => {
      gsap.to(bloc, {
        scale: 1.06,
        duration: 0.4,
        ease: 'power2.out',
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)',
      });
    });

    bloc.addEventListener('mouseleave', () => {
      gsap.to(bloc, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        boxShadow: 'none',
      });
    });
  });

  // ✅ Animation du logo dans le bandeau
  if (logoBandeau.value) {
    gsap.from(logoBandeau.value, {
      scrollTrigger: {
        trigger: '.bandeau_bleu',
        start: 'top 90%',
        toggleActions: 'play reverse play reverse',
      },
      scale: 0.5,
      opacity: 0,
      duration: 5,
      ease: 'back.out(1.7)',
    });
  }
});
</script>
