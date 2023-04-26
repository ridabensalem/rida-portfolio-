import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}

export default App;
