<script>
import { ref } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import { useRouter } from 'vue-router';

export default {

    setup() {

        const menu = ref(useCategoriesStore())
        const router = useRouter()
        const goTo = (url) => {
            menu.value.closeMenu()
            router.push(url)
        }

        const menuHandler = (event) => {

            menu.value.openMenu()
            menu.value.showNestedMenuHandler(event)
            
        }

        return { menu, menuHandler, goTo }
    }
}
</script>
<template>
    <section class="main-menu-section">
        <div class="main-menu">
            <ul class="main-menu-list">
                <li @click="goTo('/get/products/?page=1')">
                        <span class="menu-span-text"> все категорий </span>
                </li>
                <li v-for="item in menu.mainCategories" 
                    :key="item._id"
                    :id="item._id"
                    @mouseover="menuHandler($event)"
                >
                    <span class="menu-span-text" > 
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
    @import url(./MainMenu.scss);
</style>