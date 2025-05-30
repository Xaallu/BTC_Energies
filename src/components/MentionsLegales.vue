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
      <section class="video-banner relative w-full h-[90vh] overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/animation_eau2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos HTML5.
        </video>
   
        <!-- Logo -->
        <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-20 h-auto max-w-full" />
        </div>

            <!-- Texte centré -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">Mentions Légales</h2>

                <!-- Trait visible sous le texte -->
                <div class="w-24 h-[2px] bg-white opacity-90"></div>

              </div>
            </section>

            

           <!-- Section Mentions Légales -->
            
         
           <v-container class="bg-gray-100 flex flex-col items-start px-4 py-8 gsap-mentions">



              <!-- Titre + soulignement -->
            
             <div class="w-full text-center mb-10">
              <h1 class="text-4xl font-bold text-[#555]">Mentions Légales</h1>
              <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1 mx-auto"></div>
            </div>

              <!-- Bloc principal : Logo à gauche / Infos à droite -->
            <div class="flex flex-col md:flex-row items-start justify-start gap-12 w-full px-4">

                <!-- Colonne gauche : Logo + Coordonnées -->
                <div class="flex flex-col items-center md:items-start ml-6">
                <img
                  src="/favicon2.jpg"
                  alt="Logo BTC Energies"
                  class="w-full max-w-[340px] h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110 mb-4"
                />
              </div>


              <!-- CGU -->
          <div id="cgu" class="mt-20 text-gray-800 max-w-4xl mx-auto">
            <h1 class="text-gray-600 text-3xl space-y-3">Conditions Générales d’Utilisation (CGU)</h1>

            <div class="mb-8"></div>

            <p class="mb-4">L’accès au site de BTC Énergies implique l’acceptation pleine et entière des conditions décrites ci-dessous. Ces conditions peuvent être modifiées à tout moment.</p>

            <h2 class="text-gray-600 text-xl space-y-3">Accès au site</h2>
            <div class="mb-2"></div>
            <p class="mb-4">Le site est accessible gratuitement. L’éditeur s'efforce de fournir un accès ininterrompu, sans garantie absolue.</p>

            <h2 class="text-gray-600 text-xl space-y-3">Propriété intellectuelle</h2>
            <div class="mb-2"></div>
            <p class="mb-4">Les contenus (textes, images, logos, etc.) sont protégés par le droit d’auteur. Toute reproduction, distribution ou modification est interdite sans autorisation écrite.</p>
  
            <h2 class="text-gray-600 text-xl space-y-3">Responsabilité</h2>
            <div class="mb-2"></div>
            <p>L’éditeur ne peut être tenu responsable des dommages liés à l’utilisation du site ou à la présence de virus ou liens externes.</p>

            <div class="mb-2"></div>
            <h2 class="text-gray-600 text-xl space-y-3">Droit applicable</h2>
            <div class="mb-2"></div>
            <p>Les présentes CGU sont régies par le droit français. En cas de litige, compétence est attribuée aux tribunaux de Paris.</p>
          </div>

        <!-- Politique de confidentialité -->
        <div id="confidentialite" class="mt-20 text-gray-800 max-w-4xl mx-auto">
          <h1 class="text-gray-600 text-3xl space-y-3">Politique de confidentialité</h1>

          <div class="mb-8"></div>

          <h2 class="text-gray-600 text-xl space-y-3">1. Données collectées</h2>
          <p class="mb-4">Nous collectons des données personnelles via les formulaires de contact, les cookies et les statistiques de navigation Les données concernées peuvent inclure : nom, prénom, e-mail, téléphone, adresse IP, etc.</p>

          <div class="mb-2"></div>

         <h2 class="text-gray-600 text-xl space-y-3">2. Finalité du traitement</h2>
            <p>Les données sont utilisées uniquement pour répondre aux demandes, améliorer l'expérience utilisateur, et envoyer des communications si vous y avez consenti.</p>

            <div class="mb-2"></div>

            <h2 class="text-gray-600 text-xl space-y-3">3. Base légale</h2>
            <p>Le traitement est fondé sur le consentement explicite ou sur l’intérêt légitime lorsqu’il s’agit de répondre à une demande directe.</p>

            <div class="mb-2"></div>

            <h2 class="text-gray-600 text-xl space-y-3">4. Destinataires</h2>
            <p>Vos données ne sont jamais revendues. Elles peuvent être partagées avec nos prestataires techniques, dans le strict respect de leur mission.</p>

            <div class="mb-2"></div>

            <h2 class="text-gray-600 text-xl space-y-3">5. Durée de conservation</h2>
            <p>Les données sont conservées pour une durée maximale de 3 ans après le dernier contact ou conformément aux obligations légales.</p>

            <div class="mb-2"></div>

            <h2 class="text-gray-600 text-xl space-y-3">6. Vos droits</h2>
            <p>Vous pouvez accéder à vos données, demander leur rectification ou suppression, ou vous opposer à leur traitement. Contact : [votre email RGPD].</p>

            <div class="mb-2"></div>

            <h2 class="text-gray-600 text-xl space-y-3">7. Cookies</h2>
            <p>Ce site utilise des cookies techniques et statistiques. Vous pouvez les accepter ou les refuser à tout moment depuis le bandeau dédié.</p>
          </div>

        <div class="mb-8"></div>
           
    </div>

                <!-- Ligne de sépartion verte-->
        <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-12 mx-auto mt-6"></div>

