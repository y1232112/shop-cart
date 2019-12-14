import {ADD_TO_CART} from '../constants/actionTypes';

  const totalprice=(state=0,action)=>{

    switch(action.type){
        case ADD_TO_CART:
        
        return parseFloat(state)+parseFloat(action.cartProduct.price)
        default :
        return parseFloat(state)
    }
}



export default totalprice;