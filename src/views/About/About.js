import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import AboutImg from './AboutImg.png';

export default function About(){
    return(
        <>
        <Navbar/>
           <h1 className='know-more-heading'>Get Know More About Me</h1> 
        <div className='container'>
            <div className='info-cont'>
               <p className='aboutme-info'>Hello, I'm a Full Stack Developer who enjoys experimenting with new technologies. I'm skilled at building websites that not only look fantastic but also function smoothly. I'm seeking job opportunities where I can contribute, learn, and develop. If you have any suitable positions, please feel free to contact me. I'm eager to hear from you and explore potential opportunities.</p>

            </div>
            <div className='img-cont'>
            <img className='about-img' src={AboutImg} alt='About Image'/>
        
            </div>

        </div>
        
        
        </>
        
    )
}