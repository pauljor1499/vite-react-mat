import React from "react";
import ReactDOM from "react-dom/client";
import RouteComponents from "./router/index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouteComponents />
    </React.StrictMode>
);
