import React from 'react' ;
import Profile from "../../assets/home1.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import "./home.css";


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Udesh Indumina</span> Software Engineer
          </h1>
          <p className='home__description'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos adipisci optio quod, vitae neque dicta fugiat nisi quos cumque nesciunt nam necessitatibus hic placeat, ea et eligendi quibusdam doloribus?
          </p>
          <Link to='/about'className='button'>
            More About me{''}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>

          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home