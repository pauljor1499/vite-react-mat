import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Step1.scss";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const ForgotPassword = ({ nextStep }) => {
    const [email, setEmail] = useState("");

    const handleNextStep = () => {
        nextStep(email);
    };

    return (
        <div className="forgot-password-step1-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Forgot Password?</h3>
                    <p>Please enter the school email you use to login in MathMatters.</p>
                    <TextField
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        label="Email"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleNextStep}>
                        Request Password Reset
                    </Button>
                    <Link component={ReactRouterLink} to="/login" variant="body2">
                        Back to Sign in
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
