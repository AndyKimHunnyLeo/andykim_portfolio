import React from 'react';
import About from '../routes/About';
import Contact from '../routes/Contact';
import Home from '../routes/Home';
import Projects from '../routes/Projects';
import Skills from '../routes/SkillsV2';
import Navigation from './Navigation';

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default AppRouter;
