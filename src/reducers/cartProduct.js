import {ADD_TO_CART} from '../constants/actionTypes';



const cartProduct=(state=[],action)=>{
    switch(action.type){
        case ADD_TO_CART:
        return state.concat(action.cartProduct)
        
        default:
        return state
    }
}

export default cartProduct;