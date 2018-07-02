import React, { Component } from 'react';
import Me from './Images/Me.jpg';
import './AboutMe.css';


class AboutMe extends Component {
    render(){
        return (
            <div className="Aboutme-container animated fadeIn">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="Title-Text About-title">
                            About Myself
                        </h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <h4 className="About-Ashley">Hey there,</h4>
                        <p className="Aboutme-text">
                        Im Ashley Taylor and Im a San Diego, CA based front-end developer.<br />
                        My joy for front-end development has to have come from always being involved with art throughout my entire life. As a child I loved painting
                        and drawing. During my highschool years, I took many Advanced Placement classes such as digtal photography, black and white photography,
                        painting, and pottry. <br />
                        Having been surrounded with art throughout my life, this has helped me when designing my own personal
                        projects, and having an eye for detail.</p>
                    </div>
                    <div className="col-md-4 aboutMe-margin">
                    <p className="Aboutme-text">
                        I enjoy the challange and the rewarding feeling after overcoming large bumps in the road while coding.
                        Being able to use my critical thinking and problem solving skills all while creating applications that can truly
                        better other peoples lives is what I am passionate about.<br />
                        When Im not coding, I enjoy hanging out with friends, being outdoors in the beautiful San Diego weather,
                        traveling, gardening, music festival and playing with my dog.
                        </p>
                    </div>
                    <div className="col-md-4 aboutMe-margin">
                        <img src={Me}
                            className="profile-pic"
                            alt="Ashley"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;
