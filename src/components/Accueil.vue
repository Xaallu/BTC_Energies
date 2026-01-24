
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
<div class="w-full py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
  <div class="w-full max-w-[1200px] mx-auto px-4">

    <!-- Groupe centré mais décalé vers la gauche -->
    <div class="text-center bandeau_bleu-logo">
      <!-- Trait supérieur -->
      <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(1rem, 1.9vw, 2rem);">
        {{ $t("texte_bandeau_bleu") }}
      </h1>

      <!-- Trait inférieur -->
      <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
    </div>

  </div>
</div>


    <v-main>

      <!-- Nos services -->
      <v-container fluid class="page-blanche_app py-10">
        <div class="page-blanche_app-wrapper px-4 sm:px-6 md:px-8 lg:px-12">

          <h2 class="page-blanche_app-title">{{ $t('services.title_Nos services') }}</h2>
          <div class="h-6 sm:h-8 md:h-10"></div>

          <!-- bloc 1 -->
        <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center" >
          <v-col cols="12" md="2" class="page-blanche_app-logo">
            <img height="141" width="144" decoding="async" loading="lazy" src="/logo1app.png" alt="Nos services BTC Energies">
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
            <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img height="135" width="154" decoding="async" loading="lazy" src="/logo2app.png" alt="Nos services BTC Energies">
              </v-col>
              <v-col cols="12" md="10" class="page-blanche_app-content">
                <h3 class="font-semibold text-[#475C79]">
                  {{ $t('services.s2_title_Gazeification') }}
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
            <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img height="158" width="167" decoding="async" loading="lazy" src="/logo3app.png" alt="Nos services BTC Energies">
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
            <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img height="158" width="171" decoding="async" loading="lazy" src="/logo4app.png" alt="Nos services BTC Energies">
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
             <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img height="158" width="171" decoding="async" loading="lazy" src="/logo5app.png" alt="Nos services BTC Energies">
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
            <v-row class="page-blanche_app-block bg-white rounded-xl py-4 px-4 sm:px-6" align="center">
              <v-col cols="12" md="2" class="page-blanche_app-logo">
                <img height="158" width="272" decoding="async" loading="lazy" src="/logo6app.png" alt="Nos services BTC Energies">
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
        <div class="h-6 sm:h-8 md:h-10"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
  <router-link
    v-for="member in team"
    :key="member.name"
    :to="'/equipe/' + member.slug"
    class="text-center trombi-card"
  >
    <div class="bg-white rounded-xl p-2 sm:p-3 md:p-4 shadow-sm transition transform hover:scale-105 duration-300 leading-snug">
      <img
        :src="member.img"
        :alt="member.name"
        class="mx-auto w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 object-cover rounded-xl"
      />

      <p class="profile-name font-semibold text-sm sm:text-base mt-2">
        {{ member.name }}
      </p>

      <p class="profile-title italic text-xs sm:text-sm">
        {{ $te('team.titles.' + member.titleKey) ? $t('team.titles.' + member.titleKey) : member.titleKey }}
      </p>

      <p class="italic text-gray-700 font-normal text-base sm:text-lg leading-snug">
        {{ $te('team.roles.' + member.roleKey) ? $t('team.roles.' + member.roleKey) : member.roleKey }}
      </p>

      <p v-if="member.role" class="profile-role italic text-sm text-gray-600 mt-2 font-semibold">
        {{ member.role }}
      </p>

      <p v-if="member.phone" class="profile-phone text-sm text-gray-800 font-bold mt-2">
        {{ member.phone }}
      </p>
    </div>
  </router-link>

        </div>

        <div class="h-8 sm:h-10 md:h-12"></div>
        <h2 class="page-blanche_app-title">
           {{ $t('Nos_engagements.title') }}
        </h2>

        <div class="h-6 sm:h-8 md:h-10"></div>

        <div class="logos-section mb-8 sm:mb-10 flex justify-center px-2 sm:px-0">
          <div class="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] max-w-[90vw] max-h-[90vw]">

    <!-- Logos ODD en cercle -->
    <div
      v-for="(logo, index) in logosOdd"
      :key="index"
      :style="getLogoStyle(index, logosOdd.length)"
      class="absolute z-20 
         w-[4.5rem] h-[4.5rem]     <!-- taille par défaut : mobile -->
         sm:w-[4.5rem] sm:h-[4.2rem] <!-- petit écran (≥640px : smartphone en mode paysage) -->
         md:w-[6.5rem] md:h-[3.5rem] <!-- tablette (≥768px) -->
         lg:w-[7.5rem] lg:h-[4.5rem] <!-- grand écran (≥1024px) -->
         xl:w-[8rem] xl:h-[6rem]     <!-- très grand écran -->
         overflow-hidden shadow-md bg-white p-1
         transition-transform duration-300 ease-in-out"
      :class="{
        'scale-150 z-10': (!isMobile && (hoveredLogo === index || activeBubbleIndex === index)),
        'scale-110 z-10': isMobile && activeBubbleIndex === index
      }"
      @mouseenter="handleLogoEnter(index)"
      @mouseleave="handleLogoLeave"
      @click="handleLogoClick(index)"
    >
      <img
        :src="logo"
        alt="ODD"
        class="w-full h-full object-contain"
      />
    </div>

    <template v-for="bubble in bubbleInfos" :key="bubble.index">
      <transition name="bubble-pop" appear>
        <div
          v-if="bubble && activeBubbleIndex === bubble.index"
          class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center cursor-pointer"
          @click="handleBubbleClick"
        >
          <button
            type="button"
            class="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0f9d58] text-white flex items-center justify-center text-lg shadow-md hover:bg-[#0b7a3d]"
            aria-label="Fermer le popup"
            @click.stop="handleBubbleClick"
          >
            <span class="leading-none font-bold">×</span>
          </button>

          <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
            {{ $t(bubble.titleKey) }}
          </h3>

          <p class="font-serif text-lg leading-relaxed">
            {{ $t(bubble.textKey) }}
          </p>
        </div>
      </transition>
    </template>
  </div>
        </div>

        <div class="h-8 sm:h-10 md:h-12"></div>
