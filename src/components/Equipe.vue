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

        <!-- Contenu principal -->
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
                <div class="text-center">
                  <!-- Trait supérieur -->
                  <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mb-8 sm:mb-12 mx-auto"></div>
            
                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                       style="font-size: clamp(2.1rem, 2.8vw, 3rem);">
                    {{ $t("equipe.Equipe_Titre") }}
                  </h1>
            
                  <!-- Trait inférieur -->
                  <div class="bandeau_bleu-trait w-[220px] sm:w-[300px] h-1 bg-[#05ff16] mt-8 sm:mt-12 mx-auto"></div>
<br>
                  <!-- Texte -->
                  <h1 class="bandeau_bleu-text font-montserrat text-white leading-snug break-words"
                      style="font-size: clamp(0.9rem, 1.7vw, 2rem);">
                    {{ $t("equipe.Titre_equipe") }}
                  </h1>
                </div>
            
              </div>
            </div>
            

            <div class="main-content">

              <Header />

            <!-- Bloc blanc après la vidéo -->
            <section>

              
              <v-container fluid class="min-h-screen flex items-center justify-center px-0 sm:px-4 py-6 sm:py-8">
               <div class="w-full px-0 sm:px-6 md:px-10 lg:px-12 xl:px-16">
            
              <div class="bg-white rounded-none sm:rounded-2xl shadow-md w-full sm:max-w-5xl sm:mx-auto px-4 py-6 sm:p-6 md:p-8">
<br>
<br>           
                  <!-- bloc 1 -->
                  <div class="gsap-bloc relative group hover:scale-[1.04] transition-transform duration-300 ease-in-out">
                    
                <div id="ThibaultBethencourt" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc overflow-visible">
                  <!-- Image à gauche -->
                  <div class="flex-shrink-0">
                    <img height="282" width="276" decoding="async" loading="lazy"
                      src="/Trombi/T_B2.png"
                      alt="Thibault BÉTHENCOURT"
                      class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <!-- Texte à droite -->
                  <div class="flex-1">
                    <div class="text-left mb-4">
                      <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Thibault_Nom") }}</h2>
                      <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                    </div>

                    <br />

                    <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                      <li><strong>{{ $t("equipe.equipe_Thibault_TitreCourt") }}</strong></li>
                      <li>{{ $t("equipe.equipe_Thibault_CEO") }}</li>
                      <li class="text-[#25A875]">{{ $t("equipe.equipe_Thibault_Tel") }}</li>
                    </ul>

                    <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                    <div class="mt-4">
                      <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Thibault_Etudes_Titre") }}</p>
                      <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Thibault_Etudes_Detail')"></p>
                    </div>
                  </div>
                </div>

                <!-- Bulle d'info -->
                <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
                  <div class="space-y-4">
                    <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Thibault_Nom") }}</h3>

                    <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                      <li><strong>{{ $t("equipe.equipe_Thibault_TitreCourt") }}</strong></li>
                      <li>{{ $t("equipe.equipe_Thibault_CEO") }}</li>
                      <li class="text-[#25A875]">{{ $t("equipe.equipe_Thibault_Tel") }}</li>
                    </ul>

                    <div class="mt-4">
                      <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Thibault_Etudes_Titre") }}</p>
                      <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Thibault_Etudes_Detail')"></p>
                    </div>

                    <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                    <p class="italic">{{ $t("equipe.equipe_Thibault_Citation") }}</p>
                    <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio1") }}</p>
                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio2") }}</p>
                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio3") }}</p>
                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio4") }}</p>
                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio5") }}</p>
                    <p><span class="ml-5"></span>{{ $t("equipe.equipe_Thibault_Bio6") }}</p>
                  </div>
                </div>
              </div>

