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
          </v-col>

          <!-- Bandeau bleu -->
          <div class="bandeau_bleu w-full py-20 bg-gradient-to-r from-[#000926] to-[#3c5a81]">
            <div class="w-full max-w-[1200px] mx-auto px-4">
          
              <!-- Groupe centré mais décalé vers la gauche -->
              <div class="text-center transform -translate-x-12 sm:-translate-x-20 md:-translate-x-24">
                <!-- Trait supérieur -->
                <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mb-12 mx-auto"></div>
          
                <!-- Texte -->
                <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                     style="font-size: clamp(0.9rem, 2.9vw, 3.2rem);">
                  {{ $t("texte_bandeau_bleu_projet") }}
                </h1>
          
                <!-- Trait inférieur -->
                <div class="bandeau_bleu-trait w-[300px] h-1 bg-[#05ff16] mt-12 mx-auto"></div>
              </div>
          
            </div>
          </div>


          <br>
          <br>

    <v-container fluid class="min-h-screen px-0 py-0 bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]">
  <section class="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]">

    <!-- Cadre blanc (colle à la sidebar à gauche, bordure droite alignée) -->
    <div
  class="w-[calc(105%-10rem)] sm:w-[calc(105%-9rem)] md:w-[calc(105%-8rem)] 
         bg-white rounded-l-none rounded-r-3xl shadow-2xl overflow-hidden py-12 px-8 md:px-16"
