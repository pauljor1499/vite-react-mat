import React from "react";
import ReactDOM from "react-dom/client";
import Components from "./router/index";
import { Provider } from "react-redux";
import { Store } from "./store/Store";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={Store}>
            <Components />
        </Provider>
    </React.StrictMode>
);
