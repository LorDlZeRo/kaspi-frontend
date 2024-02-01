import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/views/productsPage/Products.vue'
import ProductDetails from '../components/views/productDetails/ProductDetails.vue'
import useProductsStore from '../components/modelView/getProductsStore'
import errorPage from '../components/views/errorPage/errorPage.vue'
import Banner from '../components/views/banner/Banner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Banner,
    },
    {
      path: '/get/products/',
      name: 'all_products',
      component: Products,
      query:{
        page:1
      },
      
    },
    {
      path: '/get/product/details/',
      name: 'productDetails',
      component: ProductDetails,
      beforeEnter: async (to, from, next) => {

        const productsStore = useProductsStore();
            const url = to.fullPath;
            await productsStore.getProductDetails(url);

        next();
      },
    },
    {
      path: '/:catchAll(.*)*',
      name: '404',
      component: errorPage,
    }
    ]
    
})

router.beforeEach((to, from) => {

  const productsStore = useProductsStore();
         productsStore.getAllProducts(to.fullPath);

});

export default router
