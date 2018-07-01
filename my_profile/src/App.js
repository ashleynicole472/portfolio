import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.js';
import Welcome from './Components/Welcome/Welcome.js';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import './bootstrap.min.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                    <Route path="/" component={Welcome} exact />
                    <Route path="/" component={AboutMe} exact />
                    <Route path="/About" component={AboutMe} />
                    <Route path="/Skills" component={Skills}/>
                    <Route path="/Projects" component={Projects}/>
                    <Route path="/Contact" component={Contact}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
