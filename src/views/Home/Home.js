import React from 'react';
import './Home.css';
import Navbar from './../../components/Navbar/Navbar';
import ShitalProfile from './ShitalProfile.jpg';
import Button from '../../components/Button/Button';
import GithubLogo from './GithubLogo.png';
import LinkdinLogo from './LinkdinLogo.png';
import PeerlistLogo from './PeerlistLogo.jpg';

export default function Home(){
    return(
        <>
        <Navbar/>
        <div className='container'>
            <div>
               <img className='profilePhoto' src={ShitalProfile} alt='Profile Picture'/>
               <div className='logo-cont'>
                    <div> 
                    <a href='https://github.com/shitalwarkhade89'><img className='github-logo' src={GithubLogo} alt='Github Logo'/></a>
                    </div>
                    <div>
                    <a href='https://www.linkedin.com/in/shitalwarkhade89/'><img className='github-logo' src={LinkdinLogo} alt='Linkdin Logo'/></a>
                    </div>
                    <div>
                    <a href='https://peerlist.io/shitalwarkhade'><img className='peerlist-logo' src={PeerlistLogo} alt='Peerlist Logo'/></a>
                    </div>
                </div>
            </div>
            <div className='info-div'>
                <h1 className='heading-1'>HEY, I'M Shital Warkhade</h1>
                <h2 className='heading-2'>I am a Full Stack Developer</h2>

                
                <div className='buttons'>
                <Button name="Hire Me"/>
                <a href=''><Button name="Contact Me"/></a>
                </div>

                
            </div>
        </div>

        
        
        </>
        
    )
}