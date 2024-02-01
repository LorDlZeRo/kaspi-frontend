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
    <div class="description"
    >
        <pre>{{ productDetails.description.full}}</pre> 
    </div>
</template>
<style lang="scss" scoped>
.description {
    width: 100%;
    padding: 30px 40px;
}
pre {
    font-family: "Roboto",Helvetica,Arial,sans-serif;
    letter-spacing: normal;
    line-height: 1.2;
    white-space: pre-wrap
}
</style>