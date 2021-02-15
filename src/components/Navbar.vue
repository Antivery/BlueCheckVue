<template>
   <nav class="main-navbar navbar navbar-expand-lg navbar-light">
         <router-link class="menu-item" to="/">Home</router-link>
         <router-link class="menu-item" to="">Contact</router-link> 
         <router-link class="menu-item" to="/ServicePage" ><dropdown title="Our Services" :items="ourServices"/></router-link> 
         <router-link class="menu-item" to="">Special Requests</router-link>
         <router-link class="menu-item" to=""><a href="#">Pre-Made Designs</a></router-link>
         <router-link class="menu-item" to="">Our Work</router-link>
         <router-link class="menu-item" to="">Blog</router-link>
         <router-link class="menu-item" to="">Client Portal</router-link>
         <router-link class="menu-item" to="">Class</router-link>
    </nav>
</template>
<script>
    import dropdown from './Dropdown.vue'
    export default {
            name: 'navbar',
            components: {
             dropdown
            },
           props:['to'],
            data () {
                return {
                    ourServices: [ 
                    {
                        title: 'All',
                        path: '/ServicesPage'
                    },
                    {
                        title: 'Logos',
                        path: '#'
                    },
                    {
                        title: 'Social Media',
                        path:'#'
                    },
                    {
                        title: 'Websites',
                        path: '#'
                    },
                    {
                        title: 'Flyers',
                        path:'#'
                    },
                    {
                        title:'Templates',
                        path: '#'
                    },
                    {
                        title:'Packages',
                        path:'#'
                    }     
                    ]
                }
            }    
          }
</script>
<style>
        nav {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          nav .menu-item {
            color: #222;
            padding: 10px 20px;
            position: relative;
            text-align: center;
            border-bottom: 3px solid transparent;
            display: flex;
            transition: 0.4s;
          }
          
</style>