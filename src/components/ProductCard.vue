<template>
      <div class="col-md-3 mb-10">
           <div class="p-3 shadow-md">
               <div class="img-part mb-4 h-80 overflow-hidden">
               <img :src="product.image" alt="products-img" class="w-100 h-72  object-contain" />  
               </div>
               <div class="product-details text-center">
                    <router-link :to="{name:'ProductDetails', params:{id:product.id}}" class="mb-2 text-xl line-clamp-1">{{product.title}}</router-link> 
                    <h3 class="text-2xl" > ${{product.price}}</h3>
                    <p class="mb-2 line-clamp-3 text-left">{{product.description}}</p>
                    <button type="button" @click="addToCard()" class="border p-3 bg-yellow-600 text-white shadow-md" >ADD TO CART</button>
               </div>
           </div>
      </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    Name:'ProductCard',
    props:['product'],

   methods:{
        ...mapActions("cart",['addProductToCart']),
       
        addToCard(){
           this.addProductToCart({
                product:this.product,
                quantity: 1,
           })
        }
   }

}
</script>

