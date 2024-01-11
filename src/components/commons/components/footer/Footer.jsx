import React from "react";
import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-body">
                <div className="content">
                    <div className="about">
                        <h3>MATHMATTERS</h3>
                        <p>
                            At MathMatters, we hold the belief that everyone, no matter their age,
                            gender, or race, possesses a natural aptitude for comprehending
                            mathematical concepts. Based on this foundation, we aim to create a
                            setting for learning that recognizes and fosters each person's unique
                            abilities, encouraging them to develop their skills to the fullest
                            extent possible.
                        </p>
                    </div>
                </div>

                <div className="content">
                    <div className="tests">
                        <h3>TESTS</h3>
                        <div className="item"> MathMatters Test </div>
                        <div className="item"> Scholastic Aptitude Test </div>
                        <div className="item"> American College Test </div>
                        <div className="item"> Texas Success Initiative </div>
                    </div>
                </div>

                <div className="content">
                    <div className="pages">
                        <h3>PAGES</h3>
                        <div className="item"> Home </div>
                        <div className="item"> About</div>
                        <div className="item"> Contact </div>
                    </div>
                </div>

                <div className="content">
                    <div className="socials">
                        <h3>FOLLOW US</h3>
                        <div className="social-links">
                            <div className="social-item">
                                <FaFacebook className="item-icon" />
                            </div>
                            <div className="social-item">
                                <FaTwitter className="item-icon" />
                            </div>
                            <div className="social-item">
                                <FaInstagram className="item-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>&copy; 2023 by MathMatters. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
