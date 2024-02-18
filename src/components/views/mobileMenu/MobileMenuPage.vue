<script>
import { ref } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import { useRouter } from 'vue-router';
import MobileMenu from './MobileMenu.vue';
    export default {
        components:{
            MobileMenu
        },
        props: {

        },
        setup() {
            const router = useRouter();
            const isChildMenuOpen = ref(false)

            const menu = ref(useCategoriesStore())
            const toggleMenu = () => {
                isChildMenuOpen.value = !isChildMenuOpen.value
            }
            
            const goTo = () => router.push('/get/products/?page=1')

            return { menu, toggleMenu, goTo, isChildMenuOpen }
        }
    }
</script>
<template>
    <div class="main-mobile-buttons-wrapper">
        <ul class="main-mobile-buttons"> 
            <li @click="toggleMenu">  <span>{{ isChildMenuOpen ? 'Закрыть меню' : 'Открыть меню' }}</span> </li>
            <li @click="goTo" > Все продукты </li>
        </ul>
        <MobileMenu 
            :isChildMenuOpen="isChildMenuOpen" 
            :toggleMenu="toggleMenu" 
            :categories="menu.clonedCategories" 
        /> 

        
    </div>
   
</template>
<style lang="scss" scoped>
    $menu-input-height: 65px;
    .main-menu {
        z-index: 1;
        position: absolute;
        transition: transform 0.5s ease; 
        transform: translateX(-100%);
        display: flex;
    }
    .main-menu-list>li {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: $menu-input-height;
        background-color: #ffffff;
        padding: 0 20px;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
    }
    .main-menu-list>li:focus {
        background-color: rgb(247, 247, 247);
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
    .list-text {
        flex-grow: 1; 
        text-align: center; 
    }
    .mobile-child-menu-wrapper {
        width: 100%; 
        height: 500px;
        overflow: auto;
    }
</style>