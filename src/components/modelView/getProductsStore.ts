import { defineStore } from "pinia";
import { Product, ProductDetails } from "./interfaces/product";
import axios from 'axios';

const useProductsStore = defineStore('products', {
    state: () => ({
        allProducts: null as Product[] | null,
        HOST: 'https://netlifylordlzerotest.netlify.app/.netlify/functions/api/' as string,
        paginationPageNumbers: 0 as number,
        amountPaginationPages: 0 as number,
        productDetails: {} as ProductDetails,
    }),

    actions: {
        
        async getAllProducts(url:string): Promise<void> {
            
            try {
                this.processData(null , 0, 0)
                const response = await axios.get(this.HOST + url);
      
                this.processData(response.data.products, response.data.paginationPageNumbers, response.data.amountPaginationPages);
               
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }   
        },
        

        async getProductDetails(url:string): Promise<void> {

            try {
                
               if (url) {
                    const response = await axios.get(this.HOST + url);
                    this.productDetails = response.data;
               }
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }   
        },

       processData: function (data: Array<Product>|null, paginationPageNumbers:number, amountPaginationPages:number) {
            this.allProducts = data 
            this.paginationPageNumbers = paginationPageNumbers
            this.amountPaginationPages = amountPaginationPages
        },

    }
})

export default useProductsStore