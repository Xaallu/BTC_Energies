<template>
  <div class="main-content-wrapper">
    <v-row no-gutters class="pa-0 ma-0">

        <!-- Sidebar -->
      <v-col cols="12" md="2" class="pa-0 hidden">
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
                    preload="metadata"
                    poster="/screenshotaux.png"
                    class="absolute top-0 left-0 w-full h-full object-cover object-center"
                  >
                    <source src="/videos/Bienvenuesurnotresite.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos HTML5.
                  </video>
                </div>
              </section>
          <!-- Bandeau bleu -->
<div class="w-full py-10 sm:py-16 lg:py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
  <div class="w-full max-w-[1200px] mx-auto px-4">

    <!-- Groupe centré -->
    <div class="text-center">
      <!-- Trait supérieur -->
      <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(1.1rem, 3.1vw, 3.2rem);">
        {{ $t("texte_bandeau_bleu_projet") }}
      </h1>

      <!-- Trait inférieur -->
      <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>
    </div>

  </div>
</div>



          <div class="h-20 sm:h-22"></div>

 <v-container
  fluid
  class="px-0 py-0 m-0 w-full bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]"
>
  <!-- Section principale -->
  <section
  class="w-full flex flex-col items-center justify-center py-8 sm:py-16 lg:py-20 
         bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e] overflow-x-hidden"

  >
    <!-- ✅ Cadre blanc adaptatif -->
        <div
      class="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] sm:mx-auto
            bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden
            py-8 sm:py-10 px-3 sm:px-8 md:px-12"
    >

      <!-- ✅ Frise interne -->
      <div
        class="relative w-full 
               min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]
               bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]
               flex flex-wrap items-center justify-center gap-6
               rounded-3xl shadow-lg overflow-hidden frise-container"
      >
       
        <!-- Ligne blanche -->
        <div class="absolute top-1/2 left-0 w-full h-[4px] bg-white transform -translate-y-1/2"></div>

        <!-- Points + Logos + Titres -->
        <div class="relative flex justify-between items-center w-[90%] max-w-6xl mx-auto">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col items-center text-center relative z-10"
            @click="activeIndex = index"
          >
            <!-- Logo -->
            <div
                class="frise-logo w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32  
                      rounded-full overflow-hidden border-4 border-white
                      mt-14 sm:mt-14 md:mt-14
                      transition-all duration-500 ease-out cursor-pointer"
                :class="activeIndex === index 
                  ? 'scale-125 border-[#05ff16] shadow-[0_0_35px_15px_#05ff16]' 
                  : 'hover:scale-125 hover:shadow-[0_0_15px_3px_rgba(5,255,22,0.3)]'"
              >
              <img
                :src="item.logo"
                :alt="item.title"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Titre -->
            <span
              class="mt-4 text-xs sm:text-sm md:text-lg font-semibold tracking-wide"
              :class="activeIndex === index ? 'text-[#05ff16]' : 'text-white'"
            >
               {{ $t(item.title) }}
            </span>

          </div>

          
        </div>
      </div>

       <!-- Texte dynamique -->

           <!-- ❌ Bouton de fermeture -->
        <button
          v-if="activeIndex !== null"
          @click="activeIndex = null"
          class="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#05ff16] hover:text-[#00cc11] 
                text-2xl sm:text-3xl font-bold transition-all duration-300"
        >
          &times;
        </button>

        <transition name="fade" mode="out-in">
      <div
        v-if="activeIndex !== null"
        key="activeIndex"
        class="max-w-5xl p-4 sm:p-6 md:p-8 mt-12 text-left bg-gray-100 rounded-xl shadow-lg text-gray-900 leading-relaxed"
      >
        <!-- Premier texte -->
        <div v-html="$t(items[activeIndex].text)"></div>
        
  <!-- Second titre -->
        <h2
          v-if="items[activeIndex].title2"
          class="page-blanche_app-title mt-10"
        >
          {{ $t(items[activeIndex].title2) }}
        </h2>

       <!-- Iframe OpenData -->
        <iframe
          v-if="items[activeIndex].iframe"
          :src="items[activeIndex].iframe"
          width="100%"
          height="400"
          frameborder="0"
          class="border-0 mt-4 rounded-lg shadow h-[320px] sm:h-[360px] md:h-[400px]"
        ></iframe>

        
        <!-- Deuxième texte -->
        <div
          v-if="items[activeIndex].text2"
          v-html="$t(items[activeIndex].text2)"
          class="mt-8"
        ></div>

        <div class="h-4 sm:h-6"></div>
    
                 <!-- Troisième titre -->
        <h2
          v-if="items[activeIndex].title2"
          class="page-blanche_app-title mt-10"
        >
          {{ $t(items[activeIndex].title3) }}
        </h2>

            <!-- 🖼️ Image Nos Locaux -->
      <div
        v-if="items[activeIndex].imglocaux"
        v-html="items[activeIndex].imglocaux"
        class="mt-6"
      ></div>
        <div class="h-4 sm:h-6"></div>
      
       <!-- Troisième texte -->
        <div
          v-if="items[activeIndex].text3"
          v-html="$t(items[activeIndex].text3)"
          class="mt-8"
        ></div>
      
        

      <!-- Quatrième texte -->
        <div
          v-if="items[activeIndex].text4"
          v-html="$t(items[activeIndex].text4)"
          class="mt-8"
        ></div>

        
      </div>

      
    </transition>
    </div>
  </section>
