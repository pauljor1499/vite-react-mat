import React from "react";
import Button from "@mui/material/Button";
import "./Section_4.scss";
import { useNavigate } from "react-router-dom";

const FifthSection = () => {
    const navigate = useNavigate();

    return (
        <div className="section4-content">
            <div className="content-title">
                <h2>Unlock Your Potential with MathMatters. Become a Student Today!</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Join Now
                </Button>
            </div>
        </div>
    );
};

export default FifthSection;
