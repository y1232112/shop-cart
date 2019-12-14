import React from 'react';

const Size=({size,selectSize,addSize,products,selectChange})=>{
 
   var btnStyle={
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    borderRadius:'50%',
    marginRight:'20px',
    marginBottom:'15px',
    border:'none',
    outline:'none'
}
    
 
      for(var j=0;j<selectSize.length;j++){
          if(size==selectSize[j]){
              btnStyle= {
                width:'30px',
                height:'30px',
                fontWeight:'bold',
                borderRadius:'50%',
                marginRight:'20px',
                marginBottom:'15px',
                border:'none',
                outline:'none',
                color:'white',
                backgroundColor:'brown'

            }
            break;
          }else  btnStyle= {
            width:'30px',
            height:'30px',
            fontWeight:'bold',
            borderRadius:'50%',
            marginRight:'20px',
            marginBottom:'15px',
            border:'none',
            outline:'none'
        }
      }
    const p=products;

    /*     const btnStyle={
            width:'30px',
            height:'30px',
            fontWeight:'bold',
            borderRadius:'50%',
            marginRight:'20px',
            marginBottom:'15px',
            border:'none',
            outline:'none'
        } */
        return <button  
                   onClick={()=>addSize(size,selectSize,p,selectChange)}
                   style={btnStyle}
                 >
                 {size}
               
        </button>
        
        
    
}

export default Size;