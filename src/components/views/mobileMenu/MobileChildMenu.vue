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

 
    <ul class="menu-list" >
        <li v-for="(item, index) in childCategories" 
            :key="item._id"
            :id="item._id"
            
        >   <div class="list-text-wrapper">
                <span class="list-text" > 
                    <b>{{item.name}}</b>
                </span>
            </div>
            <MobileSecondChildMenu :id="item._id" :key="index" />
        </li>
    </ul>
    
</template>

<style lang="scss" scoped>
    .menu-list {
        width: 100%;
    }
    .list-text-wrapper {
        height: 50px;
        width: 95%;
        border-top: 1px solid #e5e5e5;
        display: flex;

        align-items: center;
        background-color: rgb(255, 255, 255);
    }
    .list-text {
        flex-grow: 1; 
        text-align: center; 
    }

    
</style>