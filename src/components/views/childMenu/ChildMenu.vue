<script>
import { ref, computed } from 'vue';
import useCategoriesStore from '../../modelView/getCategoriesStore';
import SecondChildMenu from './secondChildMenu/SecondChildMenu.vue';
import { divideArrayToColumn } from '../../modelView/helpers/categoriesHelper';
import { useRouter } from 'vue-router';

export default {

    components: {
        SecondChildMenu
    },

    setup() {
        const router = useRouter()
        const categoriesStore = ref(useCategoriesStore()) 
        const childMenu = computed(() => categoriesStore.value.childCategories)
        const categoriesName = computed(() => categoriesStore.value.nameChildCategories.name)
        const menuDividedToColumn2 = computed(()=> divideArrayToColumn(categoriesStore.value.childCategories, 4))
        const closeMenu = categoriesStore.value.closeMenu

    return { childMenu, categoriesName, menuDividedToColumn2, closeMenu }
    }
}
</script>

<template>
    <section class="child-menu-section" @mouseleave="closeMenu" >
        <div class="childMenu">
            <h3 class="child-menu-h-text"> {{categoriesName}} </h3>

            <div class="columns-container">
                <ul 
                    v-for="(column, columnIndex) in menuDividedToColumn2" 
                    :key="columnIndex"
                    class="column"
                  
                >
                    <li
                        v-for="(item, index) in column" 
                        :key="index"
                        class="column-li"
                    > 
                    <router-link :to="`/get/products/?id=${item._id}&page=1`">
                        <span @click="closeMenu" class="child-menu-text"> {{column ? item.name: null }} </span> 
                    </router-link>
                        <SecondChildMenu :id="item._id" :parentIndex="index" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .child-menu-section {
        width: 100%;
        background-color: rgb(251, 251, 251);
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        z-index: 1; 
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .childMenu {
        width: 920px;
        
    }
    .column-li {
        border-right: 1px solid #e5e5e5;
        margin: 20px;
    }
    .columns-container {
        width: 100%;
        display: flex;
    }
    
    .child-menu-h-text {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 500;
        margin-top: 30px;
        font-size: 30px;
        cursor: default;
    }
    .child-menu-text {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 500;
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        line-height: 1.2;
        text-transform: uppercase;
        cursor: pointer;
    }
    .child-menu-text:hover {
        text-decoration: underline;
    }

</style>