import React, { useEffect } from "react";
import SimpleLoading from "../commons/components/loading/SimpleLoading";
import { Outlet } from "react-router-dom";
import SideDrawer from "./pages/side_drawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { _teacherGetData } from "../../store/slices/auth/UserAuth";

const Main = () => {
    const { isLoading } = useSelector((state) => state.UserAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_teacherGetData());
    }, [dispatch]);

    const mainContent = () => {
        return <SideDrawer teacherComponents={<Outlet />}></SideDrawer>;
    };

    return (
        <>
            <React.Fragment>{isLoading ? <SimpleLoading showLoading={isLoading} /> : mainContent()}</React.Fragment>
        </>
    );
};

export default Main;
