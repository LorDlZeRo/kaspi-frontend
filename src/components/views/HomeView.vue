<script lang="ts">
import MainHeader from './header/MainHeader.vue'
import MainMenuVue from './menu/MainMenu.vue'
import SearchBarSectionVue from './searchBarSection/SearchBarSection.vue'
import useCategoriesStore from '../modelView/getCategoriesStore'
import {ref, onMounted, handleError} from 'vue'
import ChildMenu from './childMenu/ChildMenu.vue'
import Button from './button/Button.vue'

    export default {
        components: {
            MainHeader,
            MainMenuVue,
            SearchBarSectionVue,
            ChildMenu,
            Button,
        },

        setup() {
            
            const categories = ref(useCategoriesStore())
            onMounted(() => categories.value.getCategoris())
            const f1 = () => console.log('!!!')
            
            return {
                categories, f1
            }
            
        }
    }
</script>


<template>
    <div class="main-div">
        <MainHeader />
        <SearchBarSectionVue />
        <MainMenuVue />
        <ChildMenu v-if="categories.initialState" />
    </div>
</template>

<style lang="scss" scoped>
    
</style>