import React, { useState } from "react";
import Step1 from "./step_1/Step1.jsx";
import Step2 from "./step_2/Step2.jsx";
import Step3 from "./step_3/Step3.jsx";
import Step4 from "./step_4/Step4.jsx";

const Main = () => {
    const [steps, setStep] = useState(1);
    const [email, setEmail] = useState("");

    const handleNextStep = () => {
        setStep((current) => current + 1);
    };

    const handlePreviousStep = () => {
        setStep((current) => current - 1);
    };

    const handleStep1 = (email) => {
        setEmail(email);
        setStep((current) => current + 1);
    };

    const componentSteps = () => {
        switch (steps) {
            case 1:
                return <Step1 nextStep={handleStep1} />;
            case 2:
                return <Step2 setEmail={email} nextStep={handleNextStep} previousStep={handlePreviousStep} />;
            case 3:
                return <Step3 nextStep={handleNextStep} previousStep={handlePreviousStep} />;
            case 4:
                return <Step4 nextStep={handleNextStep} previousStep={handlePreviousStep} />;
            default:
            // code block
        }
    };

    return <>{componentSteps()}</>;
};

export default Main;
