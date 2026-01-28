<template>
  <div class="main-content-wrapper">
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

    <section class="w-full py-10 sm:py-16 lg:py-20 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">
      <div class="w-full max-w-[1200px] mx-auto px-4">
        <div class="text-center">
          <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>
          <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
              style="font-size: clamp(1.1rem, 3.1vw, 3.2rem);">
            {{ $t("nos_solutions.title_nos solutions") }}
          </h1>
          <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
        </div>
      </div>
    </section>

    <v-main>
     <v-container fluid class="page-blanche_app py-10">
        <div class="page-blanche_app-wrapper px-4 sm:px-6 md:px-8 lg:px-12">
         

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="135" width="117" decoding="async" loading="lazy"
                  src="/solutions/logo1.png"
                  alt="Nos services BTC Energies"
                  class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div class="indent-8 text-left mb-6">
                <h2 class="text-3xl font-bold text-[#777777]">{{ $t('nos_solutions.titre2_Preparation') }}</h2>
                <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
              </div>

              <ol class="indent-12 text-gray-500 text-bolt text-xl space-y-2 px-6">
                <li>1. {{ $t('nos_solutions.text1_Recuperation') }} </li>
                <li>2. {{ $t('nos_solutions.text2_Tri et separation') }}</li>
                <li>3. {{ $t('nos_solutions.text3_Broyage') }}</li>
                <li>4. {{ $t('nos_solutions.text4_Melange') }}</li>
              </ol>
            </div>

            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="161" width="176" decoding="async" loading="lazy"
                  src="/solutions/logo4.png"
                  alt="Nos services BTC Energies"
                  class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div class="indent-8 text-left mb-6">
                <h2 class="text-3xl font-bold text-[#777777]">{{ $t('nos_solutions.titreVal_Valorisation') }}</h2>
                <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
              </div>

              <ol class="text-center text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p>{{ $t('nos_solutions.Val_La Gazéification Hydrothermale') }}</p>
              </ol>
            </div>

            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="131" width="136" decoding="async" loading="lazy"
                  src="/solutions/logo3.png"
                  alt="Nos services BTC Energies"
                  class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div class="indent-8 text-left mb-6">
                <h2 class="text-3xl font-bold text-[#777777]">{{ $t('nos_solutions.Exploitation') }}</h2>
                <div class="ml-8 w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
              </div>

              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <li>1. {{ $t('nos_solutions.text1_Gaz produits') }} </li>
                <li>2. {{ $t('nos_solutions.text2_Eau récupérée') }}</li>
                <li>3. {{ $t('nos_solutions.text3_Matiere minérale') }}</li>
              </ol>
            </div>

            <div class="h-10 sm:h-12"></div>
            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc space-y-6">
              <h2 class="page-blanche_app-title text-center">
                {{ $t('nos_solutions.titre_Notre offre de services') }}
              </h2>
              <p class="text-[#475C79] font-bold text-xl text-center max-w-4xl mx-auto">
                {{ $t('nos_solutions.texteOffre_Nous pouvons traiter') }}
              </p>
            </div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="543" width="770" decoding="async" loading="lazy"
                  src="/solutions/Solution1.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p class="text-center">{{ $t('nos_solutions.texteOffre_Nous proposons') }}</p>
              </ol>
            </div>

            <div class="h-8 sm:h-10"></div>
            <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc">
              <h2 class="page-blanche_app-title text-center">
                {{ $t('nos_solutions.titre_Nos produits fini') }}
              </h2>
            </div>

            <div class="gsap-bloc space-y-6">
              <div class="flex justify-center items-center my-6">
                <img height="551" width="778" decoding="async" loading="lazy"
                  src="/solutions/Solution2.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <div class="hover:scale-[1.04] transition-transform duration-300 ease-in-out">
                <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                  <p class="text-center">{{ $t('nos_solutions.texteproduits_Nous destinons') }}</p>
                </ol>
              </div>
            </div>

            <div class="h-8 sm:h-10"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="553" width="778" decoding="async" loading="lazy"
                  src="/solutions/Solution3.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p class="text-center">{{ $t('nos_solutions.texteproduits_LHydrogène est') }}</p>
              </ol>
            </div>

            <div class="h-8 sm:h-10"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="541" width="776" decoding="async" loading="lazy"
                  src="/solutions/Solution4.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p class="text-center">{{ $t('nos_solutions.texteproduits_Le CO2 est') }}</p>
              </ol>
            </div>

            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="543" width="776" decoding="async" loading="lazy"
                  src="/solutions/Solution5.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p class="text-center">{{ $t('nos_solutions.texteproduits_Leau chargee dazote') }}</p>
              </ol>
            </div>

            <div class="h-10 sm:h-12"></div>

            <div class="gsap-bloc">
              <div class="flex justify-center items-center my-6">
                <img height="545" width="773" decoding="async" loading="lazy"
                  src="/solutions/Solution6.png"
                  alt="Nos services BTC Energies"
                />
              </div>
              <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                <p class="text-center">{{ $t('nos_solutions.texteproduits_La matiere minerale') }}</p>
              </ol>
            </div>

        </div>
      </v-container>
    </v-main>
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
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useHead } from '@vueuse/head';

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();
  // ✅ Animation sur les blocs avec gsap-bloc
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    gsap.set(bloc, { transformOrigin: 'center' });
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
        overwrite: 'auto',
      });
    });

    bloc.addEventListener('mouseleave', () => {
      gsap.to(bloc, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        boxShadow: 'none',
        overwrite: 'auto',
      });
    });
  });

  const bandeauBleuText = document.querySelector('.bandeau_bleu-text');
  if (bandeauBleuText) {
    gsap.fromTo(bandeauBleuText, { opacity: 0, y: -40, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 3.1, ease: 'power2.out' });
  }

  if (logoSidebar.value) {
    gsap.from(logoSidebar.value, {
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
});

useHead({
  title: 'Nos solutions – BTC Énergies',
  meta: [
    {
      name: 'description',
      content: 'Production et vente d’énergies, valorisation des déchets, traitement des effluents industriels, opérations de dépollution et gestion de projets durables.',
    },
    { content: 'vente d’énergies, gazéification, effluents, déchets, dépollution, valorisation, BTC Énergies, solutions écologiques, recyclage industriel' },
    { property: 'og:title', content: 'BTC Énergies – Services énergétiques et environnementaux' },
    { property: 'og:description', content: 'Des solutions innovantes pour valoriser vos déchets et produire de l’énergie verte.' },
    { property: 'og:url', content: 'https://www.btc-energies.fr/solutions' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
   link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/solutions' }],
});
</script>
