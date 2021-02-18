import services from '@/components/Services.vue';

<template>
<div class="container">
    <div class="service-comp" v-for="(item,i) in items" :key="i" >
    <img class="img-fluid" :src="item.thumbnailImage" style="height:300px">
    <h2>
       {{item.serviceName}} 
    </h2>
    <p>
        {{item.description}}
    </p>
    <span>{{item.price}}</span>
    </div>
</div>
</template>
<script>
    export default {
        name: 'services',
          props: ['items']
    }
</script>
<style>

</style>




