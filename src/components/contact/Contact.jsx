import React, { useRef} from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {AiFillLinkedin, AiFillPhone} from 'react-icons/ai';
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAIL_JS_SERVICEID}`, `${process.env.REACT_APP_EMAIL_JS_TEMPLATE}`, form.current, `${process.env.REACT_APP_EMAIL_JS_PUBLICKEY}`)
      .then((result) => {
         console.log('sent!');
      }, (error) => {
          console.log(error.text);
         
      });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>awoodsford@hotmail.com</h5>
            <a href='mailto:awoodsford@hotmail.com' target='_blank' rel="noreferrer">Send an email</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Connect!</h5>
            <a href='https://https://www.linkedin.com/in/allain-woodsford-83a0391a2/' target='_blank' rel="noreferrer">Link to page</a>
          </article>
          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon'/>
            <h4>Mobile</h4>
            <h5>+61424415304</h5>
            <a href='tel:+61424415304' target='_blank' rel="noreferrer">Link to call</a>
          </article>
        </div>
     
      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
   </section>
  )
}

export default Contact;