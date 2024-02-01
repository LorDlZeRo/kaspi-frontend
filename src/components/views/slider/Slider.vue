<script>
    import { ref } from 'vue';

    export default {
        props: {

            mainImageIndex: Number,
            photos: Array <String>[],

        },
        setup(props) {
            const {photos, mainImageIndex } = props
            const imageIndex = ref(0)
                  if (mainImageIndex) {
                    imageIndex.value = mainImageIndex
                  }

            const right = () => {
                imageIndex.value++
                
                if (imageIndex.value > photos.length-1) {
                    imageIndex.value = 0
                }
                
            }
            const left = () => {
                imageIndex.value--
                if (imageIndex.value < 0) {
                    imageIndex.value = photos.length-1
                }
            }
           
            return {
                close,
                photos,
                imageIndex,
                right,
                left,
            };
        },
};
</script>

<template class="main">
    <section class="slider-section">
        <div class="modal-window-left-btn" @click="left">
        </div>
            <div class="image-container">
                <img
                        class="modal-window-image"
                        v-if="photos.length > 0" 
                        :src="$serverUrl + photos[imageIndex]"
                     >
            </div>
        <div class="modal-window-right-btn" @click="right">
        </div>
    </section>
</template>
<style>

    .slider-section {
        width: 100%;
        height: 100%;
        max-height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items:center;
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

    .modal-window-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>