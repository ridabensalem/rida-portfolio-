import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
