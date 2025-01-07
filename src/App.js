import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Contribution from './sections/contribution';
import Contact from './sections/Contact';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Card/>
      <Skills/>
      <Contribution/>
      <Contact/>
    </div>
  );
}

export default App;
