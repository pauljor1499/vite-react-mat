import "./Dashboard.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/StudentPending";
import WidgetPage from "./sections/widgets/WidgetPage";

const Dashboard = () => {
    return (
        <Box className="teacher-dashboard-content">
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6">Dashboard</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <div className="content-body">
                <Section1 />
                <div className="content-items">
                    <div className="item-sections">
                        <Section2 />
                        <Section3 />
                        <Section4 />
                    </div>
                    <div className="item-widgets">
                        <WidgetPage />
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Dashboard;
