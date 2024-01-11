import React from "react";
import { Box, Paper } from "@mui/material";
import PassingGrade from "./PassingGrade";
import StudentGrades from "./StudentGrades";

const Section3 = () => {
    const passingRate = 66;
    const failingRate = 34;
    return (
        <Box sx={{ display: "flex", gap: "1rem" }}>
            <Paper elevation={2} sx={{ flex: 1 }}>
                <StudentGrades />
            </Paper>
            <Paper elevation={2} sx={{ flex: 1, padding: "2%", backgroundColor: "#ffff" }}>
                <Box sx={{ width: "100%", margin: "auto" }}>
                    <PassingGrade passingRate={passingRate} failingRate={failingRate} />
                </Box>
            </Paper>
        </Box>
    );
};

export default Section3;
