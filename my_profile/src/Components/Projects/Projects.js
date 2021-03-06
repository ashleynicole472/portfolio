import React, { Component } from 'react';
import RubyBlog from './Images/ruby_blog.png';
import JamJob from './Images/jam_job.png';
import Hamburger from './Images/hamburgerapp.png';
import FitFoodie from './Images/fitfoodie.png';
import Meme from './Images/memegenerator.png';
import Portfolio from './Images/portfolio.png';
import './Projects.css';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container animated fadeIn">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="Title-Text">My Projects</h1>
                        <hr />
                    </div>
                </div>
                <div className="row cards-center">
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-success mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        alt="my project"
                                        src={FitFoodie} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://fit-foodie.herokuapp.com/" target="#">Fit-Foodie<br /> using Edamam API to allow users to search for recipes. Built using ReactJS, Bootstrap, and CSS</a>

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
                                        alt="my project"
                                        src={JamJob} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/JamAndJobSearch" target="#">Jam And Job Search. <br/ >Built using ReactJS, Brands in Town, Spotify and GitHub Job API</a>
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
                                        alt="my project"
                                        src={Hamburger} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://build-a-hamburger.herokuapp.com/" target="#">Build your own Hamburger. <br /> Built using ReactJS <br/> Deployed to Heroku</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cards-center">
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-light mb-3">

                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        alt="my project"
                                        src={RubyBlog} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://ashleysblog.herokuapp.com/" target="#">My Blog App <br /> Built using Ruby On Rails</a>
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
                                        alt="my project"
                                        src={Portfolio} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                <a href="https://github.com/ashleynicole472/portfolio" target="#">My own personal portfolio.<br /> Built using ReactJS, CSS, and BootStrap</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="container">
                            <div className="card border-warning mb-3">
                                <div className="card-body">
                                    <img
                                        className="project-image"
                                        alt="my project"
                                        src={Meme} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://meme-genorater.herokuapp.com/" target="#">Meme Generator. <br/> built using an external API and ReactJS <br /> Deployed to Heroku</a>
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
