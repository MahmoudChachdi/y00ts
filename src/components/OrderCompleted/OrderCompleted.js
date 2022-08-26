import React from 'react';
import MERCH from './MERCH.jpg';
import'./OrderCompleted.css';


const OrderCompleted =()=>{

return(

<div className="  center  " style={{ width: '100%' }}>
<div className='card5'>
<div className='card6'>
   <div className= ' ' >
    <div className= ' ' >
      <img className='border' alt='robots' src={MERCH }/>
     </div>
      <div className=''>
        <div className='center h2' style={{ width: '100%' }}>THANK YOU</div>
        <div className='center p mt2' style={{ width: '100%' }}>You just made your order <br/> Thank you for trusting us</div>
      </div>
       
       </div> 
      </div>
    </div>
</div>

    )}
export default OrderCompleted;
