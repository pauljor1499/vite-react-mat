import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../components/landing_page/LandingPage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
]);
function Components() {
    return <RouterProvider router={router} />;
}
export default Components;
