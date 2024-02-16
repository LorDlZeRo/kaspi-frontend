<script>
import { toRefs, ref, computed } from 'vue'
import { useRouter } from 'vue-router';
    export default {
        props: {
            isChildMenuOpen: Boolean,
            toggleMenu: Function,
            categories: Array,
        },
        setup(props) {
            const router = useRouter();
            const {isChildMenuOpen, categories, toggleMenu} = toRefs(props)
            const categoriesId = ref(0)
            const filterCategories = (categories, id) => categories.filter(elem => elem.parent_id == id)
            const goTo = (id) => router.push({ path: '/get/products', query: { id: id, page: 1 }});
            const filteredCategories = computed(() => filterCategories(categories.value, categoriesId.value))
            

            const menuHandler = (event) => {
                categoriesId.value = event.currentTarget.id
    
                if (filteredCategories.value.length === 0) {
                    categoriesId.value = 0
                    toggleMenu.value()
                    goTo(event.currentTarget.id)
                }
                
            }

            return {
              isChildMenuOpen, menuHandler, filteredCategories
            }
        }   
    }
</script>
<template>
    <div>
        <div class="main-menu" :class="isChildMenuOpen && 'show'">
            <ul class="main-menu-list" >
                <li v-for="item in filteredCategories" 
                    :key="item._id"
                    :id="item._id"
                    tabindex="0"
                    @click="menuHandler"
                >
                    <span class="list-text" > 
                        {{item.name}}
               
                    </span>
                </li>
            </ul>
        </div>
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
    .main-menu-list>li:last-child {
        border-bottom: 1px solid #e5e5e5;
    }
    .main-menu-list>li:focus {
        background-color: rgb(247, 247, 247);
    }
    .show {
        transform: translateX(0); 
    }
    .list-text {
        flex-grow: 1; 
        text-align: center; 
    }
</style>