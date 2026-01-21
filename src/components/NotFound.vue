<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <v-row no-gutters class="pa-0 ma-0">
        <v-col cols="12" md="2" class="pa-0">
          <div class="sidebar">
            <Sidebar />
          </div>
        </v-col>

        <v-col>
          <section class="w-full min-h-[70vh] flex items-center justify-center px-3 sm:px-4 py-10">
            <div class="w-full sm:max-w-xl sm:mx-auto text-center bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h1 class="text-3xl sm:text-4xl font-bold text-[#475C79]">404</h1>
              <p class="mt-3 text-base sm:text-lg text-gray-600">
                Cette page n'existe pas ou a ete deplacee.
              </p>
              <div class="mt-6">
                <router-link
                  to="/"
                  class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#C2C4C7] text-black font-bold shadow transition duration-300 hover:bg-[#989A9D] hover:text-white"
                >
                  Retour a l'accueil
                </router-link>
              </div>
            </div>
          </section>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
</script>

