import React from 'react'
import './Price.css'
import veg from '../../images/Veg.png'
import nonveg from '../../images/NonVeg.png'

var totalitem=0;

const Price = ({itemtotal1,itemtotal2,deliverycharge1,deliverycharge2,tax}) => {
    totalitem  = itemtotal1+deliverycharge1+deliverycharge2+tax+itemtotal2

  return (
<>
<section className='right'>
    <div className='right-main'>
        <h2>Price Summary</h2>
      <div className='right-content'>
      <div className='availablenow'>
      <h3>Available Now</h3>
          <div className='inside'>
            <h4>Item total   </h4><h5>${itemtotal1}</h5>
            <h4>Delivery Charges   </h4> <h5 className='hh'>${deliverycharge1}</h5>
          </div>
          <hr />
      </div>
      <div className='availablenow'>
      <h3>Advance order</h3>
          <div className='inside'>
            <h4>Item total </h4> <h5>${itemtotal2}</h5>  
            <h4>Delivery Charges </h4>  <h5 className='hh' >${deliverycharge2}</h5> 
          </div>
          <hr />
      </div>
      <div className='availablenow'>
          <div className='tax'>
            <p>Tax</p>
           <h5 className='estimate'>(estimated for india  )</h5>  
           <h4 className='hh' >${tax}</h4> 
          </div>
         <hr />
      </div>
      <div className='availablenow'>
          <div className='grand'>
            <p>Grand Total</p>
            <h5>${totalitem}</h5>
          </div>
         <hr />
      </div>
      </div>
     <button className='order'>Create Order</button>
    </div>
    <div className='veg-or-non'>
        <div className='veg'>
            <img src={veg} alt=''/>VEG
        </div>
        <div className='non-veg'>
        <img src={nonveg} alt=''/>NON-VEG
        </div>
      </div>
   </section>
</>  
)
}

export default Price