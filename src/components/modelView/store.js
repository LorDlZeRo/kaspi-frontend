import { defineStore } from 'pinia'

const useCartStore = defineStore( 'cart',  {
    state: ()=> {
        return {
            count: 0,
        }
    },
    actions: {
        increment: function() {
            this.count++
        }
    }
})

export default useCartStore