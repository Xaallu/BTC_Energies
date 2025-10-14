import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: '/', 
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparation des dépendances lourdes pour de meilleurs temps de chargement
          'vue-vendor': ['vue', 'vue-router', 'vue-i18n'],
          'vuetify': ['vuetify'],
          'gsap': ['gsap'],
        },
      },
    },
    // Augmente le seuil du warning à 1000 kB pour éviter le message sans risque
    chunkSizeWarningLimit: 1000,
  },

  // Copie automatique du fichier _redirects pour Netlify
  closeBundle() {
    try {
      copyFileSync(
        resolve(__dirname, 'public/_redirects'),
        resolve(__dirname, 'dist/_redirects')
      )
      console.log('✅ Fichier _redirects copié avec succès.')
    } catch (err) {
      console.warn('⚠️ Impossible de copier le fichier _redirects :', err)
    }
  },
})
