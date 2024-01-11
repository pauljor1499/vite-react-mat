import * as React from "react";
import { useState } from "react";
import "./SideDrawer.scss";

//components
import YesNoOption from "../../../commons/components/dialog/YesNoOption";

import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ClassIcon from "@mui/icons-material/Class";
import SettingsIcon from "@mui/icons-material/Settings";
import ForumIcon from "@mui/icons-material/Forum";
import Tooltip from "@mui/material/Tooltip";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button, Typography } from "@mui/material";

//teacher auth
import { _userLogout } from "../../../../store/slices/auth/UserAuth";
import { useDispatch } from "react-redux";

const sideDrawerItems = [
    {
        text: "Dashboard",
        path: "/student",
        icon: <DashboardIcon />,
    },
    {
        text: "Classes",
        path: "/student/classes",
        icon: <ClassIcon />,
    },
    {
        text: "Messages",
        path: "/student/messages",
        icon: <ForumIcon />,
    },
    {
        text: "Settings",
        path: "/student/settings",
        icon: <SettingsIcon />,
    },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SideDrawer({ studentComponents }) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [openDrawer, setOpen] = useState(true);
    const [showYesNoOption, setShowYesNoOption] = useState(false);

    const handleDrawerClose = () => {
        setOpen(!openDrawer);
    };

    const handleLogout = () => {
        dispatch(_userLogout());
        navigate("/");
    };

    return (
        <div className="student-sidedrawer-content">
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Drawer variant="permanent" open={openDrawer}>
                    <DrawerHeader>
                        {openDrawer && (
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"
                                color="primary.main"
                                sx={{
                                    display: { fontWeight: 700, letterSpacing: "-0.5px" },
                                    margin: "auto",
                                }}
                            >
                                MathMatters
                            </Typography>
                        )}
                        <IconButton onClick={handleDrawerClose}>
                            {!openDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {openDrawer ? (
                            <ListItem disablePadding>
                                <div className="drawer-profile">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
                                        alt=""
                                    />
                                    <div className="profile-details">
                                        <div className="details-name">Lebron James</div>
                                        <div>bronnyjames@email.com</div>
                                        <div>Student</div>
                                        <br />
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onClick={() => {
                                                navigate("/student/settings");
                                            }}
                                        >
                                            View Profile
                                        </Button>
                                    </div>
                                </div>
                            </ListItem>
                        ) : (
                            <ListItem disablePadding sx={{ display: "block" }}>
                                <Tooltip title="View Profile" followCursor>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: openDrawer ? "initial" : "center",
                                            px: 2.5,
                                        }}
                                        selected={"/student/profile" === location.pathname}
                                        onClick={() => {
                                            navigate("/student/settings");
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: openDrawer ? 3 : "auto",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <PersonIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </Tooltip>
                            </ListItem>
                        )}
                        <Divider />
                        {sideDrawerItems.map((item, index) => (
                            <ListItem key={index} disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    className="list-button"
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: openDrawer ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                    selected={item.path === location.pathname}
                                    onClick={() => {
                                        navigate(`${item.path}`);
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: openDrawer ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText sx={{ opacity: openDrawer ? 1 : 0 }}>{item.text}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: openDrawer ? "initial" : "center",
                                    px: 2.5,
                                }}
                                onClick={() => {
                                    setShowYesNoOption(true);
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: openDrawer ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ opacity: openDrawer ? 1 : 0 }}>Logout</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Box width="100%">
                    <YesNoOption
                        title="Confirm Logout"
                        message="Do you want to logout?"
                        showDialog={showYesNoOption}
                        clickNo={setShowYesNoOption}
                        clickYes={handleLogout}
                    />
                    {studentComponents}
                </Box>
            </Box>
        </div>
    );
}
