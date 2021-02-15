<template>
<div class="row" >
    <span><h1>Design Services</h1></span>
<div>
    <div>We'll email you instructions after payment.</div>
    <div>FULL PAYMENT REQUIRED UPFRONT</div>
    <div>SELECT A SERVICE for more details regarding turnaround time, the design process, etc.</div>
    <span></span>
<div>
    
</div>

</div>
</div>
</template>
<script>
import services from '@/components/Services.vue';
    export default{
  
        name:'servicespage',
        components:{
      services,
        },
        data() {
            return {
                service:[
                    {
                        logoServices:[
                            {
                        "id":"1",
                        "serviceName":"Cartoon Logo",
                        "thumbnailImage":"",
                        "description": "",
                        "price":"$200.00"          
                            },
                            {
                        "id":"2",
                        "serviceName":"Premium Logo",
                        "thumbnailImage":"",
                        "price":"$150.00"          
                            },
                             {
                        "id":"3",
                        "serviceName":"Texted-Based Logo",
                        "thumbnailImage":"",
                        "price":"$85.00"          
                            }
                        ]       
                    },
                    {
                        Socialmedia: [
                    {
                        "id":"4",
                        "serviceName":"Insta Highlight Icon Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                    {
                        "id":"5",
                        "serviceName":"FIVE (5) Flyer Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                    {
                        "id":"6",
                        "serviceName":"FIVE (5) Story Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                     {
                        "id":"7",
                        "serviceName":"SOCIAL MEDIA GLOW UP",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$165.00"
                    },
                                 ]
                    },
                      {
                        websiteSevices: [
                    {
                        "id":"4",
                        "serviceName":"Insta Highlight Icon Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                    {
                        "id":"5",
                        "serviceName":"FIVE (5) Flyer Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                    {
                        "id":"7",
                        "serviceName":"FIVE (5) Story Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$50.00"
                    },
                     {
                        "id":"6",
                        "serviceName":"SOCIAL MEDIA GLOW UP",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":"$165.00"
                    },
                                 ]
                    },
                    
                    {
                        "id":"3",
                        "serviceName":"Flyers",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
                    },
                    {
                        "id":"4",
                        "serviceName":"Flyers",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
                    },
                     {
                        "id":"5",
                        "serviceName":"Templates",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
                    },
                       {
                        "id":"6",
                        "serviceName":"Packages",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
                    },
                ],
                preMade:[
                    {

                    },
                    {

                    },
                    {

                    },
                    {

                    },
                    {

                    },
                ]
                
                
            }
        }
    }
</script>