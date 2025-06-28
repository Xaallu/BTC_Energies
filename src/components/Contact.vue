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
                  <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>

                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(0.7rem, 2.6vw, 2rem);">
                    {{ $t("contact.titre") }}
                  </h1>

                    <!-- Trait inférieur -->
                      <div 
                        class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
                      
            <br><br>
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(0.7rem, 1.4vw, 2rem);">
                    {{ $t("contact.texteIntroHead") }}
                  </h1>
                </div>
                

              </div>
            </div>

          </v-col>


<br>
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
              placeholder="@"
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
    start: "top 65%", // déclenche un peu plus tôt
    toggleActions: "play none none none",
    once: true // animation ne se rejoue pas si on remonte
  },
  y: 70,             // décalage vertical plus prononcé
  opacity: 0,
  duration: 3.6,     // animation un peu plus rapide
  ease: "power4.out", // easing plus naturel
  stagger: 0.2       // si plusieurs éléments, ils s’animent en cascade
});
});
</script>