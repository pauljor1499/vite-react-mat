import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../commons/components/breadcrumbs/Breadcrumbs";

const Messages = () => {
    return (
        <React.Fragment>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">Messages</Typography>
                    </Toolbar>
                </AppBar>
                <BreadcrumbsComponent />
            </Box>
        </React.Fragment>
    );
};

export default Messages;
