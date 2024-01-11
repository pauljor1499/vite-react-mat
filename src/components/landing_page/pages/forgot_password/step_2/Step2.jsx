import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Step2.scss";
import Link from "@mui/material/Link";

const ForgotPassword = ({ setEmail, nextStep, previousStep }) => {
    const [totalSeconds, setTotalSeconds] = useState(10); // seconds

    const generateNewCode = () => {
        setTotalSeconds(10);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrease the total seconds by 1 only if it's greater than 0
            if (totalSeconds > 0) {
                setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);
            }
        }, 1000);
        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, [totalSeconds]); // Re-run the effect when totalSeconds changes

    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format minutes and seconds as mm:ss
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const countDown = () => {
        if (totalSeconds === 0) {
            return (
                <Button variant="outlined" size="small" color="info" sx={{ width: 150 }} onClick={generateNewCode}>
                    Get another code
                </Button>
            );
        } else {
            return <span> {`Code will expire after: ${formattedTime}`}</span>;
        }
    };

    return (
        <div className="forgot-password-step2-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Reset code</h3>
                    <p>
                        Please enter the 6-digit verification code from <b>{setEmail}</b>
                    </p>
                    <div className="content-code">
                        <TextField fullWidth />
                        <TextField fullWidth />
                        <TextField fullWidth />
                        <TextField fullWidth />
                        <TextField fullWidth />
                        <TextField fullWidth />
                    </div>
                    {countDown()}
                    <Button variant="contained" color="primary" fullWidth onClick={nextStep}>
                        Submit Code
                    </Button>
                    <Link sx={{ cursor: "pointer" }} onClick={previousStep} variant="body2">
                        Back
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
