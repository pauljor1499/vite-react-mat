import React from "react";
import "./PageError.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageError = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="page-error-content">
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed, changed, or temporarily unavailable.</p>
            <Button variant="outlined" color="primary" onClick={handleBack}>
                Go Back
            </Button>
        </div>
    );
};

export default PageError;
