import * as types from '../constants/actionTypes';
import shop from '../apis/shop';








const receiveProducts=products=>({
    type:types.RECEIVE_PRODUCTS,
    products
})
export const getAllProducts=()=>dispatch=>{
    shop.getProducts(
        products=>{
            dispatch(receiveProducts(products))
        }
    )
}

 const getAvailPrdct=(e,p)=>{
    if(e.target.value===types.SELECT){

   return p[0]
    }
   else if(e.target.value===types.LOWEST_TO_HIGHEST){
     
        return p[1]
    }
    else if(e.target.value===types.HIGHEST_TO_LOWEST){
        return p[2]
    }
    else return p[0]
}

const getSortProduct=(e,p)=>({
 type:'SELECT_TYPE',
 selectChange:e.target.value,
avaiProducts:p

})

const resolveSize=(size,selectSize)=>{
   
    if(selectSize.length==0){
        var initsize=[];
        initsize.push(size);
        return initsize;
    }else{
        var initsize=[size];
        var m=0;
       var p=initsize.concat(selectSize)
       for(var k=0;k<p.length;k++){
          if(p[k]==size){
              m++
          }
       }
      if(m==2){
          var o=[];
          for(var g=0;g<p.length;g++){
              if(p[g]!==size){
                  o.push(p[g])
              }
          }
          return o
      }
      else
           {
          
           return p
           }
    }
   

}

const getSelectSize=(s,p)=>({
    type:types.SELECT_SIZE,
    selectSize:s,
    avaiProducts:p
})
const getSelctSizPrdcts=(arr,products,selectChange)=>{
    var ap=[];
    var temp=[];

    var pt=products.map(mp=>mp.availableSizes);
    for(var i=0;i<arr.length;i++){
          for(var ti=0;ti<pt.length;ti++){
            for(var ai=0;ai<pt[ti].length;ai++){
                if(pt[ti][ai]==arr[i]){
                    ap.push(products[ti])
                }
            }
          }
              
          
    }
    /* ***************************************************** */
    ap=new Set(ap);
    ap=Array.from(ap) ;
     /* **************************************************** */
     /* ----------------------------------------------- */
/* by id 保存avaiproducts副本*/
var prdctById=[];
for(var i=0;i<ap.length;i++){
    prdctById.push(ap[i])
}
prdctById.sort(function(a,b){
    return a.id-b.id;
})

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

var avaiProducts=[prdctById,prdctsByPrice,reverseprdctByPrice];
     /* ********************************************************************************** */
    if(selectChange==types.HIGHEST_TO_LOWEST){
        return avaiProducts[2]
    }else if(selectChange==types.LOWEST_TO_HIGHEST){
        return avaiProducts[1]
    }
   else return avaiProducts[0];
}
export const addSize=(size,selectSize,products,selectChange)=>dispatch=>{
  dispatch(
      getSelectSize(
                       resolveSize(size,selectSize),
                       getSelctSizPrdcts(resolveSize(size,selectSize),products,selectChange)
                    )
      )
}
export const onChangedSort=(e,avaiProducts)=>dispatch=>{
   dispatch(getSortProduct(e,getAvailPrdct(e,avaiProducts)))
}

const toCart=(cartProduct,products)=>({
    type:types.ADD_TO_CART,
    cartProduct,
    currentInventory:--cartProduct.inventory,
    products,
  
    
    
})

export const addToCart=(cartProduct,products)=>dispatch=>{
   dispatch(toCart(cartProduct,products))
}