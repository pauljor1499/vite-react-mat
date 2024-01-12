import React from "react";
import "./Step4.scss";
import { Box, Button, Card, CardContent } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Step4 = ({ handleBack, handleSubmit }) => {
    const clickNextStep = () => {
        handleSubmit("Submitted");
    };

    return (
        <Box
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "2%",
            }}
        >
            <Button sx={{ mt: 5, height: 40 }} variant="contained" color="inherit" onClick={handleBack}>
                <ArrowBackIosIcon />
            </Button>
            <Card sx={{ width: "100%" }}>
                <CardContent>
                    <div className="preview-content">
                        <h4>MathWorld Classroom Test</h4>
                        <br />
                        <br />
                        <span className="content-title">Title</span>
                        <span className="content-details">Assignment 1</span>
                        <br />
                        <span className="content-title">Description</span>
                        <span className="content-details">Assignment Description</span>
                        <br />
                        <div className="content-item">
                            <div className="item-details">
                                <span className="content-title">Open on</span>
                                <span className="content-details">December 25, 2023</span>
                            </div>
                            <div className="item-details">
                                <span className="content-title">Close on</span>
                                <span className="content-details">December 25, 2023</span>
                            </div>
                        </div>
                        <br />
                        <span className="content-title">Assigned to</span>
                        <span className="content-details">• Algebra</span>
                    </div>
                </CardContent>
            </Card>
            <Button sx={{ mt: 5, height: 40 }} variant="contained" onClick={clickNextStep}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
};

export default Step4;