<br> 
<br>
<br> 


                <!-- Bloc J-M Bouillon  -->
               <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
                
                  <div id="SusanneSvensdotter" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img height="926" width="926" decoding="async" loading="lazy"
                        src="/Trombi/S_S.png"
                        alt="ePhD Susanne Svensdotter"
                        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>

                    <!-- Texte à droite -->
                    <div class="flex-1">
                      <div class="text-left mb-4">
                        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_JMarc_Nom") }}</h2>
                        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                      </div>

                      <br />

                      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                        <li><strong>{{ $t("equipe.equipe_JMarc_TitreCourt") }}</strong></li>
                        <li>{{ $t("equipe.equipe_JMarc_Titre2") }}</li>
                      </ul>

                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                      <div class="mt-4">
                        <!-- <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_JMarc_Etudes_Titre") }}</p>
                        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_JMarc_Etudes_Detail')"></p>-->
                      </div>
                    </div>
                  </div>

                  <!-- Bulle d'info -->
                  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">

                    <div class="space-y-4">
                      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_JMarc_Nom") }}</h3>

                      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                        <li><strong>{{ $t("equipe.equipe_JMarc_TitreCourt") }}</strong></li>
                        <li>{{ $t("equipe.equipe_JMarc_Titre2") }}</li>
                      </ul>

                      <div class="mt-4">
                        <!--<p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_JMarc_Etudes_Titre") }}</p>
                        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_JMarc_Etudes_Detail')"></p> -->
                      </div>

                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                      <p class="italic">{{ $t("equipe.equipe_JMarc_Citation") }}</p>
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                      <p> <span class="ml-5"></span>{{ $t("equipe.equipe_JMarc_Bio1") }}</p>
                      <p><span class="ml-5"></span>{{ $t("equipe.equipe_JMarc_Bio2") }}</p>
                      <p><span class="ml-5"></span>{{ $t("equipe.equipe_JMarc_Bio3") }}</p>
                       <p><span class="ml-5"></span>{{ $t("equipe.equipe_JMarc_Bio4") }}</p>
                    </div>
                  </div>
                </div>

    <br> 
    <br>
    <br> 

        <!-- Bloc 3 Alain DEGANS -->
           <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
           
            <div id="AlainDEGANS" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
              <!-- Image à gauche -->
              <div class="flex-shrink-0">
                <img height="881" width="528" decoding="async" loading="lazy"
                  src="/Trombi/C_dM.png"
                  alt="Charles De MAGNEVAL"
                  class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

            <!-- Texte à droite -->
            <div class="flex-1">
              <div class="text-left mb-4">
                <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Alain_Nom") }}</h2>
                <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
              </div>

              <br />

              <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                <li><strong>{{ $t("equipe.equipe_Alain_TitreCourt") }}</strong></li>
              </ul>

              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

              <div class="mt-4">
                <!-- <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Alain_Etudes_Titre") }}</p> 
                <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Alain_Etudes_Detail')"></p> -->
              </div>
            </div>
          </div>

          <!-- Bulle d'info -->
          <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">

            <div class="space-y-4">
              <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Alain_Nom") }}</h3>

              <ul class="text-gray-600 text-base sm:text-lg space-y-1">
                <li><strong>{{ $t("equipe.equipe_Alain_TitreCourt") }}</strong></li>
              </ul>

              <div class="mt-4">
               <!--  <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Alain_Etudes_Titre") }}</p>
                <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Alain_Etudes_Detail')"></p> -->
              </div>

              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
              <p class="italic">{{ $t("equipe.equipe_Alain_Citation") }}</p>
              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

              <p><span class="ml-5"></span>{{ $t("equipe.equipe_Alain_Bio1") }}</p>
              <p><span class="ml-5"></span>{{ $t("equipe.equipe_Alain_Bio2") }}</p>
              <p><span class="ml-5"></span>{{ $t("equipe.equipe_Alain_Bio3") }}</p>
            </div>
          </div>
        </div>

