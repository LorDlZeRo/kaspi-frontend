<script>
import { ref, onBeforeMount } from 'vue';
import useProductsStore from '../../modelView/getProductsStore';
import Gallery from '../gallery/Gallery.vue';
import SliderVue from '../slider/Slider.vue';
import Rating from '../rating/Rating.vue';
import Prices from '../prices/Prices.vue';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs.vue';
import Line from '../line/Line.vue';
import Specifications from './detailsComponents/Specifications.vue';
import Description from './detailsComponents/Description.vue';
import ShorSpecification from './detailsComponents/ShorSpecification.vue';
import Button from '../button/Button.vue';

    export default {
        components: {
            Gallery,
            SliderVue,
            Breadcrumbs,
            Rating,
            Prices,
            Line,
            Specifications,
            Description,
            ShorSpecification,
            Button
        },
        
        setup() {

            const productStore = ref(useProductsStore())
            const productDetails = productStore.value.productDetails
            const activeMenu = ref(1)
            
            onBeforeMount(async () => {
                await productStore.value.getProductDetails()
                productDetails.value = productStore.value.productDetails

            })

            return {
                productDetails, activeMenu
            }
        }
    }
</script>

<template>
    <section class="procut-details">
        <div class="breadcrumbs">
            <Breadcrumbs :elementParentId="productDetails.category_id" />
        </div>
        <div class="item__inner">
            <div class="item__inner-left">

                <Gallery :photos="productDetails.photo" />
  
            </div>  
            <div class="item__inner-right">
                <div class="info-main-container">
                    <div class="info-container-top">
                        <h1 class="head-text">{{ productDetails.name.full }}</h1>
                        <Rating size="medium"/>
                    </div>
                    <div class="info-container-middle">
                        <Prices :price="productDetails.price" />
                        <div class="button-wrapper">
                            <Button>Открыть в приложении Kaspi.kz</Button>
                        </div>
                    </div>
                    <div class="info-container-bottom">
                        <ShorSpecification :productDetails="productDetails" />
                    </div>
                </div>
            </div>
        </div>
        <ul class="tabs-content-menu">
            <li class="tabs-content-menu-list"
                :class="{'_active': activeMenu === 1}"
                @click="activeMenu = 1"
            > 
                Характеристики 
            </li>
            <li class="tabs-content-menu-list"
                :class="{'_active': activeMenu === 2}"
                @click="activeMenu = 2"
            > 
                Описание 
            </li>
        </ul>
        <div class="tabs-content">
            <Specifications
                v-if="activeMenu == 1" 
                :productDetails="productDetails" 
            />
            <Description
                v-if="activeMenu == 2" 
                :productDetails="productDetails" 
            />  
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import url(./prodectDetails.scss);
    
</style>