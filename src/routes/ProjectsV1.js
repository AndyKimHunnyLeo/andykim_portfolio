import React from 'react';
import './ProjectsV1.css';

const ProjectsV1 = () => {
  return (
    <section className='projects'>
      <div className='projects_title_container'>
        <h4 className='projects_title'>This is the Projects I did</h4>
      </div>

      <div className='projects_container'>
        <div class='project_container'>
          <div className='photo_container' id='dev_connector' />
          <div className='description_container'>
            <h2 class='header'>Dev Connector</h2>
            <p className='description'>
              Social network for developers. Built all front-end and back-end
              everything from the stretch. Application using Node.js, Express,
              React, Redux and MongoDB. ES6+ features such as React Hooks,
              Async/Await are used.
            </p>
            <div className='project_btn_container_new'>
              <button
                className='animation_btn_white_to_pink btn'
                onClick={() => {
                  window.open('https://dry-inlet-34380.herokuapp.com/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn '
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Dev_connector');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div class='project_container'>
          <div className='description_container'>
            <h2 class='header'>Dev Connector</h2>
            <p className='description'>
              Social network for developers. Built all front-end and back-end
              everything from the stretch. Application using Node.js, Express,
              React, Redux and MongoDB. ES6+ features such as React Hooks,
              Async/Await are used.
            </p>
            <div className='project_btn_container_new'>
              <button
                className='animation_btn_white_to_pink btn'
                onClick={() => {
                  window.open('https://dry-inlet-34380.herokuapp.com/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn '
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Dev_connector');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
          <div className='photo_container' id='dev_connector' />
        </div>
        <div class='project_container'>
          <div className='photo_container' id='dev_connector' />
          <div className='description_container'>
            <h2 class='header'>Dev Connector</h2>
            <p className='description'>
              Social network for developers. Built all front-end and back-end
              everything from the stretch. Application using Node.js, Express,
              React, Redux and MongoDB. ES6+ features such as React Hooks,
              Async/Await are used.
            </p>
            <div className='project_btn_container_new'>
              <button
                className='animation_btn_white_to_pink btn'
                onClick={() => {
                  window.open('https://dry-inlet-34380.herokuapp.com/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink btn '
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Dev_connector');
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

export default ProjectsV1;