<br>            
<br>

    
           <!-- Bloc Camille FAURE 
        <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
          

  <div  id="CamilleFaure" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    <div class="flex-shrink-0">
      <img height="298" width="298" decoding="async" loading="lazy"
        src="/Trombi/C_F.png"
        alt="Camille Faure"
        class="w-12 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <div class="flex-1">
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Camille_Nom") }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Camille_TitreCourt") }}</strong></li>
        <li>{{ $t("equipe.equipe_Camille_Titre2") }}</li>
      </ul>

      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Camille_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Camille_Etudes_Detail')"></p>
      </div>
    </div>
  </div>
   

<div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Camille_Nom") }}</h3>

      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Camille_TitreCourt") }}</strong></li>
        <li>{{ $t("equipe.equipe_Camille_Titre2") }}</li>
        <li class="text-[#25A875]">{{ $t("equipe.equipe_Camille_Tel") }}</li>
      </ul>

      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Camille_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Camille_Etudes_Detail')"></p>
      </div>

      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <p class="italic">{{ $t("equipe.equipe_Camille_Citation") }}</p>
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Camille_Bio1") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Camille_Bio2") }}</p>
    </div>
  </div>
</div>
-->

            
<br>
<br> 
<br>

                <!-- Bloc 5 Rémi PICHONNEAU -->
  <div class="gsap-bloc relative group hover:scale-[1.08] transition-transform duration-300 ease-in-out">
    <div id="RemiPichonneau" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">

    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="298" width="299" decoding="async" loading="lazy"
        src="/Trombi/R_Pvf.png"
        alt="Rémi PICHONNEAU"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Remi_Nom") }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Remi_TitreCourt") }}</strong></li>
      </ul>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Remi_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Remi_Etudes_Detail')"></p>
      </div>
    </div>
  </div>

  <!-- Bulle d'info -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Remi_Nom") }}</h3>

       <!-- Colonnes -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Remi_TitreCourt") }}</strong></li>
      </ul>

      <!-- Info Contact à droite -->
        <div class="font-bold mt-4 md:mt-0 md:ml-6 text-sm text-gray-600 max-w-sm">
          <p v-html="$t('equipe.equipe_Remi_Bio3contact')"></p>
        </div>

      </div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Remi_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Remi_Etudes_Detail')"></p>
      </div>

      <!-- Citation -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <p class="italic">{{ $t("equipe.equipe_Remi_Citation") }}</p>
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Bio -->
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Remi_Bio1") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Remi_Bio2") }}</p>
    </div>
  </div>
</div>

  
<br>
<br> 
<br>
 

    <!-- Bloc Marie-Pierre LEFEBVRE -->
<div class="gsap-bloc relative group hover:scale-[1.08] transition-transform duration-300 ease-in-out">

  <!-- Contenu principal -->
  <div  id="Adell" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6">

    <!-- Image à gauche (si ajoutée plus tard) -->
     <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="375" width="378" decoding="async" loading="lazy"
        src="/Trombi/MP_L.png"
        alt="Marie-Pierre LEFEBVRE"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Adell_Nom") }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
        <br>

        <!-- Détails -->
        <ul class="text-gray-600 text-base sm:text-lg space-y-1">
          <li><strong>{{ $t("equipe.equipe_Adell_TitreCourt") }}</strong></li>
        </ul>
        <ul class="text-gray-600 text-base sm:text-lg space-y-1">
          <li>{{ $t("equipe.equipe_Adell_Titre2") }}</li>
        </ul>

        <!-- Études -->
        <div class="mt-4">
          <!-- <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Adell_Etudes_Titre") }}</p>
          <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Adell_Etudes_Detail')"></p> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Bulle d'info (Popover) -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">

    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Adell_Nom") }}</h3>

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Adell_TitreCourt") }}</strong></li>
        <li>{{ $t("equipe.equipe_Adell_Titre2") }}</li>
      </ul>

      <!-- Études -->
      <div class="mt-4">
         <!--<p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Adell_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Adell_Etudes_Detail')"></p>-->
      </div>

      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <p class="italic">{{ $t("equipe.equipe_Adell_Citation") }}</p>
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Biographies -->
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Adell_Bio1") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Adell_Bio2") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Adell_Bio3") }}</p>
    
    </div>
  </div>
</div>
               
