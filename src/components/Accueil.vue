
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
    <div class="text-center">
      <!-- Trait supérieur -->
      <div class="w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>

      <!-- Texte -->
      <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
           style="font-size: clamp(0.7rem, 1.6vw, 2rem);">
        {{ $t("texte_bandeau_bleu") }}
      </h1>

      <!-- Trait inférieur -->
      <div class="w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
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
        class="mx-auto w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-xl"
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

<br><br>
<h2 class="page-blanche_app-title">
   {{ $t('Nos_engagements.title') }}
</h2>

<br><br>
<br><br>
<br>

<div class="my-10 flex justify-center">
  <div class="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]">

    <!-- Logos ODD en cercle -->
    <div
      v-for="(logo, index) in logosOdd"
      :key="index"
      :style="getLogoStyle(index, logosOdd.length)"
      class="absolute 
         w-[4.5rem] h-[4.5rem]     <!-- taille par défaut : mobile -->
         sm:w-[4.5rem] sm:h-[4.2rem] <!-- petit écran (≥640px : smartphone en mode paysage) -->
         md:w-[6.5rem] md:h-[3.5rem] <!-- tablette (≥768px) -->
         lg:w-[7.5rem] lg:h-[4.5rem] <!-- grand écran (≥1024px) -->
         xl:w-[8rem] xl:h-[6rem]     <!-- très grand écran -->
         overflow-hidden shadow-md bg-white p-1
         transition-transform duration-300 ease-in-out"
      :class="{ 'scale-150 z-10': hoveredLogo === index }"
      @mouseenter="hoveredLogo = index"
      @mouseleave="hoveredLogo = null"
    >
      <img
        :src="logo"
        alt="ODD"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Bulle d'info (uniquement pour le logo 1 / index 0) -->
    <div
      v-if="hoveredLogo === 0"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[380px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.Pas_de_Pauvrete_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.Pas_de_Pauvrete_texte') }}
      </p>

    </div>

     <!-- Bulle d'info (uniquement pour le logo 2 / index 1) -->
        <div
      v-if="hoveredLogo === 1"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.Faim_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.Faim_texte') }}
      </p>
    
    </div>

    <!-- Bulle d'info (uniquement pour le logo 3 / index 2) -->
        <div
      v-if="hoveredLogo === 2"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.BonneSante_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.BonneSante_texte') }}
      </p>
      
    
    </div>

    <!-- Bulle d'info (uniquement pour le logo 4 / index 3) -->
        <div
      v-if="hoveredLogo === 3"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.education_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.edcucation_texte') }}
      </p>
      
    </div>

    <!-- Bulle d'info (uniquement pour le logo 5 / index 4) -->
        <div
      v-if="hoveredLogo === 4"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.egalite_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.egalite_texte') }}
      </p>
      
      
    </div>

    <!-- Bulle d'info (uniquement pour le logo 6 / index 5) -->
    <div
      v-if="hoveredLogo === 5"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.eauSalubre_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.eauSalubre_texte') }}
      </p>
      
    </div>

     <!-- Bulle d'info (uniquement pour le logo 7 / index 6) -->
    <div
      v-if="hoveredLogo === 6"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.energieFiable_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.energieFiable_texte') }}
      </p>
      
    </div>

     <!-- Bulle d'info (uniquement pour le logo 8 / index 7) -->
    <div
      v-if="hoveredLogo === 7"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.emploi_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.emploi_texte') }}
      </p>
      
    </div>

    <!-- Bulle d'info (uniquement pour le logo 9 / index 8) -->
    <div
      v-if="hoveredLogo === 8"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

     <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.industrie_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.industrie_texte') }}
      </p>
      
    </div>

    <!-- Bulle d'info (uniquement pour le logo 10 / index 9) -->
    <div
      v-if="hoveredLogo === 9"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

     <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.reduction_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.reduction_texte') }}
      </p>
     
    </div>

    <!-- Bulle d'info (uniquement pour le logo 11 / index 10) -->
    <div
      v-if="hoveredLogo === 10"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

     <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.villes_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.villes_texte') }}
      </p>
    
    </div>

     <!-- Bulle d'info (uniquement pour le logo 12 / index 11) -->
    <div
      v-if="hoveredLogo === 11"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.consommation_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.consommation_texte') }}
      </p>
      
    </div>

     <!-- Bulle d'info (uniquement pour le logo 13 / index 12) -->
    <div
      v-if="hoveredLogo === 12"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.lutteChangement_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.lutteChangement_texte') }}
      </p>
     
    </div>

    <!-- Bulle d'info (uniquement pour le logo 14 / index 13) -->
    <div
      v-if="hoveredLogo === 13"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.conserver_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.conserver_texte') }}
      </p>
      
    </div>

    <!-- Bulle d'info (uniquement pour le logo 15 / index 14) -->
    <div
      v-if="hoveredLogo === 14"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.vieTerrestre_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.vieTerrestre_texte') }}
      </p>
    
    </div>

    <!-- Bulle d'info (uniquement pour le logo 16 / index 15) -->
    <div
      v-if="hoveredLogo === 15"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

     <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.justicePaix_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.justicePaix_texte') }}
      </p>

    </div>

     <!-- Bulle d'info (uniquement pour le logo 17 / index 16) -->
    <div
      v-if="hoveredLogo === 16"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >

    <h3 class="font-serif font-bold text-xl mb-2" style="color: #8BC34A;">
        {{ $t('Nos_engagements.Partenariats_title') }}</h3>

      <p class="font-serif text-lg leading-relaxed">
      {{ $t('Nos_engagements.Partenariats_texte') }}
      </p>
    </div>
  </div>
</div>

<br><br>
<br><br>
<!-- Trait décoratif -->
<div class="w-[120px] h-[2px] mx-auto my-4" style="background-color: #8BC367;"></div>


      </div>
      </v-container>

    </v-main>


    <!-- Bandeau bas de page - Mentions Légales -->
  <div class="bandeau_bleu mt-6 w-full bg-[linear-gradient(to_left,#001032,#000926,#85867D)]">
  
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
        { name: 'Jean-Marc BOUILLON', title: 'Directeur Général', roleKey: 'directeur_general', img: '/Trombi/JM_B.jpg', slug: 'JeanMarcBOUILLON' },
        { name: 'Alain Degans', title: 'Chef de Projet Digital', roleKey: 'chef_projet_digital', img: '/Trombi/A_D.png', slug: 'AlainDEGANS' },
        { name: 'Camille Faure', title: 'Responsable RH (HR Manager)', roleKey: 'responsable_rh', img: '/Trombi/C_F.png', slug: 'CamilleFaure' },
        { name: 'Rémi Pichonneau', title: 'Responsable Technique (CTO)', roleKey: 'responsable_technique', img: '/Trombi/R_Pvf.png', slug: 'RemiPichonneau' },
        { name: 'Olivier Cot', title: 'Responsable Commercial (CBO)', roleKey: 'responsable_commercial', img: '/Trombi/O_C.png', slug: 'OlivierCot' },
        { name: 'Philippe Stuarik', title: 'Responsable QHSE (QSE Manager)', roleKey: 'responsable_qhse', img: '/Trombi/P_Svf.png', slug: 'PhilippeStuarik' },
        { name: 'Anaïs Olive', title: 'Cheffe de projet Outre Mer (Project Manager)', roleKey: 'cheffe_projet_outre_mer', img: '/Trombi/A_O.png', slug: 'AnaisOLIVE' },
        { name: 'Cédric Chauvet', title: 'Directeur des Opération de Production', roleKey: 'developpeur_ia', img: '/Trombi/C_Cvf.png', slug: 'CedricChauvet' },
        { name: 'Xavier Piedallu', title: 'Architecte Web Full-Stack', roleKey: 'architecte_web', img: '/Trombi/X_Pvf.png', slug: 'XavierPiedallu' },
        { name: 'Rubie', title: 'Responsable Bien-être au travail (Chief Happiness Officer)', roleKey: 'responsable_bien_etre', img: '/Trombi/Rubie.png', slug: 'Rubie' }
      ],
      logosOdd: [
        '/logo_impact/1pauvreté.png', '/logo_impact/2faim.png', '/logo_impact/3santé.png', '/logo_impact/4éducation.png',
        '/logo_impact/5égalité.png', '/logo_impact/6eau.png', '/logo_impact/7energies.png', '/logo_impact/8acces.png',
        '/logo_impact/9industrie.png', '/logo_impact/10reduction.png', '/logo_impact/11villes.png', '/logo_impact/12consomations.png',
        '/logo_impact/13luttes.png', '/logo_impact/14conserver.png', '/logo_impact/15vie.png', '/logo_impact/16justice.png', '/logo_impact/17partenariats.png'
      ],
      hoveredLogo: null
     
    };
  },

methods: {
  getLogoStyle(index, total) {
    let radius, centerX, centerY;

    if (window.innerWidth < 640) {
      // 📱 Mobile
      radius = 150;
      centerX = 170;
      centerY = 170;
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
      top: `${y}px`
    };
  }
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
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://btc-energies.fr/' }],
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