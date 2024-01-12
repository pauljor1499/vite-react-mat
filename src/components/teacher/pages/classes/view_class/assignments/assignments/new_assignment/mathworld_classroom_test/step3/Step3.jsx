import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const { RangePicker } = DatePicker;
const dateTimeFormat = "MMMM DD, YYYY hh:mm A";
const classNames = ["Algebra", "Geometry", "Polynomials", "Calculus", "Decimals"];
const showError = false;

const Step3 = ({ stepController, handleBack }) => {
    // const datePick = (date, dateString) => {
    //     console.log(dateString);
    // };

    const rangePick = (range, dateString) => {
        // console.log(dateString);
    };

    const [selectedClass, setSelectedClass] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedClass(typeof value === "string" ? value.split(",") : value);
    };

    const disabledDate = (current) => {
        // Disable dates before today
        return current && current < moment().startOf("day");
    };

    const clickNextStep = () => {
        stepController(3, "Step 3");
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
            <Button sx={{ mt: 5, height: 40 }} variant="contained" color="inherit" onClick={handleBack}>
                <ArrowBackIosIcon />
            </Button>
            <Card sx={{ width: "100%" }}>
                <CardContent sx={{ width: "50%" }}>
                    {/* <DatePicker
                    onChange={datePick}
                    disabledDate={disabledDate}
                    showTime={{ format: "hh:mm A", use12Hours: true }}
                    format={dateTimeFormat}
                    size="large"
                    /> */}
                    <FormControl fullWidth margin="normal" error={showError}>
                        <RangePicker
                            style={{ border: showError ? "1px solid red" : "" }}
                            onChange={rangePick}
                            disabledDate={disabledDate}
                            showTime={{ format: "hh:mm A", use12Hours: true }}
                            format={dateTimeFormat}
                            size="large"
                        />
                        {showError && <FormHelperText>asdsadasd</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth required margin="normal" error={showError}>
                        <InputLabel id="demo-multiple-checkbox-label">Assign to</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedClass}
                            onChange={handleChange}
                            input={<OutlinedInput label="Assign to" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 48 * 4.5 + 8,
                                        width: 250,
                                    },
                                },
                            }}
                        >
                            {classNames.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={selectedClass.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                        {showError && <FormHelperText>asdsadasd</FormHelperText>}
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Shuffle questions" />
                        <FormControlLabel control={<Checkbox />} label="Allow calculator" />
                    </FormGroup>
                </CardContent>
            </Card>
            <Button sx={{ mt: 5, height: 40 }} variant="contained" onClick={clickNextStep}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
};

export default Step3;
