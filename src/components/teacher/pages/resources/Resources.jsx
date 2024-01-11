import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Resources = () => {
    return (
        <React.Fragment>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">Resources</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Resources;
