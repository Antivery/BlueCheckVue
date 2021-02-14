<template>
    <div class="menu-item" @mouseenter="isOpen = true" @mouseleave="isOpen = false"
    >
            {{ title }}
        <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
            <div v-for="(item, i) in items" :key="i"  class="menu-item">
            <router-link :to="item.path"> {{item.title}}</router-link>
        </div>
        </div>
        </transition>
    </div>
</template>
<script> 
    export default{
        name: 'dropdown',
        props: ['title', 'items'],
        data () {
            return {
              isOpen: false
    }
}
    }
</script>
<style>
    nav .menu-item svg {
      width: 10px;
      margin-left: 10px;
      ;
          }
    nav .menu-item .sub-menu {
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      background-color: white;
    }
</style>