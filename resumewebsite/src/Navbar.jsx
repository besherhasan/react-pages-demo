import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  const [click,setClick] =useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      
<nav className="navbar">
<div className="nav-container">
<div 

activeClassName="active" 
className="nav-logo"

>
 <span className='navname'>Besher</span> 
  <i className="fas fa-code"></i>
  </div>
  

<ul className={click ? "nav-menu active" : "nav-menu" }>


<li className='nav-item'>
<NavLink exact to="/"  activeClassName="active" className='nav-links'

onClick={handleClick}>
  Home
</NavLink>
</li>


<li className='nav-item'>
<NavLink exact to="/about" activeClassName="active" className='nav-links'
onClick={handleClick}
>
  About Me
</NavLink>
</li>

<li className='nav-item'>

<NavLink to="/resume" activeClassName="active" className='nav-links'
onClick={handleClick}
>
  Resume
</NavLink>


</li >


<li className='nav-item'>

<NavLink to="/Certificates" activeClassName="active" className='nav-links'
onClick={handleClick}
>
Certificates

</NavLink>


</li>
<li className='nav-item'>

<NavLink to="/contact" activeClassName="active" className='nav-links'
onClick={handleClick}
>
  Contact

</NavLink>


</li>

</ul>
<div className="nav-icon" onClick={handleClick}>

<i className={click ? "fas fa-times" : "fas fa-bars"}></i>

</div>





</div>


</nav>


    </>
  )
}

export default Navbar
