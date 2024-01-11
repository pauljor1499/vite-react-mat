import { Box } from "@mui/material";
import React from "react";
import ToDo from "./components/ToDo";
import Resources from "./components/Resources";
import TeacherList from "./components/TeacherList";

const Main = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ToDo />
            <Resources />
            <TeacherList />
        </Box>
    );
};

export default Main;
