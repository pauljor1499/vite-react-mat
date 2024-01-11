import React from "react";

//components
import BreadcrumbsComponent from "../../../../commons/components/breadcrumbs/Breadcrumbs";
import TabsComponent from "../../../../commons/components/tabs/TabsComponent";
import Gradebook from "./gradebook/Gradebook";
import AssignmentsTable from "./assignments/AssignmentsTable";
import ClassRoster from "./class_roster/ClassRoster";
import ClassDetails from "./class_details/ClassDetails";
import Messages from "./messages/Messages";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router-dom";
import getCurrentSemester from "../../../../../hooks/getCurrentSemester";

const tabContents = [
    {
        label: "Gradebook",
        component: <Gradebook />,
    },
    {
        label: "Assignments",
        component: <AssignmentsTable />,
    },
    {
        label: "Class Roster",
        component: <ClassRoster />,
    },
    {
        label: "Class Details",
        component: <ClassDetails />,
    },
    {
        label: "Messages",
        component: <Messages />,
    },
];

const Main = () => {
    const { classTitle } = useParams(); //params
    const location = useLocation();

    return (
        <React.Fragment>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* <Typography variant="h6">2023-Fall: MATH-2BUXIjMh-MathWorld Test</Typography> */}
                        <Typography variant="h6">
                            {getCurrentSemester()}: {classTitle + ` (${location.state && location.state.classSection})`}
                        </Typography>
                        <Typography variant="h6">Class code: {location.state && location.state.classCode}</Typography>
                    </Toolbar>
                </AppBar>
                <BreadcrumbsComponent />
                <Box sx={{ padding: "0 2%", mt: 4 }}>
                    <TabsComponent tabContents={tabContents} />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Main;
