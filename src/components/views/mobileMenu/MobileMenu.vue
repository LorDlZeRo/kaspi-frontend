<script>
import { ref, computed } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import MobileChildMenu from './MobileChildMenu.vue'

    export default {
        components: {
            MobileChildMenu
        },
        setup() {
            const menu = ref(useCategoriesStore())
            const menuIsOpen = computed(()=> menu.value.mobileMenuInitialState) 
            const toggleMenu = () => menu.value.mobileMenuInitialState = !menuIsOpen.value

            const menuHandler = (event) => {

                menu.value.openMenu()
                menu.value.showNestedMenuHandler(event)
                
            }

            return { menu, menuHandler, toggleMenu, menuIsOpen }
        }
    }
</script>
<template>
    <button class="button" @click="toggleMenu">Open</button>
    <div class="main-menu" :class="menuIsOpen && 'show'">
        <ul class="main-menu-list" >
            <li v-for="item in menu.mainCategories" 
                :key="item._id"
                :id="item._id"
                @click="menuHandler($event)"
            >
                <span class="menu-span-text" > 
                    {{item.name}}
                </span>
            </li>
        </ul>
        <div class="mobile-menu-wrapper">
            <MobileChildMenu />
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
    .main-menu {
        width: 80%;
        background-color: cadetblue;
        z-index: 1;
        position: absolute;
        transition: transform 0.5s ease; 
        transform: translateX(-100%);
        display: flex;
    }
    .mobile-menu-wrapper{
      
    }
    .button {
        margin-left: 15%;
    }
    .show {
    transform: translateX(0); 
    }
</style>