import React from 'react';

import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaMediumM,
  FaLinkedin,
  FaGithub,
  

  
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__tital">I am</h3>
          <p className="contact__description">
          A talented software engineering student who is Passionate about learning new things and able to deal with different types of people and work together as a team with good team spirit. I always wanted to shape my career as well as my future by fulfilling the corporate needs of the company with my education and contributing positively to the industry and society.
           </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Mail Me </span>
                <h4 className='info__desc'>udeshidumina@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className='info__title'>Call Me</span>
                <h4 className='info__desc'>(+94) 715808356</h4>
              </div>
            </div>
          </div>
          <div className='contact__socials'>

            
            <a href="https://www.linkedin.com/in/udesh-indumina-a99032252/" className="contact__social-link">
              <FaLinkedin/>
            </a>

            <a href="https://faceBook.com" className="contact__social-link">
              <FaFacebookF/>
            </a>
            <a href="https://github.com/WAUdeshinduminaweerakoon" className="contact__social-link">
              <FaGithub/>
            </a>
            <a href="https://medium.com/@udeshidumina" className="contact__social-link">
              <FaMediumM/>
            </a>
          </div>

        </div>

        <form className='contact__form'>
          <div className="form__input-group">

            <div className="form__input-div">
              <input 
              type="text" 
              placeholder='Your Name' 
              className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
              type="email" 
              placeholder='Your Email' 
              className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
              type="text" 
              placeholder='Your Subject' 
              className="form__control" 
              />
            </div>

          </div>

          <div className="form__input-div">
              <textarea 
              placeholder='Your Message'
              className="form__control textarea"
              ></textarea>
            </div>
            <button className="button">
              Send Message 
              <span className="button__icon contact__button-icon">
                <FiSend/>
              </span>
            </button>

        </form>
         

      </div>

    </section>
  )
}

export default Contact