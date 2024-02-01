<script>
import filterByPrice from './filterByPrice.vue'
import { ref } from 'vue';
    export default {
        components: {
            filterByPrice
        },
        setup() {

            const filters = [
                        { minPrice: null, maxPrice: 10000 },
                        { minPrice: 10000, maxPrice: 49999 },
                        { minPrice: 50000, maxPrice: 99999 },
                        { minPrice: 100000, maxPrice: 149999 },
                        { minPrice: 150000, maxPrice: 199999 },
                        { minPrice: 200000, maxPrice: 499999 },
                        { minPrice: 500000, maxPrice: null },
                    ]
            

            return {
                filters
            }
        }
    }
</script>
<template>
    <div class="filters">
        <span>Цена</span>
        <div class="filters__filter-wrapper">
            <filterByPrice
                v-for="(filter, index) in filters"
                :key="index"
                :minPrice="filter.minPrice"
                :maxPrice="filter.maxPrice"
            />
        </div>
    </div>    
</template>
<style lang="scss" scoped>
    .filters {
        margin-top: 50px;
        width: 214px;
    }
</style>