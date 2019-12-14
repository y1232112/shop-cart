import {ADD_TO_CART} from '../constants/actionTypes';



const currentInventory=(state=2,action)=>{
    switch(action.type){
        case ADD_TO_CART:
        return action.currentInventory
        default:
        return state
    }
}
export default currentInventory;