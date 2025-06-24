
<template>
  <div class="main-content-wrapper ">

    
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
<div class="bandeau_bleu w-full py-20 bg-gradient-to-r from-[#000926] to-[#3c5a81]">
  <div class="w-full max-w-[1200px] mx-auto px-4">

    <!-- Groupe centré mais décalé vers la gauche -->
    <div class="text-center transform -translate-x-12 sm:-translate-x-20 md:-translate-x-24">
      <!-- Trait supérieur -->
      <div class="w-[300px] h-1 bg-[#22B17A] mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(0.6rem, 1.6vw, 2rem);">
        {{ $t("texte_bandeau_bleu") }}
      </h1>

      <!-- Trait inférieur -->
      <div class="w-[300px] h-1 bg-[#22B17A] mt-12 mx-auto"></div>
    </div>

  </div>
</div>










    <v-main>

      <!-- Nos services -->
      <v-container fluid class="page-blanche_app py-10">
        <div class="page-blanche_app-wrapper pl-4 sm:pl-6 md:pl-10 lg:pl-24">

          <h2 class="page-blanche_app-title">{{ $t('services.title_Nos services') }}</h2>
          <br><br>

          <!-- blocs services -->
          <v-row
          class="page-blanche_app-block bg-white shadow-md rounded-xl py-4 px-6"
          align="center"
          v-for="(service, index) in services"
          :key="index"
          >

            <v-col cols="12" md="2" class="page-blanche_app-logo">
              <img :src="service.logo" :alt="service.title" />
            </v-col>
            <v-col cols="12" md="10" class="page-blanche_app-content">
              <h3 class="font-semibold text-[#475C79]">{{ service.title }}</h3>
              <p v-for="(text, i) in service.description" :key="i">{{ text }}</p>
            </v-col>
          </v-row>
                <!-- bloc 1 -->
        <v-row class="page-blanche_app-block bg-white" align="center" >
          <v-col cols="12" md="2" class="page-blanche_app-logo">
            <img src="/logo1app.png" alt="Nos services BTC Energies">
          </v-col>
          <v-col cols="12" md="10" class="page-blanche_app-content">
            <h3 class="font-semibold text-[#475C79]">
              {{ $t('services.s1_title_Vente d’energies') }}
            </h3>
            <p>
              {{ $t('services.s1_p1_Nous assurons la production') }}
            </p>
          </v-col>
        </v-row>

                <!-- bloc 2 -->
            <v-row class="page-blanche_app-block bg-white" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo2app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('services.s2_title_Gazeification') }}s
                </h3>
                <p>
                  {{ $t('services.s2_p1_La gazeification') }}               
                </p>
                <p>
                  {{ $t('services.s2_p2_Nous pouvons valoriser') }}
                </p>
              </v-col>
            </v-row>

              <!-- bloc 3 -->
            <v-row class="page-blanche_app-block bg-white" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo3app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('services.s3_title_Valorisation des effluents') }}
                </h3>
                <p>
                 {{ $t('services.s3_p1_Nous pouvons assurer') }}
                </p>
                <p>
                  {{ $t('services.s3_p2_Nous pouvons utiliser') }}
                </p>
              </v-col>
            </v-row>

            <!-- bloc 4 -->
            <v-row class="page-blanche_app-block bg-white" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo4app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('services.s4_title2_Gestion des dechet') }}
                </h3>
                <p>
                  {{ $t('services.s4_p1_Les pratiques de gestion') }}
                </p>
             
              </v-col>
            </v-row>

             <!-- bloc 5 -->
             <v-row class="page-blanche_app-block bg-white" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo5app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                 {{ $t('services.s5_title_Traitement des effluents industriels') }} 
                </h3>
                <p>
                  {{ $t('services.s5_p1_Le traitement des effluents') }}  
                </p>
                
              </v-col>
            </v-row>

            <!-- bloc 6 -->
            <v-row class="page-blanche_app-block bg-white" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo6app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('services.s6_title_Opérations de Dépollution') }}
                </h3>
                <p>
                  {{ $t('services.s6_p1_Nous pouvons organiser') }}
                </p>
                
              </v-col>
            </v-row>

        
      

      <!-- Notre Constat -->
     
        <h2 class="page-blanche_app-title">{{ $t('nootre_constat') }}</h2>

        

        <div class="w-full px-1 sm:px-4 md:px-8 max-w-[98%] sm:max-w-4xl mx-auto my-6">
          <div class="relative pb-[75%] sm:pb-[56.25%] h-0 overflow-hidden rounded-md sm:rounded-xl shadow-lg">

            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/hOIWuE_eEsM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
      </div>

      
      

      <!-- Notre équipe -->
      
        <h2 class="page-blanche_app-title">{{ $t('notre_equipe') }}</h2>
        <br><br>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

          <div
            class="text-center trombi-card"
            v-for="member in team"
            :key="member.name"
          >
            <div class="bg-white rounded-xl p-2 sm:p-3 md:p-4 shadow-sm transition transform hover:scale-105 duration-300 leading-snug">

              <img
                :src="member.img"
                :alt="member.name"
                class="mx-auto w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-xl"

              />
              <p class="profile-name font-semibold text-sm sm:text-base mt-2">{{ member.name }}</p>
              <p class="profile-title italic text-xs sm:text-sm">
              {{ $te('team.titles.' + member.titleKey) ? $t('team.titles.' + member.titleKey) : member.titleKey }}
            </p>

           <p class="italic text-gray-700 font-normal text-base sm:text-lg leading-snug">

              {{ $te('team.roles.' + member.roleKey) ? $t('team.roles.' + member.roleKey) : member.roleKey }}
            </p>

              <p v-if="member.role" class="profile-role italic text-sm text-gray-600 mt-2 font-semibold">{{ member.role }}</p>
              <p v-if="member.phone" class="profile-phone text-sm text-gray-800 font-bold mt-2">{{ member.phone }}</p>
            </div>
          </div>
        </div>
      </div>
      </v-container>

    </v-main>


    <!-- Bandeau bas de page - Mentions Légales -->
