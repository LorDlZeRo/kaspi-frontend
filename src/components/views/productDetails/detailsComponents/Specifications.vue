<script>
    export default {
        props: {
            productDetails:Object
        },
        setup(props){

            const productDetails = props.productDetails

            return {
                productDetails
            }
        }
    }
</script>
<template>
    <div class="tabs-content-container" >
        <div class="header-text-container">
            <h1>Характеристики {{ productDetails.name.full }}</h1>
        </div>
        <div class="specifitacion-container">
            <dl 
                class="specifications-list__el"
                v-for="item, key in productDetails.characteristics">
                <dt class="specifications-list__header">
                    <h3>{{ item.name }}</h3> 
                </dt>
                <dd class="specifications-list__specs">
                    <dl 
                        class="specifications-list__spec"
                        v-for="itemSpec in item.specifitacions"
                    >
                        <dt class="specifications-list__spec-term">
                            <span class="text-key">{{ itemSpec['key']}}</span>  
                            <div class="dots"></div>
                        </dt>
                        <dd class="specifications-list__spec-definition">
                            <span>{{itemSpec['value'] }}</span>
                        </dd>
                    </dl>
                </dd>
            </dl>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .header-text-container {
        width: 100%;
    }
    h1, h3 {
        font-weight: 500;
    }
    .specifications-list__el {
        width: 100%;
        display: flex;
    }
    .header-text-container {
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom:  1px solid #e5e5e5;
    }
    .specifications-list__header {
        width: 25%;
        padding: 35px 35px 35px 0;
        border-bottom:  1px solid #e5e5e5;
        margin-right: 35px;
    }
    .specifications-list__specs {
        width: 75%;
        border-bottom:  1px solid #e5e5e5;
        padding-top: 35px;
        padding-bottom: 35px;
    }
    .specifications-list__spec {
        display: flex;
    }
    .specifications-list__spec-term{
        width: 35%;
        display: flex;
    }
    .dots {
        flex-grow: 1;
        height: 14px;
        border-bottom:  1px dotted #ccc;
    }
    .specifications-list__spec-definition {
        width: 65%;
    }
</style>