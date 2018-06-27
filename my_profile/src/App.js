import React, { Component } from 'react';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Contact from './Components/Contact/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <AboutMe />
            <Contact />
        </div>
    );
  }
}

export default App;
