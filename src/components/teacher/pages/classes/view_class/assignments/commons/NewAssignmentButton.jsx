import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NewAssignmentButton() {
    const location = useLocation();
    const currentPathname = location.pathname;
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const clickOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleMathWorldClassroomTest = () => {
        navigate(`${currentPathname}/new-MathWorld-Classroom-Test`);
    };

    const handleSTAARReleasedTest = () => {
        navigate(`${currentPathname}/new-STAAR-Released-Test`);
    };

    const handleTexasSuccessInitiative = () => {
        navigate(`${currentPathname}/new-Texas-Success-Initiative-Test`);
    };

    return (
        <>
            <Button
                id="basic-button"
                variant="contained"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={clickOpenMenu}
            >
                New Assignment
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <List
                    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    dense
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Create Custom Assignment" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding dense>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleSTAARReleasedTest}>
                                <ListItemText primary="STAAR Released Test" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleTexasSuccessInitiative}>
                                <ListItemText primary="Texas Success Initiative (TSI)" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleMathWorldClassroomTest}>
                                <ListItemText primary="MathWorld Classroom Test" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemText primary="Copy Existing Assignment" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Full-released STAAR Test" />
                    </ListItemButton>
                </List>
            </Menu>
        </>
    );
}
