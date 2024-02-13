<script>
import { ref, computed, watch } from 'vue';
import MobileSecondChildMenu from './MobileSecondChildMenu.vue'
import useCategoriesStore from '../../modelView/getCategoriesStore';

export default {

    components: {
        MobileSecondChildMenu,
    },

    setup() {
        const isOpenedChildMenu = ref({
            isOpened: false,
            _id: null
        })
        const categoriesStore = ref(useCategoriesStore()) 
        const childCategories = computed(() => categoriesStore.value.childCategories && categoriesStore.value.childCategories.reverse())
        const menuIsOpen = computed(()=> categoriesStore.value.mobileMenuInitialState) 

        const handler = (event) => {
            isOpenedChildMenu.value.isOpened = true
            isOpenedChildMenu.value._id = event.currentTarget.id

        }

    return { childCategories, isOpenedChildMenu, handler, menuIsOpen }
    }
}
</script>

<template>

 
    <ul class="menu-list" v-if="!isOpenedChildMenu.isOpened && menuIsOpen">
        <li v-for="(item, index) in childCategories" 
            :key="item._id"
            :id="item._id"
            @click="handler"
        >   <div class="list-text-wrapper">
                <span class="list-text" > 
                    {{item.name}}
                </span>
            </div>
            
        </li>
    </ul>
    <MobileSecondChildMenu  v-if="isOpenedChildMenu.isOpened && menuIsOpen" :id="isOpenedChildMenu._id" @click="() =>isOpenedChildMenu.isOpened "  />
</template>

<style lang="scss" scoped>
    .menu-list {
        width: 100%;
    }
    .list-text-wrapper {
        width: 100vw;
        height: 50px;
        border-top: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        background-color: rgb(255, 255, 255);
    }
    .list-text {
        flex-grow: 1; 
        text-align: center; 
    }
    .menu-list>li:last-child {
        border-bottom: 1px solid #e5e5e5;
    }   
    
</style>