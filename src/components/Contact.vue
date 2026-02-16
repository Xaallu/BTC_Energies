<template>
  <v-app>
    <v-main class="pa-0 ma-0">
     <v-row no-gutters class="pa-0 ma-0">

        <!-- Sidebar -->
      <v-col cols="12" md="2" class="pa-0 hidden">
        <div class="sidebar">
          <Sidebar />
        </div>
      </v-col>

      <!--_ Contenu principal avec la vidéo _-->

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
            <source src="/videos/Bienvenuesurnotresite.web.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos HTML5.
          </video>
        </div>
      </section>

            <!-- Bandeau bleu -->
            <div class="w-full py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
              <div class="w-full max-w-[1200px] mx-auto px-4">

                <!-- Groupe centré mais décalé vers la gauche -->
                <div class="text-center px-2 sm:px-0">
                  <!-- Trait supérieur -->
                  <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>

                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(1rem, 2.8vw, 2rem);">
                    {{ $t("contact.titre") }}
                  </h1>

                    <!-- Trait inférieur -->
                      <div 
                        class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>

                  <div class="h-4 sm:h-6"></div>
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(0.9rem, 1.7vw, 2rem);">
                    {{ $t("contact.texteIntroHead") }}
                  </h1>
                </div>
                

              </div>
            </div>

          </v-col>
          <v-col cols="12" class="pa-0">
      <v-container fluid class="min-h-screen flex items-center justify-center px-3 sm:px-4 py-6 sm:py-8 gsap-mentions">
        <div class="w-full px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-md w-full sm:max-w-5xl sm:mx-auto p-5 sm:p-6 md:p-8">

                    <!-- Ligne de séparation verte -->
             <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

  <div class="h-4 sm:h-6"></div>
    <!-- Texte en tête -->
        <v-row justify="center">
          <v-col cols="12" md="10">
            
            <h4 class="text-center text-[#475C79] font-bold text-sm sm:text-base">
              {{ $t('contact.introForm1') }}<br />
              {{ $t('contact.introForm2') }}
            </h4>
          </v-col>
        </v-row>

            <!-- Ligne de séparation verte -->
      <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <div class="h-4 sm:h-6"></div>

        <!-- Formulaire de Contact -->
      <div class="page-blanche_app-wrapper px-4 sm:px-6 md:px-8 lg:px-12">
          <div v-if="soumissionReussie" class="flex justify-center" role="status" aria-live="polite">
            <div class="relative overflow-hidden bg-white rounded-2xl shadow-xl w-full sm:max-w-2xl px-6 sm:px-10 py-12 border border-gray-100">
              <div class="absolute inset-0 pointer-events-none opacity-20" style="background: radial-gradient(circle at 20% 20%, #05ff16 0%, transparent 35%), radial-gradient(circle at 80% 10%, #0ea5e9 0%, transparent 30%), radial-gradient(circle at 50% 80%, #05ff16 0%, transparent 35%);"></div>
              <div class="relative flex flex-col items-center gap-3">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5eb] text-[#0f5132] text-2xl font-bold shadow-inner">
                  ✓
                </div>
                <div class="w-16 h-1 bg-[#05ff16] rounded-full"></div>
                <h3 class="text-2xl sm:text-3xl font-bold text-[#0b172a] text-center">
                  {{ $t('contact.successTitle') }}
                </h3>
                <p class="text-base sm:text-lg text-slate-600 leading-relaxed text-center max-w-xl">
                  {{ $t('contact.successMessage') }}
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <RouterLink
                    to="/"
                    class="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#0b172a] text-[#0b172a] font-semibold hover:bg-[#0b172a] hover:text-white transition duration-200"
                  >
                    {{ $t('contact.successBack') }}
                  </RouterLink>
                  <button
                    type="button"
                    class="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#0b172a] text-white font-semibold hover:opacity-90 transition duration-200"
                    @click="soumissionReussie = false"
                  >
                    {{ $t('contact.successNew') }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form
            v-else
            name="contact"
            method="POST"
            action="/contact?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="space-y-5 sm:space-y-6"
            @submit.prevent="submitForm"
          >

          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Don't fill this out: <input name="bot-field" v-model="botField" /></label>
          </p>
          <input
            type="hidden"
            name="langue"
            :value="langueCachee"
          />


          <!-- Champ Nom -->
          <div class="w-full sm:max-w-lg sm:mx-auto">
            <label for="nom" class="block text-left text-base sm:text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.nomLabel') }}
            </label>
            <input
              name="nom"
              v-model="nom"
              id="nom"
              type="text"
              required
              autocomplete="name"
              autocapitalize="words"
              :placeholder="$t('contact.nomPlaceholder')"
              class="w-full px-4 py-3 border border-gray-500 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <!-- Champ Email -->
          <div class="w-full sm:max-w-lg sm:mx-auto">
            <label for="email" class="block text-left text-base sm:text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.emailLabel') }}
            </label>
            <input
             name="email"
              v-model="email"
              id="email"
              type="email"
              required
              autocomplete="email"
              inputmode="email"
              placeholder="@"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            </div>

           <!-- Champ Message -->
          <div class="w-full sm:max-w-lg sm:mx-auto">
            <label for="message" class="block text-left text-base sm:text-lg font-semibold text-[#3E3E3E] mb-2">
              {{ $t('contact.messageLabel') }}
            </label>
            <textarea
              name="message"
              v-model="message"
              id="message"
              rows="7"
              required
              autocomplete="on"
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>
          </div>

          <!-- Erreur -->
          <p v-if="erreurSoumission" class="text-center text-red-600 text-sm sm:text-base">
            {{ erreurSoumission }}
          </p>

          <!-- Bouton -->
          <div class="text-center mx-auto">
            <button
              ref="boutonSoumettre"
              type="submit"
              :disabled="envoiEnCours"
              class="bg-[#1f2937] text-white font-bold py-3 px-10 sm:px-12 rounded-full shadow transition duration-300 w-full sm:w-auto text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span v-if="envoiEnCours">...</span>
              <span v-else>{{ $t('contact.boutonEnvoyer') }}</span>
            </button>
          </div>

           <!-- Espace -->
            <div class="h-6 sm:h-8"></div>

                <!-- Bloc Contact -->
                <div class="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg px-2 text-center md:text-left">
                  <a href="mailto:direction@btc-energies.fr"
                    class="inline-block text-base sm:text-xl text-[#8BC367] hover:text-[#8BC367] no-underline hover:no-underline transform transition-transform duration-200 hover:scale-105">
                    direction@btc-energies.fr
                  </a>
                  <a href="tel:+33629560756" class="italic text-[#8BC367] transform transition-transform duration-200 hover:scale-105">
                    +33 6 29 56 07 56
                  </a>
                </div>

              </form>
            </div>
          </div>
        </div>
      
      </v-container>
    </v-col>
            <!-- Bandeau bas -->
           
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RouterLink } from 'vue-router';
import Sidebar from './Sidebar.vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

gsap.registerPlugin(ScrollTrigger);

const { locale } = useI18n();
const SITE_URL = 'https://www.btc-energies.fr';
const ogLocaleMap = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
  it: 'it_IT',
  de: 'de_DE',
  jp: 'ja_JP',
  cn: 'zh_CN',
};
const ogLocale = computed(() => ogLocaleMap[locale.value] || 'fr_FR');

