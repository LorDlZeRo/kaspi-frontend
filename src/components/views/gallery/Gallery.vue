<script>
import { ref } from 'vue'
import ModalWindow from '../modalWindow/ModalWindow.vue'
import Slider from '../slider/Slider.vue'
    export default {
        components: {
            ModalWindow,
            Slider,
        },
        props: {
            photos: Array<String>[]
        },
       
        
        setup(props) {

            const photos = props.photos
         
            const mainImageIndex = ref(0);
            const changeMainImg = (index) => mainImageIndex.value = index
            
            const isShowModal = ref(false)
            const openModalWindow = () => isShowModal.value = true   
            const closeModalWindow = () => isShowModal.value = false
            
            return {
                photos, mainImageIndex, changeMainImg,
                isShowModal, openModalWindow, closeModalWindow, 
                
            }
        }
    }
</script>

<template>
    <section class="silder-content">
        <div class="item__gallery-self-wrapper">
             <div class="image-container">   
                <img class="gallery-main-img"
                    v-if="photos && photos.length > 0"
                    :src="$serverUrl+photos[mainImageIndex]"
                    @click="openModalWindow"
                    :key="mainImageIndex"
                >
            </div>
            <div class="item__zoom-tooltip">
                Чтобы увеличить, нажмите на картинку
            </div>
            <ModalWindow
                v-if="isShowModal" 
                :close="closeModalWindow"
             >
                <Slider :mainImageIndex="mainImageIndex" :photos="photos" />
            </ModalWindow>
            
        </div>
        
            <ul class="item__gallery-controls">
                <li class="item__gallery-controls-list" tabindex="0"
                    v-if="photos && photos.length > 0"
                    v-for="(item, index) in photos"
                    @mousedown="changeMainImg(index)"
                    :key="index"
                > 
                    <img class="item__gallery-controls-img"
                        :src="$serverUrl+item"
                    >
     
                </li>
            </ul>
    </section>
</template>

<style lang="scss" scoped>
    .silder-content {
        margin: 0 auto;
        width: 100%;
        padding-top: 25px;
    }
    .gallery-main-img {
        width: 100%;
        max-height: 300px;
        opacity: 1;
        animation: fadeIn 0.5s ease-in-out;
        object-fit: contain;
        cursor: zoom-in;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .item__zoom-tooltip {
        text-align: center;
        padding-top: 20px;
        color: #999;
    }
    .item__gallery-self-wrapper {
        width: 70%;
        margin: 0 auto;
        
    }
    .image-container {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
     }
    .item__gallery-controls {
        width: 100%;
        display:flex;
        justify-content: space-around;
        height: 73px;
        margin: 21px 0;
        cursor: pointer;
     }
     
    .item__gallery-controls-list {
        flex-basis: calc(25% - 1em); 
        flex-grow: 1; 
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items:center;
        }
    .item__gallery-controls-list:active {
        border: 1px solid #0089d0;

    }  
    .item__gallery-controls-list:focus {
        border: 1px solid #0089d0;
    }    
    .item__gallery-controls-img {
        width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
</style>