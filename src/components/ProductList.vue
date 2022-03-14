<template>
     <Navbar />
      <section class="py-5">
           <div class="container">
                <div class="row">
                     <ProductCard  v-for="product in products" :key="product.id" :product="product"  />
                </div>
           </div>
      </section>
</template>
<script>
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { mapActions, mapState } from 'vuex';

export default {
    name:'ProductList',
    components:{
        Navbar,
        ProductCard
    },

    computed:{
         ...mapState("product",['products']),
    },

    mounted(){
         this.getProducts()
    },
    
    methods :{
       ...mapActions("product",['getProducts'])
    },
   
}
</script>
