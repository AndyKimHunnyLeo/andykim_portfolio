import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToBotton = () => {
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;

    scroll.scrollToBottom();
  };

  const openResume = () => {
    window.open(
      'https://drive.google.com/file/d/1qyEwaA3jjAOCnCGI9zemUmZ-H7ZbGBoo/view?usp=sharing',
      '_blank'
    );
  };
  return (
    <div className='home'>
      <div className='container'>
        <div className='text_container'>
          <h1 className='home_name'>I'm Software engineer Andy Kim</h1>
          <h3 className='content'>
            I am Andy Kim. I have done B.Tech with Computer and Moblie System as
            my major subject from AUT University. Recently, my passion lies in
            web application development including both the front end and the
            back end. I fell in love with modern JavaScript.
            <br></br>
            <br></br>I enjoy everything that I do. I am always ready to face
            challenges and get along with people very well. I believe in vision
            and action. I learn from my mistakes. I am ready to take any
            challenge required to perform my job.
          </h3>
          <div className='btn_container'>
            <button className='resume_btn btn' onClick={openResume}>
              Resume
            </button>
            <button className='contact_btn btn' onClick={scrollToBotton}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
