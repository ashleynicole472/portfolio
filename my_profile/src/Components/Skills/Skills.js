import React, { Component } from 'react';
import NapD from './Images/skills.jpeg';
import JS from './Images/js.png';
import Reactjs from './Images/react.png';
import Ruby from './Images/rb.png';
import Rails from './Images/rails.png';
import html5 from './Images/html.png';
import css3 from './Images/css.png';
import BootStrap from './Images/boot.png';
import GIT from './Images/github.png';
import Human from './Images/human.png';

import './Skills.css';

class Skills extends Component {
    render(){
        return(
            <div className="animated fadeIn">
                <div className="Skills-container">
                    <div className="row">
                        <div claccName="col-md-12">
                            <h1 className="Title-Text">Skillset</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-success mb-3 skills rounded-circle">
                                <div className="card-body ">
                                    <img
                                        className="skills-icon-image"
                                        src={JS} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-info mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={Reactjs} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-success mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={Ruby} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-info mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={Rails} />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-info mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={html5} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-success mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={css3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-info mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={BootStrap} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card cards-bg text-white border-success mb-3 skills rounded-circle">
                                <div className="card-body">
                                    <img
                                        className="skills-icon-image"
                                        src={GIT} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
