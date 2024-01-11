import React from "react";
import "./Section_2.scss";
import VisionImage from "../../../../../assets/about_page/vision.png";
import BlueCheck from "../../../../../assets/about_page/blueCheck.png";

const section1 = () => {
    return (
        <div className="vision-page-content">
            <div className="vision-image">
                <img src={VisionImage} alt="vision" />
            </div>
            <div className="vision-content">
                <h2>Our Vision</h2>
                <p>
                    Our vision is to be the leading catalyst for a world where learning knows no bounds. We envision a
                    future where individuals, regardless of their background or location, have access to a diverse and
                    enriching learning experience that propels them towards their fullest potential.
                </p>
                <div className="content-checks">
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Empower Individuals</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Bridge Educational Gaps</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Facilitate Professional Advancement</span>
                    </div>
                    <div className="check-item">
                        <img src={BlueCheck} alt="bluecheck" />
                        <span>Global Learning Hub</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default section1;
