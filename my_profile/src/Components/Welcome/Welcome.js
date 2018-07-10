import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
    render(){
        return(
            <div className="Welcome-Container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h1 className="welcome">Welcome</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
