import React from 'react'
import Cicon from '../../images/Cicon.png'
import search  from '../../images/search.png'
import Switch from '../../images/Switch.png'
import bell from '../../images/bell.png'
import sandalround from '../../images/sandalround.png'
import dropdown from '../../images/dropdown.png'
import shopping from '../../images/shopping.png'
import location from '../../images/location.png'
import './Header.css'



const Header = () => {
  return (
<>
<section className='header'>
    <div className='header-top'>
        <div className='Cicon'>
            <img src={Cicon} alt=''/>
        </div>
        <div className='location'>
            <img src={location} alt='' />  Chennai
        </div>
        <div className='searchbar'>
        <div className=' search-wholebar'>
            <div className='search'>
                <img  src={search} alt='' /><h5>Search</h5>
            </div>
            
        </div>
        </div>
        <div className='switch'>
            <img src={Switch} alt=''/>
        
        <h5 > Chef Mode</h5>
        </div>
        <img className='bell' src={bell} alt=''/>
        <div className='wholejohn'>
            <img className='sandal' src={sandalround} alt=''/><p>J</p><h5>John Doe</h5> <img className='drop' src={dropdown} alt=''/>
        </div>
        <img className='shop' src={shopping} alt=''/>
    </div>
    
</section>

</>
)
}

export default Header