<template>
    <div class="carousel slide">
        <div class="carousel-item active">
            <div class="carousel-item" v-for="(item, i) in items" :key="i">
                {{items}}
            </div>
        </div>
    <services></services>
    </div>
</template>
<script>


import services from './Services.vue';
export default {
    name:'serviceslider',
    components: services,
    props: ['services','images', 'discription','price'],
}
</script>