<div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
  <div class="flex flex-col sm:grid sm:grid-cols-3 items-center text-white px-4 sm:px-8 py-6 gap-6">
    
    <!-- Colonne 1 : Logo (centré mobile + desktop) -->
    <div class="flex justify-center sm:justify-start">
      <img
        src="/logo_sidebar.png"
        ref="logoSidebar"
        alt="BTC Énergies Logo"
        class="w-28 sm:w-40 h-auto max-h-32"
      />
    </div>

    <!-- Colonne 2 : Vide sur desktop -->
    

            <!-- Colonne 3 : Mentions légales -->
<div class="flex flex-col items-center text-center">
  <h2 class="font-bold text-white text-xl mb-1">{{ $t('legal_title') }}</h2>

  <p class="text-[10px] sm:text-[13px] inline-block">
    {{ $t('legal_line1') }}
  </p>

  <p class="text-[10px] sm:text-[13px] inline-block pl-6 sm:pl-12">
    {{ $t('legal_line2') }}
  </p>
</div>


  </div>
</div>

  </div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Correction du bug sur mobile (scroll tactile)
ScrollTrigger.defaults({
  scroller: window,
  invalidateOnRefresh: true,
});

// Met à jour manuellement sur scroll tactile
window.addEventListener('touchmove', () => {
  ScrollTrigger.update();
});
window.addEventListener('scroll', () => {
  ScrollTrigger.update();
});

export default {
  name: 'Accueil',
 
  data() {
    return {
      team: [
    {
    name: 'Thibault Béthencourt',
    titleKey: 'president_ceo',       
    roleKey: 'porteur_de_projet', 
    phone: '+33 6 29 56 07 56',
    img: '/Trombi/T_B.png',
  },

  {
    name: 'Jean-Marc BOUILLON',
    title: 'Directeur Général',
    roleKey: 'directeur_general',
    img: '/Trombi/JM_B.jpg',
  },
  {
    name: 'Alain Degans',
    title: 'Chef de Projet Digital',
    roleKey: 'chef_projet_digital',
    img: '/Trombi/A_D.png',
  },
  {
    name: 'Camille Faure',
    title: 'Responsable RH (HR Manager)',
    roleKey: 'responsable_rh',
    img: '/Trombi/C_F.png',
  },
  {
    name: 'Rémi Pichonneau',
    title: 'Responsable Technique (CTO)',
    roleKey: 'responsable_technique',
    img: '/Trombi/R_P.png',
  },
  {
    name: 'Olivier Cot',
    title: 'Responsable Commercial (CBO)',
    roleKey: 'responsable_commercial',
    img: '/Trombi/O_C.png',
  },
  {
    name: 'Philippe Stuarik',
    title: 'Responsable QHSE (QSE Manager)',
    roleKey: 'responsable_qhse',
    img: '/Trombi/P_S.png',
  },
  {
    name: 'Anaïs Olive',
    title: 'Cheffe de projet Outre Mer (Project Manager)',
    roleKey: 'cheffe_projet_outre_mer',
    img: '/Trombi/A_O.png',
  },
  {
    name: 'Cédric Chauvet',
    title: 'Directeur des Opération de Production',
    roleKey: 'developpeur_ia',
    img: '/Trombi/C_C.jpg',
  },
  {
    name: 'Xavier Piedallu',
    title: 'Architecte Web Full-Stack',
    roleKey: 'architecte_web',
    img: '/Trombi/XP2.jpg',
  },
  {
    name: 'Rubie',
    title: 'Responsable Bien-être au travail (Chief Happiness Officer)',
    roleKey: 'responsable_bien_etre',
    img: '/Trombi/Rubie.png',
  },
]

    };
  },

  // GSAP
  setup() {
  onMounted(() => {
    const bandeauBleuText = document.querySelector('.bandeau_bleu-text');
    if (bandeauBleuText) {
      gsap.fromTo(
        bandeauBleuText,
        { opacity: 0, y: -40, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 3.1, ease: 'power2.out' }
      );
    }

    // Animation des traits verts
    gsap.utils.toArray('.bandeau_bleu-trait').forEach((trait) => {
      gsap.fromTo(
        trait,
        { scaleX: 0, transformOrigin: 'center' },
        { scaleX: 1, duration: 1.5, ease: 'power2.out', delay: 0.3 }
      );
    });

    // Animation de la page blanche
    gsap.fromTo(
      '.page-blanche_app-wrapper',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 3, delay: 1, ease: 'power2.out' }
    );

    // Effet hover sur les blocs
    const blocks = document.querySelectorAll(
      '.page-blanche_app-block, .profile'
    );
    blocks.forEach((block) => {
      block.addEventListener('mouseenter', () => {
        gsap.to(block, {
          scale: window.innerWidth > 768 ? 1.1 : 1.05,
          duration: 0.9,
          ease: 'power2.out',
          boxShadow:
            window.innerWidth > 768
              ? '0px 10px 20px rgba(0, 0, 0, 0.3)'
              : '0px 5px 10px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff', // ← Force fond blanc
        });
      });

      block.addEventListener('mouseleave', () => {
        gsap.to(block, {
          scale: 1,
          duration: 1.9,
          ease: 'elastic.out(1, 1.5)',
          boxShadow: 'none',
          backgroundColor: '#ffffff', // ← Force fond blanc
        });
      });
    });

    gsap.from('.page-blanche_app-block', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  });

    // Animation du trombinoscope
    gsap.utils.toArray('.trombi-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
        opacity: 0,
        y: 50,
        scale: 0.90,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.20 // effet cascade
      });
    });
    // Logo du bandeau bleu (zoom + fade)
    gsap.from(".bandeau_bleu-logo", {
      scrollTrigger: {
        trigger: ".bandeau_bleu-logo",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      scale: 0.9,
      duration: 5,
      ease: "power2.out",
    });
  });

  return {};
  }
};
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import '../assets/styles.css';

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
