import React from 'react';
import './Projects.css';

const Projects = () => {
  // const demoButton = () => {
  //   console.log('demo');
  // };

  // const githubButton = () => {
  //   console.log('github');
  // };
  return (
    <section className='projects'>
      <div className='projects_title_container'>
        <h4 className='projects_title'>This is the Projects I did</h4>
      </div>
      <div className='projects_project_container'>
        <div className='project main_content' id='main_content'>
          <div className='project_description_container main'>
            <h4 className='description_title'>Face Mask</h4>
            <p className='description'>
              It is full stack project. This website is built to help kiwi
              during this pandemic. It provides online sales of anti-epidemic
              materials such as facemask, hand sanitizer. Users can shop online
              and check out the orders. Merchants can manage orders and provide
              delivery.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://www.facemask.nz/index');
                }}>
                <i class='fas fa-desktop fa-2x icons main_project_icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  alert('Sorry source code is unavailable for this project');
                }}>
                <i className='fa fa-github fa-2x icons main_project_icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='project content2' id='content2'>
          <div className='project_description_container sub'>
            <h4 className='description_title'>Dev Connector</h4>
            <p className='description'>
              Social network for developers. Built all front-end and back-end
              everything from the stretch. Application using Node.js, Express,
              React, Redux and MongoDB. ES6+ features such as React Hooks,
              Async/Await are used.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://dry-inlet-34380.herokuapp.com/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Dev_connector');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='project content3' id='content3'>
          <div className='project_description_container sub'>
            <h4 className='description_title'>Hearts Alot</h4>
            <p className='description'>
              They located in south Korea and asked for demo website of their
              shopping mall. I'm still working on it.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://polarmushroom.github.io/hearts_a_lot/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/hearts_a_lot');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='project content4' id='content4'>
          <div className='project_description_container sub'>
            <h4 className='description_title'>Messege Me</h4>
            <p className='description'>
              Messenger application template works only with moblie size window.
              Built with pure html and CSS.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open(
                    'https://polarmushroom.github.io/kakao_messenger/'
                  );
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open(
                    'https://github.com/PolarMushroom/kakao_messenger'
                  );
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='project content5' id='content5'>
          <div className='project_description_container sub'>
            <h4 className='description_title'>Momentum</h4>
            <p className='description'>
              The website is built with html,CSS and vanilla javascript. Built
              Todo List DOM. Fetch Weather data from OpenWeatherMap API
              according to user's current geolocation.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://polarmushroom.github.io/Momentum/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Momentum');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='project content6' id='content6'>
          <div className='project_description_container sub'>
            <h4 className='description_title'>Twitter</h4>
            <p className='description'>
              Twitter clone prototype with basic features such as authentication
              and real-time commit. Built with firebase.
            </p>
            <div className='project_btn_container'>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://polarmushroom.github.io/twitter_clone/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn side_projects'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/twitter_clone');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
