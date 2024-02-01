<script>
import { ref, watchEffect, watch } from 'vue';
import useCategoriesStore from '../../modelView/getCategoriesStore'

    export default {
        props: {
            elementParentId:String,
        },
        setup(props) {
            const elementParentId = props.elementParentId
            const categoriesStore = useCategoriesStore()
            const breadcrumbsResult = ref([])
    
            const getBreadcrumbs = async  (elementParentId, newBreadcrumbs = []) => {
                    if (elementParentId) {
                        const breadcrumb = categoriesStore.clonedCategories.filter(elem => elem._id == elementParentId);
                        newBreadcrumbs.push(breadcrumb[0]);
                        if (breadcrumb.length > 0) await getBreadcrumbs(breadcrumb[0].parent_id, newBreadcrumbs);
                    }
                    return newBreadcrumbs.reverse();
                }

            watchEffect(async () => breadcrumbsResult.value = await getBreadcrumbs(elementParentId))
               
                
   
            return {
                breadcrumbsResult
            }
        }
    }
</script>

<template>
    <section class="breadcrumbs">
        <router-link :to="`/`">
            <span class="text">Kaspi магазин</span>
        </router-link>
        <span class="text" 
            
            v-for="item in breadcrumbsResult">
            <span class="arrow">→</span>
            <span v-if="item && item.name">{{ item.name }}</span>
        </span>
    </section>
</template>

<style lang="scss" scoped>
 .breadcrumbs {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

 }

 .text {
    margin-right: 5px;
    color: #0089d0;
 }
 .text:hover {
    text-decoration: underline;
 }

</style>