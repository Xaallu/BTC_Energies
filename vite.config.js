import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: '/', 
  plugins: [vue()],
  build: {
    rollupOptions: {
      // ici si besoin tu peux personnaliser
    },
  },
  // hook pour copier le fichier _redirects
  closeBundle() {
    copyFileSync(
      resolve(__dirname, 'public/_redirects'),
      resolve(__dirname, 'dist/_redirects')
    )
  }
})
