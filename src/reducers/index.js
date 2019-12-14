
import products from './products';
import { combineReducers } from 'redux';
import showcart from './showcart';
import cartProduct from './cartProduct';
import totalprice from './cart';
import currentInventory from './currentInventory';
import selectChange from './selectChange';
import selectSize from './selectSize';
import avaiProducts from './avaiProducts';


export default combineReducers({
 
    products,
    showcart,
    cartProduct,
    totalprice,
    currentInventory,
    selectChange,
    selectSize,
    avaiProducts
 
})