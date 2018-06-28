import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <div className="row w3-center w3-animate-bottom">
                    <div className="col-md-12">
                        <h1>My Projects</h1> <h5> View more projects on my <a href="http://www.github.com/ashleynicole472" target="#"><strong>GitHub</strong><i className="fab fa-github"></i></a></h5>
                        <hr />
                    </div>
                </div>
                <div className="row cards-center w3-center w3-animate-bottom">
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-light mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-primary mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-success mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-danger mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cards-center w3-center w3-animate-bottom">
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-warning mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-info mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-light mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="card border-primary mb-3">

                                <div className="card-body">
                                    <h4 className="card-title">Light card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">My project
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
