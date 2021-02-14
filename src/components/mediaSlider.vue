<template>
    <div class="carousel slide">
        <div class="carousel-item active">
            <div class="carousel-item" v-for="(item, i) in items" :key="i">
                {{items}}
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'mediaslider',
    components:{

    }
}
</script>