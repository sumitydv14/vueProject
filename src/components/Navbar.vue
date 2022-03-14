<template>
  <nav class="navbar navbar-expand-lg bg-black text-white navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand text-white" href="#">Shop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active text-white"
              aria-current="page"
              href="#"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/productList" class="nav-link text-white" href="#"
              >Products</router-link
            >
          </li>
        </ul>
      </div>
         <div class="cart-box">
          <li class="nav-item dropdown list-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
               <span><i class="fa-solid fa-2x fa-cart-plus"></i></span>
               <div class="count">{{cartItemCount}}</div>
            </a>
            <ul class="dropdown-menu headingText" aria-labelledby="navbarDropdown">
               <div class="d-flex justify-between border-b-2" v-for="item in cart" :key="item.product.id">
                   <div>
                       <strong>{{item.product.title}}</strong>
                       <br/>{{item.quantity}} X ${{item.product.price}}
                   </div>
                   <div>
                      <a href="#" class="badge bg-gray-800 text-white" @click.prevent="removeProductFromCart(item.product)">remove</a>
                   </div>
               </div>
               <div class="d-flex justify-between mt-3">
                  <span>Total:${{cartTotalPrice}}</span>
                  <a href="#" @click="clearCartItem">Clear cart</a>
               </div>
            </ul>
          </li>
       
        </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex" 
export default {
  name: "Navbar",

  computed : {
    
       ...mapState('cart', ['cart']),

         ...mapGetters("cart", ["cartItemCount","cartTotalPrice"])
    }  ,
   

  mounted() {
    this.getCartItems();
  },

  methods: {
    ...mapActions("cart", [
      "removeProductFromCart",
      "clearCartItem",
      "getCartItems"
      ])
  }

};
</script>

<style>
    .dropdown-menu.show{
     left: -150px;
     width: 225px;
     padding: 25px 5px;
  }

  .count{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    background: #fff;
    position: absolute;
    top:0;
    left: 0;
  }
  .headingText strong{
    font-family: "Roboto","Arial",sans-serif;
    overflow: hidden;
    display: block;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    width: 140px;
  }
</style>