<br>
<br> 
<br>

                  <!-- Bloc Olivier COT -->
<div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
  <div id="OlivierCot" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="298" width="299" decoding="async" loading="lazy"
        src="/Trombi/O_C.png"
        alt="Olivier COT"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Olivier_Nom") }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Olivier_TitreCourt") }}</strong></li>
      </ul>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Olivier_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Olivier_Etudes_Detail')"></p>
      </div>
    </div>
  </div>

  <!-- Bulle d'info -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Olivier_Nom") }}</h3>

      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Olivier_TitreCourt") }}</strong></li>
      </ul>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Olivier_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Olivier_Etudes_Detail')"></p>
      </div>

      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      <p class="italic">{{ $t("equipe.equipe_Olivier_Citation") }}</p>
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Olivier_Bio1") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Olivier_Bio2") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Olivier_Bio3") }}</p>
    </div>
  </div>
</div>

<br>
<br> 
<br> 


                 <!-- Bloc Philippe SUTARIK -->
<div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

  <!-- Titre + image -->
  <div id= "PhilippeStuarik" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    
    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="298" width="299" decoding="async" loading="lazy"
        src="/Trombi/P_Svf.png"
        alt="Philippe Sutarik"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t("equipe.equipe_Philippe_Nom") }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Philippe_TitreCourt") }}</strong></li>
      </ul>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Philippe_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Philippe_Etudes_Detail')"></p>
      </div>
    </div>
  </div>

  <!-- Bulle d'info -->
 <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">

    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t("equipe.equipe_Philippe_Nom") }}</h3>

       <!-- Colonnes -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t("equipe.equipe_Philippe_TitreCourt") }}</strong></li>
      </ul>

      <!-- Info Contact à droite -->
        <div class="font-bold mt-4 md:mt-0 md:ml-6 text-sm text-gray-600 max-w-sm">
          <p v-html="$t('equipe.equipe_Philippe_Bio5contact')"></p>
        </div>
      </div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t("equipe.equipe_Philippe_Etudes_Titre") }}</p>
        <p class="text-gray-600 mt-1" v-html="$t('equipe.equipe_Philippe_Etudes_Detail')"></p>
      </div>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p class="italic">{{ $t("equipe.equipe_Philippe_Citation") }}</p>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Paragraphes de bio -->
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Philippe_Bio1") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Philippe_Bio2") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Philippe_Bio3") }}</p>
      <p><span class="ml-5"></span>{{ $t("equipe.equipe_Philippe_Bio4") }}</p>

      <!-- Ligne verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

    </div>
  </div>
</div>

<br>
<br>
<br>

             <!-- Bloc 7 Anais OLIVIER -->
<div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
  <!-- Titre 1 + soulignement -->
  <div id="AnaisOLIVE" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="292" width="289" decoding="async" loading="lazy"
        src="/Trombi/A_O.png"
        alt="Anaïs Olive"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t('equipe.equipe_Anais_Nom') }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Anais_TitreCourt') }}</strong></li>
      </ul>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Anais_Etudes_Titre') }}</p>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Anais_Etudes_Detail') }}</p>
      </div>
    </div>
  </div>

  <!-- Bulle d'info (Popover) -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
  
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t('equipe.equipe_Anais_Nom') }}</h3>

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Anais_TitreCourt') }}</strong></li>
      </ul>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Anais_Etudes_Titre') }}</p>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Anais_Etudes_Detail') }}</p>
      </div>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p class="italic">“{{ $t('equipe.equipe_Anais_Citation') }}”</p>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Anais_Bio1') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Anais_Bio2') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Anais_Bio3') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Anais_Bio4') }}</p>

      <br />
    </div>
  </div>
</div>
       

