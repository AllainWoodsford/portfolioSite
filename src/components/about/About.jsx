import React from 'react'
import './about.css';
import ME from '../../assets/me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <div className='about__me-image__container'>
            <img src={ME} alt='Allain' />
          </div>
          
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Education</h5>
            <small>Completed Bachelor's Degree of Information Technology</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Further Learning</h5>
            <small>Through online Web Development courses on skill sharing websites like Udemy</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>Continuing to work on skills by completing smaller projects in my own time</small>
          </article>
          
        </div>
        <div className='about__content__text'>
          <p>Hi I'm Allain a Sydney based developer looking for full-time work with a role focused on either Front-end or Fullstack development. I have <u><strong>REACT</strong></u> development experience through personal projects and further learning outside of my completed Bachelor of Information Technology Degree such as the <u><strong>MERN</strong></u> stack. I also have experience with other fundamental web development languages and frameworks such as: <em>C#, CSS, HTML, JS, Node JS and Express</em>. I also have experience with Databases such as <em>MySQL or MongoDB</em>.</p> 
          <br/>
          <p>Please reach out and find some example projects below.</p>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About;