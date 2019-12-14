import React from 'react';
import {onChangedSort} from '../actions';
import { connect } from 'react-redux';


const SelectBox=({products,onChangedSort,avaiProducts})=> {

var getInfo=()=>{
   if(avaiProducts.length>0){
       return avaiProducts
   }else return products
    
}


/* *****************排序：对avaiProducts: ********************************/
/* ----------------------------------------------- */
/* by id 保存avaiproducts副本*/
var prdctById=[];
for(var i=0;i<getInfo().length;i++){
    prdctById.push(getInfo()[i])
}
prdctById.sort(function(a,b){
    return a.id-b.id;
})
console.log('prdctById',prdctById);
/* ----------------------------------------------- */
/* by price 价格从低到高排序*/

  const prdctsByPrice=[];
for(var i=0;i<prdctById.length;i++){
    prdctsByPrice.push(prdctById[i])
}


prdctsByPrice.sort(function(a,b){
    return a.price-b.price;
})
console.log('ProductsByPrice',prdctsByPrice);
/* ----------------------------------------------- */
/* by reverse price 价格从高到低排序*/
var reverseprdctByPrice=[];
for(var m=prdctsByPrice.length-1;m>=0;m--){
    reverseprdctByPrice.push(prdctsByPrice[m])
}

console.log('reverseprdctByPrice',reverseprdctByPrice)
/* ********************************************************************/
var avProducts=[prdctById,prdctsByPrice,reverseprdctByPrice];

console.log('ppp:',avaiProducts)
        return <select style={{width:'200px',height:'35px'}} onChange={e=>onChangedSort(e,avProducts)
        
        
        }>
            <option value='SELECT'>select</option>
            <option value='HIGHEST_TO_LOWEST'>Highest to Lowest</option>
            <option value='LOWEST_TO_HIGHEST'>Lowest to Highest</option>
        </select>
    
}
const mapStateToProps=state=>({
    products:state.products,
    avaiProducts:state.avaiProducts
 })
export default connect(mapStateToProps,{onChangedSort}) (SelectBox);