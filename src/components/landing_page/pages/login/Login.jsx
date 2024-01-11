/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./Login.scss";

//store
import { _teacherLogin, _studentLogin, _removeErrors } from "../../../../store/slices/auth/UserAuth.js";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
//router
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
//validations
import { useFormik } from "formik";
import { loginValidations } from "../../../commons/input_validations/index.js";

const Login = () => {
    //teacher auth state
    const { hasErrors, isLoading } = useSelector((state) => state.UserAuth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            role: "",
            email: "",
            password: "",
        },
        validationSchema: loginValidations,
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleEnterPressed = (event) => {
        if (event.key === "Enter") clickLogin();
    };

    const clickLogin = () => {
        handleTouchAllFields();

        if (!hasFieldErrors()) {
            if (values.role === "Student") {
                studentLogin(values.email, values.password);
            } else if (values.role === "Teacher") {
                teacherLogin(values.email, values.password);
            }
        }
    };

    const handleTouchAllFields = () => {
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, true);
        });
    };

    const hasFieldErrors = () => {
        if (Boolean(errors.role) || Boolean(errors.email) || Boolean(errors.password)) {
            return true;
        }
        return false;
    };

    const studentLogin = (studentEmail, studentPassword) => {
        dispatch(_studentLogin({ email: studentEmail, password: studentPassword })).then((response) => {
            if (response.payload) {
                values.role = "";
                values.email = "";
                values.password = "";
                navigate("/student");
            }
        });
    };

    const teacherLogin = (teacherEmail, teacherPassword) => {
        dispatch(_teacherLogin({ email: teacherEmail, password: teacherPassword })).then((response) => {
            if (response.payload) {
                values.role = "";
                values.email = "";
                values.password = "";
                navigate("/teacher");
            }
        });
    };

    useEffect(() => {
        dispatch(_removeErrors());
    }, [dispatch]);

    return (
        <>
            <div className="login-page-content" onKeyDown={handleEnterPressed}>
                <Card className="content-card">
                    <CardContent className="card-body">
                        <div className="card-title">
                            <h4>Log In Account</h4>
                        </div>
                        {hasErrors && <Alert severity="error">{hasErrors}</Alert>}
                        <FormControl required fullWidth error={touched.role && Boolean(errors.role)}>
                            <InputLabel>Role</InputLabel>
                            <Select
                                fullWidth
                                id="role"
                                name="role"
                                label="role"
                                value={values.role}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <MenuItem value="Student">Student</MenuItem>
                                <MenuItem value="Teacher">Teacher</MenuItem>
                            </Select>
                            <FormHelperText>{touched.role && errors.role}</FormHelperText>
                        </FormControl>
                        <TextField
                            fullWidth
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <FormControl fullWidth required error={touched.password && Boolean(errors.password)}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                label="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            color={touched.password && Boolean(errors.password) ? "error" : ""}
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
                            <FormHelperText>{touched.password && errors.password}</FormHelperText>
                        </FormControl>
                        <Button variant="contained" fullWidth disabled={isLoading} onClick={clickLogin}>
                            {isLoading ? <CircularProgress size={25} color="inherit" /> : "Sign In"}
                        </Button>
                        <div className="additional-actions">
                            <Link component={ReactRouterLink} to="/forgot" variant="body2">
                                Forgot Password?
                            </Link>
                            <Link component={ReactRouterLink} to="/register" variant="body2">
                                Don't have an account? Register
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Login;
