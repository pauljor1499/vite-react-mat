import React from "react";
import ReactDOM from "react-dom/client";
import RouteComponents from "./router/index";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouteComponents />
    </React.StrictMode>
);
