<script lang="ts">
import MainHeader from './header/MainHeader.vue'
import MainMenuVue from './menu/MainMenu.vue'
import SearchBarSectionVue from './searchBarSection/SearchBarSection.vue'
import useCategoriesStore from '../modelView/getCategoriesStore'
import {ref, onMounted } from 'vue'
import ChildMenu from './childMenu/ChildMenu.vue'
import Button from './button/Button.vue'
import Footer from './footer/Footer.vue'
import Spinner from './spinner/Spinner.vue'

    export default {
        components: {
            MainHeader,
            MainMenuVue,
            SearchBarSectionVue,
            ChildMenu,
            Button,
            Footer,
            Spinner,
        },

        setup() {

            const categories = ref(useCategoriesStore())
            onMounted(() => categories.value.getCategoris())
            
            return {
                categories
            }
            
        }
    }
</script>


<template>
    <MainHeader />
    <div class="" v-if="!categories.mainCategories">
        <Spinner size="100px"/>
    </div>
    <div v-if="categories.mainCategories">
        <SearchBarSectionVue />
        <MainMenuVue />
        <ChildMenu v-if="categories.initialState" />
        <RouterView />
        <Footer />
    </div>
</template>
<style  lang="scss" scoped>
    .spinner-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
