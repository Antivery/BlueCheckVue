import services from '@/components/Services.vue';

<template>
<div class="row">
    <div :v-for="service in services">
  <div :v-if="service = logoServices || websiteSevices || Socialmedia" >
    <img v-bind:src="service.thumbnailImage" />
    <div>
       {{service.serviceName}} 
    </div>
    <p>
        {{service.description}}
    </p>
    <span>{{service.price}}</span>
    </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'services',
        props: {
            value: Number,
            prefix:{
                type: String,
                default:'$'
            }
            }
    }
</script>



