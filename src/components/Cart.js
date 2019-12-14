import React from 'react';

const Cart=({img,title,price,currentNums})=>{

    const imgStyle={
        width:'60px',
        height:'160px'
    }
    const wrapStyle={
        width:'350px',
        height:'160px',
        margin:'0 auto',
        display:'flex',
        flexWrap:'wrap',
        color:'white',
        marginTop:'10px',
        backgroundColor:'rgba(255,255,255,0.1)'

    }
    const titleContStyle={
        width:'200px',
        height:'160px',
      /*   textAlign:'left' */
    }
    const priceStyle={
        color:'orange',
        display:'flex',
        width:'90px',
        height:'160px',
        textAlign:'left',
        alignItems:'center'
    }

    return <div style={wrapStyle}>

    {(img==null)?<div></div>:
       <img src={require('../static/'+img)} style={imgStyle}></img>
    }
      <div style={titleContStyle}> 
          <div style={{height:'30px', width:'200px'}}><p>{title}</p></div>
          <div style={{height:'110px', width:'200px'}}></div>
          <div style={{height:'22px', width:'200px',color:'orange'}}>Nums: X {currentNums}</div>
      </div>
       <div style={priceStyle}>
          {(price==null)?<div></div>:
          <div >&#36; {price}</div> 
          }
       </div>
    </div>
}

export default Cart;