import {
    Button,
    Card,
    CardContent,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import "./Step3.scss";
import Link from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ForgotPassword = ({ nextStep, previousStep }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="forgot-password-step3-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Reset Password</h3>
                    <p>Please enter your new password.</p>
                    <FormControl fullWidth>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            // id="password"
                            // name="password"
                            label="Password"
                            // value={values.password}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        // color={touched.password && Boolean(errors.password) ? "error" : ""}
                                        aria-label="toggle password visibility"
                                        onClick={() => {
                                            setShowPassword((show) => !show);
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onMouseUp={(e) => {
                                            e.preventDefault();
                                        }}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {/* <FormHelperText>{touched.password && errors.password}</FormHelperText> */}
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                            // id="password"
                            // name="password"
                            label="Confirm Password"
                            // value={values.password}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            type={showConfirmPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        // color={touched.password && Boolean(errors.password) ? "error" : ""}
                                        aria-label="toggle password visibility"
                                        onClick={() => {
                                            setShowConfirmPassword((show) => !show);
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onMouseUp={(e) => {
                                            e.preventDefault();
                                        }}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {/* <FormHelperText>{touched.password && errors.password}</FormHelperText> */}
                    </FormControl>
                    <Button variant="contained" color="primary" fullWidth onClick={nextStep}>
                        Reset Password
                    </Button>
                    <Link sx={{ cursor: "pointer" }} onClick={previousStep} variant="body2">
                        Back
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
