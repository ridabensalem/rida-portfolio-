import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
