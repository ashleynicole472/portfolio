import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>My Projects</h1> <p> More to view on my GitHub <i className="fab fa-github"></i></p>
                        <hr />
                    </div>
                </div>
                <div className="row cards-center">
                    <div className="col-sm-3">
                        <div className="card border-light mb-3">
                            <div className="card-header">Project
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-primary mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-success mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-danger mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cards-center">
                    <div className="col-sm-3">
                        <div className="card border-warning mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-info mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-light mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-primary mb-3">
                            <div className="card-header">Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Light card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