<!-- Trait décoratif -->
<div class="w-[120px] h-[2px] mx-auto my-4" style="background-color: #8BC367;"></div>


      </div>
      </v-container>

    </v-main>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useHead } from '@vueuse/head';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ scroller: window, invalidateOnRefresh: true });
window.addEventListener('touchmove', () => ScrollTrigger.update());
window.addEventListener('scroll', () => ScrollTrigger.update());

export default {
  name: 'Accueil',

  data() {
    return {
      team: [
        { name: 'Thibault Béthencourt', titleKey: 'president_ceo', roleKey: 'porteur_de_projet', phone: '+33 6 29 56 07 56', img: '/Trombi/T_B.png', slug: 'ThibaultBethencourt' },
        { name: 'Susanne Svensdotter', titleKey: 'ingenieur_mecanique', roleKey: 'directeur_general', img: '/Trombi/S_S.png', slug: 'SusanneSvensdotter' },
        { name: 'Charles de Magneval', title: 'Chef de Projet Digital', roleKey: 'chef_projet_digital', img: '/Trombi/C_dM1.png', slug: 'CharlesdeMagneval' },
        //{ name: 'Camille Faure', title: 'Responsable RH (HR Manager)', roleKey: 'responsable_rh', img: '/Trombi/C_F.png', slug: 'CamilleFaure' },
        { name: 'Rémi Pichonneau', title: 'Responsable Technique (CTO)', roleKey: 'responsable_technique', img: '/Trombi/R_Pvf.png', slug: 'RemiPichonneau' },
        { name: 'Olivier Cot', title: 'Responsable Commercial (CBO)', roleKey: 'responsable_commercial', img: '/Trombi/O_C.png', slug: 'OlivierCot' },
        { name: 'Philippe Stuarik', title: 'Responsable QHSE (QSE Manager)', roleKey: 'responsable_qhse', img: '/Trombi/P_Svf.png', slug: 'PhilippeStuarik' },
        { name: 'Anaïs Olive', title: 'Cheffe de projet Outre Mer (Project Manager)', roleKey: 'cheffe_projet_outre_mer', img: '/Trombi/A_O.png', slug: 'AnaisOLIVE' },
        //{ name: 'Cédric Chauvet', title: 'Directeur des Opération de Production', roleKey: 'developpeur_ia', img: '/Trombi/C_Cvf.png', slug: 'CedricChauvet' },
        { name: 'Xavier Piedallu', title: 'Architecte Web Full-Stack', roleKey: 'architecte_web', img: '/Trombi/X_Pvf.png', slug: 'XavierPiedallu' },
        { name: 'Rubie', title: 'Responsable Bien-être au travail (Chief Happiness Officer)', roleKey: 'responsable_bien_etre', img: '/Trombi/Rubie.png', slug: 'Rubie' }
      ],
      logosOdd: [
        '/logo_impact/1pauvreté.png', '/logo_impact/2faim.png', '/logo_impact/3santé.png', '/logo_impact/4éducation.png',
        '/logo_impact/5égalité.png', '/logo_impact/6eau.png', '/logo_impact/7energies.png', '/logo_impact/8acces.png',
        '/logo_impact/9industrie.png', '/logo_impact/10reduction.png', '/logo_impact/11villes.png', '/logo_impact/12consomations.png',
        '/logo_impact/13luttes.png', '/logo_impact/14conserver.png', '/logo_impact/15vie.png', '/logo_impact/16justice.png', '/logo_impact/17partenariats.png'
      ],
      bubbleInfos: [
        { index: 0, titleKey: 'Nos_engagements.Pas_de_Pauvrete_title', textKey: 'Nos_engagements.Pas_de_Pauvrete_texte' },
        { index: 1, titleKey: 'Nos_engagements.Faim_title', textKey: 'Nos_engagements.Faim_texte' },
        { index: 2, titleKey: 'Nos_engagements.BonneSante_title', textKey: 'Nos_engagements.BonneSante_texte' },
        { index: 3, titleKey: 'Nos_engagements.education_title', textKey: 'Nos_engagements.edcucation_texte' },
        { index: 4, titleKey: 'Nos_engagements.egalite_title', textKey: 'Nos_engagements.egalite_texte' },
        { index: 5, titleKey: 'Nos_engagements.eauSalubre_title', textKey: 'Nos_engagements.eauSalubre_texte' },
        { index: 6, titleKey: 'Nos_engagements.energieFiable_title', textKey: 'Nos_engagements.energieFiable_texte' },
        { index: 7, titleKey: 'Nos_engagements.emploi_title', textKey: 'Nos_engagements.emploi_texte' },
        { index: 8, titleKey: 'Nos_engagements.industrie_title', textKey: 'Nos_engagements.industrie_texte' },
        { index: 9, titleKey: 'Nos_engagements.reduction_title', textKey: 'Nos_engagements.reduction_texte' },
        { index: 10, titleKey: 'Nos_engagements.villes_title', textKey: 'Nos_engagements.villes_texte' },
        { index: 11, titleKey: 'Nos_engagements.consommation_title', textKey: 'Nos_engagements.consommation_texte' },
        { index: 12, titleKey: 'Nos_engagements.lutteChangement_title', textKey: 'Nos_engagements.lutteChangement_texte' },
        { index: 13, titleKey: 'Nos_engagements.conserver_title', textKey: 'Nos_engagements.conserver_texte' },
        { index: 14, titleKey: 'Nos_engagements.vieTerrestre_title', textKey: 'Nos_engagements.vieTerrestre_texte' },
        { index: 15, titleKey: 'Nos_engagements.justicePaix_title', textKey: 'Nos_engagements.justicePaix_texte' },
        { index: 16, titleKey: 'Nos_engagements.Partenariats_title', textKey: 'Nos_engagements.Partenariats_texte' }
      ],
      hoveredLogo: null,
      isMobile: false,
      activeBubbleIndex: null
     
    };
  },

methods: {
  updateIsMobile() {
    this.isMobile = window.innerWidth < 640;
  },
  handleLogoEnter(index) {
    if (!this.isMobile) {
      this.hoveredLogo = index;
    }
  },
  handleLogoLeave() {
    if (!this.isMobile) {
      this.hoveredLogo = null;
    }
  },
  handleLogoClick(index) {
    this.activeBubbleIndex = this.activeBubbleIndex === index ? null : index;
  },
  handleBubbleClick() {
    this.activeBubbleIndex = null;
  },
  getLogoStyle(index, total) {
    let radius, centerX, centerY;

    if (window.innerWidth < 640) {
      // 📱 Mobile
      radius = 160;
      centerX = 150;
      centerY = 150;
    } else if (window.innerWidth < 1024) {
      // 💻 Tablette
      radius = 220;
      centerX = 220;
      centerY = 220;
    } else {
      // 🖥️ Desktop (tes valeurs actuelles)
      radius = 330;
      centerX = 220;
      centerY = 220;
    }

    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle) - 20;
    const y = centerY + radius * Math.sin(angle) - 20;

    return {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 10,          // ✅ force les icônes au-dessus du cercle central
      cursor: "pointer"    // ✅ assure l’interaction (main au survol)
    };
  }
},

