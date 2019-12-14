import React from 'react';
import FoundNums from './FoundNums';
import SelectBox from './SelectBox';
const ProductList=({children,foundnums})=>(
    <div>
    <div style={{width:'1000px',display:'flex',justifyContent:'space-between'}}>
    <FoundNums foundnums={foundnums}/>
    <SelectBox />
   
    </div>
     <div style={{width:'1000px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}> {children}</div>
    </div>
)


export default ProductList;