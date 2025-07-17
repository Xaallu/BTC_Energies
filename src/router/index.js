import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import Constat from '../components/Constat.vue'
import Solutions from '../components/Solutions.vue'
import Projets from '../components/Projets.vue'
import Partenaire from '../components/Partenaire.vue'
import Equipe from '../components/Equipe.vue'
import Contact from '../components/Contact.vue'
import Etdemain from '../components/Etdemain.vue'
import MentionsLegales from '../components/MentionsLegales.vue'
import gsap from 'gsap'  // ✅ Assure-toi d'avoir bien installé GSAP

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/constat', name: 'Constat', component: Constat },
  { path: '/Solutions', name: 'Solutions', component: Solutions },
  { path: '/Projets', name: 'Projets', component: Projets },
  { path: '/partenaires', name: 'Partenaires', component: Partenaire },
  { path: '/equipe', name: 'Equipe', component: Equipe },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/EtDemain', name: 'Demain', component: Etdemain },
  { path: '/mentions-legales', name: 'Mentions Legales', component: MentionsLegales },
  {
    path: '/equipe/:slug',
    redirect: to => ({
      path: '/equipe',
      hash: `#${to.params.slug}`
    })
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Si pas de hash, utilise GSAP pour scroll en haut
    return new Promise((resolve) => {
      setTimeout(() => {
        gsap.to([document.documentElement, document.body], {
          scrollTop: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
        resolve()
      }, 100)
    })
  }
})

export default router
