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
      <h2 className="section__tittle">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container gid">
        <div className="contact__data">
          <h3 className="contact__tital">Don't be Shy !</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptate quam ipsa in deserunt sapiente officiis, nulla veniam at, necessitatibus doloremque! Delectus hic esse eaque labore eius deleniti temporibus ipsam!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Mail me</span>
                <span className='info__desc'>udeshidumina@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className='info__title'>Call Me</span>
                <span className='info__desc'>(+94) 715808356</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact