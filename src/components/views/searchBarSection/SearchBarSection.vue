<script>
import SearchBarVue from '../../UI/searchBar/SearchBar.vue'

export default {
    components: {
        SearchBarVue,
    }    
}
</script>
<template>
    <section class="search-bar-section">
        <div class="search-bar-block">
            <SearchBarVue />
        </div>
        <div class="choose-your-city-block">
            <div class="choose-your-city-child-block">
                <span class="my-city-text">
                    Мой город:
                </span>
                <span class="my-city-name">
                    Алматы
                </span>
            </div>
            
        </div>
        
    </section>
</template>
<style lang="scss">
    @import url(./SearchBarSection.scss);
</style>