import cart from '../../../apis/cart'

export const addProductToCart = ({commit}, {product , quantity}) =>{
    commit('ADD_TO_CART' , {product, quantity});
   
    cart.store({
      product_id: product,
      quantity
    })
  }
  
  export const getCartItems = ({commit}) =>{
    cart.all().then(res =>{
        commit('SET_CART', res.data);
      })
  }
  
  export const removeProductFromCart = ({commit} , product) =>{
    commit('REMOVE_PRODUCT_FROM_CART', product);
    cart.delete(product.id)
  }
  
  export const clearCartItem = ({commit}) => {
    commit('CLEAR_CART_ITEMS');
     cart.deleteAll()
  }