import {SHOW_CART} from '../constants/actionTypes';
const initShowState={
    show:false,
}
const showcart=(state=initShowState.show,action)=>{
    switch(action.type){
        case SHOW_CART:
        return !action.showcart
        default:
        return state
    }
}

export default showcart;