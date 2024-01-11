/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

//teacher class splice
import {
    _fetchAllClasses,
    _createNewClass,
    _deleteClass,
    _updateClass,
} from "../../../../store/slices/teacher/TeacherClasses";

//components
import SuccessMessage from "../../../commons/components/snackbars/SuccessMessage";
import SimpleLoading from "../../../commons/components/loading/SimpleLoading";
import BreadcrumbsComponent from "../../../commons/components/breadcrumbs/Breadcrumbs";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import getCurrentSemester from "../../../../hooks/getCurrentSemester";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //teacher all class
    const { classData, isLoading, hasErrors } = useSelector((state) => state.TeacherClasses);

    const [search, setSearch] = useState("");

    let [successMessage, setSuccessMessage] = useState({
        show: false,
        message: "",
    });

    const createNewClass = () => {
        const payload = {
            title: "Algebra 4",
            description: "Sample description",
            section: "Section 4",
            schedules: [
                {
                    day: "Monday",
                    time_start: "8:00 AM",
                    time_end: "1:00 PM",
                },
            ],
        };
        dispatch(_createNewClass(payload)).then((response) => {
            if (response.payload) {
                setSuccessMessage({
                    message: "Successfully created",
                    show: true,
                });
            }
        });
    };

    const updateClass = () => {
        const payload = {
            classUUID: "d4fbe34f-5bc9-4e26-9672-f31f70fe8422",
            classDetails: {
                title: "Algebra 44444",
                description: "Sample description",
                section: "Section 44444",
                schedules: [
                    {
                        day: "Monday",
                        time_start: "8:00 AM",
                        time_end: "1:00 PM",
                    },
                ],
            },
        };
        dispatch(_updateClass(payload)).then((response) => {
            if (response.payload) {
                setSuccessMessage({
                    message: "Successfully updated",
                    show: true,
                });
            }
        });
    };

    const deleteClass = () => {
        const classUUID = "d4fbe34f-5bc9-4e26-9672-f31f70fe8422";
        dispatch(_deleteClass(classUUID)).then((response) => {
            if (response.payload) {
                setSuccessMessage({
                    message: "Successfully deleted",
                    show: true,
                });
            }
        });
    };

    const viewSelectedClass = (classCode, classTitle, classSection) => {
        navigate(`/teacher/classes/${classTitle}`, { state: { classCode: classCode, classSection: classSection } });
    };

    useEffect(() => {
        dispatch(_fetchAllClasses());
    }, []);

    return (
        <div className="teacher-dashboard">
            <SuccessMessage
                show={successMessage.show}
                message={successMessage.message}
                close={() => {
                    setSuccessMessage({ show: false, message: "" });
                }}
            />
            <SimpleLoading showLoading={isLoading} />
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">{getCurrentSemester()}</Typography>
                    </Toolbar>
                </AppBar>
                <BreadcrumbsComponent homeName="Dashboard" homePath="/teacher" />
            </Box>
            <Box>
                {hasErrors && (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {hasErrors}
                    </Alert>
                )}
                <div className="header">
                    <TextField
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        sx={{ width: "35%" }}
                        size="small"
                        label="Search title"
                    />
                    <Button variant="contained" color="primary" onClick={createNewClass}>
                        Create new class
                    </Button>
                    <Button variant="contained" color="success" onClick={updateClass}>
                        Edit Class By UUID
                    </Button>
                    <Button variant="contained" color="error" onClick={deleteClass}>
                        Delete Class By UUID
                    </Button>
                </div>
                <div className="cards">
                    {classData !== null &&
                        classData
                            .filter((item) => {
                                return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search);
                            })
                            .map((entry, index) => (
                                <div key={index} className="class-card">
                                    <span>{entry.uuid}</span>
                                    <span>{entry.title + ` (${entry.section})`}</span>
                                    <span>{entry.description}</span>
                                    <span>{entry.code}</span>
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            viewSelectedClass(entry.code, entry.title, entry.section);
                                        }}
                                    >
                                        View
                                    </Button>
                                </div>
                            ))}
                </div>
            </Box>
        </div>
    );
};

export default Dashboard;
