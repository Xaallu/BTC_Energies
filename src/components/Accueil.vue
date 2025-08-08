
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
<h2 class="page-blanche_app-title">{{ $t('Nos engagements pour un impact positif') }}</h2>

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
      class="absolute w-[5.7rem] h-[5.7rem] overflow-hidden shadow-md bg-white p-1 transition-transform duration-300 ease-in-out"
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
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Pas de Pauvreté</h3>
      <p>
        Nous prévoyons d’embaucher de la main d’œuvre locale quel que soit la zone
        d’implantation, y compris dans les zones à faible développement économique.
        Nous investissons dans les entreprises locales, encourageons les start-ups
        et posons la première pierre d’une lutte efficace contre la pauvreté.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 2 / index 1) -->
        <div
      v-if="hoveredLogo === 1"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Faim "zéro"</h3>
      <p>
        Nous permettons l’avènement d’une agriculture durable sans surexploitation des sols
        et en permettant aux agriculteurs locaux d’exploiter une partie de nos ressources
        sans dépense colossale en matière de coût de transport.<br><br>
        Nous proposons également à ces derniers un complément de revenu
        et du digestat conforme aux critères de l’agriculture biologique afin de maximiser leurs rendements.<br><br>
        Nous permettons ainsi aux exploitants de produire sur place des cultures alimentaires.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 3 / index 2) -->
        <div
      v-if="hoveredLogo === 2"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Bonne santé et bien-être</h3>
      <p>
       De part notre activité de valorisation de déchets et de production de plantes a visées thérapeutique, 
       nous permettons le développement et la synthèses de traitement contre les addictions, la mortalité causée 
       par certaines pathologies et les troubles mentaux et psychiques. Nous permettons également de réduire drastiquement 
       les affections causées par les polluants, les produits chimiques et les amas de déchets.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 4 / index 3) -->
        <div
      v-if="hoveredLogo === 3"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Accès à une éducation de qualité</h3>
      <p>
       Nous sommes susceptible de faire appel à toute une variété de compétences et embaucherons un personnel disposant 
       de tous types de qualifications. Nous souhaitons avoir, en interne, la quasi-totalité du spectre éducatif. 
       Nous formerons et financeront également les études et la formation de jeunes prometteurs. 
       Nous investirons également dans des campagnes d’éducation auprès des populations locales 
       (notamment dans le cadre de l’apprentissage au tri et à la mise à la poubelle)
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 5 / index 4) -->
        <div
      v-if="hoveredLogo === 4"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Égalité entre les sexes</h3>
      <p>
      Nous avons pour objectif d’atteindre une parité parfaite entre les sexes. Les salaires seront attribués en fonction des compétences,
      du résultat et du travail fourni. Aucune discrimination salariale n’est mise en place en fonction du sexe et l’entreprise assure 
      à tous les mêmes opportunités de carrière et d’avancement. Nous serons également très vigilant concernant nos lieux d’implantations 
      et nos partenaires et veilleront à ne pas faciliter les structures ou les états n’allant pas dans ce sens.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 6 / index 5) -->
    <div
      v-if="hoveredLogo === 5"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Accès à l'eau salubre et à l'assainissement</h3>
      <p>
      Nous proposons une solutions permettant de purifier l’eau, de la rendre potable ou exploitable dans l’agriculture. 
      Ce faisant, nous permettons la ré-exploitation de cette ressource vitale. En d’autres termes, nous exploitons, valorisons 
      et purifions les eaux usées et contaminées. En évitant le rejet en pleine nature d’eau souillé et polluée, nous préservons 
      ainsi les courts d’eau et leurs écosystèmes. 
      Ce faisant, nous permettons également un accès facilité à une eau potable pour tous.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 7 / index 6) -->
    <div
      v-if="hoveredLogo === 6"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Énergies fiables, durables et modernes, à un coût abordable</h3>
      <p>
     Notre énergie est 100% renouvelable, nous exploitons même la chaleur pour chauffer ou recréer de l’électricité. 
     De part notre volonté d’expansion a l’international et des caractéristiques de notre modèle, nous avons la possibilité 
     de développer l’exploitation des énergies et des réseaux de chaleur renouvelables partout sur le globe.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 8 / index 7) -->
    <div
      v-if="hoveredLogo === 7"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Accès à des emplois décents</h3>
      <p>
     De part le caractère innovant du projet, la possibilité pour ce dernier de permettre la réhabilitations de zones polluées
      et pouvant être exploitée dans le cadre d’activités touristiques, le fait que notre équipe soit principalement composée de 
      jeunes nous apparaît être un argument supplémentaire.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 9 / index 8) -->
    <div
      v-if="hoveredLogo === 8"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Industrie, innovation et infrastructure</h3>
      <p>
      L’économie circulaire et l’autonomie en terme d’énergie et de ressources sont la base même de notre modèle.
       Avec cette autonomie énergétique, vient irrémédiablement la possibilité de développer tout un écosystème économique 
       et industriel basé autour des énergies renouvelables.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 10 / index 9) -->
    <div
      v-if="hoveredLogo === 9"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Réduction des inégalités</h3>
      <p>
      Notre équipe est comprend autant de femmes que d’hommes à des postes clés et est également composés d’individus de plusieurs nationalités. 
      En tant que multinationale en devenir, nous avons à cœur de faire appels aux talents partout où ils sont. 
      Chacun de nos employés bénéficieront des mêmes opportunités et accèderont à des postes clés en fonction de leurs mérites.
      Le PDG de l’entreprise est lui-même titulaire d’une RQTH et est donc reconnu travailleur handicapé.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 11 / index 10) -->
    <div
      v-if="hoveredLogo === 10"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Villes et communautés durables</h3>
      <p>
      Une ville propre et bénéficiant d’une électivité verte c’est une ville durable. Nous avons à cœur d’assurer l’autonomie
       énergétique de ces ensembles tout en faisant la promotion des mobilités vertes et bas-carbone. Par l’organisation d’un réseau 
       de chaleur et de froid issu de procédés renouvelables, nous participons également à la réduction des dépenses et à la baisse 
       de la consommation de gaz et d’électricité.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 12 / index 11) -->
    <div
      v-if="hoveredLogo === 11"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Consommation et production responsables</h3>
      <p>
      C’est le cœur de notre modèle : nous récupérons toute presque matière difficilement exploitable et presque tous déchets
       et nous les transformons en ressources. Nous encouragerons et accompagnement également les états dans leur politique de passage
      vers une économie circulaire et l’organisation responsable du traitement de leurs déchets. 
      Nous permettons également aux entreprise un service de récupération de leurs déchets afin d’éviter leur déversement dans la nature.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 13 / index 12) -->
    <div
      v-if="hoveredLogo === 12"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Lutte contre les changements climatiques</h3>
      <p>
      Nous réduisons les émissions de gaz à effet de serre issue de la décomposition de certaines matières, 
      nous ne rejetons pas de GES et nous permettons la réduction voire la disparition totale de la consommation d’énergie fossile 
      fortement émettrices de GES comme le charbon. Par la proximité et l’interconnexion de nos installations entre-elles étaient les 
      zones de concentration de déchets, nous réduisons également les besoins de transport en valorisant et produisant sur place.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 14 / index 13) -->
    <div
      v-if="hoveredLogo === 13"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Conserver et exploiter de manière durable les océans et les mers aux fins du développement durable
