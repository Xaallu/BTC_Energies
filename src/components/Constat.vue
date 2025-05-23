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
    
        
             <!-- Section Notre Constat -->
             <v-container fluid class="page-blanche_app py-10">
                <div class="page-blanche_app-wrapper pl-4 sm:pl-6 md:pl-10 lg:pl-24">
            
              <div class="bg-white rounded-2xl shadow-md w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl p-4 sm:p-6 md:p-8 mx-auto">


                    <h2 class="page-blanche_app-title">Notre Constat</h2>

                    <br />
                    <br />
                    <div class="text-[#475C79] text-center font-bold">
                      <p>
                        Le monde continue d'évoluer à un rythme accéléré et de nouvelles opportunités se présentent chaque jour. 
                        Dans cette ère de transformation, il est essentiel d'explorer les solutions qui façonneront notre avenir.
                      </p>
                      <br />
                      <p>
                        Ces solutions sont vastes et variées, mais elles ont toutes pour objectif commun de répondre aux défis de notre époque en utilisant l'innovation, 
                        la créativité et la collaboration. Il est passionnant d'imaginer comment ces solutions émergentes façonneront notre avenir et ouvriront la voie à un monde meilleur. 
                        Restons ouverts aux opportunités et prêts à embrasser le changement pour un avenir prometteur.
                      </p>
                    </div>
                    

                <br />
                <br />
                <!-- Vidéo YouTube responsive -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <div class="aspect-video">
                      <iframe
                        class="w-full h-full"
                        src="https://www.youtube.com/embed/hOIWuE_eEsM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </v-col>
                </v-row>

                  <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br />

                <!-- Grid x2 -->
                <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
                  <v-col cols="12" md="6">
                    <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                      Technologie
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-8">
                      Les avancées technologiques ne cessent de transformer notre façon de vivre, de travailler et de communiquer.
                      Des domaines tels que l'intelligence artificielle, l'Internet des objets, la réalité virtuelle et augmentée ou la blockchain offrent des opportunités fascinantes pour résoudre des problèmes complexes. 
                      Les progrès dans ces domaines pourraient non seulement améliorer notre qualité de vie, mais aussi révolutionner certains secteurs comme la santé, l'éducation, l'énergie et bien d'autres.
                    </p>
                  </v-col>
                    <br>

                  <v-col cols="12" md="6">
                    <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                      Durabilité environnementale
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    
                    <p class="indent-8">
                      Face aux défis climatiques auxquels notre planète est confrontée, les solutions de demain doivent se concentrer sur la durabilité environnementale. 
                      Les énergies renouvelables, l'efficacité énergétique, la gestion des déchets et la préservation des ressources naturelles sont autant de domaines où des mesures novatrices peuvent être prises pour réduire notre empreinte écologique. 
                      Un avenir durable dépend de notre capacité à repenser notre façon de consommer et de produire.
                    </p>
                  </v-col>
                </v-row>

                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br />

                <!-- Image + légendes -->
                <v-row justify="center" class="my-6">
                  <v-col cols="12" md="8" class="text-center">
                    <img src="/Q_C_C.png" alt="Nos services BTC Energies" class="w-full max-w-3xl mx-auto class=w-full transition-transform duration-500 transform hover:scale-105" />
                    <div class="flex justify-center items-center gap-4 text-sm mt-2 text-gray-600">
                      <p>UM : Unité de Méthanisation</p>
                      <p>UGH : Unité de Gazéification Hydrothermale</p>
                    </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br>
                
                <!-- Grid x3 -->
                <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
                  <v-col cols="12" md="4">
                    <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                      Environnement
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-8">
                      Nous nous sommes engagés à agir de manière plus responsable dans nos pratiques. Cela se traduit par la réduction de notre empreinte carbone, 
                      la préservation des ressources naturelles et la protection de la biodiversité. 
                      Nous mettons nos compétences aux services de lendemains plus vertueux.
                    </p>
                  </v-col>
                      <br>
                  <v-col cols="12" md="4">
                    <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                      Economie circulaire
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-8">
                      Nous croyons en la transition vers une économie circulaire, qui vise à recycler, réutiliser et valoriser les produits et les matériaux plutôt que de les jeter.
                      Nous encourageons la consommation responsable, le partage, la réparation et le recyclage pour réduire le gaspillage et participer à l’avènement d’une industrie sans déchet ultime. 
                    </p>
                    <br>
                  </v-col>

                  <v-col cols="12" md="4">
                    <h3 class="text-center text-green-600 text-2xl font-semibold mb-4 relative">
                      Innovation durable
                      <span class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p class="indent-8">
                      Nous soutenons et encourageons l'innovation dans les domaines de l'énergie renouvelable, de la gestion des déchets, du transport durable et de nombreuses autres initiatives écologiques. 
                      En investissant dans des solutions plus durables, nous souhaitons participer à la création d’un avenir meilleur.
                    </p>
                  </v-col>
                </v-row>

                <br>
                <br>
                <!-- Texte final -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <p class="text-center text-[#475C79] font-bold">
                      En tant qu'entreprise motivée par ces valeurs, nous nous efforçons de faire une différence positive, à la fois dans notre fonctionnement interne et notre impact sociétal. 
                      En adoptant des pratiques plus durables et en soutenant des initiatives respectueuses de l'environnement, nous contribuons à la construction d'un avenir plus écologique et équitable pour tous.
                    </p>
                    <br />
                    <p class="text-center text-[#475C79] font-bold">
                      Notre industrie 5.0 est celle de la dépollution, de la décarbonation et de la pluri-sectorialité. 
                    </p>
                    <div class="flex flex-col items-center text-center">
                  <h2 class="font-montserrat font-semibold text-4xl mb-4 text-white">Nous contacter</h2>
                  <br>
                  <a href="/solutions"
                  class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
          hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
          active:scale-95 active:shadow-inner flex items-center gap-2">                    
          Nos Solutions
                  </a>
                </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
              
              </div>
             
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

<script>
import { onMounted } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Constat',
  components: {
    Sidebar,
    Header,
  },
  setup() {
    onMounted(() => {
      // Animation d'apparition progressive des titres <h3>
      gsap.utils.toArray('h3').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: "play none none reset",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // Animation des paragraphes
      gsap.utils.toArray('p').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: "play none none reset",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
        })
      })

      // Animation du logo dans le bandeau
      gsap.from('.bandeau_bleu img', {
        scrollTrigger: {
          trigger: '.bandeau_bleu',
        
          start: 'top 90%',
         toggleActions: 'play reverse play reverse',
        },
        scale: 0.5,
        opacity: 0,
        duration: 5,
        ease: 'back.out(1.7)',
        
      })
    })
  },
}
</script>



<style scoped>

.v-main {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}
.v-application--wrap {
  max-width: 100vw !important;
}

.video-full-width_gif {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}
.video-full-width_gif video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ✅ Version mobile */
@media (max-width: 960px) {
  .video-full-width_gif {
    margin-left: 0;
    width: 100%;
  }
}
</style>
