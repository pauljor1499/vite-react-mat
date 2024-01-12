import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./Section1.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Section1 = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Function to update the time every second
        const updateDate = () => {
            setCurrentDate(new Date());
        };
        // Set up an interval to update the time every second
        const intervalId = setInterval(updateDate, 1000);
        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date());
        };
        const intervalId = setInterval(updateTime, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedDate = currentDate.toDateString();
    const formattedTime = currentTime.toLocaleTimeString(); // Format the time to display hours, minutes, and seconds

    return (
        <div className="content-cards">
            <Paper elevation={3} className="card-item-classes">
                <Box className="item-content">
                    <div className="card-title">
                        <Typography>
                            <b>CLASSES</b>
                        </Typography>
                        <Typography variant="h4">
                            <b>20</b>
                        </Typography>
                    </div>
                    <div className="card-icon">
                        <StarBorderIcon />
                    </div>
                </Box>
            </Paper>
            <Paper elevation={3} className="card-item-students">
                <Box className="item-content">
                    <div className="card-title">
                        <Typography>
                            <b>STUDENTS</b>
                        </Typography>
                        <Typography variant="h4">
                            <b>47</b>
                        </Typography>
                    </div>
                    <div className="card-icon">
                        <SchoolOutlinedIcon />
                    </div>
                </Box>
            </Paper>
            <Paper elevation={3} className="card-item-assignments">
                <Box className="item-content">
                    <div className="card-title">
                        <Typography>
                            <b>ASSIGNMENTS</b>
                        </Typography>
                        <Typography variant="h4">
                            <b>38</b>
                        </Typography>
                    </div>
                    <div className="card-icon">
                        <MenuBookOutlinedIcon />
                    </div>
                </Box>
            </Paper>
            <Paper elevation={3} className="card-item-time">
                <Box className="item-content">
                    <div className="card-title">
                        <Typography>
                            <b>TIME</b>
                        </Typography>
                        <Typography variant="h5">
                            <b>{formattedTime}</b>
                        </Typography>
                        <span>{formattedDate}</span>
                    </div>
                    <div className="card-icon">
                        <AccessTimeOutlinedIcon />
                    </div>
                </Box>
            </Paper>
        </div>
    );
};

export default Section1;
