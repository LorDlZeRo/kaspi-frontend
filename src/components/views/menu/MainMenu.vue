<script>
import { ref, watch } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import Spinner from '../spinner/Spinner.vue'

export default {
    components: {
        Spinner
    },
    setup() {

        const menu = ref(useCategoriesStore())

        const menuHandler = (event) => {

            menu.value.openMenu()
            menu.value.showNestedMenuHandler(event)
            
        }

        return { menu, menuHandler }
    }
}
</script>
<template>
    <section class="main-menu-section">
        <div class="main-menu">
            <Spinner v-if="menu.mainCategories.length == 0" />
            <ul v-if="menu.mainCategories.length > 0" class="main-menu-list" >
                <li>
                    <router-link to="/get/products/?page=1" class="menu-span-text">
                        <span> все категорий </span>
                    </router-link>
                </li>
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
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
    @import url(./MainMenu.scss);
</style>