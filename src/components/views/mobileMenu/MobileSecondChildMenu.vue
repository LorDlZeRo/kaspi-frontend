<script>
import { computed, ref, toRefs, watch } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'
import { useRouter } from 'vue-router';
    export default {
        props: {
            id:String,
            parentIndex:Number,
        },
        setup(props) {
                const router = useRouter();
                const { id } = toRefs(props)
                const categoriesStore = ref(useCategoriesStore())
                const toggleMenu = (id) => {
                    categoriesStore.value.mobileMenuInitialState = !categoriesStore.value.mobileMenuInitialState
                    router.push(`/get/products/?id=${id}&page=1`)
                }
                const categories = categoriesStore.value.clonedCategories
                const getChildCategoriesById = categoriesStore.value.getChildCategoriesByParentId
                const secondChildCategories = computed(()=>  getChildCategoriesById(categories, props.id))

            return {
                id,
                secondChildCategories,
                toggleMenu
            }
        },        
    }

</script>
<template>
    <ul class="second-child-menu">
        <li v-for="(item, itemIndex) in secondChildCategories" :key="itemIndex" class="second-child-menu-list">
            <span @click="toggleMenu(item._id)" class="list-text">{{ item.name }} </span>
        </li>
    </ul>
</template>

 <style lang="scss" scoped>
    .second-child-menu {
        width: 100%;
        background-color: rgb(255, 255, 255);
    }
    .second-child-menu > li {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        border-right:1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        border-top: 1px solid #e5e5e5;
        background-color: rgb(255, 255, 255);
    }
    .second-child-menu > li:active {
        border-top: 2px solid black;
    }
    .second-child-menu > li:last-child {
        border-bottom: 1px solid #e5e5e5;
    }
</style>