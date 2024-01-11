import React from "react";
import "./Section_1.scss";
import MissionsImage from "../../../../../assets/about_page/missions.png";
import BlueCheck from "../../../../../assets/about_page/blueCheck.png";

const section1 = () => {
    return (
        <div className="mission-page-content">
            <div className="mission-content">
                <h2>Our Mission</h2>
                <p>
                    At MathMatters, our mission is to empower individuals and organizations by providing a dynamic and
                    user-friendly learning management platform. We strive to foster a culture of continuous learning,
                    where knowledge is easily accessible and tailored to the unique needs of our users. Our commitment
                    is to create a collaborative environment that facilitates skill development, career advancement, and
                    personal growth.
                </p>
                <div className="content-checks">
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Facilitate Accessibility</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Promote Lifelong Learning</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Enhance Skills Development</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Adaptability and Innovation</span>
                    </div>
                </div>
            </div>
            <div className="mission-image">
                <img src={MissionsImage} alt="mission" />
            </div>
        </div>
    );
};

export default section1;
