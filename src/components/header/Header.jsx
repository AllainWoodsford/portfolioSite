import React from 'react';
import CTA from './CTA.jsx';
import HeaderSocials from './HeaderSocials.jsx';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container' id='header'>
        <h5>Hello I'm</h5>
        <h1>Allain Woodsford</h1>
        <h5 className='text-light'>a Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;