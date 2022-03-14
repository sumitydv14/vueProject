import product from '../../../apis/product'
export const getProducts = ({commit}) =>{
    try{
        product.all().then(res =>{
          commit('SET_PRODUCTS', res.data)
      })  
    }catch(error){
       console.log(error)
    }
  }
  
  export const getProduct = ({commit}, productId) =>{
     try{
      product.show(productId).then(res =>{
         commit('SET_PRODUCT', res.data)
       })
     }catch(error){
       console.log(error)
     }
  }