<script>
import { computed, ref, toRefs, watch } from 'vue'
import useCategoriesStore from '../../modelView/getCategoriesStore'

    export default {
        props: {
            id:String,
            parentIndex:Number,
        },
        setup(props) {
     
                const { id } = toRefs(props)
                const categoriesStore = ref(useCategoriesStore())
                const toggleMenu = () => categoriesStore.value.mobileMenuInitialState = !categoriesStore.value.mobileMenuInitialState
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
    <ul>
        <li v-for="(item, itemIndex) in secondChildCategories" :key="itemIndex">
            <router-link :to="`/get/products/?id=${item._id}&page=1`">
                <span @click="toggleMenu" class="list-text">{{ item.name }} </span>
            </router-link>
        </li>
    </ul>
</template>

 <style lang="scss" scoped>
    
</style>