<script>
import { ref, computed, watch } from 'vue';
import MobileSecondChildMenu from './MobileSecondChildMenu.vue'
import useCategoriesStore from '../../modelView/getCategoriesStore';

export default {

    components: {
        MobileSecondChildMenu,
    },

    setup() {

        const categoriesStore = ref(useCategoriesStore()) 
        const childCategories = computed(() => categoriesStore.value.childCategories)
        const closeMenu = categoriesStore.value.closeMenu

    return { childCategories }
    }
}
</script>

<template>

 
    <ul class="main-menu-list" >
        <li v-for="(item, index) in childCategories" 
            :key="item._id"
            :id="item._id"
            
        >
            <span class="menu-span-text" > 
                {{item.name}}
            </span>
            <MobileSecondChildMenu :id="item._id" :key="index" />
        </li>
    </ul>
    
</template>

<style lang="scss" scoped>
    

</style>