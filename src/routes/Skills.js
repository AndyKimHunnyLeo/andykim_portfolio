import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills_container'>
        <h4 className='skills_title'>Front End</h4>
        <div className='skills_icon_container'>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/HTML.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>HTML</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/CSS.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>CSS</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/JavaScript.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>JavaScript</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://img.icons8.com/color/144/000000/typescript.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>TypeScript</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/React.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>React</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://img.icons8.com/color/144/000000/redux.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>Redux</span>
          </div>
        </div>
      </div>
      <div className='skills_container'>
        <h4 className='skills_title'>Backend End</h4>
        <div className='skills_icon_container'>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/MySQL.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>Redux</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/Node.png'
              alt='HTML'
              className='icon'
            />
            <span className='icon_name'>Redux</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/MongoDB.png'
              alt='MongoDB'
              className='icon'></img>
            <span className='icon_name'>MongoDB</span>
          </div>
          <div className='icon_container'>
            <img
              src='https://puredevper.s3.amazonaws.com/ExpressJS.png'
              alt='MongoDB'
              className='icon'></img>
            <span className='icon_name'>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
