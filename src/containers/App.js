import React from 'react';
import CartContainer from './CartContainer';
import FoundContainer from './FoundContainer';
import OnlyCartHeader from '../components/OnlyCartHeader';
import SizeContainer from './SizeContainer';
import gitimg from '../static/githubpath.jpg';
import { connect } from 'react-redux';
import {store} from '../index';

function App({showcart,cartnums}) {


  return (
   <div>
      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
     
          <div style={{width:'60px',height:'60px'}}>
           <a href='https://github.com/y1232112/shop-cart.git'>
             
               <img alt="githubpath" src={gitimg} style={{width:'60px',height:'60px'}}/>
             
            
           </a>
          </div>

          <button style={{border:'none',position:'fixed',top:0,right:0}}
                  onClick={()=>{ store.dispatch({type:'SHOW_CART',showcart})}}
          
          >
          <OnlyCartHeader productsQuans={cartnums}/>
         
          </button>
          {console.log('quanscart',cartnums)}
      </div>
      <div style={{display:'flex',width:'1200px',margin:'0 auto'}}>
        <SizeContainer/>
        <FoundContainer/>
       </div>
       <CartContainer showcart={showcart} />
    </div>
  );
}
const mapStateToProps=state=>({
    showcart:state.showcart,
    cartnums:state.cartProduct.length,
   
})

export default connect(mapStateToProps)(App);
