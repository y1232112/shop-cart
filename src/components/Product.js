import React from 'react';

const Product =({img,title,price})=>(
    <div style={{textAlign:'center'}}>
        <img  className='prdctimg' src={require('../static/'+img)} style={{width:'200px',height:'534px'}}/>
        <div>{title}</div>
        <div>&#36; {price}</div>
    </div>
)
export default Product;
