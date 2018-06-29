import React, { Component } from 'react';
import RubyBlog from './Images/ruby_blog.png';
import JamJob from './Images/jam_job.png';
import Hamburger from './Images/hamburgerapp.png';
import Shakepear from './Images/shakespear.png';
import Meme from './Images/memegenerator.png';
import Portfolio from './Images/portfolio.png';
import './Projects.css';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <div className="row w3-center w3-animate-bottom">
                    <div className="col-md-12">
                        <h1 className="myprojects">My Projects</h1>
                        <h5 className="gitHub"> View more projects on my <a href="http://www.github.com/ashleynicole472" target="#"><strong>GitHub</strong><i className="fab fa-github"></i></a></h5>
                        <hr />
                    </div>
                </div>
                <div className="row cards-center w3-center w3-animate-bottom">
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-light mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={JamJob} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/JamAndJobSearch" target="#">Jam And Job Search. Built using ReactJS, using Brands in Town, Spotify and GitHub Job API</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-primary mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={Hamburger} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/HamburgerApp" target="#">Build your own Hamburger. Built using ReactJS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-light mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={RubyBlog} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://ashleysblog.herokuapp.com/" target="#">My Blog App Built using Ruby On Rails</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cards-center w3-center w3-animate-bottom">
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-warning mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={Meme} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://github.com/ashleynicole472/memeGenerator" target="#">Meme Generator built using an external API and ReactJS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-info mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={Portfolio} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/portfolio" target="#">My own personal portfolio was built using ReactJS, CSS, and BootStrap</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-success mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        src={Shakepear} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/Shakespeare-Translator" target="#">Translate modern English to Shakespeare using a Shakespeare API. Built using ReactJS</a>

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