</h3>
      <p>
      Nous réduisons les émissions de gaz à effet de serre issue de la décomposition de certaines matières, 
      nous ne rejetons pas de GES et nous permettons la réduction voire la disparition totale de la consommation d’énergie fossile 
      fortement émettrices de GES comme le charbon. Par la proximité et l’interconnexion de nos installations entre-elles étaient les 
      zones de concentration de déchets, nous réduisons également les besoins de transport en valorisant et produisant sur place.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 15 / index 14) -->
    <div
      v-if="hoveredLogo === 14"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Vie terrestre
</h3>
      <p>
      Notre modèle permet la conservation et la restauration de la vie dans le sol. En évitant son appauvrissement et en l’enrichissant, 
      nous limitons drastiquement les besoins en engrais chimiques et l’épuisement des sols. En facilitant l’agriculture durable et 
      l’exploitation de ressources renouvelables, nous permettons également la protection de la biodiversité et assurons 
      une exploitation raisonnée des ressources.
      </p>
    </div>

    <!-- Bulle d'info (uniquement pour le logo 16 / index 15) -->
    <div
      v-if="hoveredLogo === 15"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Justice et paix
</h3>
      <p>
      En évitant les famines, en assurant à tous un accès à l’eau et en réduisant les inégalités économiques au sein des populations locales : 
      nous limitons les tensions et les risques de guerre.
      </p>
    </div>

     <!-- Bulle d'info (uniquement pour le logo 17 / index 16) -->
    <div
      v-if="hoveredLogo === 16"
      class="absolute top-1/2 left-1/2 w-[280px] sm:w-[350px] bg-white p-4 rounded-xl shadow-xl text-sm sm:text-base text-gray-800 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
    >
      <h3 class="font-bold text-lg mb-2" style="color: #8BC34A;">Partenariats pour la réalisation des objectifs
</h3>
      <p>
      Notre démarche est basé sur le partenariat et nécessite l’action conjointe de plusieurs partenaires privés et d’institutions publiques.
       Nous avons communiqué, informé et décrit notre modèle avec précision et gratuitement et avons également fourni un service 
       de conseil gratuit aux collectivités. Nous prévoyons également des investissements à l’internationale 
       (y compris dans les pays en développement).
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
      const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
      const radius = 330;
      const centerX = 220;
      const centerY = 220;
      const x = centerX + radius * Math.cos(angle) - 20;
      const y = centerY + radius * Math.sin(angle) - 20;
      return {
        position: 'absolute',
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