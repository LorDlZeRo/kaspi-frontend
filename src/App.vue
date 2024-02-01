<script>
import HomeViews from './components/views/HomeView.vue';
import Footer from './components/views/footer/Footer.vue';

    export default {
        components: {
            HomeViews,
            Footer,
},

        
    }

    
</script>

<template>
        <HomeViews /> 
        <RouterView />
        <Footer />
</template>

<style lang="scss">
@import url(./assets/App.scss);
</style>
