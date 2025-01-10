import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
