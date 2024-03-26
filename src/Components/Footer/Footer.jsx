import React from 'react'
import Groupbig from '../../images/Groupbig.png'
import grouparrow  from '../../images/Grouparrow.png'
import './Footer.css'
const Footer = () => {
  return (
<>
<div className='footer-main'>
    <div className='footer-down'>
        <div className='groupbig'>
            <img src={Groupbig} alt=''/>
            <div className='listcontent'>
            <h5>Mission </h5>
            <h5>FAQ</h5>
            <h5>Privacy Policy</h5>
            <h5>Terms and Condition</h5>
            <h5>License and Registration</h5>
            </div>
            <hr />
            <div className='hrleft'>
                <p>Get in touch with us at <br /> <a href="$">support@thecheflane.com </a> </p>
                <button>Contact Us</button>
            </div>
        </div>
    </div><br /><br />
    <hr/>
   
    <div className='copyright'>
        <img className='grouparrow' src={ grouparrow} alt=''/>

            <p>Copyright © 2021 Specialist Foods. All rights reserved.</p>
    </div>
    </div>
</>  
)
}

export default Footer