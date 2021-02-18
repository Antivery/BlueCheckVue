<template>
<div class="row" >
    <span><h1>Design Services</h1></span>
    <div>We'll email you instructions after payment.</div>
    <div>PAYMENT REQUIRED UPFRONT</div> 
    <div>SELECT A SERVICE for more details regarding turnaround time, the design process, etc.</div>
    <div>     
         <button v-on:click="filterKey = 'all'" :class="{ active: filterKey == 'all' }">All</button>
    <button v-on:click="filterKey = 'logo'" :class="{active: filterKey == 'logo'}">logo</button>
    <services :items="service"/>
    </div>
<div>
</div>

</div>
</template>

<script>
import logoService from '@/assets/multimedia/images/logoservice.png'
import services from '@/components/Services.vue';
    export default{
        name:'servicespage',
        components:{
           services,  
        },
        
        data() {
            return {
                filterKey: 'all',
                service:[
                        {
                        id:"1",
                        serviceName:"Cartoon Logo",
                        thumbnailImage:logoService,
                        description: "waht up doe",
                        price:"$200.00",
                        category:"logo"      
                        },

                            {
                        id:"2",
                        serviceName:"Premium Logo",
                        thumbnailImage:"",
                        price:"$150.00",
                        category:"logo"          
                            },

                             {
                        id:"3",
                        serviceName:"Texted-Based Logo",
                        thumbnailImage:"",
                        price:"$85.00",
                        category:"logo"          
                            },
                     {
                        id:"4",
                        serviceName:"Insta Highlight Icon Templates",
                        discription:"",
                        thumbnailImage:"",
                        price:"$50.00",
                        category:"flyers"
                    },
                    {
                        id:"5",
                        serviceName:"FIVE (5) Flyer Templates",
                        discription:"",
                        thumbnailImage:"",
                        price:"$50.00"
                    },
                    {
                        id:"6",
                        serviceName:"FIVE (5) Story Templates",
                        discription:"",
                        thumbnailImage:"",
                        price:"$50.00"
                    },
                     {
                        id:"7",
                        serviceName:"SOCIAL MEDIA GLOW UP",
                        discription:"git your glow up ",
                        thumbnailImage:"",
                        price:"$165.00"
                    },
                    
                ],
                 computed:{
                    
                    serviceFilter(){
                        return this[this.serviceFilter]
                    },
                    all(){
                        return this.services
                    },
                    logo(){
                        return this.service.filter((service) => service.category <= this.logo)
                    }      
                        
                        
                    }
                
                }
               
                }
                     
            }
            
            
            
    
        
</script>