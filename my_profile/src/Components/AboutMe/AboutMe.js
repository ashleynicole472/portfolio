import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render(){
        return (
            <div className="Aboutme-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="About-title">
                            About Myself :
                        </h3>
                        <hr className="seperate"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-9">
                        <h4 className="About-Ashley">Hey there,</h4>
                        <p className="Aboutme-text">
                        Im Ashley Taylor and I am a front-end developer.<br />
                        My joy for front-end development has to have come from always being involved with art throughout my entire life. As a child I loved painting
                        and drawing. During my highschool years, I took many Advanced Placement digtal photography, black and white photography,
                        painting, and pottry classes. <br />
                        Having been surrounded with art throughout my life, this has helped me when designing my own personal
                        projects, and having an eye for detail.<br />
                        I enjoy the challange and the rewarding feeling after overcoming large bumps in the road while coding.
                        Being able to use my critical thinking and problem solving skills all while creating applications that can truly
                        better other peoples lives is what I am passionate about.<br />
                        </p>
                        <p className="Aboutme-text">
                            Other then coding and art, I enjoy hanging out with friends, being outdoors in the beautiful San Diego weather,
                            traveling, gardening, music festival and playing with my dog.
                        </p>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;
