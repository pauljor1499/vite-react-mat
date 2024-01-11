import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import "./Step4.scss";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ previousStep }) => {
    const navigate = useNavigate();

    return (
        <div className="forgot-password-step4-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Password successfully changed</h3>
                    <p>You successfully changed your password. You can now sign in using your new password.</p>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={(e) => {
                            navigate("/login");
                        }}
                    >
                        Sign In
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
