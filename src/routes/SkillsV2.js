import React from 'react';
import './SkillsV2.css';

const SkillsV2 = () => {
  return (
    <section className='skills'>
      {/* <div className='skills_container'> */}
      <div className='skills_container_title'>
        <h3 className='skills_title'>The Skills I have</h3>
      </div>
      <div className='skills_container_skills_container' data-aos='fade-down'>
        <div className='skills_container_skills'>
          <div className='box_container'>
            <div className='skill_box'>
              <div className='skill_box_icon_container'>
                <img
                  src='https://img.icons8.com/plasticine/100/000000/html.png'
                  alt='front-end'
                  className='skill_box_icon'
                />
              </div>

              <h4 className='skill_box_title'>Front End</h4>
              <p className='skill_box_content'>
                My javascript skills up to date till ES6 such as promise and
                async/sync function. I also up to on latest trend of web trend.
                I am comfortable with technology like redux or make an HTTP
                request with REST API.
              </p>
            </div>
          </div>
          <div className='box_container'>
            <div className='skill_box'>
              <div className='skill_box_icon_container'>
                <img
                  src='https://img.icons8.com/nolan/96/api-settings.png'
                  alt='back-end'
                />
              </div>
              <h4 className='skill_box_title'>Back End</h4>
              <p className='skill_box_content'>
                I use MERN for most of my projects. Design schema often comes to
                the base of business logic. I design the schema ver carefully
                and communicate with MongoDB using nodeJs server with express. I
                have a strong fundamental of CRUD operations.
              </p>
            </div>
          </div>
          <div className='box_container'>
            <div className='skill_box'>
              <div className='skill_box_icon_container'>
                <img
                  src='https://img.icons8.com/color/96/000000/git.png'
                  alt='git'
                />
              </div>
              <h4 className='skill_box_title'>Others</h4>
              <p className='skill_box_content'>
                Not only programming skills know how to work as a team is
                required for programmers. I fully understand how agile
                development works and I'm fully comfortable to make a version
                control with git.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};

export default SkillsV2;
