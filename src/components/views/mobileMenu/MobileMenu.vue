<script>
import { toRefs, ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router';
    export default {
        props: {
            isChildMenuOpen: Boolean,
            toggleMenu: Function,
            categories: Array,
        },
        setup(props) {
            const router = useRouter();
            const {isChildMenuOpen, categories, toggleMenu} = toRefs(props)
            const categoriesId = ref(0)
            const categoiresHistory = ref([])
            const isBack = ref(false)
            const menuListName = ref('')

            const filterCategories = (categories, id) => categories.filter(elem => elem.parent_id == id)
            const goTo = (id) => router.push({ path: '/get/products', query: { id: id, page: 1 }});
            const filteredCategories = computed(() => filterCategories(categories.value, categoriesId.value))
            
            const getCategoryName = (categories, id) => menuListName.value = categories.filter(elem => elem._id == id)
            watchEffect(() => getCategoryName(categories.value ,categoriesId.value))
            
        
            const menuHandler = (event) => {
                
                categoriesId.value = event.currentTarget.id
                isBack.value = false
                if (filteredCategories.value.length === 0) {
                    categoriesId.value = 0
                    toggleMenu.value()
                    goTo(event.currentTarget.id)
                }
            }
            const back = () => {
                isBack.value = true
                if (categoiresHistory.value.length > 1) {
                    categoiresHistory.value.pop()
                    categoriesId.value = categoiresHistory.value[categoiresHistory.value.length-1]
                }
                
            }

            watchEffect(() => categoriesId.value = 0 )

            watchEffect(() => {
                if (!isBack.value) {
                        categoiresHistory.value.push(categoriesId.value)
                    if (categoiresHistory.value.length >= 4) {
                        categoiresHistory.value.shift()
                    }
                }
                
            })
          
            return {
              isChildMenuOpen, menuHandler, filteredCategories, back, menuListName, categoriesId
            }
        }   
    }
</script>
<template>
    <div>
        <div class="main-menu" :class="isChildMenuOpen && 'show'">
            
                <ul class="main-menu-list" >
                    
                <li @click.stop.prevent>
                    <div 
                        v-if="!categoriesId==0"
                        class="back" 
                        @click="back"
                        >
                        <span> ← </span>
                    </div>
                    <span class="list-text" > 
                        <b v-if="menuListName.length > 0">{{ menuListName[0].name }}</b>
                        <b v-else> Главное меню </b>
                    </span>
                </li>
                <li v-for="item in filteredCategories" 
                    :key="item._id"
                    :id="item._id"
                    tabindex="0"
                    @click="menuHandler"
                >
                    <span class="list-text" > 
                        {{item.name}}
               
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $menu-input-height: 65px;
    @mixin unselectable {
            -webkit-user-select: none;
            -moz-user-select: none; 
            -ms-user-select: none; 
            user-select: none; 
        }

    .main-menu {
        z-index: 1;
        position: absolute;
        transition: transform 0.5s ease; 
        transform: translateX(-100%);
        display: flex;
    }
    .main-menu-list>li {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: $menu-input-height;
        background-color: #ffffff;
        padding: 0 20px;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
    }
    .main-menu-list>li:last-child {
        border-bottom: 1px solid #e5e5e5;
    }
    .main-menu-list>li:focus {
        background-color: rgb(247, 247, 247);
    }
    .show {
        transform: translateX(0); 
    }
    .list-text {
        flex-grow: 1; 
        text-align: center;
        @include unselectable;
    }

    .back {
        z-index: 2;
        width: 20%;
        border-right: 1px solid #e5e5e5;
        top: 0;
        left: 0;
        height: $menu-input-height;
        position: absolute;
        padding-left: 30px;
        display: flex;
        align-items: center;
      
    }
</style>