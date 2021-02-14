import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import servicespage from '@/views/ServicesPage.vue'


  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ServicePage',
      name: 'Services Page',
      component: servicespage
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