<div class="mb-8"></div>

    <!-- Colonne droite : Infos légales -->


      <div class="w-full flex justify-center">
  <div class="flex-1 max-w-4xl">
        <ul class="text-gray-600 text-xl space-y-3">
           <h2 class="text-gray-600 text-3xl space-y-3">Contact</h2>
 

  <li>
  Pour toute question relative à la protection des données personnelles :
  <span class="text-[#8BC367]">direction@btc-energies.fr</span>
</li>

  <div class="mb-8"></div>

          <li><strong>Dénomination sociale : BTC Energies</strong></li>
          <li>Forme Juridique : SAS</li>
          <li>Capital social : 120€</li>
          <li>Siège social : 9 RUE DE L'AVENIR, 31470 FONTENILLES</li>
          <!-- Ligne de sépartion verte-->
        <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-12 mx-auto mt-6"></div>
        </ul>

        <div class="mb-8"></div>

        

        <div class="mb-8"></div>


         <!-- Coordonnées -->
    <div class="mt-4 space-y-2 text-left">
          <p class="text-lg italic font-semibold text-gray-700">
            Téléphone : <span class="text-[#8BC367]">+33 6 29 56 07 56</span>
          </p>
          <p class="text-lg italic font-semibold text-gray-700">Email :</p>
          <a href="mailto:direction@btc-energies.fr"
            class="block text-xl text-[#8BC367] hover:text-[#8BC367] hover:underline transition-transform duration-200 hover:scale-105"
          >
            direction@btc-energies.fr
          </a>
          <a href="mailto:kermon31@gmail.com"
            class="block text-xl text-[#8BC367] hover:text-[#8BC367] hover:underline transition-transform duration-200 hover:scale-105"
          >
            kermon31@gmail.com
          </a>
        </div>
      </div>
      </div>

            <!-- Ligne de séparation verte -->
      <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

        <!-- Marge interne -->
        <div class="mb-4"></div>

        <!-- Bloc RCS & TVA parfaitement centré avec alignement propre -->
        <div class="w-full flex justify-center px-4">
          <p class="text-gray-700 text-base text-center max-w-4xl">
            <span class="font-semibold">Numéro RCS :</span> 928 497 585 R.C.S. Toulouse
            <span class="mx-4 text-[#8BC367]">|</span>
            <span class="font-semibold">Numéro de TVA :</span> FR27928497585
          </p>
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
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">Nous contacter</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
                Nos Coordonnées
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
</script>

