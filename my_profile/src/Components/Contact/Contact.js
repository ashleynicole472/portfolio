import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render(){
        return(
            <div className="Contact-container animated fadeIn">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
                        <h1>first row</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
                        <h1>second row</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
                        <h1>third row</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
                        <i className="fab fa-linkedin-in"></i>
                        <a href="https://www.dropbox.com/s/1pkim2l6affyfu7/AshleyTaylorsResume627.pdf?dl=0" target="#">Resume</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
