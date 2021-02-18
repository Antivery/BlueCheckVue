<template>
    <div>
           <h1>SPECIAL REQUESTS</h1>
        <div>Need a service that's not listed on our menus?</div>
        <div>Submit a special request and we'll send you a quote within 2 business days.</div>
        <span></span>
        <div>
            <h2>EXAMPLES:</h2>
            <span>Search Engine Optimization</span>
            <span>Website Management</span>
            <span>Mobile App Development</span>
            <span>Website Maintenance</span>
            
        </div>
        <div>
          <specialrequest/>
            
        </div>
    </div>
</template>
<script>

import specialrequest from '@/components/SpecialRequests.vue'
export default {
    name:'specialrequestpage',
      components: {
             specialrequest
            },
}
</script>