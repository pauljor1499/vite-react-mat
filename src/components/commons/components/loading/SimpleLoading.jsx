import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CircularProgress } from "@mui/material";

export default function SimpleLoading({ showLoading }) {
    return (
        <React.Fragment>
            <Dialog open={showLoading}>
                <DialogContent>
                    <DialogContentText
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
                    >
                        <CircularProgress />
                        <span>Loading...</span>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

// HOW TO USE
// import SimpleLoading from "../../../commons/components/loading/SimpleLoading";
// <SimpleLoading showLoading={isLoading} />
