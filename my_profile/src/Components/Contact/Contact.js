import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render(){
        return(
            <div className="Contact-container animated fadeIn">
                <div className="row">
                    <div className="col-md-12 ">
                        <h1 className="Title-Text contact-title">Get in touch</h1>
                    </div>
                </div>
                <hr />
                <div className="row icon-row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-8 icon-list">
                        <a href="#" target="#">
                            <i className="fab far fa-envelope"></i>
                        </a>
                        <a href="https://github.com/ashleynicole472" target="#">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/0ashleytaylor/" Target="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.dropbox.com/s/t1g10yvti4d9j1r/AshleyTaylorsResume7118.pdf?dl=0" target="#">
                            <i className="fab far fa-file"></i>
                        </a>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default Contact;
