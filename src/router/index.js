import { createRouter, createWebHistory } from 'vue-router'
const Accueil = () => import('../components/Accueil.vue')
const Constat = () => import('../components/Constat.vue')
const Solutions = () => import('../components/Solutions.vue')
const Projets = () => import('../components/Projets.vue')
const Partenaire = () => import('../components/Partenaire.vue')
const Equipe = () => import('../components/Equipe.vue')
const Contact = () => import('../components/Contact.vue')
const Etdemain = () => import('../components/Etdemain.vue')
const MentionsLegales = () => import('../components/MentionsLegales.vue')
const NotFound = () => import('../components/NotFound.vue')
import gsap from 'gsap'  // ✅ Assure-toi d'avoir bien installé GSAP

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/constat', name: 'Constat', component: Constat },
  { path: '/solutions', name: 'Solutions', component: Solutions },
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/partenaires', name: 'Partenaires', component: Partenaire },
  { path: '/equipe', name: 'Equipe', component: Equipe },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/etdemain', name: 'Demain', component: Etdemain },
  { path: '/mentions-legales', name: 'Mentions Legales', component: MentionsLegales },
  { path: '/Constat', redirect: '/constat' },
  { path: '/Solutions', redirect: '/solutions' },
  { path: '/Projets', redirect: '/projets' },
  { path: '/Partenaires', redirect: '/partenaires' },
  { path: '/EtDemain', redirect: '/etdemain' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
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
