<script>
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
    props: {
        paginationNumbers: Array | Number,
        amountPaginationPages: Number,
        currentPage: Number,
    },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        
        const paginationNumbers = ref(props.paginationNumbers) 
        const amountPaginationPages = ref(props.amountPaginationPages)
        const currentPage = ref(props.currentPage)


        const nextPage = () => {
            let URL
            let queryPage = currentPage.value
            queryPage++
           
            if (queryPage > amountPaginationPages.value) {
                queryPage = amountPaginationPages.value
            }
            URL = route.fullPath.slice(0, -1) + queryPage
            router.push(URL);
        }
        const chosenPage = (number) => {
            let URL
            URL = route.fullPath.slice(0, -1) + number
            router.push(URL)
        }
        const prevPage = () => {
            let URL
            let queryPage = currentPage.value
                queryPage--
        
            if (queryPage < 1) return queryPage = 1

            URL = route.fullPath.slice(0, -1) + queryPage
            router.push(URL);
        }
        
        return {
            nextPage, chosenPage, prevPage,
            paginationNumbers, amountPaginationPages, currentPage
        }
    }
}
</script>
<template>
    <ul class="pagination">
        <li class="pagination__el"
            :class="{'_disabled': currentPage <= 1}"
            @click="prevPage"
            >← Предыдущая
        </li>

        <li class="pagination__el"
            v-for="item in paginationNumbers"
            :class="{ '_active': item === currentPage }"
            @click="chosenPage(item)"          
        >
            {{ item }}
        </li>

        <li class="pagination__el" 
            :class="{'_disabled': currentPage == amountPaginationPages}"
            @click="nextPage"
        >
            Следующая →
        </li>
    </ul>
</template>
<style lang="scss" scoped>
    .pagination {
        max-width: 720px;
        margin-top: 21px; 
        display: flex;
        margin-bottom: 50px; 
    }

    .pagination__el {
        display: block;
        float: left;
        padding: 7px 21px;
        cursor: pointer;
        color: #0089d0;
        border: 1px solid transparent;
        border-left-color: #dcdcdc;
    }

    .pagination__el:last-child {
        border-right: 1px solid #dcdcdc;
    }

    .pagination__el:not(._disabled):hover {
        background: #e6e6e6;
        border-radius: 2px;
        border-color: #dcdcdc!important;
        color: #000;
    }

    ._active{
        background: #e6e6e6;
        border-radius: 2px;
        border-color: #dcdcdc!important;
        color: #000;
    }

    ._disabled {
        color: #dcdcdc;
        cursor: default;
    }
</style>