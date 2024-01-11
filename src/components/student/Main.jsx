/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideDrawer from "./pages/side_drawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { _studentGetData } from "../../store/slices/auth/UserAuth";
import SimpleLoading from "../commons/components/loading/SimpleLoading";
import PageError from "../commons/components/page_error/PageError";
import Footer from "../commons/components/footer/Footer";
import NavBar from "../commons/components/navbar/NavBar";

const Main = () => {
    const storedToken = localStorage.getItem("token");
    const { isLoading } = useSelector((state) => state.UserAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (storedToken !== null) {
            dispatch(_studentGetData())
                .then((response) => {
                    if (!response.payload) {
                        navigate("/error");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [storedToken, dispatch, navigate]);

    const pageError = () => {
        return (
            <React.Fragment>
                <NavBar />
                <PageError />
                <Footer />
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            {storedToken !== null ? (
                <React.Fragment>
                    {isLoading ? (
                        <SimpleLoading showLoading={isLoading} />
                    ) : (
                        <SideDrawer studentComponents={<Outlet />}></SideDrawer>
                    )}
                </React.Fragment>
            ) : (
                pageError()
            )}
        </React.Fragment>
    );
};

export default Main;
