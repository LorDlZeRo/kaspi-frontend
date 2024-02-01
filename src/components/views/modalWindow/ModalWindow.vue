<script>

    export default {
        props: {
            close: Function,
        },
        setup(props) {
            const {close} = props


            const stopPropagation = event => event.stopPropagation();
           
            return {
                close,
                stopPropagation,
            };
        },
};
</script>

<template>
    <section class="modal-window" @click="close">
        
        <div class="modal-window-container" @click="stopPropagation">
            <div class="modal-window-close-btn" @click="close"></div>
            <slot>
                Modal window
            </slot>
            
        </div>
    </section>    
</template>
<style>
    .modal-window {
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0);
        position: absolute;
        position: fixed;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        top:0%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-window-container {
        width: 960px;
        max-width: 100vw;
        max-height: 100vh;
        height: 680px;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items:center;
        padding: 55px 30px;
        position: relative;
    }
    .modal-window-close-btn {
        position: absolute;
        width: 25px;
        height: 24px;
        top: 30px;
        right: 30px;
        background-image: url("../../../assets/img/icons/close.svg");
        background-repeat: no-repeat;
        background-size: contain;
        object-fit: contain;
        cursor: pointer;
    }
    .modal-window-right-btn {
        width: 25px;
        height: 46px;
        transform: rotate(180deg);
        background-image: url("../../../assets/img/icons/sliders-controls.png");
        cursor: pointer;
    }
    .modal-window-left-btn {
        width: 25px;
        height: 46px;
        background-image: url("../../../assets/img/icons/sliders-controls.png");
        cursor: pointer;
    }
    .image-container {
        
        width: 100%;
        height: 100%;
    }
    
    .modal-window-image {
        width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
</style>