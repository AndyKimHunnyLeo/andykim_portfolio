import React from 'react';
import About from '../routes/About';
import Contact from '../routes/Contact';
import Home from '../routes/Home';
import Skills from '../routes/Skills';
import Navigation from './Navigation';

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default AppRouter;
