import React from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';

const Navigation = () => {
  const nav_slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_menuList');
    const nav_links = document.querySelectorAll('.nav_text');

    // toggle Nav
    nav.classList.toggle('nav_active');

    // Animation Links
    nav_links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `nav_link_fade 0.5s ease forwards ${index / 5}s`;
      }
    });

    burger.classList.toggle('toggle');
  };

  const menuClicked = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_menuList');
    nav.classList.remove('nav_active');
    burger.classList.remove('toggle');
  };
  return (
    <nav className='nav'>
      <ul className='nav_menuList'>
        <Link
          activeClass='onClick'
          to='home'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          onClick={menuClicked}
          className='nav_text'>
          <btn className='text'>Home</btn>
        </Link>
        <Link
          activeClass='onClick'
          to='about'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          onClick={menuClicked}
          className='nav_text'>
          <span className='text'>About</span>
        </Link>
        <Link
          activeClass='onClick'
          to='skills'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          onClick={menuClicked}
          duration={500}
          className='nav_text'>
          <span className='text'>Skills</span>
        </Link>
        <Link
          activeClass='onClick'
          to='contact'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          onClick={menuClicked}
          className='nav_text'>
          <span className='text'>Contact</span>
        </Link>
      </ul>
      <div onClick={nav_slide} className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
};

export default Navigation;
