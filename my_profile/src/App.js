import React, { Component } from 'react';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    );
  }
}

export default App;