const logoSidebar = ref(null);
const nom = ref('');
const email = ref('');
const message = ref('');
const boutonSoumettre = ref(null);
const langueCachee = ref(locale.value || 'fr');
const botField = ref('');
const soumissionReussie = ref(false);
const envoiEnCours = ref(false);
const erreurSoumission = ref('');

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const submitForm = async () => {
  erreurSoumission.value = '';
  envoiEnCours.value = true;

  const payload = {
    'form-name': 'contact',
    nom: nom.value,
    email: email.value,
    message: message.value,
    langue: langueCachee.value,
    'bot-field': botField.value,
  };

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(payload),
    });

    soumissionReussie.value = true;
    nom.value = '';
    email.value = '';
    message.value = '';
    botField.value = '';

    const url = new URL(window.location.href);
    url.searchParams.set('success', 'true');
    window.history.replaceState({}, '', url.toString());
  } catch (e) {
    erreurSoumission.value = 'Une erreur est survenue. Merci de réessayer dans un instant.';
  } finally {
    envoiEnCours.value = false;
  }
};



onMounted(() => {
  // Récupère la langue depuis localStorage sans casser le rendu si indisponible
  try {
    if (typeof localStorage !== 'undefined') {
      const storedLang = localStorage.getItem('lang');
      if (storedLang) {
        langueCachee.value = storedLang;
        if (storedLang !== locale.value) {
          locale.value = storedLang;
        }
      } else {
        langueCachee.value = locale.value || 'fr';
      }
    }
  } catch (e) {
    langueCachee.value = locale.value || 'fr';
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === 'true') {
    soumissionReussie.value = true;
  }

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

  // Animation du container "Contact" (sans le rendre invisible avant scroll)
  gsap.from(".gsap-mentions", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.15,
  });
});

const metaDescription =
  'Vous souhaitez un devis ou en savoir plus ? Contactez l’équipe BTC Énergies pour discuter de vos projets énergétiques et environnementaux.';
const metaKeywords =
  'contact BTC Énergies, devis énergie, formulaire entreprise, valorisation déchets, GDF Enedis contact';
const alternateOgLocales = computed(() =>
  Object.values(ogLocaleMap).filter((value) => value && value !== ogLocale.value)
);

const contactSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact – BTC Énergies',
  url: `${SITE_URL}/contact`,
  inLanguage: locale.value,
  description: metaDescription,
  mainEntity: {
    '@type': 'Organization',
    name: 'BTC Énergies',
    url: `${SITE_URL}/`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+33 6 29 56 07 56',
      email: 'direction@btc-energies.fr',
      availableLanguage: Object.keys(ogLocaleMap)
    }
  }
}));

useHead(() => ({
  title: 'Contact – BTC Énergies',
  meta: [
    { name: 'description', content: metaDescription },
    { name: 'keywords', content: metaKeywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Contact – BTC Énergies' },
    { property: 'og:description', content: metaDescription },
    { property: 'og:url', content: `${SITE_URL}/contact` },
    { property: 'og:image', content: `${SITE_URL}/logo_sidebar.png` },
    { property: 'og:site_name', content: 'BTC Énergies' },
    { property: 'og:locale', content: ogLocale.value },
    ...alternateOgLocales.value.map((value) => ({ property: 'og:locale:alternate', content: value })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact – BTC Énergies' },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: `${SITE_URL}/logo_sidebar.png` }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/contact` }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(contactSchema.value)
    }
  ]
}));
</script>





