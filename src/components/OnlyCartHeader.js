import React from 'react';


const OnlyCartHeader=({productsQuans})=>{
    var show;
    if(productsQuans!==0){
       show='flex'
    }else{
        show='none'
    }
    const wrapStyle={
        width:'60px',
        height:'60px',
        backgroundColor:'black',
        
  }

  const showStyle={
    position:'absolute',
    width:'60px',
    height:'60px',
    textAlign:'center',
  }
    const iStyle={
        color:'rgba(240, 248, 255, 0.7)',
        fontSize:'50px',
     
        zIndex:'-1'
    }
    const numStyle={
    
        display:show,
        width:'22px',
        height:'22px',
        borderRadius:'50%',
        backgroundColor:'rgba(223, 168, 86, 0.99)',
        bottom:'15px',
        marginLeft:'35px',
        zIndex:'999',
        position:'relative',
        fontSize:'20px'
    }
   return <div style={wrapStyle}>
      <div style={showStyle}>
        <i className="fa fa-shopping-cart" style={iStyle}></i>
        <div style={numStyle}>
                 <div style={{width:'20px',height:'20px',margin:'0 auto'}}> {productsQuans}</div>      
        </div>{console.log('show',show)}
      </div>
    </div>
    
}

export default OnlyCartHeader;