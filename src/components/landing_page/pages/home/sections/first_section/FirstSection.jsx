import React from "react";
import "./FirstSection.scss";
import Button from "@mui/material/Button";
import BannerImage from "../../../../../../assets/landing_page/section_1/banner.jpg";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
    const navigate = useNavigate();

    return (
        <div className="first-section-content">
            <div className="content-message">
                <h1>UNLOCK THE POWER OF YOUR FULL POTENCIAL</h1>
                <p>You'll definitely find the right solution for your math journey.</p>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ color: "#ffff" }}
                    onClick={(e) => {
                        navigate("/register");
                    }}
                >
                    Register
                </Button>
            </div>
            <div className="content-image">
                <img src={BannerImage} alt="banner" />
            </div>
        </div>
    );
};

export default FirstSection;
