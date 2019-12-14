import React from 'react';
import Size from '../components/Size';
import {addSize} from '../actions';
import {connect} from 'react-redux';
const SizeContainer=({selectSize,addSize,products,selectChange})=>(
    <div style={{width:'200px',height:'60px',display:'flex',flexWrap:'wrap'}}>
    <div style={{width:'200px',marginBottom:'15px',fontWeight:'bold'}}>Size:</div>
        
    <div style={{width:'200px',display:'flex',flexWrap:'wrap'}}>
        <Size size={'XS'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'S'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'M'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'ML'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'L'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'XL'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        <Size size={'XXL'} selectSize={selectSize} addSize={addSize} products={products} selectChange={selectChange}/>
        {console.log('selectSize:',selectSize)}
        {console.log('--------------',(products.map(i=>i.availableSizes)))}
    </div>
      
    </div>
)

const mapStateToProps=state=>({
    selectSize:state.selectSize,
    products:state.products,
    selectChange:state.selectChange
  })
 export default connect(mapStateToProps,{addSize})(SizeContainer);