>



      <!-- Frise -->
      <div
        class="relative w-full
         h-[350px] sm:h-[380px] md:h-[400px]
         bg-gradient-to-r from-[#040c29] via-[#0c2049] to-[#1a2f5e]
         flex flex-col items-center justify-center 
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
                class="frise-logo w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32  
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
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Titre -->
            <span
              class="mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide"
              :class="activeIndex === index ? 'text-[#05ff16]' : 'text-white'"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>

       <!-- Texte dynamique -->

           <!-- ❌ Bouton de fermeture -->
        <button
          v-if="activeIndex !== null"
          @click="activeIndex = null"
          class="absolute top-14 right-14 text-[#05ff16] hover:text-[#00cc11] 
                text-3xl font-bold transition-all duration-300"
        >
          &times;
        </button>

      <transition name="fade" mode="out-in">
        <div
          v-if="activeIndex !== null"
          key="activeIndex"
          class="max-w-5xl p-6 sm:p-8 mt-12 text-left bg-gray-100 rounded-xl shadow-lg text-gray-900 leading-relaxed"
          v-html="items[activeIndex].text"
        ></div>
      </transition>
    </div>
  </section>
</v-container>


            <!-- Bandeau bas -->
            <div class="w-full mt-10 bg-[linear-gradient(to_left,#001032,#000926,#01061C)]">

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
import { watch } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const logoSidebar = ref(null);
const nom = ref('');
const email = ref('');
const message = ref('');
const boutonSoumettre = ref(null);

const activeIndex = ref(null)

const items = [
  {
    logo: '/Promethée.png',
    title: 'Fin 2024',
    text: `
           <img src="/Promethée.png" alt="Nos services BTC Energies Nos locaux" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />

           <br>
      <p>
        Promethe Fin 2024, NaTran lançait officiellement son Appel à Manifestation d’Intérêt (AMI)
        pour la mise en œuvre de solutions innovantes dans le domaine des gaz renouvelables et bas-carbone.
        Dans un contexte exigeant et sous forte pression temporelle, BTC Énergies a pris position dès les premières heures,
        se portant volontaire pour répondre à cet appel ambitieux.
      </p>

      
      <br>

      <h2 class="page-blanche_app-title">Carte proposé par OpenData</h2>

      <iframe
        src="https://odre.opendatasoft.com/explore/embed/dataset/projets-ami-gh-2024/custom/?&static=false&datasetcard=false"
        width="100%"
        height="400"
        frameborder="0"
        class="border-0 mt-4 rounded-lg shadow"
      ></iframe>

      <br>
      <br>

       <p class="mb-6 leading-relaxed">
      Dès le début des opérations, une équipe restreinte mais déterminée a été mobilisée. Sur le terrain, nos équipes ont mené des phases de prospection, d’analyse territoriale et de rédaction stratégique, malgré un environnement local complexe, des tensions et des résistances bien établies.
      Le terrain ciblé pour le projet faisait en effet l’objet d’une opposition historique depuis plus de 20 ans, tant de la part d’associations écologistes locales que d’une propriétaire terrienne fermement opposée à toute forme d’implantation industrielle.
     </p>

     <br>
     <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <br>

      <h2 class="page-blanche_app-title">Nos locaux</h2>

      <br>
       <img src="/screenshotaux.png" alt="Nos services BTC Energies Nos locaux" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />

       <br>
       <br>
       <br>

      <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
       <br>

       <p class="mb-6 leading-relaxed">
      Face à ces blocages, nous avons choisi de ne pas nous contenter de démarches administratives : BTC Énergies a été le seul acteur industriel à se rendre directement auprès de la propriétaire, dans une logique de dialogue franc et d’écoute active. Nous lui avons présenté notre vision, notre ambition environnementale, et proposé une véritable collaboration autour du projet.
    </p>

    <p class="mb-6 leading-relaxed">
      Cette démarche humaine et engagée a porté ses fruits : la propriétaire a donné son accord pour accompagner l’implantation, mettant ainsi un terme à deux décennies d’opposition. Cet accord a ouvert la voie au dépôt du projet dans des conditions apaisées et transparentes. Grâce à l'engagement de nos collaborateurs et au soutien décisif de nos partenaires industriels et institutionnels, nous avons su franchir chaque étape avec rigueur et détermination.
    </p>
      <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>

     <p class="mb-6 leading-relaxed">
      Le résultat est sans appel : le projet porté par BTC Énergies a été sélectionné. Il constitue aujourd’hui le deuxième projet officiellement retenu le plus important de France dans sa catégorie, avec :
    </p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>une production annuelle de 202 GWh/an de méthane bas-carbone ;</li>
      <li>la valorisation de 30 000 tonnes de Combustibles Solides de Récupération (CSR) par gazéification hydrothermale.</li>
    </ul>

    <p class="mb-6 leading-relaxed">
      Par cette réussite, BTC Énergies s’affirme comme un pionnier national dans deux domaines stratégiques :
    </p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>la gazéification hydrothermale à l’échelle industrielle ;</li>
      <li>la valorisation des CSR par voie humide, filière encore peu exploitée mais au potentiel majeur.</li>
    </ul>
<br>

    <p class="leading-relaxed">
      Ce projet marque une avancée opérationnelle majeure dans la transition énergétique française et positionne BTC Énergies à la convergence des enjeux climatiques, technologiques et industriels.
    </p>

    <br>
      <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
    `
  },



  {
  logo: 'logo2nosprojets.png',
  title: 'Mi-2025',
  text: `

        <img src="/logo2nosprojets.png" alt="Nos Projets BTC Energies Alliance H2 med" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
<br>

    <p class="mb-6 leading-relaxed">
      Mi-2025, le constat est sans appel : les entreprises porteuses de technologies censées répondre à nos besoins, ainsi qu’à ceux de plusieurs collectivités partenaires, se révèlent incapables d’apporter des solutions adaptées. Pire encore, les grands groupes, arc-boutés sur leurs positions dominantes, enterrent systématiquement les innovations émergentes et tentent activement de freiner nos avancées. Leur stratégie est claire : neutraliser toute initiative capable de remettre en cause leur hégémonie.
    </p>

    <p class="mb-6 leading-relaxed">
      Face à cette situation critique, nous avons pris la décision de reprendre l’initiative et de déclencher une opération stratégique autour d’un consortium de R&D. Objectif : développer une technologie souveraine, affranchie des carcans imposés par les acteurs traditionnels, et capable de répondre aux besoins opérationnels réels, sans compromission.
    </p>

    
    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>

    <p class="mb-6 leading-relaxed">
      Très vite, des partenaires majeurs se sont mobilisés. Un institut de recherche de premier plan, deux cabinets d’ingénierie conseil aguerris aux projets complexes et une entreprise spécialisée dans l’Internet des Objets se sont engagés à nos côtés. Leur implication renforce immédiatement notre capacité à concevoir, tester et déployer une technologie de rupture.
    </p>

    <p class="mb-6 leading-relaxed">
      Parallèlement, des investisseurs ont été approchés et manifestent un intérêt marqué. Certains envisagent cette initiative comme un vecteur stratégique pour les technologies duales, à la fois terrestres et spatiales. D’autres la considèrent comme un levier essentiel au développement des smart cities, où connectivité, résilience et autonomie deviennent des enjeux vitaux.
    </p>

    
    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>

    <p class="mb-6 leading-relaxed">
      Le cap est fixé : nous ne subirons plus. Le consortium prend forme, les compétences s’agrègent, les capitaux s’alignent. Ce projet ne se limite pas à combler les défaillances des solutions existantes : il vise à briser le verrouillage imposé par les grands groupes, à reprendre l’avantage technologique et à assurer notre indépendance. La manœuvre est engagée, et cette fois, nous sommes déterminés à imposer notre trajectoire.
    </p>

    <br>
    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>
  `
},




{
  logo: '/h2med.png',
  title: 'Septembre 2025',
  text: `

      <img src="/h2med.png" alt="Nos Projets BTC Energies Alliance H2 med" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />

      <br>

    <p class="mb-6 leading-relaxed">
      Le mois de septembre 2025 marque une avancée décisive dans notre trajectoire. 
      Notre président, Thibault Béthencourt, a été élu représentant pour la France 
      au sein de l’Alliance H2Med.
    </p>

    <p class="mb-6 leading-relaxed">
      L’Alliance H2Med est le cadre de coopération internationale qui s’articule autour 
      du projet H2Med, premier grand corridor européen d’hydrogène vert. 
      Ce projet relie la péninsule ibérique à l’Europe centrale via la France, 
      avec pour mission de sécuriser l’approvisionnement énergétique, 
      d’accélérer la décarbonation industrielle et de positionner l’Europe 
      comme leader mondial de l’hydrogène. 
      Il regroupe les plus grands acteurs industriels et institutionnels 
      impliqués dans la transition énergétique.
    </p>

    <br>
    <img src="/H2medAlliance.png" alt="Nos Projets BTC Energies Alliance H2 med" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
  
    
    <br>
    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>

    <p class="mb-6 leading-relaxed">
      Dans ce contexte, notre réussite prend une dimension historique. 
      Nous, start-up sans moyens considérables, parvenons à siéger à la même table 
      que des mastodontes mondiaux tels que Thyssenkrupp, référence industrielle planétaire. 
      Cette présence démontre que la pertinence de notre vision et la crédibilité 
      de notre technologie l’emportent désormais sur la seule puissance financière.
    </p>

    <br>
        <img src="/H2medCFI.png" alt="Nos Projets BTC Energies Alliance H2 med CFI" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />

        <br>

    <p class="mb-6 leading-relaxed">
      Ce tournant confirme notre capacité à peser dans les décisions stratégiques, 
      à défendre les intérêts de la France et à projeter notre savoir-faire 
      sur la scène européenne et internationale. 
      Là où beaucoup nous voyaient comme un acteur périphérique, 
      nous nous imposons aujourd’hui comme une force de proposition incontournable.
    </p>

    <br>
    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    <br>
  `
  
}

]

onMounted(() => {
  // ✅ Animation séquentielle des logos (gauche → droite)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.frise-container',
      start: 'top 75%',
      toggleActions: 'play none none none',
      once: true
    }
  });

  
  // Attente DOM prêt
  setTimeout(() => {
    const logos = document.querySelectorAll('.frise-logo');

    logos.forEach((logo, i) => {
      // Apparition + halo vert
      tl.fromTo(
        logo,
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
          boxShadow: '0 0 0px rgba(5, 255, 22, 0)',
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          boxShadow: '0 0 30px rgba(5, 255, 22, 0.8)',
          onComplete: () => {
            // le halo s’atténue après l’apparition
            gsap.to(logo, {
              boxShadow: '0 0 10px rgba(5, 255, 22, 0.3)',
              duration: 0.8,
              ease: 'power1.out'
            });
          }
        },
        i * 1.0 // ⏱️ intervalle de 1.2s entre chaque logo
      );

       // 🧠 Ajout du hover scale dynamique (sans CSS)
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { scale: 1.25, duration: 0.3, ease: 'power2.out' })
      })
      logo.addEventListener('mouseleave', () => {
        if (activeIndex.value !== i) {
          gsap.to(logo, { scale: 1, duration: 0.3, ease: 'power2.out' })
        }

             logo.addEventListener('mouseleave', () => {
          // Si le logo n’est pas celui sélectionné, il revient à la normale
          if (activeIndex.value !== i) {
            gsap.to(logo, {
              scale: 1,
              boxShadow: '0 0 25px 5px rgba(5,255,22,0.4)', // halo doux
              borderColor: '#ffffff',
              duration: 0.4,
              ease: 'power2.out'
            })
          }
        })
      })
   
    });

  

  }, 300);

