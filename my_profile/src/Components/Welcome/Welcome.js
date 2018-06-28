import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h1 className="display-3 welcome">Welcome</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
