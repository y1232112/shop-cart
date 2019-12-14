import {SELECT,SELECT_TYPE} from '../constants/actionTypes';
const selectChange=(state=SELECT,action)=>{
    switch(action.type){
     case SELECT_TYPE:
     return action.selectChange
        default:
        return state

    }
}

export default selectChange;