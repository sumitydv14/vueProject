import  Api from './apis';

export default {
   async all(){
        return await Api.get('products');
    },

   async show(id){
       return await Api.get(`products/${id}`)
    }
}