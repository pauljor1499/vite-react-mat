import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../commons/components/navbar/NavBar";
import Footer from "../commons/components/footer/Footer";

const Main = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Main;
