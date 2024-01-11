/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Step1 = ({ handleCancel, stepController }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const clickNextStep = () => {
        stepController(1, "Step 1");
    };

    return (
        <Box
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "2%",
            }}
        >
            <Button
                sx={{ mt: 5, height: 40 }}
                variant="contained"
                color="inherit"
                onClick={(e) => {
                    handleCancel();
                }}
            >
                <ArrowBackIosIcon />
            </Button>
            <Card sx={{ width: "100%" }}>
                <CardContent>
                    <TextField
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        required
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        label="Title"
                    />
                    <TextField
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        label="Description"
                        required
                        multiline
                        margin="normal"
                        fullWidth
                        variant="outlined"
                    />
                </CardContent>
            </Card>
            <Button sx={{ mt: 5, height: 40 }} variant="contained" onClick={clickNextStep}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
};

export default Step1;
