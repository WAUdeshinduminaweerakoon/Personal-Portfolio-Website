import React from 'react';

import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
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
          <h3 className="contact__tital">Don't be Shy !</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptate quam ipsa in deserunt sapiente officiis, nulla veniam at, necessitatibus doloremque! Delectus hic esse eaque labore eius deleniti temporibus ipsam!
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
            <a href="https://faceBook.com" className="contact__social-link">
              <FaFacebookF/>
            </a>
            {/* <a href="https://faceBook.com" className="contact__scial-link">
              <FaFacebookF/>
            </a>
            <a href="https://faceBook.com" className="contact__scial-link">
              <FaFacebookF/>
            </a> */}
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