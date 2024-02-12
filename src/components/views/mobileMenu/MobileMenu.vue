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
    <ul class="button-menu-list"> 
    <li @click="toggleMenu">  <span>{{ menuIsOpen ? 'Закрыть меню' : 'Открыть меню' }}</span> </li>
   
    <li @click="goTo" > Все продукты </li>
 
    </ul>
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

    .button-menu-list {
    margin: 0 auto;
    max-width: 960px;
    list-style: none;
    display: flex;
    height: $menu-input-height;
    align-items: center;
}

    .button-menu-list > li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        height: $menu-input-height;
        border-top: 2px solid rgb(0, 0, 0, 0);
    }

    .button-menu-list > li:first-child{
        border-left: 1px solid #e5e5e5;
    }

    .button-menu-list > li:hover {
        cursor: pointer;
        background-color: #fff;
        border-top: 2px solid black;
        height: $menu-input-height;
    }
</style>