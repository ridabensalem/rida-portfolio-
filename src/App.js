import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Experience />
    </main>
  );
}

export default App;
