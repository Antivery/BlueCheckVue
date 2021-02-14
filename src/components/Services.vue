
<template>
<div class="row">
    <div v-for="(item,i) in services" :key="i">
    <img > {{item.thumbnailImage}}
    <h2>
       {{item.serviceName}} 
    </h2>
    <p>
        {{item.description}}
    </p>
    <price value="">{{item.price}}</price>
    </div>
</div>
</template>
<script>

import Price from "./Price.vue"
    export default {
    
        name: 'services',
        components:{
                Price
        } ,
        props: {
            value: Number,
            prefix:{
                type: String,
                default:'$'
            }
            
            },
            
        data(){
            return{
                
            }
            
        }
        

    }
</script>



