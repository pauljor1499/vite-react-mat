import React from "react";
import { List, ListItem, ListItemText, LinearProgress, Typography, Box } from "@mui/material";

const StudentGrades = () => {
    const students = [
        { id: 1, name: "John Doe", mathGrade: 80 },
        { id: 2, name: "Jane Smith", mathGrade: 90 },
        { id: 3, name: "Same Logan", mathGrade: 70 },
        { id: 4, name: "Joel Wills", mathGrade: 83 },
        { id: 5, name: "Johnny Blake", mathGrade: 73 },
        { id: 6, name: "Jeniffer Gregg", mathGrade: 95 },
        { id: 7, name: "Megan Blake", mathGrade: 88 },
        { id: 8, name: "Charley Kim", mathGrade: 74 },
        { id: 9, name: "Samson Roger", mathGrade: 88 },
    ];

    return (
        <Box sx={{ p: 2, maxHeight: 240, overflowY: "scroll" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" gutterBottom>
                    Student Grades
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Average
                </Typography>
            </Box>
            <List dense>
                {students.map((student) => (
                    <ListItem key={student.id} disablePadding>
                        <ListItemText primary={student.name} />
                        <LinearProgress
                            variant="determinate"
                            color={student.mathGrade > 75 ? "primary" : "error"}
                            value={student.mathGrade}
                            sx={{ height: "8px", borderRadius: "2px", minWidth: "100px", marginLeft: "8px" }}
                        />
                        <Typography variant="body2" ml={1}>
                            {`${student.mathGrade}%`}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default StudentGrades;
