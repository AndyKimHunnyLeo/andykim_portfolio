import React from 'react';
import './Home.css';
import CV from '../resources/CV.pdf';

const Home = () => {
  const scrollToBotton = () => {
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;

    scroll.scrollToBottom();
  };

  return (
    <div className='home'>
      <div className='home_container'>
        <div className='text_container'>
          <h1 className='home_name'>I'm Software engineer Andy Kim</h1>
          <h3 className='content'>
            I am Andy Kim. I have done B.Tech with Computer and Moblie System as
            my major subject from AUT University. I have strong passion lies in
            web application development including both the front end and the
            back end.
          </h3>
          <div className='btn_container'>
            <a
              className='animation_btn_pink_to_red btn home_btns'
              href={CV}
              alt='CV'
              target='_blank'
              rel='noreferrer'>
              Resume
            </a>
            <button
              className='animation_btn_white_to_pink btn home_btns'
              onClick={scrollToBotton}
              id='hire'>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
