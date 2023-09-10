import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar(){
    const path = window.location.pathname;

    return(
        <>
   
       
 
        <nav className='Navbar'>MyPortfolio
        
            <Link to='/' className={path==='/' ? 'active': 'links '}>Home</Link>
        <Link to='/about'  className={path==='/about' ? 'active': ' links '}>About</Link>
        <Link to='/contact' className={path==='/contact' ? 'active': ' links '}>Contact</Link>
        <Link to='/project' className={path==='/project' ? 'active': ' links '}>Project</Link>
        
        </nav>
       
      

       

        </>
        
    )
}