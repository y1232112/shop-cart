import {SELECT_TYPE,SELECT_SIZE} from '../constants/actionTypes';

const avaiProducts=(state=[],action)=>{
    switch(action.type){
        case SELECT_TYPE:
        return action.avaiProducts
        case SELECT_SIZE:
        return action.avaiProducts
        default:
        return state
    }
}
export default avaiProducts;