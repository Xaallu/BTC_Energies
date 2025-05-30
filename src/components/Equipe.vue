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

        <!-- Contenu principal -->
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
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Notre équipe</h2>

                <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Notre équipe est composée de 3 associés présentés ci-dessous et de notre "Chief Happiness Officer" Canin.
                  Nous sommes également soutenus par plus d'une dizaine de personnes apportant leurs compétences sur les différentes parties du projet.
                </p>

                <br> <br>
                <!-- Trait inférieur -->
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
                
              </div>
            </section>
            <div class="main-content">

              <Header />

            <!-- Bloc blanc après la vidéo -->
            <section>

              
              <v-container class="min-h-screen flex items-center justify-center px-4 py-8">
               <div class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
              <div class="bg-white rounded-2xl shadow-md max-w-5xl w-full p-8">
<br>
<br>           
                  <!-- bloc 1 -->
                  <div class="gsap-bloc relative group hover:scale-[1.04] transition-transform duration-300 ease-in-out">
                 

                    <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc overflow-visible">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/T_B2.png"
                        alt="Thibault BÉTHENCOURT"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                    <!-- Texte à droite -->
                    <div class="flex-1">
                      <!-- Titre + soulignement -->
                      <div class="text-left mb-4">
                        <h2 class="text-3xl font-bold text-[#555]">Thibault BÉTHENCOURT</h2>
                        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                      </div>

                      <br>

                      <!-- Détails -->
                      <ul class="text-gray-600 text-lg space-y-1">
                        <li><strong>Président - Fondateur de BTC Énergies</strong></li>
                        <li>Porteur de projet (CEO)</li>
                        <li class="text-[#25A875]">+33 6 29 56 07 56</li>
                      </ul>

                      <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                      <!-- Études -->
                      <div class="mt-4">
                        <p class="italic font-semibold text-gray-700">Études :</p>
                        <p class="text-gray-600 mt-1">
                          Bac+5 : Droit, Économie, Gestion (administration des institutions publiques)<br />
                          Doctorat en préparation (Management stratégique)
                        </p>
                      </div>
                    </div>
                  </div>

                      <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[55%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Thibault BÉTHENCOURT</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Président - Fondateur de BTC Énergies</strong></li>
                              <li>Porteur de projet (CEO)</li>
                              <li class="text-[#25A875]">+33 6 29 56 07 56</li>
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5 : Droit, Économie, Gestion (administration des institutions publiques)<br />
                              Doctorat en préparation (Management stratégique)
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <p class="italic">“Dans ce monde, tout est imaginable. Mais il faut savoir convaincre et s’entourer des meilleurs pour que tout soit possible”</p>
              
                   <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

 
                          <p>
                            <span class="ml-5"></span>Titulaire de plusieurs diplômes dans des disciplines complémentaires — Ingénierie et Gestion de Projets, Histoire, Relations Internationales & Géopolitique, Droit, Économie et Gestion. Il incarne un profil pluridisciplinaire rare, au croisement des enjeux techniques, stratégiques et géopolitiques.
                              Fondateur et penseur du projet BTC Énergies, il en assure la direction depuis la présentation officielle de la technologie aux professionnels du secteur en février 2022, marquant ainsi le lancement opérationnel de l’initiative.
                              Depuis, BTC Énergies a franchi une étape majeure avec sa sélection dans le cadre de l’Appel à Manifestation d’Intérêt lancé par Natran (ex-GRTgaz), spécifiquement dédié à la gazéification hydrothermale.
                          </p>

                          <p>
                            <span class="ml-5"></span>Ce jalon confirme la pertinence de la solution développée par Thibault BÉTHENCOURT, ainsi que la reconnaissance croissante de son engagement, de sa vision et de sa capacité d’exécution.
                              Entrepreneur visionnaire, créatif et résolument tourné vers l’innovation, il incarne une approche audacieuse et disruptive de l’industrie, faisant de lui une figure singulière et remarquée dans l’écosystème de la transition énergétique.
                          </p>

                          <p>
                            <span class="ml-5"></span>Polyglotte, aventurier passionné et voyageur intrépide, il débute dès l’âge de 17 ans un parcours d’idéation nourri par un tour du monde à travers 11 pays et 3 continents.
                              Confronté aux réalités énergétiques et environnementales sur le terrain, il affine une compréhension globale des enjeux, ce qui lui a permis d’identifier immédiatement le potentiel stratégique de la gazéification hydrothermale.
                          </p>

                          <p>
                            <span class="ml-5"></span>Ses expériences internationales, entre observation pragmatique et immersion culturelle, façonnent une vision singulière et ambitieuse : faire de cette technologie une réponse concrète aux défis de la transition énergétique et de la ré-industrialisation.
                              Son esprit en constante émulation fait de lui la boîte à idées de l’entreprise.
                          </p>
                      </div>

                  </div>

                </div>

<br> 
<br> 

                <!-- Bloc J-M Bouillon  -->
                <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                  <!-- Image à gauche -->
                  <div class="flex-shrink-0">
                    <img
                      src="/Trombi/JM_B.jpg"
                      alt="Jean-Marc BOUILLON"
                      class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                  </div>

                  <!-- Texte à droite -->
                  <div class="flex-1">
                    <!-- Titre + soulignement -->
                    <div class="text-left mb-4">
                      <h2 class="text-3xl font-bold text-[#555]">ePhD Jean-Marc BOUILLON</h2>
                      <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                    </div>

                    <br>

                    <!-- Détails -->
                    <ul class="text-gray-600 text-lg space-y-1">
                      <li><strong>Directeur Général (COO)</strong></li>
                    </ul>

                    <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                    <!-- Études -->
                    <div class="mt-4">
                      <p class="italic font-semibold text-gray-700">Études :</p>
                        <p class="text-gray-600 mt-1">
                          Diplôme d'Ingénieur : Institut National Polytechnique de Grenoble<br />
                          Doctorat : Sciences de Gestion<br />
                          Certifications : PMP® (Project Management Institute), Médiateur diplômé (Université Panthéon-Assas)
                        </p>

                    </div>
                  </div>
                </div>

                 <!-- Bulle d'info (Popover) -->
                 <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">ePhD Jean-Marc BOUILLON</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Directeur Général (COO)</strong></li>
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur : Institut National Polytechnique de Grenoble<br />
                              Doctorat : Sciences de Gestion<br />
                              Certifications : PMP® (Project Management Institute), Médiateur diplômé (Université Panthéon-Assas)
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <p class="italic">“Mon engagement, c’est faire rayonner les talents. C’est aussi créer de la valeur et ancrer BTC Énergies dans le paysage industriel français et au-delà . Mon fil rouge perma-industriel, c’est moins de plastique”.</p>
              
                   <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

 
                          <p>
                            <span class="ml-5"></span>Diplômé de l’Institut National Polytechnique de Grenoble et docteur en sciences de gestion, il cumule plus de 35 ans 
                            d’expérience au service de l’innovation, de la performance industrielle et de la transition écologique. 
                            Expert reconnu, auteur engagé et médiateur diplômé de l’Université Panthéon-Assas, il est Président élu de leur Association des Médiateurs Diplômés 
                            et membre actif de réseaux de référence tels que Polyméris et la Convention des Entreprises pour le Climat.
                          </p>

                          <p>
                            <span class="ml-5"></span>Fort de plus de 25 ans d’expérience au sein d’un groupe multinational leader mondial, il a piloté des projets complexes, 
                            pour un cumul total équivalent à un milliard de francs suisses, de l’étude à la mise en œuvre opérationnelle. 
                            Il est également Project Management Professional (PMP®️) certifié par le Project Management Institute première organisation mondiale dédiée à la gestion de projet 
                            il incarne un leadership rigoureux, stratégique et orienté impact.
                          </p>

                          <p>
                            <span class="ml-5"></span>Son expérience, son génie opérationnel et sa rigueur méthodologique font de lui l’un des piliers de la concrétisation 
                            industrielle des ambitions portées par BTC Énergies, contribuant activement à transformer notre stratégie en résultats tangibles.
                          </p>
                      </div>

                  </div>

              </div>

    <br> 
    <br> 
                 <!-- Bloc 2 -->
                 <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

               <!-- Titre 1 + soulignement -->
                 <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                 <!-- Image à gauche -->
                 <div class="flex-shrink-0">
                   <img
                     src="/Trombi/A_D.png"
                     alt="Alain DEGANS"
                     class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                 </div>

                 <!-- Texte à droite -->
                 <div class="flex-1">
                   <!-- Titre + soulignement -->
                   <div class="text-left mb-4">
                     <h2 class="text-3xl font-bold text-[#555]">Alain DEGANS</h2>
                     <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                   </div>

                   <br>

                   <!-- Détails -->
                   <ul class="text-gray-600 text-lg space-y-1">
                     <li><strong>Chef de Projet Digital – Cofondateur de BTC Énergies</strong></li>
                   </ul>

                   <!-- Ligne de sépartion verte-->
             <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <!-- Études -->
                   <div class="mt-4">
                     <p class="italic font-semibold text-gray-700">Études :</p>
                     <p class="text-gray-600 mt-1">
                      Bac+5 : Management et Développement des Activités Commerciales (en cours)
                     </p>
                   </div>
                 </div>
               </div>

                 <!-- Bulle d'info (Popover) -->
                 <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Alain DEGANS</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Chef de Projet Digital – Cofondateur de BTC Énergies</strong></li>
                              
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5 : Management et Développement des Activités Commerciales (en cours)  
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <p class="italic">“J’ai rejoint ce projet avec la conviction profonde qu’il pouvait avoir un impact positif et durable sur notre société. 
                                Pour moi, BTC Énergies, c’est avant tout une vision, une équipe soudée et des solutions d’avenir.”.</p>
              
                   <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

 
                          <p>
                            <span class="ml-5"></span> Né en 2000, il est le benjamin de l’équipe, mais aussi l’un des cofondateurs de BTC Énergies.
                                            Formé en gestion de projet et en marketing digital, il se distingue par un esprit entrepreneurial affirmé et 
                                            une sensibilité forte aux enjeux écologiques et technologiques.
                          </p>

                          <p>
                            <span class="ml-5"></span>Animé par une vision militante de l’entrepreneuriat, il défend avec conviction le rôle fondamental de l’industrie dans la transition écologique. 
                                                    Il perçoit la gazéification hydrothermale (GH) comme une technologie clé pour un développement économique durable. 
                          </p>

                          <p>
                            <span class="ml-5"></span>Persévérant, constant et doté d’une grande capacité d’abnégation, il s’impose comme l’un des membres les plus résilients de l’équipe.
                          </p>
                          <br> 
                      </div>

                  </div>
             </div>

<br>            
<br>
<br>     
             <!-- Bloc 3 -->
             <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

               <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/C_F.png"
                        alt="Camille Faure"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Camille FAURE</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable RH (HR Manager)</strong></li>
                          <li>Chargée de communication</li>
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 : Management des Ressources Humaines</p>
                        </div>
                      </div>
                    </div>

                    <!-- Bulle d'info (Popover) -->
                 <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Camille FAURE</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Responsable RH (HR Manager)</strong></li>
                              <li>Chargée de communication</li>
                              
                              <li class="text-[#25A875]">+33 7 49 71 63 40</li>
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5 : Management des Ressources Humaines  
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <p class="italic">"Ma volonté, c’est de nourrir des valeurs qui permettent de construire une culture d’entreprise saine, humaine et tournée vers l’avenir"</p>
              
                   <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’une licence en psychologie sociale et d’un Master 2 en ressources humaines, elle est cofondatrice de BTC Énergies et 
                            l’un des piliers essentiels de l’entreprise.
                            Dotée d’un profil hautement spécialisé, elle se distingue par un esprit rigoureux, structuré et méthodique. 
                            Son sens aigu de l’analyse humaine, allié à une remarquable capacité d’intuition, lui permet 
                            de cerner avec précision les profils et de mobiliser les talents de manière optimale. 
                          </p>

                          <p>
                            <span class="ml-5"></span>Responsable du recrutement et de la stratégie RH, elle veille à ce que chaque collaborateur occupe une position alignée 
                            à la fois avec ses compétences, son épanouissement personnel et les objectifs stratégiques de BTC Énergies. 
                            Son rôle est central dans la structuration et la consolidation des équipes, contribuant directement à la performance et à la résilience de l’entreprise.
                          </p>
                          <br>
                      </div>
                   </div>
                </div>
<br>
<br> 
<br>
                  <!-- Bloc 4 -->
             <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                  <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                      <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/R_P.png"
                          alt="Rémi PICHONNEAU"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>

                    <!-- Texte à droite -->
                        <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Rémi PICHONNEAU</h2>
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                          </div>

                          <br>

                          <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Ingénieur en génie industriel / Responsable technique (CTO)</strong></li>
                            
                          </ul>

                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur en conduite de projets industriels
                            </p>
                            <p class="text-gray-600 mt-1">
                              Master SYSPEC</p>
                          </div>
                        </div>
                      </div>

                      <!-- Bulle d'info (Popover) -->
                 <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Rémi PICHONNEAU</h3>

                              

                          <!-- Détails -->
                            <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Ingénieur en génie industriel / Responsable technique (CTO)</strong></li>
                            <ul class="text-gray-600 text-lg space-y-1">
                              
                            </ul> 
                          </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur en conduite de projets industriels
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">"Mon mot d’ordre, c’est impulser et dynamiser la transition énergétique dans l’esprit du développement durable."</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’un diplôme d’Ingénieur généraliste en conduite de projet industriel ainsi que d’un Master SYSPEC, 
                            il cumule 42 années d’expérience dans des domaines clés tels que la production d’énergies renouvelables, 
                            la gestion des déchets (incinération, valorisation du gaz de décharge) et la construction de Data centers. 
                          </p>

                          <p>
                            <span class="ml-5"></span>Au cours de sa carrière, il a notamment contribué à l’installation de 145 MW de puissance énergétique, 
                            soit de quoi alimenter 15 000 foyers – l’équivalent d’une ville comme Chambéry.
                              Ses fils conducteurs sont le développement durable et la transition énergétique, qui guident l’ensemble de ses projets.
                              Porté par une vision tournée vers l’avenir, il privilégie l’anticipation et l’innovation, afin de proposer des solutins responsables et durables face aux enjeux environnementaux et technologiques.
                              Son expertise, sa polyvalence et sa sagesse acquise font de lui un expert reconnu et un éléments influent au sein de BTC Énergies.
                          </p>
                          <br>
                        </div>
                      </div>
                    </div>
  
<br>
<br> 
                    <!-- Bloc Adell -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                      <!-- Titre 1 + soulignement -->
                        <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                          <!-- Image à gauche -->
                          
                          <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">ADELL</h2>
                                                      
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                            <br>

                             <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Direction Administrative et Financière </strong></li>
                          </ul> 

                          <ul class="text-gray-600 text-lg space-y-1">
                            <li>Architecte de la rentabilité, maître d’ouvrage de la structuration financière</li>
                          </ul> 

                           <!-- Études -->
                           <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur en génie mécanique / Master en gestion d’entreprise
                            </p>
                          </div>
                        </div>

                          <!-- Bulle d'info (Popover) -->
                        <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                                bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                                z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">ADELL</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Directeur Administratif et Financier</strong></li>
                              <li>Architecte de la rentabilité, maître d’ouvrage de la structuration financière</li>
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur en génie mécanique / Master en gestion d’entreprise
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">"Ce qui m’intéresse, c’est la construction, le challenge et la mise en place d’outils au service de projets innovants. 
                                  Le Projet de BTC Énergies à une charge technique et sociétale extrêmement forte qui en fait un projet d’avenir et une voie d’action concrète et pertinente."</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’un diplôme d’ingénieur en génie mécanique ainsi que d’un master en gestion d’entreprise, 
                            il bénéficie de 35 années d’expérience dans l’industrie, les services et les institutions dédiées au développement économique local, 
                            telles que les Chambres de commerce et d’industrie (CCI) ou les agences de développement. Tout au long de son parcours, 
                            il a su mettre son expertise au service de projets variés et complexes, allant de la fusion de structures à la réorganisation fonctionnelle 
                            d’entreprises, en passant par la redéfinition des actionnariats ou la structuration des fonctions administratives et financières
                          </p>

                          <p>
                            <span class="ml-5"></span>Il a également participé à plusieurs projets européens à dimension internationale, impliquant des collaborations avec la 
                            Belgique, le Royaume-Uni, le Portugal, la Pologne, l’Allemagne et l’Espagne. Ces expériences lui ont permis de développer une solide compétence 
                            en ingénierie de projets et en recherche de financements, tout en cultivant une approche interculturelle et transversale. Il parle couramment anglais, 
                            maitrise un espagnol conversationnel et à des notions de portugais et de japonais.
                          </p>

                          <p>
                          <span class="ml-5"></span>Doté d’un profil pragmatique, modéré et rigoureux, il se distingue par un mode de fonctionnement direct qui favorise l'efficacité,
                           tant dans la prise de décision que dans le traitement des dossiers. À la fois hiérarchique dans sa posture et autonome dans son action, 
                           il conjugue le respect d’une politique générale à une véritable autonomie opérationelle. Cette combinaison lui donne une capacité de discernement appréciable, 
                           notamment pour repérer les dysfonctionnements et les signaler de manière constructive et directe.
                          </p>

                          <p>
                          <span class="ml-5"></span>Sa capacité à dialoguer avec toutes les parties prenantes — de la présidence à la direction générale, en passant par les fonctions opérationnelles 
                          lui permet d’assurer une qualité d’échange constante, quels que soient les interlocuteurs. Curieux et visionnaire, il dépasse volontiers le périmètre 
                          de sa fonction pour appréhender les problématiques dans leur globalité, avec la volonté constante de servir au mieux les missions qui lui sont confiées.
                          Ces qualités et sont profil à la fois hautement qualifié et expérimenté font de lui l’un des éléments moteurs de l’entreprise. 
                          </p>
                          <br>
                          <br> 

                        </div>
                      </div>

                        </div>
                      </div>
                    </div>
            
<br>
<br> 
<br> 
                   <!-- Bloc 5 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/O_C.png"
                        alt="Olivier COT"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Olivier COT</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable Commercial (CBO)</strong></li>
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5   Programme Grande Ecole
                          </p>
                          <p class="text-gray-600 mt-1">
                            (Business Development Management Finance)
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Olivier Cot</h3>

                              

                          <!-- Détails -->
                            <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Responsable Commercial (CBO)</strong></li>
                          </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5   Programme Grande Ecole
                            </p>

                            <p class="text-gray-600 mt-1">
                            (Business Development Management Finance)
                          </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">“Ma conviction c’est, qu’ensemble, nous pourrons développer un modèle industriel rentable et faire de BTC Énergies une entreprise 
                                  prospère au rayonnement mondial”</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’un Master 2 Programme Grande École de KEDGE Business School, il bénéficie de cinq années d’expérience dans l’industrie lourde,
                             plus particulièrement dans les domaines des achats et de la supply chain, dont trois années passées à l’étranger, au contact de contextes industriels complexes et exigeants. 
                          </p>

                          <p>
                            <span class="ml-5"></span>Doté d’une grande aisance relationnelle, il entretient des relations commerciales solides et constructives avec des partenaires 
                            de diverses régions du monde : États-Unis, Turquie, Chine, Inde, pays de l’Union Européenne, Amérique du Sud, Afrique du Nord, Asie du Sud, etc. Polyglotte,
                            il maîtrise plusieurs langues étrangères, un atout stratégique pour le développement international de BTC Énergies, notamment dans des zones géographiques clés.
                          </p>

                          <p>
                            <span class="ml-5"></span>Son esprit d’aventure, combiné à un pragmatisme affirmé et à une capacité d’analyse pointue (évaluation des besoins, pilotage de KPI, 
                            veille conjoncturelle, compréhension fine des dynamiques de marché), fait de lui l’un des piliers essentiels de BTC Énergies, contribuant activement 
                            à sa structuration, sa vision et son déploiement stratégique à l’échelle mondiale dans au long terme.
                          </p>

                          <br>
                        </div>
                      </div>
                  </div>
<br>
<br> 
<br> 

                  <!-- Bloc 6 -->
                  <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/P_S.png"
                        alt="Philippe Sutarik"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Philippe Sutarik</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>
                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable Qualité, Sécurité, Environnement (QSE)</strong></li>
                          
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 Technique et Gestion de l'Environnement des Ponts et Chaussées option Gestion et Economie
                          </p>
                        </div>
                      </div>
                    </div>

                     <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Philippe SUTARIK</h3>

                              

                          <!-- Détails -->
                            <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Responsable Qualité, Sécurité, Environement (QSE)</strong></li>
                          </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5 Technique et Gestion de l'Environnement des Ponts et Chaussées option Gestion et Economie
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">« J’ai un objectif : faire disparaître définitivement les déchets ultimes. À chaque problème, il y a toujours des solutions.»</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Diplômé de l'École nationale des ponts et chaussées, Philippe Sutarik cumule trente années d’expertise dans le traitement et la valorisation des déchets. 
                            Visionnaire et innovateur, il est à l’origine de quinze avancées majeures qui ont contribué à transformer les pratiques industrielles dans ce domaine.
                             Faisant de lui le Géo-Trouvetou de l’équipe.
                          </p>

                          <p>
                            <span class="ml-5"></span>Dès 1993, son engagement en faveur de solutions industrielles durables est récompensé par le Prix Éco-Industrie, 
                            une distinction qui souligne son excellence technique et sa capacité à anticiper les besoins environnementaux de demain.
                            Depuis 2023, Philippe Sutarik a rejoint BTC Énergies en tant que Responsable QSE. Fort de son expérience, il met sa vision stratégique 
                            et son savoir-faire au service d’une aventure collective visant à repousser les limites de l’innovation en matière de qualité, de sécurité et d’environnement.
                          </p>

                          <p>
                            <span class="ml-5"></span>Ancien auditeur chez Afnor, il a accompagné quarante entreprises et réalisé soixante audits environnementaux. 
                            Au cours de sa carrière, il a suivi trois formations d’auditeur et d’accompagnateur, dont une formation spécifique à l’éco-audit, la seule officiellement reconnue à l’échelle européenne.
                          </p>

                          <p>
                            <span class="ml-5"></span>Sa démarche, qui allie rigueur scientifique et pragmatisme opérationnel, est le fruit de trois décennies dédiées à la conception 
                            et à l’implémentation de procédés de valorisation des déchets. Grâce à cette expertise unique, il aborde les défis environnementaux avec une approche globale,
                             à la fois technique et managériale, visant un objectif clair : éradiquer définitivement les déchets ultimes.
                          </p>

                          <br>
                          
                        </div>
                      </div>
                  </div>

<br>
<br>
<br>

                    <!-- Bloc 7 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/A_O.png"
                        alt="Anaïs Olive"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Anaïs Olive</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>
                       

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Cheffe de projet Outre Mer</strong></li>
                          
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 : Audit et management des ressources humaines + formation gestionnaire de paie
                          </p>
                        </div>
                      </div>
                    </div>

                     <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Anaïs Olive</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Cheffe de projet Outre Mer</strong></li>
                              
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+5 : Audit et management des ressources humaines + formation gestionnaire de paie
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">“Le but de mon existence, c’est de permettre à la nature de retrouver sa place. Rejoindre BTC Énergies, 
                                  c’est participer à la mise en place de solutions d’avenir pour traiter efficacement les déchets qui tuent notre planète ”</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’une licence en droit, d’une maîtrise en droit social, d’un master 2 d’audit social et de gestion des ressources
                             humaines, ainsi que de plusieurs diplômes spécialisés (gestionnaire de paie, droit des obligations, sophrologie), elle dispose d’un profil 
                             particulièrement complet, axé sur les secteurs administratifs, juridiques et de paie. 
                          </p>

                          <p>
                            <span class="ml-5"></span>Son parcours professionnel en tant que gestionnaire d’agence d’intérim, trésorière, responsable de la gestion administrative et comptable, 
                            et assistante juridique, atteste d’une polyvalence remarquable et d’une réelle capacité à évoluer dans des contextes complexes et exigeants.
                            Forte d’une expérience personnelle enrichissante à travers des voyages en Australie, Nouvelle-Calédonie, Île Maurice, Angleterre, Majorque, Ibiza, Îles Canaries, Crète, 
                            Corse et Sardaigne, elle bénéficie d’une connaissance très complète des territoires insulaires et de leurs problématiques spécifiques. Cette immersion 
                            géographique constitue un véritable atout pour construire une stratégie locale pertinente et ancrée dans les réalités du terrain.
                          </p>

                          <p>
                            <span class="ml-5"></span>Membre volontaire, dynamique, dotée d’un excellent sens du contact et d’un esprit d’initiative affirmé, 
                            elle se distingue par une vision claire et une volonté forte d’avoir un impact positif sur son environnement. Convaincue de la pertinence 
                            des projets de BTC Énergies dans les territoires insulaires, elle est naturellement destinée à encadrer l’ensemble des projets menés sur ces 
                            zones à forts enjeux.
                          </p>

                          <p>
                            <span class="ml-5"></span>Sa sensibilité écologique, conjuguée à sa rigueur et à son sens de l’organisation, en fait le profil idéal pour
                             développer des projets dans des écosystèmes fragiles, en veillant à limiter au maximum les impacts négatifs des activités humaines. 
                             Consciencieuse et méthodique, elle sait cadrer efficacement chaque phase de la conduite de projet, dans une logique de performance et de durabilité.
                          </p>
                           <br>
                           
                        </div>
                      </div>
                  </div>

<br>
<br>
<br> 
                    <!-- Bloc 8 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

            <!-- Titre 1 + soulignement -->
              <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                <!-- Image à gauche -->
                <div class="flex-shrink-0">
                  <img
                    src="/Trombi/C_C.jpg"
                    alt="Cédric Chauvet"
                    class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </div>

              <!-- Texte à droite -->
                  <div class="flex-1">
                    <!-- Titre + soulignement -->
                    <div class="text-left mb-4">
                      <h2 class="text-3xl font-bold text-[#555]">Cécric Chauvet</h2>
                      <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                    </div>

                    <br>

                    <!-- Détails -->
                    <ul class="text-gray-600 text-lg space-y-1">
                      <li><strong>Développeur IA et Automatisation</strong></li>
                      
                      
                    </ul>

                    <!-- Ligne de sépartion verte-->
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                    <!-- Études -->
                    <div class="mt-4">
                      <p class="italic font-semibold text-gray-700">Études :</p>
                      <p class="text-gray-600 mt-1">
                        Master 2Pro - Pilote et surveillance des procédés industriels
                        Spécialisation Machine Learning - Holberton School
                      </p>
                      
                    </div>
                  </div>
                </div>

                <!-- Bulle d'info (Popover) -->
                  <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Cécric Chauvet</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Développeur IA et Automatisation</strong></li>
                              
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Master 2Pro - Pilote et surveillance des procédés industriels
                              Spécialisation Machine Learning - Holberton School
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">“Mon but ultime, c’est généraliser l’usage de l’intelligence artificielle dans l’Industrie et à tous les niveaux.”</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Titulaire d’un Master 2 Professionnel en Pilotage et Surveillance des Procédés Industriels, spécialisé en sciences industrielles, 
                            d’une maîtrise CAPES de Physique-Chimie, ainsi que d’un diplôme de programmateur en développement d’applications avec une spécialisation en intelligence artificielle, 
                            Cédric incarne un profil résolument pluridisciplinaire.

                            Passionné d’électronique et d’entrepreneuriat, il a eu l’opportunité de participer à plusieurs compétitions de renom, telles que le concours Eurobot en 2024 et la Toulouse Robotrace, 
                            où il a brillamment décroché la 3ᵉ place en 2022.
                          </p>

                          <p>
                            <span class="ml-5"></span>Ses compétences transversales lui permettent d'apporter des solutions concrètes à de nombreuses problématiques complexes, 
                            faisant de lui un atout majeur pour relever les défis de l'industrie d'aujourd'hui et de demain.
                          </p>

                          <p>
                            <span class="ml-5"></span>Doté d'un esprit inventif et bricoleur, Cédric possède l'ouverture d'esprit essentielle à l'intégration et à l'exploitation 
                            de technologies novatrices. Conscient que nous vivons une époque charnière à la croisée des technologies d’hier, d’aujourd’hui et de demain
                             il met un point d'honneur à créer des ponts entre ces mondes afin d’en tirer le meilleur.
                          </p>
                           <br>
                        </div>
                      </div>
              </div>

<br>
<br> 
              <!-- Bloc 9 -->
              <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                  <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                      <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/X_P.jpg"
                          alt="Xavier Piedallu"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>

                    <!-- Texte à droite -->
                        <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Xavier Piedallu</h2>
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                          </div>

                          <br>

                          <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Architecte Web Full-Stack</strong></li>
                            <li>Conception d'outils numériques</li>

                          </ul>

                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+2 : Développement Web Full-Stack RNCP5 
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0 
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Xavier Piedallu</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Webmaster/Architecte Web Full-Stack</strong></li>
                              <li>Concepteur d'outils numériques</li>
                              
                            </ul>

                            <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+2 : Développement Web Full-Stack RNCP5 
                            </p>
                          </div>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <p class="italic">"BTC Énergies à la capacité de proposer des solutions pertinentes et concrètes pour le monde entier. 
                                  Je suis parfaitement en phase avec chaque membre de l’équipe et cela me conforte dans mes inspirations : celles de changer les choses."</p>
                            
                                <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <p>
                            <span class="ml-5"></span>Issu à l’origine d’un cursus en travaux publics, il a su faire preuve d’une remarquable capacité d’adaptation en opérant une reconversion
                             réussie vers le développement web, couronnée par l’obtention d’un diplôme en développement full stack. Fort de 14 années d’expérience, il évolue avec aisance dans 
                             les domaines du bâtiment, des travaux publics et du numérique, aussi bien en métropole que dans les territoires ultramarins.
                          </p>

                          <p>
                            <span class="ml-5"></span>Ce double ancrage technique et digital lui permet d’aborder avec la même efficacité des projets d’infrastructures lourdes que des missions de développement à forte valeur ajoutée. 
                            Son parcours témoigne d’un profil polyvalent, ambitieux et visionnaire, porté par une quête permanente d’évolution et d’amélioration. 
                            Fin connaisseur des dynamiques de marché et attentif aux conjonctures, il sait ajuster ses orientations en conséquence.
                          </p>

                          <p>
                            <span class="ml-5"></span>Passionné de voyages, il a enrichi sa vision globale à travers des séjours dans plusieurs îles de l’océan Indien, au Québec, 
                            aux Philippines ou encore en zone sub-antarctique. Cette ouverture sur le monde nourrit sa curiosité et renforce sa capacité à s’adapter à des contextes variés.
                            Autonome, rigoureux et doté d’un solide esprit d’initiative, il fait preuve d’un grand professionnalisme. Son respect des consignes et sa fiabilité 
                            en font un collaborateur de confiance, capable de s’investir pleinement dans des environnements exigeants.
                          </p>
                           <br>
                        </div>
                      </div>
                    </div>

<br>

<br>
                    <!-- Bloc Rubie -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                      <!-- Titre 1 + soulignement -->
                        <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                          <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/Rubie.png"
                          alt="Rubie"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>
                          
                          <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Rubie</h2>
                                                      
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                              <br />
                              <ul class="text-gray-600 text-lg space-y-1">
                                <li><strong>Responsable Bien-être au Travail</strong></li>
                              </ul>
                              <p class="text-gray-600 mt-1">
                                Chief Happiness Officer
                              </p>
 
                          </div>

                        
                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                      </div>
                    </div>

                    <!-- Bulle d'info (Popover) -->
                      <div class="bulle-info absolute left-[50%] md:left-[65%] transform -translate-x-1/3 top-0
                        bg-white text-gray-700 p-6 rounded-lg shadow-2xl w-[75%] max-h-[90vh] 
                        z-[10] items-start overflow-auto bulle-scroll overflow-y-scroll h-96">


                      <div class="space-y-4">
                          <h3 class="font-bold text-2xl">Rubie</h3>

                              

                          <!-- Détails -->
                            <ul class="text-gray-600 text-lg space-y-1">
                              <li><strong>Responsable Bien-être au Travail</strong></li>

                               <p class="text-gray-600 mt-1">
                                Chief Happiness Officer
                              </p>
                              
                            </ul>

                            <!-- Ligne de sépartion verte-->
                              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>


                          <p>
                            <span class="ml-5"></span>Dans le cadre de sa démarche RSE et de sa volonté affirmée de promouvoir un environnement de travail bienveillant et innovant, 
                            BTC Énergies a fait le choix singulier mais profondément humain d’intégrer un chien thérapeutique au sein de son équipe. Cette décision s’inscrit dans
                             une vision holistique du bien-être au travail, où la performance et l’humain avancent main dans la patte.
                          </p>

                          <p>
                            <span class="ml-5"></span>Son intégration repose sur trois piliers clés : <br>
                                  <br>
                                  - Bien-être et santé mentale : De nombreuses études démontrent les effets bénéfiques de la présence animale sur la réduction de l’anxiété, 
                                  l’amélioration de l’humeur et la diminution du stress chronique. Sa simple présence contribue à apaiser les tensions et à instaurer un climat 
                                  de sérénité, notamment dans des secteurs aussi exigeants que le nôtre où un excès de pression n'a que des effets néfastes sur la performance. <br>

                                  <br>

                                  - Cohésion sociale et attractivité : Rubie est devenue une véritable mascotte, favorisant les échanges informels et renforçant le lien
                                   entre collaborateurs et les partenaires. Elle incarne une forme de douceur dans des environnements techniques parfois exigeants. 
                                   Fait remarquable, plusieurs partenaires et collaborateurs ont rejoint BTC Énergies grâce à l’attachement qu’ils ont développé pour 
                                   elle lors de rencontres professionnelles. <br>

                                  <br>

                                - Engagement sociétal et image responsable : Ce choix affirme la position de BTC Énergies comme un acteur engagé pour l’innovation sociale 
                                et le respect du vivant. Il illustre notre capacité à concilier haute technologie, performance environnementale et sens profond du vivant 
                                autant de dimensions essentielles pour les nouvelles générations de talents.
                          </p>

                          <p>
                            <span class="ml-5"></span>Dressée avec rigueur, dévouée et parfaitement intégrée à notre fonctionnement quotidien, elle symbolise notre vision 
                            de l’entreprise : fidèle, agile et audacieuse. Chez BTC Énergies, nous croyons que la performance durable passe aussi par le cœur, 
                            et Rubie en est la preuve vivante.
                          </p>
                           <br>
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

        <!-- Bandeau bas -->
        <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
              <div class="grid grid-cols-3 items-center text-white px-8 py-6">

                <!-- Colonne 1 : Logo -->
                <div class="flex justify-center">
                  <img
                    src="/logo_sidebar.png"
                    ref="logoSidebar"
                    alt="BTC Énergies Logo"
                    class="w-40 h-auto max-h-32"
                  />
                </div>

                <!-- Colonne 2 : Vide ou contenu futur -->
                <div></div>

                <!-- Colonne 3 : Texte et bouton -->
                <div class="flex flex-col items-center text-center">
                  <h2 class="font-montserrat font-semibold text-4xl mb-4 text-white">Nous contacter</h2>

                  <a href="/contact"
                  class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                          hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                          active:scale-95 active:shadow-inner flex items-center gap-2">
                            <span class="text-lg"></span>
                            Nos Coordonnées
                  </a>
                </div>
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
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animation scroll des blocs
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    // Animation d'apparition au scroll
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
});
</script>
