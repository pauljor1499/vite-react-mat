import React, { useEffect } from "react";
import SimpleLoading from "../commons/components/loading/SimpleLoading";
import { Outlet, useNavigate } from "react-router-dom";
import SideDrawer from "./pages/side_drawer/SideDrawer";
import ToggleColorMode from "../commons/components/themecolor/ToggleColorMode";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch, useSelector } from "react-redux";
import PageError from "../commons/components/page_error/PageError";
import Footer from "../commons/components/footer/Footer";
import NavBar from "../commons/components/navbar/NavBar";
import { _teacherGetData } from "../../store/slices/auth/UserAuth";

const Main = () => {
    const storedToken = localStorage.getItem("token");
    const { isLoading } = useSelector((state) => state.UserAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (storedToken !== null) {
            dispatch(_teacherGetData())
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

    const mainContent = () => {
        return (
            <ToggleColorMode>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <SideDrawer teacherComponents={<Outlet />}></SideDrawer>
                </LocalizationProvider>
            </ToggleColorMode>
        );
    };

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
                <React.Fragment>{isLoading ? <SimpleLoading showLoading={isLoading} /> : mainContent()}</React.Fragment>
            ) : (
                pageError()
            )}
        </React.Fragment>
    );
};

export default Main;
