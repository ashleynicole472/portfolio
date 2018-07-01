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
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3 col-sm-4">
                        <h1>hey hi hello</h1>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                        <h1>hey hi hello</h1>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                        <h1>hey hi hello</h1>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                        <i className="fab fa-linkedin-in"></i>
                        <a href="https://www.dropbox.com/s/t1g10yvti4d9j1r/AshleyTaylorsResume7118.pdf?dl=0"
                            target="#">Resume
                        </a>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default Contact;
