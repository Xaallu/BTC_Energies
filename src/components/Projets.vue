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
<div class="w-full flex justify-center">
<h1> Carte proposer par Opendata</h1>
</div>

<br>

<div class="w-full flex justify-center">
  
  <iframe src="https://odre.opendatasoft.com/explore/embed/dataset/projets-ami-gh-2024/custom/?&static=false&datasetcard=false"
          width="1000"
          height="400"
          frameborder="0"
          class="border-0">
  </iframe>
</div>
      <v-container fluid class="min-h-screen flex items-center justify-center px-4 py-8 gsap-mentions">
        <section class="min-h-screen flex items-center justify-center px-4 py-8">
          <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">

       <img src="/Promethée.png" alt="Nos services BTC Energies" class="w-full max-w-xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />

            <br>

    <p class="mb-6 leading-relaxed">
      Fin 2024, NaTran lançait officiellement son Appel à Manifestation d’Intérêt (AMI) pour la mise en œuvre de solutions innovantes dans le domaine des gaz renouvelables et bas-carbone. Dans un contexte exigeant et sous forte pression temporelle, BTC Énergies a pris position dès les premières heures, se portant volontaire pour répondre à cet appel ambitieux.
    </p>

    <p class="mb-6 leading-relaxed">
      Dès le début des opérations, une équipe restreinte mais déterminée a été mobilisée. Sur le terrain, nos équipes ont mené des phases de prospection, d’analyse territoriale et de rédaction stratégique, malgré un environnement local complexe, des tensions et des résistances bien établies. 
      </p>
      Le terrain ciblé pour le projet faisait en effet l’objet d’une opposition historique depuis plus de 20 ans, tant de la part d’associations écologistes locales que d’une propriétaire terrienne fermement opposée à toute forme d’implantation industrielle.
    

    <p class="mb-6 leading-relaxed">
      Face à ces blocages, nous avons choisi de ne pas nous contenter de démarches administratives : BTC Énergies a été le seul acteur industriel à se rendre directement auprès de la propriétaire, dans une logique de dialogue franc et d’écoute active. Nous lui avons présenté notre vision, notre ambition environnementale, et proposé une véritable collaboration autour du projet.
    </p>

    <p class="mb-6 leading-relaxed">
      Cette démarche humaine et engagée a porté ses fruits : la propriétaire a donné son accord pour accompagner l’implantation, mettant ainsi un terme à deux décennies d’opposition. Cet accord a ouvert la voie au dépôt du projet dans des conditions apaisées et transparentes. Grâce à l'engagement de nos collaborateurs et au soutien décisif de nos partenaires industriels et institutionnels, nous avons su franchir chaque étape avec rigueur et détermination.
    </p>

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

    <p class="leading-relaxed">
      Ce projet marque une avancée opérationnelle majeure dans la transition énergétique française et positionne BTC Énergies à la convergence des enjeux climatiques, technologiques et industriels.
    </p>

    </div>
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