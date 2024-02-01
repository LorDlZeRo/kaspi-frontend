<script>
    export default {
        props: {
            handler:Function,
            color:{
                type: String,
                default: 'red',
            }
        },
        setup(props) {
            const handler = props.handler
            const colorName = props.color
            return {
                handler, colorName
            }
        }
    }
</script>
<template>
    <button :class="`button-${colorName}`" @click="handler">
        <slot>
            Название кнопки
        </slot>
    </button>
</template>
<style lang="scss" scoped>
    .button-red {
        width: 100%;
        background: #f14635;
        color: #fff;
        border: 1px solid #f14635;
        height: 35px;
        padding: 7px 21px;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
    }

    .button-blue {
        width: 100%;
        background: #1398db;
        color: #fff;
        border: 1px solid #1398db;
        height: 35px;
        padding: 7px 21px;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
    }

    .button-blue:hover {
        background: #0089d0;
        border: 1px solid #0089d0;
    }
</style>