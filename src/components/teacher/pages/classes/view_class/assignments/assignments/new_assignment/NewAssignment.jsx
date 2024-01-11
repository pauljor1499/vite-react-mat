import React from "react";
import { useParams } from "react-router-dom";
import MathWorldClassroomTest from "./mathworld_classroom_test/MathWorldClassroomTest";
import STAARReleasedTest from "./staar_released_test/STAARReleasedTest";
import TexasSuccessInitiative from "./texas_success_initiative/TexasSuccessInitiative";
import PageError from "../../../../../../../commons/components/page_error/PageError";

const NewAssignment = () => {
    const { newAssignmentName } = useParams();

    const getNewAssignment = () => {
        switch (newAssignmentName) {
            case "new-MathWorld-Classroom-Test":
                return <MathWorldClassroomTest />;
            case "new-STAAR-Released-Test":
                return <STAARReleasedTest />;
            case "new-Texas-Success-Initiative-Test":
                return <TexasSuccessInitiative />;
            default:
                return <PageError />;
        }
    };

    return <React.Fragment>{getNewAssignment()}</React.Fragment>;
};

export default NewAssignment;
