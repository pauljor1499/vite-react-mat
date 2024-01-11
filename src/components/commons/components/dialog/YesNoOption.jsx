import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function YesNoOption({ title, message, showDialog, clickNo, clickYes }) {
    const handleNo = () => {
        clickNo(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={showDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={handleNo}>
                        No
                    </Button>
                    <Button sx={{ width: "150px" }} variant="contained" color="primary" onClick={clickYes}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

// HOW TO USE
// import YesNoOption from "../../../commons/components/dialog/YesNoOption";
// const [showYesNoOption, setShowYesNoOption] = useState(false);
// <YesNoOption
//     title="Confirm Logout"
//     message="Do you want to logout?"
//     showDialog={showYesNoOption}
//     clickNo={setShowYesNoOption}
//     clickYes={handleLogout}
// />;
