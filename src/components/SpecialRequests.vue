<template>
    <div>
     <form action="submit">
         <label for="name" :v-model="name">Name</label>
         <input type="text" id="name" name="name">
         <label for="email">Email</label>
         <input type="email" id="email" name="email">
         <label for="ServiceNeeded">Services Needed</label>
         <input type="text" id="services-needs" name="servicesNeeded">
         <label for="phone">Phone Number</label>
         <input type="text" id="phone" name="phone">
         <label for="howcanwehelp">How can we help you</label>
         <input type="text" id="how-can-we-help" name="howCanWeHelp">    
     </form>
    </div>
</template>
<script>
export default {
    name:'specialrequest',
    
}
</script>