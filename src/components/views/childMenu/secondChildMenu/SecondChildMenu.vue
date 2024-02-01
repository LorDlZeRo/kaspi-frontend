<script>
import useCategoriesStore from '../../../modelView/getCategoriesStore'
import { ref, toRefs, computed } from 'vue'
import { divideArrayToColumn } from '../../../modelView/helpers/categoriesHelper'

    export default {
        props: {
            id:String,
            parentIndex:Number,
        },
        setup(props) {
     
                const { id } = toRefs(props)
                const childMenuCategories = ref(useCategoriesStore())
   
                const categories = childMenuCategories.value.clonedCategories
                const getChildCategoriesById = childMenuCategories.value.getChildCategoriesByParentId
                const childMenuCategoriesElements = computed(() => getChildCategoriesById(categories, props.id))
                const menuDividedToColumn = computed(() => divideArrayToColumn(childMenuCategoriesElements.value, 6))
                const closeMenu = childMenuCategories.value.closeMenu

     
      

            return {
                id,
                childMenuCategories,
                childMenuCategoriesElements,
                menuDividedToColumn,
                closeMenu,
            }
        },        
    }

</script>
<template>
        <div class="columns-container">
            <div v-for="(column, columnIndex) in menuDividedToColumn" :key="columnIndex" class="column">
                <ul>
                    <li v-for="(item, itemIndex) in column" :key="itemIndex">
                        <router-link :to="`/get/products/?id=${item._id}&page=1`">
                            <span @click="closeMenu" class="list-text">{{ item.name }} </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
</template>

 <style lang="scss" scoped>
    
    .columns-container {
        display: flex;
       
    }
    .column {
        margin: 3px;
        
    }
    .list-text {
        
        font-family: "Roboto",Helvetica,Arial,sans-serif;
        color: #0089d0;
        font-size: 14px;
        line-height: 1.2; 
        letter-spacing: normal;
        cursor: pointer;
    }
    .list-text:hover {
        text-decoration: underline;
    }

    li {
        width: 150px;
        margin-top: 10px;
    }
</style>