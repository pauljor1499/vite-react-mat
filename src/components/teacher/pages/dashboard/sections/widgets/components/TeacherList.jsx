import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Badge, Paper, Typography } from "@mui/material";

const TeacherList = () => {
    const teachers = [
        { id: 1, name: "Mr. Smith", isActive: true },
        { id: 2, name: "Mrs. Johnson", isActive: false },
    ];

    return (
        <Paper elevation={3} style={{ padding: "16px", maxWidth: "400px" }}>
            <Typography variant="body1" gutterBottom>
                Teachers
            </Typography>
            <List dense>
                {teachers.map((teacher) => (
                    <ListItem key={teacher.id} disablePadding>
                        <ListItemAvatar>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                color={teacher.isActive ? "success" : "error"}
                                variant="dot"
                            >
                                <Avatar>{teacher.name[0]}</Avatar>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={teacher.name} secondary={teacher.isActive ? "Online" : "Offline"} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TeacherList;
