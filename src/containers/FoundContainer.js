import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';
import {addToCart} from '../actions';



const FonudContainer=({products,addToCart,productsnum,avaiProducts})=>(
     <div style={{width:'1000px',display:'flex',flexWrap:'wrap'}}>
      <ProductList foundnums={avaiProducts.length==0?productsnum:avaiProducts.length}>
         {  avaiProducts.length==0?
            products.map(
                 product=>
                 <ProductItem
                     key={product.id}
                     product={product}
                     addToCart={addToCart}
                   
                 />
          
            
             ):
             avaiProducts.map(
                product=>
                <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  
                />
         
           
            )
         }
         <div>{console.log("test",products)}</div>
        {console.log('avai-----------------:',avaiProducts)}
      </ProductList>
     </div>
     )

const mapStateToProps=(state)=>({
   /*  products:state.products, */
    products:state.products,
    productsnum:state.products.length,
    avaiProducts:state.avaiProducts
})

 export default connect(mapStateToProps,{addToCart})(FonudContainer);

