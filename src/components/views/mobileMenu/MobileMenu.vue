<script>
import { ref, computed } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import MobileChildMenu from './MobileChildMenu.vue'
import { useRouter } from 'vue-router';

    export default {
        components: {
            MobileChildMenu
        },
        setup() {
            const router = useRouter();
            const menu = ref(useCategoriesStore())
            const menuIsOpen = computed(()=> menu.value.mobileMenuInitialState) 
            const toggleMenu = () => menu.value.mobileMenuInitialState = !menuIsOpen.value

            const goTo = () => router.push('/get/products/?page=1')
            const menuHandler = (event) => {

                menu.value.openMenu()
                menu.value.showNestedMenuHandler(event)
  
            }

            return { menu, menuHandler, toggleMenu, menuIsOpen, goTo }
        }
    }
</script>
<template>
    <div class="main-mobile-buttons-wrapper">
        <ul class="main-mobile-buttons"> 
            <li @click="toggleMenu">  <span>{{ menuIsOpen ? 'Закрыть меню' : 'Открыть меню' }}</span> </li>
            <li @click="goTo" > Все продукты </li>
        </ul>
    </div>
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
    $menu-input-height: 65px;
    .main-menu {
        width: 100%;
        background-color: cadetblue;
        z-index: 1;
        position: absolute;
        transition: transform 0.5s ease; 
        transform: translateX(-100%);
        display: flex;
    }
    .main-menu-list>li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: $menu-input-height;
        background-color: burlywood;
    }
    .button {
        margin-left: 15%;
    }
    .show {
        transform: translateX(0); 
    }
    .main-mobile-buttons-wrapper {
        width: 100%;
    }
    .main-mobile-buttons {
        margin: 0 auto;
        width: 400px;
        display: flex;
        margin-bottom: 15px;
    }
    .main-mobile-buttons > li {
        display: flex;
        justify-content: center;
        align-items: center;
  
        width: 100%;
        height: $menu-input-height;
        border-left: 1px solid #e5e5e5;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }
    .main-mobile-buttons > li:last-child {
        border-right: 1px solid #e5e5e5;
    }
    .main-mobile-buttons > li:active {
        border-top: 2px solid #000000;;
    }
</style>