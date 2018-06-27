import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render(){
        return(
            <div className="welcome-page">
                <div className="jumbotron">
                    <h1 className="display-3 welcome">Welcome</h1>
                </div>
            </div>
        )
    }
}

export default Welcome