<br>
<br>
<br>
 
    <!-- Bloc 8 Cedric CHAUVET 
    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
      
      <div id="CedricChauvet" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
      
        <div class="flex-shrink-0">
          <img height="292" width="225" decoding="async" loading="lazy"
            src="/Trombi/C_Cvf.png"
            alt="Cédric Chauvet"
            class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

    <div class="flex-1">
      
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t('equipe.equipe_Cedric_Nom') }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br>

      
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Cedric_TitreCourt') }}</strong></li>
      </ul>

  
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Cedric_Etudes_Titre') }}</p>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Cedric_Etudes_Detail') }}</p>
      </div>
    </div>
  </div>

 
 <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t('equipe.equipe_Cedric_Nom') }}</h3>

       
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">

      
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Cedric_TitreCourt') }}</strong></li>
      </ul>

          <div class="font-bold mt-4 md:mt-0 md:ml-6 text-sm text-gray-600 max-w-sm">
            <p v-html="$t('equipe.equipe_Cedric_Bio3contact')"></p>
          </div>
  </div>
    
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Cedric_Etudes_Titre') }}</p>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Cedric_Etudes_Detail') }}</p>
      </div>

      
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p class="italic">“{{ $t('equipe.equipe_Cedric_Citation') }}”</p>

     
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Cedric_Bio1') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Cedric_Bio2') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Cedric_Bio3') }}</p>

    
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
      

      <br />
    </div>
  </div>
</div>
-->
<br>
<br>
<br> 
             <!-- Bloc 9 Xavier Piedallu -->
<div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
  <!-- Titre 1 + soulignement -->
  <div id="XavierPiedallu" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="298" width="299" decoding="async" loading="lazy"
        src="/Trombi/X_Pvf.png"
        alt="Xavier Piedallu"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <!-- Titre + soulignement -->
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t('equipe.equipe_Xavier_Nom') }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
      </div>

      <br />

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Xavier_TitreCourt') }}</strong></li>
        <li>{{ $t('equipe.equipe_Xavier_TitreDetail') }}</li>
      </ul>


      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <!-- Études -->
      <div class="mt-4">
        <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Xavier_Etudes_Titre') }}</p>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Xavier_Etudes_Detail') }}</p>
      </div>
    </div>
  </div>

  <!-- Bulle d'info (Popover) -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t('equipe.equipe_Xavier_Nom') }}</h3>

      <!-- Colonnes -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
  <!-- Nom + Détails -->
  <div>
    
    
    <!-- Détails -->
    <ul class="text-gray-600 text-base sm:text-lg space-y-1">
      <li><strong>{{ $t('equipe.equipe_Xavier_TitreCourt') }}</strong></li>
      <li>{{ $t('equipe.equipe_Xavier_TitreDetail') }}</li>
    </ul>
  </div>

  <!-- Info Contact à droite -->
  <div class="font-bold mt-4 md:mt-0 md:ml-6 text-sm text-gray-600 max-w-sm">
    <p v-html="$t('equipe.equipe_Xavier_Bio4contact')"></p>
  </div>
</div>

<!-- Études -->
<div class="mt-4">
  <p class="italic font-semibold text-gray-700">{{ $t('equipe.equipe_Xavier_Etudes_Titre') }}</p>
  <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Xavier_Etudes_Detail') }}</p>
</div>
      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p class="italic">“{{ $t('equipe.equipe_Xavier_Citation') }}”</p>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Xavier_Bio1') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Xavier_Bio2') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Xavier_Bio3') }}</p>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

     

      <br />
    </div>
  </div>
</div>


<br>
<br>
<br>
                  <!-- Bloc Rubie -->
