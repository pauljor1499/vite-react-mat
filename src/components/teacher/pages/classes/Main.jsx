import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default Main;
