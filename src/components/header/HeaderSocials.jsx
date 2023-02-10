import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BiMessageDetail} from 'react-icons/bi';
import {FaGithub} from 'react-icons/fa';



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/allain-woodsford-83a0391a2/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/AllainWoodsford' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href='#contact'><BiMessageDetail/></a>
    </div>
  )
}

export default HeaderSocials;