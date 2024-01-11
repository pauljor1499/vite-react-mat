import React from "react";
import "./Breadcrumbs.scss";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Divider } from "@mui/material";

const BreadcrumbsComponent = ({ homeName, homePath }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const capitalizeFirstLetter = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    return (
        <React.Fragment>
            <Box className="breadcrumb-content">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    maxItems={5}
                    itemsAfterCollapse={2}
                    separator={<NavigateNextIcon fontSize="small" />}
                >
                    {homeName && <Typography>{capitalizeFirstLetter(homeName)}</Typography>}
                    {pathnames
                        .filter((item, index) => index !== 0)
                        .map((name, index) => {
                            const formatRoutePath = (str) => {
                                return str.replace(/%20/g, " ");
                            };
                            const routeTo = `/${pathnames.slice(0, index + 2).join("/")}`;
                            const isLast = index === pathnames.length - 2;
                            return isLast ? (
                                <Typography key={name}>{capitalizeFirstLetter(formatRoutePath(name))}</Typography>
                            ) : (
                                <Link key={name} to={routeTo}>
                                    {capitalizeFirstLetter(formatRoutePath(name))}
                                </Link>
                            );
                        })}
                </Breadcrumbs>
            </Box>
            {(homeName || pathnames.length > 1) && <Divider />}
        </React.Fragment>
    );
};

export default BreadcrumbsComponent;

// HOW TO USE
// import BreadcrumbsComponent from "../../../commons/components/breadcrumbs/Breadcrumbs";
// <BreadcrumbsComponent homeName="Dashboard" homePath="/teacher" /> <--- for parent component
// <BreadcrumbsComponent /> <-- for child
