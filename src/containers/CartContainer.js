import React from 'react';
import OnlyCartHeader from '../components/OnlyCartHeader';
import {store} from '../index';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const CartContainer=({showcart,cartProduct,totalprice,cartnums})=>{
   
    
  var getShow=showcart=>{
      if(showcart===false){
          return 'none'
      }else return 'block'
  };

 
        const cartStyle={
            width:'400px',
            height:'100%',
            textAlign:'center',
          
            position:'fixed',
            top:0,
            right:0,
            zIndex:999,
            display:getShow(showcart)
        }
        const wrapStyle={
            width:'400px',
            height:'100%',
            display:'flex',
            flexWrap:'wrap'
        }
        const contentStyle={
            width:'370px',
            height:'100%',
            backgroundColor:'black',
        }
        const allItemStyle={
            width:'370px',
            height:'80%',
            backgroundColor:'black',
            overflow:'auto',

        }
        const checkedOutStyle={
            width:'370px',
            height:'15%',
         
            color:'white',
            border:'none'
        }
        /* 数组去重 */
        var list=new Set(cartProduct);
        var plist=Array.from(list); 

       /*  */
       var cartid=[]
       for(var i=0;i<cartProduct.length;i++){
           cartid.push(cartProduct[i].id)
       }
      
       var getNums=(n)=>{
        var   pItemNums=0;
        for(var i=0;i<cartid.length;i++){
           if( cartid[i]==n){pItemNums=pItemNums+1}
        
        }

           return pItemNums
       };


        return <div style={cartStyle}>
               <div style={wrapStyle}>
                   <button style={{width:'30px',height:'30px',backgroundColor:'black',border:'none',margin:0,padding:0}}
                           onClick={()=>{  store.dispatch({type:'SHOW_CART',showcart})}}
                    
                   >
                   <i className="fa fa-close" style={{fontSize:'28px',color:'white'}}></i>
                   </button>
                 <div style={contentStyle}>  
                    <div style={{width:'50px',height:'50px',margin:'0 auto'}}>
                       <OnlyCartHeader productsQuans={cartnums}/>{console.log('cartcontainer_showcart',showcart)}
                    </div>
               {<div style={allItemStyle}>

                   {
                      
                       plist.map(
                       cartProductOne=>
                        <Cart
                        key={cartProductOne.id}
                        img={cartProductOne.img}
                        title={cartProductOne.title}
                        price={cartProductOne.price}
                        currentNums={getNums(cartProductOne.id)}
                      
                    />
                   )}
                </div>
                }
                    {console.log('cartProduct___cart:',cartProduct)}
                    {console.log('去重：',plist)}
   
                    {console.log('id：',cartid)}
                    <button className='checkoutbtn' style={checkedOutStyle}>
                       <div>&#36; {totalprice}</div>
                       CHECKOUT
                    </button>
                 </div>   
              </div>
        </div>
    }
    const mapStateToProps=state=>({
       cartnums:state.cartProduct.length,
        cartProduct:state.cartProduct,
        totalprice:state.totalprice,
      
    })
    
export default connect(mapStateToProps)(CartContainer) ;