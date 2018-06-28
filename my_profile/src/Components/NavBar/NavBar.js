import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Ashley Taylor</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/About">About<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar;
