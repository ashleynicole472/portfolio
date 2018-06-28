import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersName: '',
            finalUsersName: '',
            isNameEntered: true
        }
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.setUsersName = this.setUsersName.bind(this);
    }

    nameHandleChange = (event) => {
        console.log("Inside name text field");
        this.setState({
            userName: event.target.value
        })
    }

    setUsersName = () => {
        this.setState({
            finalUsersName: this.state.userName
        })
    }

    render(){
        return(
            <div className="Welcome-Container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="welcome animated infinite bounce">Welcome, {this.state.finalUsersName}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                onChange={this.nameHandleChange}
                                className="form-control form-control-lg name-field"
                                type="text"
                                placeholder="Enter your name"
                                id="inputLarge" />
                        </div>

                        <button
                            onClick={this.setUsersName}
                            type="button"
                            className="btn btn-success btn-lg btn-block animated flipInX">Enter
                        </button>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
