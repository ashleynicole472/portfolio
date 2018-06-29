import React, { Component } from 'react';
import NapD from './Images/skills.jpeg';
import JS from './Images/js.png';
import Reactjs from './Images/react.png';
import Ruby from './Images/ruby.png';
import Rails from './Images/rails.png';
import html5 from './Images/html.png';
import css3 from './Images/css.png';
import BootStrap from './Images/boot.png';
import GIT from './Images/github.png';

import './Skills.css';

class Skills extends Component {
    render(){
        return(
            <div className="Skills-container animated fadeIn">
                <div className="row">
                    <div claccName="col-md-12">
                        <h1 className="Skills-title">Skillset</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-success mb-3 skills">
                            <div className="card-header">JavaScrip
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-info mb-3 skills">
                            <div className="card-header">ReactJS
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-success mb-3 skills">
                            <div className="card-header">Ruby
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-info mb-3 skills">
                            <div className="card-body">
                                <img
                                    className="skills-icon-image"
                                    src={Rails} />
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <img
                            className="skills-image"
                            src={NapD} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-info mb-3 skills">
                            <div className="card-header">HTML
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-success mb-3 skills">
                            <div className="card-header">CSS
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-info mb-3 skills">
                            <div className="card-header">BootStrap
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-success mb-3 skills">
                            <div className="card-header">Git / GitHub
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card cards-bg text-white border-info mb-3 skills last">
                            <div className="card-header">Being Human
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