<div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">
  <!-- Titre 1 + soulignement -->
  <div id="Rubie" class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 bg-white rounded-lg shadow-md p-4 sm:p-6 gsap-bloc">
    <!-- Image à gauche -->
    <div class="flex-shrink-0">
      <img height="296" width="295" decoding="async" loading="lazy"
        src="/Trombi/Rubie.png"
        alt="Rubie"
        class="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>

    <!-- Texte à droite -->
    <div class="flex-1">
      <div class="text-left mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#555]">{{ $t('equipe.equipe_Rubie_Nom') }}</h2>
        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
        <br />
        <ul class="text-gray-600 text-base sm:text-lg space-y-1">
          <li><strong>{{ $t('equipe.equipe_Rubie_TitreFr') }}</strong></li>
        </ul>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Rubie_TitreEn') }}</p>
      </div>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
    </div>
  </div>

  <!-- Bulle d'info (Popover) -->
  <div class="bulle-info absolute left-1/2 md:left-[62.5%] transform -translate-x-1/2 top-0
                    bg-white text-gray-700 p-4 sm:p-6 rounded-lg shadow-2xl
                    w-[96%] sm:w-[92%] md:w-[85%]
                    h-[80vh] sm:h-[70vh] md:h-96
                    max-h-[90vh] z-[10] items-start overflow-y-auto bulle-scroll">
    <div class="space-y-4">
      <h3 class="font-bold text-xl sm:text-2xl">{{ $t('equipe.equipe_Rubie_Nom') }}</h3>

      <!-- Détails -->
      <ul class="text-gray-600 text-base sm:text-lg space-y-1">
        <li><strong>{{ $t('equipe.equipe_Rubie_TitreFr') }}</strong></li>
        <p class="text-gray-600 mt-1">{{ $t('equipe.equipe_Rubie_TitreEn') }}</p>
      </ul>

      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Rubie_Bio1') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Rubie_Bio2') }}</p>
      <p><span class="ml-5"></span>{{ $t('equipe.equipe_Rubie_Bio3') }}</p>


      <!-- Ligne de séparation verte -->
      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
    </div>
  </div>
</div>


                    <br>          
                    

                </div>
                <br><br>
              </div>
              </v-container>
            </section>

            

          </div>
        </v-col>

        
          

      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>
@media (max-width: 960px) {
  :global(.main-content) {
    margin-left: 0 !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
</style>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import { useHead } from '@vueuse/head';

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  nextTick(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Attendre un peu puis forcer le check du scroll (important)
        setTimeout(() => {
          ScrollTrigger.refresh(); // ✅ force le recalcul du scroll
        }, 800); // ⏱️ délai à ajuster si nécessaire
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Animation scroll des blocs
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      }
    });

    // Animation de la bulle (effet page qui se tourne)
    const bulle = bloc.querySelector('.bulle-info');

    if (bulle) {
      // Position initiale : bulle fermée et invisible
      gsap.set(bulle, { 
        transformOrigin: "left center", 
        rotateY: -90,
        opacity: 0,
        pointerEvents: "none"
      });

      bloc.addEventListener('mouseenter', () => {
         
        // Fermer toutes les autres bulles
      document.querySelectorAll('.bulle-info').forEach((autreBulle) => {
        if (autreBulle !== bulle) {
          gsap.to(autreBulle, {
            rotateY: -90,
            opacity: 0,
            pointerEvents: "none",
            duration: 1,
            ease: "power2.in"
          });
        }
      });

      

      // Puis ouvrir celle du bloc actuel
        gsap.to(bulle, {
          rotateY: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 1.8,
          ease: "power2.out"
        });
      });

      bloc.addEventListener('mouseleave', () => {
        gsap.to(bulle, {
          rotateY: -90,
          opacity: 0,
          pointerEvents: "none",
          duration: 1,
          ease: "power2.in"
        });
      });
    }
  });

  // Animation du logo au scroll
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

useHead({
  title: 'Notre équipe – BTC Énergies',
  meta: [
    {
      name: 'description',
      content: 'Une équipe pluridisciplinaire : ingénieurs, développeurs, experts énergie et environnement, au service de la transition écologique.',
    },
    { name: 'keywords', content: 'équipe BTC Énergies, experts énergie, développeur durable, ingénieur environnement, architecte web, QHSE' },
    { property: 'og:title', content: 'L’équipe BTC Énergies' },
    { property: 'og:description', content: 'Découvrez notre équipe : des profils complémentaires pour un même objectif – l’innovation écologique.' },
    { property: 'og:url', content: 'https://www.btc-energies.fr/equipe' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.btc-energies.fr/equipe' }]
});
</script>




