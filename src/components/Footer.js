import React from 'react'
import "../styles/footer.css";
import { FaSlackHash } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container '>
                <footer className="ourServices">
                    <div className='ourServicesHold'>
                        <div className='footer-item'>
                            <span className="footer-title">Services</span>
                            <button >Branding</button>
                            <button >Design</button>
                            <button >Marketing</button>
                            <button >Advertisement</button>
                        </div>
                        <div className='footer-item'>
                            <span className="footer-title">Hosting</span>
                            <p className='cursor-pointer'>Airbnb your home</p>
                            <p className='cursor-pointer'>AirCover for Hosts</p>
                            <p className='cursor-pointer'>Explore hosting resources</p>
                            <p className='cursor-pointer'>Visit our community forum</p>
                            <p className='cursor-pointer'>How to host responsibly</p>
                        </div>
                    </div>

                    <div className='ourServicesHold'>
                        <div className='footer-item'>
                            <span className="footer-title">Company</span>
                            <button>About us</button>
                            <button>Contact</button>
                            <button>Jobs</button>
                            <button>Press kit</button>
                        </div>
                        <div className='footer-item'>
                            <span className="footer-title">Airbnb</span>
                            <button>Newsroom</button>
                            <button>Learn about new features</button>
                            <button>Letter from our founders</button>
                            <button>Careers</button>
                            <button>Investors</button>
                            <button>Gift cards</button>
                        </div>
                    </div>
                </footer>
            </div>
            <footer className="socialMedia">
                <div className="socialMedia-items">
                    <FaSlackHash className="fa fa-hashtag  fs-4" />
                    <p className='font-bold'>BUILT BY KHALED.</p>
                </div>
                <div className="social-icon">
                    <a href="https://github.com/khaledelgamely"><AiOutlineGithub /></a>
                    <a href="https://www.linkedin.com/in/khalid-elgamely-874470242/"><FaLinkedin /></a>
                    <a href=""><BsInstagram /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer