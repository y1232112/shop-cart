import {SELECT_SIZE} from '../constants/actionTypes';


const selectSize=(state=[],action)=>{
    switch(action.type){
        case SELECT_SIZE:
        return action.selectSize
        default:
        return state
    }
}
export default selectSize;