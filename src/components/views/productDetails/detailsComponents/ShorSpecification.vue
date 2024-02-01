<script>
    export default {
        props: {
            productDetails:Object
        },
        setup(props) {
            const productDetails = props.productDetails

            return {
                productDetails
            }
        }
    }
</script>
<template>
    <span v-for="item, key in productDetails.characteristics">
        <ul  v-for="itemSpec in item.specifitacions">
            <li v-if="itemSpec.is_short">
                {{ itemSpec['key'] + ' : ' + itemSpec['value'] }}
            </li>
        </ul>

    </span>
</template>
<style lang="scss" scoped>
    ul > li::marker {
        content: '- ';
    }
</style>