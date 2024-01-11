import React from "react";
import "./ThirdSection.scss";
import CheckIcon from "../../../../../../assets/landing_page/section_3/check.png";
import KidsIcon from "../../../../../../assets/landing_page/section_3/kids.png";

const ThirdSection = () => {
    return (
        <div className="third-section-content">
            <div className="content-title">
                <h1>Drive outcomes through social learning experiences</h1>
            </div>
            <div className="content-description">
                <span>
                    Together, let us explore the wonder of mathematics and let us create a better world for our
                    generation and for the generations to come.
                </span>
            </div>
            <div className="content-details">
                <div className="left-details">
                    <div className="item">
                        <div className="item-image">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div className="item-details">
                            <h4>Personalized user experience</h4>
                            <span>
                                Adaptive assessments and quizzes that reflect a learner’s performance throughout a
                                course will enable users to prioritize improvement areas.
                            </span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-image">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div className="item-details">
                            <h4>Create intriguing tasks and content</h4>
                            <span>
                                {" "}
                                Make the course interesting with creating unique course materials and providing
                                assignments.{" "}
                            </span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-image">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div className="item-details">
                            <h4>Centralized learning materials</h4>
                            <span>
                                {" "}
                                Having a space for different types of learning materials also gives way to blended
                                learning.{" "}
                            </span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-image">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div className="item-details">
                            <h4>Course management</h4>
                            <span>
                                Easily deliver course content to learners that makes course creation as simple and
                                straightforward as possible.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right-details">
                    <img src={KidsIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
