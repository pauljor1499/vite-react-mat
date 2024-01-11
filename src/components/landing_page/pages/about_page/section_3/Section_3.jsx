import React from "react";
import "./Section_3.scss";
import ValuesImage from "../../../../../assets/about_page/values.png";
import BlueCheck from "../../../../../assets/about_page/blueCheck.png";

const section1 = () => {
    return (
        <div className="values-page-content">
            <div className="values-content">
                <h2>Our Values</h2>
                <p>
                    Our core values serve as the foundation for our commitment to creating a learning management website
                    that not only meets the educational needs of our users but also fosters a community-driven culture
                    of growth and achievement.
                </p>
                <div className="content-checks">
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Learning Excellence</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Accessibility for All</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Innovation and Adaptability</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Integrity and Transparency</span>
                    </div>
                </div>
            </div>
            <div className="values-image">
                <img src={ValuesImage} alt="values" />
            </div>
        </div>
    );
};

export default section1;
