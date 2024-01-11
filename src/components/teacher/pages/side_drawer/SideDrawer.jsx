import React, { useEffect } from "react";
import { useState } from "react";
import "./SideDrawer.scss";

//components
import YesNoOption from "../../../commons/components/dialog/YesNoOption";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
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
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClassIcon from "@mui/icons-material/Class";
import ForumIcon from "@mui/icons-material/Forum";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

//teacher auth
import { _userLogout } from "../../../../store/slices/auth/UserAuth";
import { useDispatch, useSelector } from "react-redux";

const sideDrawerItems = [
    {
        text: "Dashboard",
        path: "/teacher",
        icon: <DashboardIcon />,
    },
    {
        text: "Classes",
        path: "/teacher/classes",
        icon: <ClassIcon />,
    },
    {
        text: "Messages",
        path: "/teacher/messages",
        icon: <ForumIcon />,
    },
    {
        text: "Resources",
        path: "/teacher/resources",
        icon: <StorageIcon />,
    },
    {
        text: "Settings",
        path: "/teacher/settings",
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

export default function SideDrawer({ teacherComponents }) {
    //user auth
    const { userData } = useSelector((state) => state.UserAuth);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const pathname = location.pathname;

    const [openDrawer, setOpen] = useState(true);
    const [showYesNoOption, setShowYesNoOption] = useState(false);

    const handleDrawerClose = () => {
        setOpen(!openDrawer);
    };

    useEffect(() => {
        if (
            pathname === "/teacher" ||
            pathname === "/teacher/classes" ||
            pathname === "/teacher/messages" ||
            pathname === "/teacher/resources" ||
            pathname === "/teacher/settings" ||
            pathname === "/teacher/profile"
        ) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [pathname]);

    const handleLogout = () => {
        dispatch(_userLogout());
        navigate("/");
    };

    return (
        <div className="teacher-sidedrawer-content">
            <Box sx={{ display: "flex" }}>
                <Drawer variant="permanent" open={openDrawer}>
                    <DrawerHeader>
                        {openDrawer && (
                            <Typography
                                variant="h6"
                                noWrap
                                color="primary"
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
                    <List sx={{ p: 0 }}>
                        {openDrawer ? (
                            userData !== null && (
                                <div className="drawer-profile">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
                                        alt=""
                                    />
                                    <div className="profile-details">
                                        <span className="details-name">
                                            <b>
                                                {userData.first_name +
                                                    " " +
                                                    userData.middle_name +
                                                    " " +
                                                    userData.last_name}
                                            </b>
                                        </span>
                                        <span>{userData.email}</span>
                                        <span>Teacher</span>
                                    </div>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        fullWidth
                                        onClick={(e) => {
                                            navigate("/teacher/settings");
                                        }}
                                    >
                                        View Profile
                                    </Button>
                                </div>
                            )
                        ) : (
                            <ListItem disablePadding sx={{ display: "block" }}>
                                <Tooltip title="View Profile" followCursor>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: openDrawer ? "initial" : "center",
                                            px: 2.5,
                                        }}
                                        selected={"/teacher/profile" === location.pathname}
                                        onClick={() => {
                                            navigate("/teacher/settings");
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
                                <Tooltip title={openDrawer ? "" : item.text} followCursor>
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
                                                color: item.path === location.pathname ? "#0091de" : "",
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                opacity: openDrawer ? 1 : 0,
                                                color: item.path === location.pathname ? "#0091de" : "",
                                            }}
                                        >
                                            {item.text}
                                        </ListItemText>
                                    </ListItemButton>
                                </Tooltip>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <Tooltip title={openDrawer ? "" : "Logout"} followCursor>
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
                            </Tooltip>
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
                    {teacherComponents}
                </Box>
            </Box>
        </div>
    );
}
