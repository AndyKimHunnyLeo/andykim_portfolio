import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className='about'>
      <div className='about_container'>
        <div className='about_text_container'>
          <h1 className='about_name'>
            Working With Passion While Exploring The World
          </h1>
          <h3 className='about_description'>
            I enjoy everything that I do. I am always ready to face challenges
            and get along with people very well. I believe in vision and action.
            I learn from my mistakes. I am ready to take any challenge required
            to perform my job. I enjoy everything that I do. I am always ready
            to face challenges and get along with people very well.
          </h3>
        </div>
        <div className='about_text_container' id='second_component'>
          <div className='content'>
            <h3 className='about_second_title'>
              Any Type Of Query & Discussion.
            </h3>
            <p style={{ color: '#464d65', marginBottom: '0px' }}>
              Let's talk with me
            </p>
            <Link
              activeClass='onClick'
              to='contact'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              className='about_email'>
              <p>Hyungseok.kim@outlook.com</p>
              <i class='fas fa-arrow-right'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
