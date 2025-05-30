
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
  <div class="w-full max-w-[1200px] mx-auto text-center px-4">
    
    <div class="w-[200px] h-1 bg-[#22B17A] mb-8 bandeau_bleu-trait mx-auto"></div>
    
    <h1 class="bandeau_bleu-text font-montserrat text-white text-center leading-snug break-words"
        style="font-size: clamp(1rem, 1.6vw, 2rem);">
      Développement, Gestion et Exploitation de projets industriels
    </h1>
    
    <div class="w-[200px] h-1 bg-[#22B17A] mt-8 bandeau_bleu-trait mx-auto"></div>
    
  </div>
</div>





    <v-main>

      <!-- Nos services -->
      <v-container fluid class="page-blanche_app py-10">
        <div class="page-blanche_app-wrapper pl-4 sm:pl-6 md:pl-10 lg:pl-24">

          <h2 class="page-blanche_app-title">Nos services</h2>
          <br><br>

          <!-- blocs services -->
          <v-row class="page-blanche_app-block" align="center" v-for="(service, index) in services" :key="index">
            <v-col cols="12" md="2" class="page-blanche_app-logo">
              <img :src="service.logo" :alt="service.title" />
            </v-col>
            <v-col cols="12" md="10" class="page-blanche_app-content">
              <h3 class="font-semibold text-[#475C79]">{{ service.title }}</h3>
              <p v-for="(text, i) in service.description" :key="i">{{ text }}</p>
            </v-col>
          </v-row>
          <!-- bloc 1 -->
        <v-row class="page-blanche_app-block" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo1app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('Vente d’énergies et de ressources renouvelables.') }}

                </h3>
                <p>
                  Nous assurons la production et la vente d’énergies et de ressources renouvelables issues de procédés de valorisation de biomasse et de matières d’origine fossile.
                </p>
              </v-col>
            </v-row>

                <!-- bloc 2 -->
            <v-row class="page-blanche_app-block" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo2app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  Gazéification hydrothermale de déchets et d’ordures ménagères
                </h3>
                <p>
                  La gazéification hydrothermale permet de transformer efficacement des déchets en gaz de synthèse, une source d'énergie renouvelable et propre, mais également en ressources minérales et en eau.
                </p>
                <p>
                  Nous pouvons valoriser une grande variété de matières à des tarifs très compétitifs.
                </p>
              </v-col>
            </v-row>

              <!-- bloc 3 -->
            <v-row class="page-blanche_app-block" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo3app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  Valorisation des effluents de station d'épuration et des eaux usées (STEP/STEU) et du lixiviat
                </h3>
                <p>
                  Nous pouvons assurer la valorisation des effluents de stations d'épuration et celles de traitement des eaux usées : y compris lorsqu'elles sont souillées (mercure, pathogènes et autres polluants comme des micro-plastiques et une partie des PFAS).
                </p>
                <p>
                  Nous pouvons utiliser les ressources présentes dans les eaux usées et ainsi contribuer à la préservation de l'environnement.
                </p>
              </v-col>
            </v-row>

            <!-- bloc 4 -->
            <v-row class="page-blanche_app-block" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo4app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  Gestion des déchets agricoles
                </h3>
                <p>
                  Les pratiques de gestion des déchets agricoles sont essentielles pour préserver l'environnement et maintenir la durabilité de l'agriculture. Nous pouvons ainsi valoriser le digestat, en particuliers lorsqu’il ne peut pas être épandu, et traiter l'ensemble des déchets agricoles (produits phyto-sanitaires, production hors-calibre, matière non-méthanisable).                </p>
             
              </v-col>
            </v-row>

             <!-- bloc 5 -->
             <v-row class="page-blanche_app-block" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo5app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  Traitement des effluents industriels
                </h3>
                <p>
                  Le traitement des effluents industriels est essentiel pour préserver l'environnement et assurer la qualité des ressources en eau. Nous pouvons valoriser une grande variété d'effluents issus de la plupart de ces secteurs.
                </p>
                
              </v-col>
            </v-row>

            <!-- bloc 6 -->
            <v-row class="page-blanche_app-block align=center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img src="/logo6app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  Opérations de Dépollution
                </h3>
                <p>
                  Nous pouvons organiser des opérations de réhabilitation massive de terrains pollués (anciennes décharges, sols pollués aux métaux lourds).                 </p>
                
              </v-col>
            </v-row>

        
      

      <!-- Notre Constat -->
     
        <h2 class="page-blanche_app-title">Notre Constat</h2>

        

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
      
        <h2 class="page-blanche_app-title">Notre équipe</h2>
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
              <p class="profile-title italic text-xs sm:text-sm">{{ member.title }}</p>
              <p v-if="member.role" class="profile-role italic text-sm text-gray-600 mt-2 font-semibold">{{ member.role }}</p>
              <p v-if="member.phone" class="profile-phone text-sm text-gray-500 font-bold mt-2">{{ member.phone }}</p>
            </div>
          </div>
        </div>
      </div>
      </v-container>

    </v-main>

    <!-- Mentions légales -->
    <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
      <div class="flex justify-start pl-0 ml-0 order-1 sm:order-none">


        <!-- Logo -->
        <div class="flex justify-start pl-0 ml-4">
          <img
            ref="bandeau_bleu-logo"
            src="/logo_sidebar.png"
            alt="BTC Énergies Logo"
            class="w-24 sm:w-24 md:w-40 h-auto max-h-24 sm:max-h-28 md:max-h-32 bandeau_bleu-logo"

          />
        </div>

        <!-- Texte -->
          <div class="w-full text-white text-center xs:text-left text-[10px] sm:text-xs leading-tight sm:leading-snug space-y-0.5">
            <h2 class="font-bold text-white text-xl sm-1">Mentions légales</h2>
            <br />
            <p class="text-[10px]">BTC Énergies (SAS) au capital de 120€, enregistrée au RCS de Toulouse</p>
            <p class="text-[10px]">Numéro SIRET : 928 497 585 00010</p>
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

// ⚠️ Correction du bug sur mobile (scroll tactile)
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
          title: 'Président (CEO)',
          role: 'Porteur de projet',
          phone: '+33 6 29 56 07 56',
          img: '/Trombi/T_B.png',
        },
        {
          name: 'Jean-Marc BOUILLON',
          title: 'Directeur Général',
          phone: '+33 6 72 64 22 50',
          img: '/Trombi/JM_B.jpg',
        },
        {
          name: 'Alain Degans',
          title: 'Chef de Projet Digital',
          phone: '+33 7 88 10 07 46',
          img: '/Trombi/A_D.png',
        },
        {
          name: 'Camille Faure',
          title: 'Responsable RH (HR Manager)',
          img: '/Trombi/C_F.png',
        },
        {
          name: 'Rémi Pichonneau',
          title: 'Responsable Technique (CTO)',
          img: '/Trombi/R_P.png',
        },
        {
          name: 'Olivier Cot',
          title: 'Responsable Commercial (CBO)',
          img: '/Trombi/O_C.png',
        },
        {
          name: 'Philippe Stuarik',
          title: 'Responsable QHSE (QSE Manager)',
          img: '/Trombi/P_S.png',
        },
        {
          name: 'Anaïs Olive',
          title: 'Cheffe de projet Outre Mer (Project Manager)',
          img: '/Trombi/A_O.png',
        },
        {
          name: 'Cédric Chauvet',
          title: 'Développeur IA et Automatisation',
          img: '/Trombi/C_C.jpg',
        },
        {
          name: 'Xavier Piedallu',
          title: 'Architecte Web Full-Stack',
          img: '/Trombi/XP2.jpg',
        },
        {
          name: 'Rubie',
          title: 'Responsable Bien-être au travail (Chief Happiness Officer)',
          img: '/Trombi/Rubie.png',
        },
      ],
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
        });
      });

      block.addEventListener('mouseleave', () => {
        gsap.to(block, {
          scale: 1,
          duration: 1.9,
          ease: 'elastic.out(1, 1.5)',
          boxShadow: 'none',
        });
      });
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
