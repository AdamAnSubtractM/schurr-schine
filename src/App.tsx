import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;