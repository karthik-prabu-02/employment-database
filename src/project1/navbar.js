import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='nav_bar'>  
        <NavLink 
          to='/' 
          style={({ isActive }) => {
            return { 
              color: isActive ? 'red' : 'black', 
              textDecoration:isActive? 'underline' : 'none',
              fontWeight : isActive? 'Bold' : 'normal',
              padding : '10px'
            };
          }}
        >Home</NavLink>
        
        
        <NavLink 
          to='/details'
          style={({ isActive }) => {
            return { 
              color: isActive ? 'red' : 'black',
              textDecoration:isActive? 'underline' : 'none',
              fontWeight : isActive? 'Bold' : 'normal',
              padding : '10px'
            };
          }}
        >Employee Details</NavLink>
        
        
        <NavLink 
          to='/updates'
          style={({ isActive }) => {
            return { 
              color: isActive ? 'red' : 'black', 
              textDecoration:isActive? 'underline' : 'none',
              fontWeight : isActive? 'Bold' : 'normal',
              padding:'10px'
            };
          }}
        >Update Employee Details</NavLink>
      </nav>
    </>
  )
}

export default Navbar;