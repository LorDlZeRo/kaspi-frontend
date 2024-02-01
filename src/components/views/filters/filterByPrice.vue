<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

    export default {
        props: {
            minPrice:Number,
            maxPrice:Number,
            updateFilter: Function,
        },
        setup(props) {
            const minPrice = ref(props.minPrice)
            const maxPrice = ref(props.maxPrice)
          
            const route = useRoute()
            const router = useRouter()
            
            const isChecked = ref(false)

            const setFilter = () => {
                const currentQuery = { ...route.query };

                if (isChecked.value) {
                    currentQuery.page = 1
                    if (!currentQuery.maxPrice) {
                        currentQuery.maxPrice = maxPrice.value
                    } else 
                    if (currentQuery.maxPrice && currentQuery.maxPrice < maxPrice.value) {
                        currentQuery.maxPrice = maxPrice.value
                    }

                    if (!currentQuery.minPrice) {
                        currentQuery.minPrice = minPrice.value;
                    } else if (currentQuery.minPrice && currentQuery.minPrice > minPrice.value) {
                        currentQuery.minPrice = minPrice.value;
                    }
                } else {
          

                    currentQuery.minPrice = null;
                    currentQuery.maxPrice = null;
                }

                router.push({ query: currentQuery });
                console.log(route.query);
            }
            return {
                minPrice, maxPrice, setFilter, isChecked
            }
        }
    }
</script>
<template>
    <div class="filters__filter-row">
        <input 
            type="checkbox" 
            data-no-validation="data-no-validation" 
            class="form__checkbox _small _check"
            v-model="isChecked"
            @change="setFilter"
        >
        <label for="" class="filters__filter-row__checkbox form__checkbox _small"></label>
        <label for="" class="filters__filter-row__description">
            <span class="filters__filter-row__description-label" v-if="!minPrice && maxPrice">До {{ maxPrice }}т</span>
            <span class="filters__filter-row__description-label" v-if="minPrice && maxPrice">{{ minPrice }} - {{ maxPrice }}т</span>
            <span class="filters__filter-row__description-label" v-if="minPrice && !maxPrice">более {{ minPrice }}т</span>
        </label>
    </div>
</template>
<style lang="scss" scoped>
    .filters__filter-row {
        margin-top: 5px;
    }
    .filters__filter-row__description {
        margin-left: 5px;
    }
</style>