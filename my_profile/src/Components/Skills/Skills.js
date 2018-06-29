import React, { Component } from 'react';
import NapD from './Images/skills.jpeg';
import './Skills.css';

class Skills extends Component {
    render(){
        return(
            <div className="Skills-container animated fadeIn">
                <div className="row">
                    <div claccName="col-md-12">
                        <h1 className="Skills-title">My Skills</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-success mb-3 skills">
                            <div className="card-header">JavaScrip
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-info mb-3 skills">
                            <div className="card-header">ReactJS
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-success mb-3 skills">
                            <div className="card-header">Ruby
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-info mb-3 skills">
                            <div className="card-header">Ruby On Rails
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
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
                        <div className="card text-white border-success mb-3 skills">
                            <div className="card-header">HTML
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-info mb-3 skills">
                            <div className="card-header">CSS
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-success mb-3 skills">
                            <div className="card-header">BootStrap
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-info mb-3 skills">
                            <div className="card-header">Material UI
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card text-white border-info mb-3 skills last">
                            <div className="card-header">Human
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
