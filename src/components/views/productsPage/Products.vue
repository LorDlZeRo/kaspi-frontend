<script>
import useProductsStore from '../../modelView/getProductsStore'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs.vue'
import Rating from '../rating/Rating.vue'
import Prices from '../prices/Prices.vue'
import Filters from '../filters/Filters.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import Spinner from '../spinner/Spinner.vue'

export default {

    components: {
        Breadcrumbs,
        Rating,
        Prices,
        Filters,
        Spinner,
    },

    setup() {
        const route = useRoute()
        const router = useRouter()

        const productsStore = ref(useProductsStore())
        const currentPageNumber = ref(route.query.page)
        const detailsPage = '/get/product/details'

        const nextPage = () => {
           
            let queryPage = route.query.page
                queryPage++
            const currentQuery = { ...route.query };
            
            currentQuery.page = queryPage
           
            if (queryPage > productsStore.value.amountPaginationPages) {
                queryPage = productsStore.value.amountPaginationPages
            }

            router.push({query: currentQuery});
        }
        const chosenPage = (number) => {
            const currentQuery = { ...route.query };
                  currentQuery.page = number
            router.push({query:currentQuery})
        }
        const prevPage = () => {
            let queryPage = route.query.page
                queryPage--
            const currentQuery = { ...route.query };
                  currentQuery.page = queryPage
            if (queryPage < 1) return queryPage = 1

            router.push({query: currentQuery})
        }
        
        return {
            productsStore, detailsPage,currentPageNumber, prevPage, chosenPage, nextPage, route
        }
    }
}
</script>
<template>
    
    <section class="sign-up-section"  ref="scrollContainer">
        <div class="main-container">
            <div class="left-menu-container">
                <Filters />
            </div>
            
            <div class="right-content-container">
                <div class="breadcrumbs-container">
                    <Breadcrumbs />
                </div>
                <Spinner v-if="!productsStore.allProducts" size="100px" />
                <div class="products-container">
                    <div v-for="(item, index) in productsStore.allProducts" class="product-block" :key="index">
                        <div class="item-card__sticker">
                            <img src="../../../assets/img/icons/l12.svg" class="sticker_icon" >
                            <img src="../../../assets/img/icons/b10.svg" class="sticker_icon" >
                        </div>
                        <div class="image-block">
                            <router-link :to="`${detailsPage}/?id=${item._id}`">
                                <img class="item-card__image" :src="$serverUrl + item.photo"  >
                            </router-link>
                        </div>
                        <div class="product-info-card">
                            <div class="item-card__name">
                                <router-link :to="`${detailsPage}/?id=${item._id}`">
                                    <span class="info-text-name"> {{ item.name.short }} </span>
                                </router-link>
                            </div>
                            <Rating size="small" />
                            <Prices :price="item.price" />
                        </div>
                    </div>
                </div>
                
                <ul class="pagination"  >
                    <div>
                        <li class="pagination__el"
                            :class="{'_disabled': parseInt(route.query.page) <= 1}"
                            @click="prevPage"
                            >← Предыдущая
                        </li>
                    </div>
                    <div>
                        <li class="pagination__el"
                            v-for="item in productsStore.paginationPageNumbers"
                            :class="{ '_active': item === parseInt(route.query.page) }"
                            @click="chosenPage(item)"          
                        >
                            {{ item }}
                        </li>
                    </div>
                    <div>
                        <li class="pagination__el" 
                            :class="{'_disabled': parseInt(route.query.page) == productsStore.amountPaginationPages}"
                            @click="nextPage"
                        >
                            Следующая →
                        </li>
                    </div>
                </ul>
            </div>
        </div>

        
    </section>
</template>

<style lang="scss" scoped>

@import url(./products.scss);
@import url(./pagination.scss);

</style>