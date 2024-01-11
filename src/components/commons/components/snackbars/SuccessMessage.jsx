import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SuccessMessage({ show, close, message }) {
    const handleClose = (event, reason) => {
        if (reason !== "clickaway") close();
    };

    return (
        <div>
            <Snackbar
                open={show}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={handleClose}
            >
                <Alert variant="filled" severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

// HOW TO USE
// import SuccessMessage from "../../../commons/components/snackbars/SuccessMessage";
// const [successMessage, setSuccessMessage] = useState({
//     show: false,
//     message: "",
// });

// setSuccessMessage({
//     message: "Successfully created",
//     show: true,
// });

// <SuccessMessage
//     show={successMessage.show}
//     message={successMessage.message}
//     close={() => {
//         setSuccessMessage({ show: false, message: "" });
//     }}
// />;
