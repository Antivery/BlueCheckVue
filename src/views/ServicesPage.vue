<template>
<div class="row" >
<div>
<li><services :items="service||preMade"/></li>
</div>
</div>
</template>
<script>
import services from '@/components/Services.vue';
    export default{
  components: services,
        name:'servicespage',
        data() {
            return {
                service:[
                    {
                        "id":"1",
                        "serviceName":"Logos",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
                    },
                    {
                        "id":"2",
                        "serviceName":"Websites",
                        "discription":"",
                        "thumbnailImage":"",
                        "price":""
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