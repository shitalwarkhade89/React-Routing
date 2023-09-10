import React from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactImg from './ContactImg.png';
import GithubLogo from './GithubLogo.png';
import PeerlistLogo from './PeerlistLogo.jpg';
import LinkdinLogo from './LinkdinLogo.png';
import Button from '../../components/Button/Button';
export default function Contact() {
    return (
        <>
            <Navbar />
            <div className='contact-main-cont'>
                <div className='contact-info'>
                    <div className='form-div'>
                        <form>
                            <h1>Name</h1>
                            <input type='text' className='input-box' />
                            <h1>Email</h1>
                            <input type='text' className='input-box' />
                            <h1>contact No</h1>
                            <input type='number' className='input-box' />
                            <h1>Message</h1>
                            <input type='text' className='input-box message-box' />
                            <div className='submit-button'><Button name="Submit"/></div>
                            
                        </form>
                    </div>

                </div>
                <div>
                    <div className='contact-img'>
                        <img className='contact-logo' src={ContactImg} alt='Contact logo' />
                    </div>
                    <div className='contact-logo-cont'>
                        <div>
                          <a href='https://github.com/shitalwarkhade89'><img className='github-logo' src={GithubLogo} alt='Github Logo' /></a>  
                        </div>
                        <div>
                          <a href='https://www.linkedin.com/in/shitalwarkhade89/'><img className='github-logo' src={LinkdinLogo} alt='Linkdin Logo' /></a>  
                        </div>
                        <div>
                            <a href='https://peerlist.io/shitalwarkhade'><img className='peerlist-logo' src={PeerlistLogo} alt='Peerlist Logo' /></a>
                        </div>

                    </div>


                </div>




            </div >


        </>

    )
}