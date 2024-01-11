import React from "react";
import "./ClassDetails.scss";
import classImage from "../../../../../../assets/sample1.jpg";
import { Button } from "@mui/material";

const ClassDetails = () => {
    return (
        <React.Fragment>
            <div className="class-details-content">
                <div className="class-header">
                    <div className="class-image">
                        <img src={classImage} alt="classImage" />
                    </div>
                    <div className="class-text">
                        <h2>Algebra</h2>
                        <span>X1AD3012D</span>
                        <p>
                            Class description asd asd adsa ad asdadadasdadsad asdsadadsad description asd asd adsa ad
                            asdadadasdadsad asdsadadsaddescription asd asd adsa ad asdadadasdadsad
                            asdsadadsaddescription asd asd adsa ad asdadadasdadsad asdsadadsaddescription asd asd adsa
                            ad asdadadasdadsad asdsadadsaddescription asd asd.
                        </p>
                    </div>
                    <div className="class-settings">
                        <div>
                            <Button variant="outlined" color="primary">
                                Edit Class
                            </Button>
                        </div>
                        <div>
                            <Button variant="outlined" color="error">
                                Delete Class
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="class-body">
                    <div className="class-schedules">
                        <h3>Schedules</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ClassDetails;
