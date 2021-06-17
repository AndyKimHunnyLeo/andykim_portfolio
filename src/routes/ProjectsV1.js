import React from 'react';
import './ProjectsV1.css';

const ProjectsV1 = () => {
  return (
    <section className='projects'>
      <div className='projects_title_container'>
        <h4 className='projects_title'>Projects</h4>
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
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open('https://dry-inlet-34380.herokuapp.com/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Dev_connector');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
        </div>
        <div class='project_container reverse'>
          <div className='description_container'>
            <h2 class='header'>Excel Helper</h2>
            <p className='description'>
              This website is for those of you who sick of copy and paste work
              from excel xlsx file. This website read xlsx file and build a
              table with a copy button. The row color will turn into different
              color so users can see which row did they copied. The data does
              not send it to anywhere therefore you don't need to worry about
              data leaking.
            </p>
            <div className='project_btn_container_new'>
              <button
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open('https://polarmushroom.github.io/excel-helper/');
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/excel-helper');
                }}>
                <i className='fa fa-github fa-2x icons'></i>
              </button>
            </div>
          </div>
          <div className='photo_container' id='excel_helper' />
        </div>
        <div class='project_container'>
          <div className='photo_container' id='rune_marker' />
          <div className='description_container'>
            <h2 class='header'>Rune Marker</h2>
            <p className='description'>
              Android application to manage runes in game called "summomers war"
              built with React Native. This app is for who always forgot which
              runes should they use Gem and GrindStone. User can create their
              rune clone in the app and check which rune need Gem and GrindStone
              most. It helps you to organize and optimize your rune wisely with
              limited gem and GrindStone.
            </p>
            <div className='project_btn_container_new'>
              <button
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open(
                    'https://play.google.com/store/apps/details?id=co.polarmushroom.rune_marker'
                  );
                }}>
                <i class='fas fa-desktop fa-2x icons'></i>
              </button>
              <button
                className='animation_btn_white_to_pink project_btn btn'
                onClick={() => {
                  window.open('https://github.com/PolarMushroom/Rune-Marker');
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
