import { createBrowserRouter, RouterProvider } from "react-router-dom";

//landing page
import LandingPage from "../components/landing_page/LandingPage.jsx";
import HomePage from "../components/landing_page/pages/home/HomePage.jsx";
import Login from "../components/landing_page/pages/login/Login.jsx";
import Register from "../components/landing_page/pages/register/Register.jsx";
import AboutPage from "../components/landing_page/pages/about_page/AboutPage.jsx";
import FeaturesPage from "../components/landing_page/pages/features_page/Features.jsx";
import ForgotPassword from "../components/landing_page/pages/forgot_password/Main.jsx";
import PageError from "../components/commons/components/page_error/PageError.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "features",
                element: <FeaturesPage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot",
                element: <ForgotPassword />,
            },
            {
                path: "*",
                element: <PageError />,
            },
        ],
    },
]);

function Components() {
    return <RouterProvider router={routes} />;
}

export default Components;