mounted() {
  this.updateIsMobile();
  window.addEventListener('resize', this.updateIsMobile);
},
beforeUnmount() {
  window.removeEventListener('resize', this.updateIsMobile);
},

  setup() {
    onMounted(() => {
      const bandeauBleuText = document.querySelector('.bandeau_bleu-text');
      if (bandeauBleuText) {
        gsap.fromTo(bandeauBleuText, { opacity: 0, y: -40, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 3.1, ease: 'power2.out' });
      }

      gsap.utils.toArray('.bandeau_bleu-trait').forEach((trait) => {
        gsap.fromTo(trait, { scaleX: 0, transformOrigin: 'center' }, { scaleX: 1, duration: 1.5, ease: 'power2.out', delay: 0.3 });
      });

      gsap.fromTo('.page-blanche_app-wrapper', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 3, delay: 1, ease: 'power2.out' });

      const blocks = document.querySelectorAll('.page-blanche_app-block, .profile');
      blocks.forEach((block) => {
        block.addEventListener('mouseenter', () => {
          gsap.to(block, {
            scale: window.innerWidth > 768 ? 1.1 : 1.05,
            duration: 0.9,
            ease: 'power2.out',
            boxShadow: window.innerWidth > 768 ? '0px 10px 20px rgba(0, 0, 0, 0.3)' : '0px 5px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#ffffff',
          });
        });

        block.addEventListener('mouseleave', () => {
          gsap.to(block, {
            scale: 1,
            duration: 1.9,
            ease: 'elastic.out(1, 1.5)',
            boxShadow: 'none',
            backgroundColor: '#ffffff',
          });
        });
      });

      gsap.from('.page-blanche_app-block', { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: 'power2.out' });

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
          stagger: 0.20
        });
      });


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


      const logoElement = document.querySelector('.bandeau_bleu-logo');
      if (logoElement) {
        gsap.from(logoElement, {
          scrollTrigger: {
            trigger: logoElement,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          scale: 0.9,
          duration: 5,
          ease: "power2.out",
        });
      }
    });

  useHead({
  title: 'BTC Énergies – Valorisation énergétique & environnementale',
  meta: [
    {
      name: 'description',
      content:
        'BTC Énergies est un acteur engagé dans la transition énergétique : vente d’énergies, gazéification, dépollution, valorisation des effluents et traitement des déchets.',
    },
    {
      name: 'keywords',
      content:
        'valorisation énergétique, traitement des déchets, effluents industriels, biogaz, GDF, Enedis, transition écologique, dépollution, BTC Énergies, NaTran, GRT Gaz, AMI, gazéification hydrothermale, bas carbone, innovations, Téréga, climat, réchauffement climatique, panneaux solaires, hydrogène, méthane, CO2, engrais',
    },
    {
      property: 'og:title',
      content: 'BTC Énergies – Solutions vertes pour un avenir durable',
    },
    {
      property: 'og:description',
      content:
        'Découvrez les services de BTC Énergies : énergie renouvelable, valorisation des déchets, solutions sur-mesure pour collectivités et industriels.',
    },
    {
      property: 'og:image',
      content: 'https://btc-energies.fr/favicon.jpg',
    },
    {
      property: 'og:url',
      content: 'https://www.btc-energies.fr/',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/' }],
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

<style scoped>
.logos-section {
  margin-top: calc(3rem + 3cm);
}

@media (min-width: 640px) {
  .logos-section {
    margin-top: calc(4rem + 3cm);
  }
}

.bubble-pop-enter-active,
.bubble-pop-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.bubble-pop-enter-from,
.bubble-pop-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85);
}
</style>
