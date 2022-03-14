<template>
    <Navbar />
     <section class="py-5 mt-20">
          <div class="container">
               <div class="row">
                    <div class="col-md-4">
                          <img :src="product.image" alt="products-img" />    
                    </div>
                    <div class="col-md-8">
                         <div class="details-box pl-4">
                              <h1 class="text-2xl mb-3">{{product.title}}</h1>
                              <h1 class="text-xl mb-3">${{product.price}}</h1>
                              <input type="text" v-model.number="quantity"  class="text-center col-1 border  mr-2 h-10 "/>
                              <button @click="addToCard()" class="btn mt-3 btn-primary mb-3 h-10">Add to Cart</button>
                              <p class="text-lg">{{product.description}}</p>
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>
<script>
 import Navbar from '../components/Navbar.vue'
 import { mapActions ,  mapState } from 'vuex';
export default {
    props:["id"],
    name:'ProductDetails',
    components:{
        Navbar
    },
    data(){
         return{
              quantity : 1
         }
    },

    computed: {

        ...mapState("product",["product"]),

        
      
    },
     mounted(){
          console.log("check", this.id)
      this.getProduct(this.id)
    },
     methods:{
          ...mapActions('product',['getProduct']),
          ...mapActions("cart",['addProductToCart']),
        addToCard(){
             this.addProductToCart({
                  product: this.product,
                  quantity: this.quantity
             })
        }
   }

   


    
}
</script>

