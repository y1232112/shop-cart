import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
const ProductItem =({product,addToCart,products,currentNums})=>{
    var buttonShow;
    if(product.inventory==0){
        buttonShow='disabled'
    }
     var addbuttonstyle;
     if(product.inventory==0){
        addbuttonstyle='soledoutbtn'
    }else{
        addbuttonstyle='addbtn'
    }
    var n=0;
    return <div style={{margin:'20px',textAlign:'center'}}>
        <Product
        img={product.img}
        title={product.title}
        price={product.price}
        products={products}
        />
        <button className={addbuttonstyle} style={{width:'200px',height:'35px',border:'none',color:'white'}}
                disabled={buttonShow}
           onClick={()=>addToCart(product,products,currentNums)}
        >
   
        { parseInt(product.inventory)==0?
          <div disabled='disabled' style={{textDecoration:'line-through'}}>soled out</div> :<div>add to cart X {product.inventory}</div> 
        
        }
        </button>
    </div>
}
const mapStateToProps=state=>({
    products:state.products,
    currentInventory:state.currentInventory,
    
 
})
export default connect(mapStateToProps) (ProductItem);