// 🔥 Effet de halo vert animé sur le logo actif
watch(activeIndex, (newIndex, oldIndex) => {
  // Si un logo était précédemment sélectionné → on supprime l’effet pulsant
  if (oldIndex !== null) {
    const previousLogo = document.querySelectorAll('.frise-logo')[oldIndex]
    if (previousLogo) {
      gsap.killTweensOf(previousLogo)
      gsap.to(previousLogo, {
        boxShadow: '0 0 10px rgba(5, 255, 22, 0.3)', // revient à un halo discret
        borderColor: '#ffffff',
        duration: 0.5
      })
    }
  }

  // Si un nouveau logo est cliqué → halo vert pulsant
  if (newIndex !== null) {
    const selectedLogo = document.querySelectorAll('.frise-logo')[newIndex]
    if (selectedLogo) {
      gsap.to(selectedLogo, {
        boxShadow: '0 0 25px 12px rgba(5, 255, 22, 0.9)',
        borderColor: '#05ff16',
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          // 🔁 effet “respiration” infini
          gsap.to(selectedLogo, {
            boxShadow: '0 0 35px 18px rgba(5, 255, 22, 0.6)',
            repeat: -1,
            yoyo: true,
            duration: 1.6,
            ease: 'sine.inOut'
          })
        }
      })
    }
  }
})



  // ✅ Animation du logo Sidebar 
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
    )
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
</script>