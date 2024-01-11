import React from "react";
import { Box, Icon, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { Description, GitHub, Web } from "@mui/icons-material";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Resources = () => {
    const resources = [
        {
            name: "React Documentation",
            description: "Official documentation for React",
            url: "https://reactjs.org/",
            icon: <Description />,
        },
        {
            name: "Material-UI Documentation",
            description: "Official documentation for Material-UI",
            url: "https://mui.com/",
            icon: <Web />,
        },
        {
            name: "GitHub Repository",
            description: "View source code on GitHub",
            url: "https://github.com/yourusername/yourrepository",
            icon: <GitHub />,
        },
    ];

    const ResourceList = () => {
        return (
            <Box>
                <Typography variant="body1" gutterBottom>
                    Resources
                </Typography>
                {resources.map((resource, index) => (
                    <ListItem dense key={index} disablePadding>
                        <ListItemButton
                            sx={{ display: "flex", gap: "1rem" }}
                            component="a"
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon>{resource.icon}</Icon>
                            <ListItemText primary={resource.name} secondary={resource.description} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                    <Link component={ReactRouterLink} to="/teacher/resources" variant="body2">
                        See more
                    </Link>
                </Box>
            </Box>
        );
    };

    return (
        <Paper elevation={2} sx={{ p: "1rem" }}>
            {ResourceList()}
        </Paper>
    );
};

export default Resources;
