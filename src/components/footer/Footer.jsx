import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {GiGamepad} from 'react-icons/gi';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Allain's Portfolio</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/allain-woodsford-83a0391a2/' target='_blank' rel='noreferrer'><AiFillLinkedin/></a>
      <a href='https://theoilygoosestudio.itch.io/little-adventure-tale' target='_blank' rel='noreferrer'><GiGamepad/></a>
      <a href='https://github.com/AllainWoodsford' target='_blank' rel='noreferrer'><AiFillGithub/></a>
      </div>
      
      <div className='footer__copyright'>
        <small>&copy; Allain Woodsford. All rights reserved.</small>
      </div>
      
    </footer> 
  )
}

export default Footer;