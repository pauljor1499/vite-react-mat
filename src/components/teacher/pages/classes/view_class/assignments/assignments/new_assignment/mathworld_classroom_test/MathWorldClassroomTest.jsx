import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../../../../../../commons/components/breadcrumbs/Breadcrumbs";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";
import YesNoOption from "../../../../../../../../commons/components/dialog/YesNoOption";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const steps = ["Title and Description", "Questions", "Test Settings", "Preview"];

export default function HorizontalLinearStepper() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [showYesNoOption, setShowYesNoOption] = useState(false);
    const handleCancel = () => {
        setShowYesNoOption(true);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleNext = () => {
        if (activeStep !== steps.length) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleSubmit = (data) => {
        console.log(data);
    };
    const handleCancelOperation = () => {
        navigate(-1);
    };

    const stepperContent = () => {
        switch (activeStep) {
            case 1:
                return <Step1 handleCancel={handleCancel} stepController={stepController} />;
            case 2:
                return <Step2 handleBack={handleBack} stepController={stepController} />;
            case 3:
                return <Step3 handleBack={handleBack} stepController={stepController} />;
            case 4:
                return <Step4 handleBack={handleBack} handleSubmit={handleSubmit} />;
            default:
                console.log("Invalid");
        }
    };

    const stepController = (step, data) => {
        switch (step) {
            case 1:
                // console.log(step, data);
                handleNext();
                break;
            case 2:
                // console.log(step, data);
                handleNext();
                break;
            case 3:
                // console.log(step, data);
                handleNext();
                break;
            case 4:
                setActiveStep(4);
                console.log("Submitted");
                break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ width: "100%" }}>
            <YesNoOption
                title="Discard changes"
                message="Do you want to cancel the operation? Changes may not be saved."
                showDialog={showYesNoOption}
                clickNo={setShowYesNoOption}
                clickYes={handleCancelOperation}
            />
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">MathWorld Classroom Test </Typography>
                        <Button variant="contained" color="inherit" sx={{ color: "#000" }} onClick={handleCancel}>
                            Discard
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <BreadcrumbsComponent />
            <Box
                sx={{
                    padding: "2% 2% 0 2%",
                    display: "flex",
                    rowGap: "20px",
                    flexDirection: "column",
                }}
            >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Box sx={{ width: "100%" }}>{stepperContent()}</Box>
            </Box>
        </Box>
    );
}
