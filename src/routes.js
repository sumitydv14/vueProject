import { createRouter , createWebHistory } from 'vue-router';

import ProductList from './components/ProductList'
import ProductDetails from '@/Pages/ProductDetails'
const router = createRouter({
    history:createWebHistory(),
    routes:[
      
        {
            name:'ProductList',
            component:ProductList,
            path:'/'
        },
        {
            name:'ProductDetails',
            component:ProductDetails,
            path:'/productDetails/:id',
            props:true
        },

    ]
})

export default router