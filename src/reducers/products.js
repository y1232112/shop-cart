import {RECEIVE_PRODUCTS,ADD_TO_CART,SELECT_TYPE, SELECT_SIZE} from '../constants/actionTypes';

const initPState = {
    products: []
  
  }
  const products=(state=initPState.products,action)=>{
    switch(action.type){
        case RECEIVE_PRODUCTS:
        return action.products 
        case ADD_TO_CART:
        return state
        case SELECT_TYPE:
        return state
        case SELECT_SIZE:
        return state
        default:
        return state
    }
  }


  export default products;