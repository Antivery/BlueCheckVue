import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import servicespage from '@/views/ServicesPage.vue'
import cartoonLogoPage from '@/views/LogoPage.vue'
import flyers from '@/views/Flyers.vue'
import blog from '@/views/Blog.vue'
import blueChkAcadamy from '@/views/BlueCheckAcadamy.vue'
import socialMedia from '@/views/SocialMediaPage.vue'
import websites from '@/views/websites.vue'
import templates from '@/views/Templates.vue'
import packages from '@/views/PickFive.vue'




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
    },
    {
      path: '/LogoPage',
      name: 'Logo Page',
      component: cartoonLogoPage
    },
    {
      path: '/Flyers',
      name: 'Flyers Page',
      component: flyers
    },
    {
      path: '/Blog',
      name: 'blog Page',
      component: blog
    },
    {
      path: '/BlueCheckAcadamy',
      name: 'BlueCheck Acadamy Page',
      component: blueChkAcadamy
    },
    {
      path: '/SocialMedia',
      name: 'Social Media Page',
      component: socialMedia
    },
    {
      path: '/Websites',
      name: 'Websites Page',
      component: websites
    },
    {
      path: '/Templates',
      name: 'Templates Page',
      component: templates
    },
    {
      path: '/PickFive',
      name: 'Service Package Page',
      component: packages
    },


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



