<script>
import { ref, watch, watchEffect } from 'vue'
    export default {
                props: {
                    price:Number,
                    size: {
                        type: String,
                        default: 'medium' 
                    },
                },
                setup (props) {
                    const price = ref(props.price)
                    const size = ref(props.size)
                    
                    watch(() => props.price, (newVal) => price.value = newVal);

                    return {
                        size, price
                    }
                }
            }
</script>
<template>
    <div class="item-card-prices">
        <div class="item-card__debet">
            <span class="item-card__prices-title">Цена</span>
            <span class="item-card__prices-price"> {{ price }}₸</span>
        </div>
        <div class="item-card__instalment">
            <div class="item-card__prices-title">В рассрочку</div>
            <div class="item-card__prices-price-2">
                {{ Math.ceil(price/12) }}₸
            </div> 
            <span class="item-card__add-info" >x24</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .item-card-prices {
        width: 100%;
        display: flex;
    }


    .item-card__debet {
        padding-right: 9px;
        border-right: 1px solid #e5e5e5;
        min-height: 42px;
    }

    .item-card__instalment {
        margin-left: 10px;
        white-space: nowrap;
        min-height: 42px 
    }

    .item-card__prices-title {
        display: block;
        color: #999;
        margin-bottom: 4px;
        min-height: 21px;
    }

    .item-card__prices-price {
        font-size: 17px;
        white-space: nowrap;
        font-family: "Roboto",Helvetica,Arial,sans-serif;
        font-weight: 500;
        letter-spacing: -.02em; 
    }
    .item-card__prices-price-2 {
        display: inline-block;
        background: #ffd300;
        font-family: "Roboto",Helvetica,Arial,sans-serif;
        font-weight: 500;
        font-size: 14px;
        padding: 2px 3px;
    }

    .item-card__add-info {
        display: inline-block;
        color: #999;
        font-size: 13px;
        letter-spacing: -.05em;
        margin-left: 5px;
    }
</style>