<template>
<div class="container">
  <div id="app">
      <header>
        <div class="cart-price">
          shopping
        </div>
        <div class="uses">
          user acount
        </div>
        <div class="socailmedia">
          socail media icons
        </div>
        <img src="" alt="">
      <navbar />
    </header>
<body>
 <router-view />
</body>
    </div>
  </div>
  
</template>

<script>
import Home from'@/views/Home.vue'
import navbar from '@/components/Navbar.vue'
export default {
  name: 'MainApp',
  components: {
    navbar,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
