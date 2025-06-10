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
        <video autoplay loop muted playsinline class="relative aspect-[1/1] sm:aspect-video md:aspect-[5/2] w-full">
          <source src="/videos/animation_eau2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos HTML5.
        </video>
   
        <!-- Logo -->
        <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-20 h-auto max-w-full" />
        </div>

            <!-- Texte centré -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white ml-4">{{ $t('contact.titre') }}</h2>

                <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed pl-10">
                  {{ $t('contact.texteIntroHead') }}
                </p>

                <br> <br>
                <!-- Trait inférieur -->
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-8"></div>
              </div>
            </section>

             
        
             <!-- Section Contact -->
             
            
             <v-container fluid class="min-h-screen flex items-center justify-center px-4 py-8 gsap-mentions">

    
              <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">

              <!-- Ligne de séparation verte -->
              <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
              <br>

              <!-- Texte en tête -->
              <v-row justify="center">
                <v-col cols="12" md="10">
                  <h4 class="text-center text-[#475C79] font-bold">
          {{ $t('contact.introForm1') }}<br />
          {{ $t('contact.introForm2') }}
        </h4>

</v-col>
</v-row>

      <!-- Ligne de séparation verte -->
      <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <br />

      <!-- Formulaire de Contact -->
      <div class="page-blanche_app-wrapper pl-4 sm:pl-6 md:pl-10 lg:pl-24">
        <form @submit.prevent="envoyerFormulaire" class="space-y-6">

          <!-- Champ Nom -->
          <div class="w-full max-w-lg mx-auto">
            <label for="nom" class="block text-left text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.nomLabel') }}
            </label>
            <input
              v-model="nom"
              id="nom"
              type="text"
              required
              :placeholder="$t('contact.nomPlaceholder')"
              class="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <!-- Champ Email -->
          <div class="w-full max-w-lg mx-auto">
            <label for="email" class="block text-left text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.emailLabel') }}
            </label>
            <input
              v-model="email"
              id="email"
              type="email"
              required
              :placeholder="$t('contact.emailPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <!-- Champ Message -->
          <div class="w-full max-w-lg mx-auto">
            <label for="message" class="block text-left text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.messageLabel') }}
            </label>
            <textarea
              v-model="message"
              id="message"
              rows="7"
              required
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>
          </div>

          <!-- Bouton -->
          <div class="text-center mx-auto">
            <button
              ref="boutonSoumettre"
              type="submit"
              class="bg-[#1f2937] text-white font-bold py-3 px-12 rounded-full shadow transition duration-300"
            >
              {{ $t('contact.boutonEnvoyer') }}
            </button>
          </div>

            <!-- Espace -->
            <div class="mb-8"></div>

            <!-- Bloc Contact -->
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-base md:text-lg px-2">
              <a href="mailto:direction@btc-energies.fr"
                class="inline-block text-xl text-[#8BC367] hover:text-[#8BC367] no-underline hover:no-underline transform transition-transform duration-200 hover:scale-105">
                direction@btc-energies.fr
              </a>
              <span class="italic text-[#8BC367]">
                +33 6 29 56 07 56
              </span>
            </div>

          </form>
      </div>

          
        </div>
      </div>
    </v-container>
      
              <!-- Bandeau bas -->
            <div class="w-full mt-10 bg-gradient-to-r from-[#000926] to-[#3c5a81]">
              <div class="max-w-5xl mx-auto px-4 py-6 flex justify-center items-center text-white">
                <img
                  ref="logoSidebar"
                  src="/logo_sidebar.png"
                  alt="BTC Énergies Logo"
                  class="w-40 h-auto max-h-32"
                />
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
import Sidebar from './Sidebar.vue';

gsap.registerPlugin(ScrollTrigger);

const logoSidebar = ref(null);
const nom = ref('');
const email = ref('');
const message = ref('');
const boutonSoumettre = ref(null);

const envoyerFormulaire = async () => {
  // Animation rebond bouton
  if (boutonSoumettre.value) {
    gsap.fromTo(boutonSoumettre.value, { scale: 1 }, {
      scale: 1.55,
      backgroundColor: "#10b981", // vert
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nom: nom.value,
        email: email.value,
        message: message.value,
        langue: "fr" // Tu pourras le rendre dynamique plus tard
      })
    });

    if (!response.ok) throw new Error("Erreur réseau");

    alert("Message envoyé avec succès, nous reviendrons vers vous dans les meilleurs délais.");
    nom.value = "";
    email.value = "";
    message.value = "";

  } catch (error) {
    console.error(error);
    alert("Erreur lors de l'envoi du formulaire. Veuillez vérifé les champs obligatoires et réessayer.");
  }
};



onMounted(() => {
  // ✅ Animation du logo
  if (logoSidebar.value) {
    gsap.fromTo(
      logoSidebar.value,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logoSidebar.value,
          start: 'top 95%',
          toggleActions: 'play reverse play reverse',
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

   // Animation du container "Contact"
   gsap.from(".gsap-mentions", {
    scrollTrigger: {
      trigger: ".gsap-mentions",
      start: "top 40%", 
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 4.2,
    ease: "power3.out"
  });
});
</script>
