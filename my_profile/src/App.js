import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import Welcome from './Components/Welcome/Welcome.js';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
// import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <Welcome />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
  }
}

export default App;
