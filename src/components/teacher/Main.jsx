import SideDrawer from "./pages/side_drawer/SideDrawer";
import { Outlet } from "react-router-dom";
const Main = () => {
    return (
        <>
            <SideDrawer teacherComponents={<Outlet />}></SideDrawer>
        </>
    );
};

export default Main;