</v-container>


            
            
        </v-col>
        </v-row>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sidebar from './Sidebar.vue';
import { watch } from 'vue';
import { useHead } from '@vueuse/head';

gsap.registerPlugin(ScrollTrigger);

const logoSidebar = ref(null);
const nom = ref('');
const email = ref('');
const message = ref('');
const boutonSoumettre = ref(null);

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const activeIndex = ref(null)

const items = [
  {
     logo: '/Promethée.png',
    title: 'projets.promethee_fin2024_titre',
    title2: 'projets.carte_opendata_titre',
    title3: 'projets.carte_Noslocaux_titre3',
    text: 'projets.promethee_fin2024_texte_html',
    text2: 'projets.promethee_fin2024_texte2_html',
    iframe: 'https://odre.opendatasoft.com/explore/embed/dataset/projets-ami-gh-2024/custom/?&static=false&datasetcard=false',
    imglocaux: '<img height="300" width="513" decoding="async" loading="lazy" src="/screenshotaux.png" alt="Nos services BTC Énergies - Nos locaux" class="w-full max-w-xl mx-auto transition-transform duration-500 transform hover:scale-105 rounded-lg shadow-lg" />',
    text3: 'projets.promethee_fin2024_texte3_html',
    text4: 'projets.promethee_fin2024_texte4_html',
  },

  {
    logo: 'logo2nospro.png',
    title: 'projets.mi2025_titre',
    text: 'projets.mi2025_texte1_html',
    text2: 'projets.mi2025_texte2_html',
    text3: 'projets.mi2025_texte3_html'
  },

 {
    logo: '/h2med.png',
    title: 'projets.Septembre2025_titre',
    text: 'projets.Septembre2025_texte1_html',
    text2: 'projets.Septembre2025_texte2_html',
    text3: 'projets.Septembre2025_texte3_html'
  },


]
onMounted(() => {
  // ✅ Timeline principale pour animer les logos de gauche à droite
  // Elle se déclenche au scroll lorsque la section ".frise-container" entre dans le viewport
  const shouldAnimate = !prefersReducedMotion;
  const tl = shouldAnimate
    ? gsap.timeline({
        scrollTrigger: {
          trigger: '.frise-container',
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    : null;

  if (!shouldAnimate) {
    gsap.set('.frise-logo', {
      scale: 1,
      opacity: 1,
      boxShadow: '0 0 10px rgba(5, 255, 22, 0.2)'
    });
    return;
  }

  // ⏳ Petit délai pour s’assurer que le DOM est complètement prêt
  setTimeout(() => {
    // Sélectionne tous les logos de la frise
    const logos = document.querySelectorAll('.frise-logo');

    // 🌀 Boucle sur chaque logo pour définir les animations d’apparition
    logos.forEach((logo, i) => {
      // Animation d’entrée : apparition progressive + effet de halo vert
      tl.fromTo(
        logo,
        {
          opacity: 0,                           // invisible au départ
          scale: 0.5,                           // taille réduite
          y: 50,                                // léger décalage vers le bas
          boxShadow: '0 0 0px rgba(5, 255, 22, 0)', // pas de halo initial
        },
        {
          opacity: 1,                           // devient visible
          scale: 1,                             // retrouve sa taille normale
          y: 0,                                 // revient à la position d’origine
          duration: 1.1,                        // durée de chaque animation
          ease: 'power3.out',                   // easing fluide
          boxShadow: '0 0 30px rgba(5, 255, 22, 0.8)', // halo vert à l’apparition
          onComplete: () => {
            // Une fois le logo apparu, on réduit l’intensité du halo
            gsap.to(logo, {
              boxShadow: '0 0 10px rgba(5, 255, 22, 0.3)',
              duration: 0.8,
              ease: 'power1.out'
            });
          }
        },
        i * 1.0 // ⏱️ décalage temporel entre les apparitions des logos (1 seconde d’intervalle)
      );

      // 🧠 Animation au survol (hover)
      // On gère ici le zoom du logo directement en JavaScript pour un effet GSAP plus fluide

      // Quand la souris entre sur le logo
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { 
          scale: 1.25,              // zoom léger
          duration: 0.3,            // transition courte
          ease: 'power2.out'        // easing doux
        });
      });

      // Quand la souris quitte le logo
      logo.addEventListener('mouseleave', () => {
        // Si le logo n’est pas celui actuellement sélectionné, il revient à la taille normale
        if (activeIndex.value !== i) {
          gsap.to(logo, { 
            scale: 1, 
            borderColor: '#ffffff',
            boxShadow: '0 0 25px 5px rgba(5,255,22,0.4)', // halo vert plus discret
            duration: 0.4,
            ease: 'power2.out' 
          });
        }
      });
    });

  }, 300); // fin du setTimeout
  

  // 🔥 Effet dynamique sur le logo actif (celui qui a été cliqué)
  // On surveille la variable "activeIndex" pour déclencher les effets correspondants
  watch(activeIndex, (newIndex, oldIndex) => {
    // 🔁 Si un logo était déjà actif auparavant, on annule son effet pulsant
    if (oldIndex !== null) {
      const previousLogo = document.querySelectorAll('.frise-logo')[oldIndex];
      if (previousLogo) {
        gsap.killTweensOf(previousLogo); // arrête les animations en cours
        gsap.to(previousLogo, {
          boxShadow: '0 0 10px rgba(5, 255, 22, 0.3)', // halo discret
          borderColor: '#ffffff',
          duration: 0.5
        });
      }
    }

    // 💡 Si un nouveau logo est sélectionné → on applique un halo vert "pulsant"
    if (newIndex !== null) {
      const selectedLogo = document.querySelectorAll('.frise-logo')[newIndex];
      if (selectedLogo) {
        gsap.to(selectedLogo, {
          boxShadow: '0 0 25px 12px rgba(5, 255, 22, 0.9)', // halo intense au clic
          borderColor: '#05ff16',
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            // 🔁 Effet de “respiration” (le halo pulse en continu)
            gsap.to(selectedLogo, {
              boxShadow: '0 0 35px 18px rgba(5, 255, 22, 0.6)', // variation de halo
              repeat: -1,    // boucle infinie
              yoyo: true,    // va et vient entre les deux états
              duration: 1.6, // vitesse du battement
              ease: 'sine.inOut'
            });
          }
        });
      }
    }
  });


  // ✅ Animation du logo dans la Sidebar (apparition douce au scroll)
  if (logoSidebar.value) {
    gsap.fromTo(
      logoSidebar.value,
      { scale: 0, opacity: 0 }, // commence petit et invisible
      {
        scale: 1,               // taille normale
        opacity: 1,             // devient visible
        duration: 4,            // animation lente et fluide
        ease: 'back.out(1.7)',  // effet ressort
        scrollTrigger: {
          trigger: logoSidebar.value,          // déclencheur : le logo
          start: 'top 95%',                    // commence presque hors écran
          toggleActions: 'play reverse play reverse', // joue et rejoue selon le scroll
        },
      }
    );
  }


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

  // ✅ Animation au survol du bouton
  const bouton = boutonSoumettre.value;
  if (bouton) {
    bouton.addEventListener('mouseenter', () => {
      gsap.to(bouton, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    bouton.addEventListener('mouseleave', () => {
      gsap.to(bouton, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  }

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
  title: 'Projets - BTC Energies',
  meta: [
    {
      name: 'description',
      content:
        'Suivez les projets BTC Energies : developpement, innovation et solutions durables pour la transition energetique.',
    },
    { property: 'og:url', content: 'https://www.btc-energies.fr/projets' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/projets' }],
});
</script>
