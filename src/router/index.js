import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import Constat from '../components/Constat.vue'
import Solutions from '../components/Solutions.vue'
import Partenaire from '../components/Partenaire.vue'
import Equipe from '../components/Equipe.vue'
import Contact from '../components/Contact.vue'
import Etdemain from '../components/Etdemain.vue'
import MentionsLegales from '../components/MentionsLegales.vue'


const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/constat', name: 'Constat', component: Constat },
  { path: '/Solutions', name: 'Solutions', component: Solutions },
  { path: '/partenaires', name: 'Partenaires', component: Partenaire },
  { path: '/equipe', name: 'Equipe', component: Equipe },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/EtDemain', name: 'Demain', component: Etdemain },
  { path: '/mentions-legales', name: 'Mentions Legales', component: MentionsLegales },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // ← nouveau
  routes
})

export default router
