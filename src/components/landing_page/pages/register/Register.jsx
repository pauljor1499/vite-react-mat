/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./Register.scss";
import { validEmails } from "./SchoolEmails.js";

//store
import { _studentRegister, _teacherRegister, _removeErrors } from "../../../../store/slices/auth/UserAuth.js";
import { useDispatch, useSelector } from "react-redux";

import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Alert, CircularProgress, Divider, FormHelperText } from "@mui/material";
import { useFormik } from "formik";
import { registrationValidations } from "../../../commons/input_validations/index.js";
// import { State } from "country-state-city";
// import { City } from "country-state-city";

const Register = () => {
    //teacher auth state
    const { isLoading, hasErrors } = useSelector((state) => state.UserAuth);

    const dispatch = useDispatch();

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleEnterPressed = (event) => {
        if (event.key === "Enter") clickRegister();
    };

    const [_countries] = useState(["United States"]);
    // const [_states, _setStates] = useState([]);
    // const [_cities, _setCities] = useState([]);

    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            role: "",
            school: "",
            email: "",
            password: "",
            confirmPassword: "",
            contactFirstName: "",
            contactMiddleName: "",
            contactLastName: "",
            contactRelationship: "",
            contactCountry: "",
            contactState: "",
            contactCity: "",
            contactStreet: "",
            contactZIPCode: "",
            contactPhoneNumber: "",
        },
        validationSchema: registrationValidations,
    });

    const clickRegister = () => {
        setSuccessMessage(false);
        setErrorMessage("");
        dispatch(_removeErrors());
        handleTouchAllFields();

        if (values.role == "Student") {
            if (!hasStudentFieldErrors()) {
                studentRegister();
            }
        } else if (values.role == "Teacher") {
            if (!hasTeacherFieldErrors()) {
                const isValid = verifyTeacherEmail(values.email);
                if (isValid) {
                    teacherRegister();
                } else {
                    setErrorMessage("Invalid school email.");
                }
            }
        }
    };

    const handleTouchAllFields = () => {
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, true);
        });
    };

    const hideAllFielErrors = () => {
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, false);
        });
    };

    const studentRegister = () => {
        var userCredentials = {
            first_name: values.firstName,
            middle_name: values.middleName,
            last_name: values.lastName,
            role: values.role.toLowerCase(),
            school: values.school,
            email: values.email,
            password: values.password,
            repeat_password: values.confirmPassword,
            contact_person: {
                first_name: values.contactFirstName,
                middle_name: values.contactMiddleName,
                last_name: values.contactLastName,
                relationship: values.contactRelationship,
                country: values.contactCountry,
                state: values.contactState,
                city: values.contactCity,
                street: values.contactStreet,
                zip_code: values.contactZIPCode,
                phone_number: values.contactPhoneNumber,
            },
        };
        dispatch(_studentRegister(userCredentials)).then((response) => {
            if (response.payload) {
                setSuccessMessage(true);
                resetAllFields();
            }
        });
    };

    const teacherRegister = () => {
        var userCredentials = {
            first_name: values.firstName,
            middle_name: values.middleName,
            last_name: values.lastName,
            role: values.role.toLowerCase(),
            school: values.school,
            email: values.email,
            password: values.password,
            repeat_password: values.confirmPassword,
        };
        dispatch(_teacherRegister(userCredentials)).then((response) => {
            if (response.payload) {
                setSuccessMessage(true);
                resetAllFields();
            }
        });
    };

    const hasTeacherFieldErrors = () => {
        if (
            Boolean(errors.firstName) ||
            Boolean(errors.middleName) ||
            Boolean(errors.lastName) ||
            Boolean(errors.role) ||
            Boolean(errors.school) ||
            Boolean(errors.email) ||
            Boolean(errors.password) ||
            Boolean(errors.confirmPassword)
        ) {
            return true;
        }
        return false;
    };

    const hasStudentFieldErrors = () => {
        if (
            Boolean(errors.firstName) ||
            Boolean(errors.middleName) ||
            Boolean(errors.lastName) ||
            Boolean(errors.role) ||
            Boolean(errors.school) ||
            Boolean(errors.email) ||
            Boolean(errors.password) ||
            Boolean(errors.confirmPassword)
        ) {
            return true;
        }
        return false;
    };

    const verifyTeacherEmail = (email) => {
        const isFound = validEmails.includes(email);
        if (isFound) {
            return true;
        } else {
            return false;
        }
    };

    const resetAllFields = () => {
        values.firstName = "";
        values.middleName = "";
        values.lastName = "";
        values.role = "";
        values.school = "";
        values.email = "";
        values.password = "";
        values.confirmPassword = "";
        values.contactFirstName = "";
        values.contactMiddleName = "";
        values.contactLastName = "";
        values.contactRelationship = "";
        values.contactCountry = "";
        values.contactState = "";
        values.contactCity = "";
        values.contactStreet = "";
        values.contactZIPCode = "";
        values.contactPhoneNumber = "";
    };

    // const validateTextInput = (inputString) => {
    //     // Capitalize first letter of each word and remove double spaces
    //     let resultString = inputString
    //         .replace(/\b\w/g, function (match) {
    //             return match.toUpperCase();
    //         })
    //         .replace(/\s{2,}/g, " ");
    //     // Remove numbers and special characters
    //     return resultString.replace(/[^A-Za-z\s]/g, "");
    // };

    const validateNumberInput = (inputString) => {
        // Remove letters and special characters
        let resultString = inputString.replace(/[^0-9]/g, "");
        return resultString;
    };

    // const findStateByISOCode = (code) => {
    //     let obj = _states.find((state) => state.isoCode === code);
    //     return obj.name;
    // };

    // useEffect(() => {
    //     if (values.contactCountry !== "") {
    //         values.contactState = "";
    //         _setStates([]);
    //         State.getStatesOfCountry("US").forEach((state) => {
    //             _setStates((current) => [...current, state]);
    //         });
    //     }
    // }, [values.contactCountry]);

    // useEffect(() => {
    //     if (values.contactState !== "") {
    //         values.contactCity = "";
    //         _setCities([]);
    //         City.getCitiesOfState("US", values.contactState).forEach((city) => {
    //             _setCities((current) => [...current, city]);
    //         });
    //     }
    // }, [values.contactState]);

    useEffect(() => {
        setErrorMessage("");
        dispatch(_removeErrors());
    }, []);

    useEffect(() => {
        hideAllFielErrors();
    }, [values.role]);

    // useEffect(() => {
    //     values.firstName = validateTextInput(values.firstName);
    // }, [values.firstName]);
    // useEffect(() => {
    //     values.middleName = validateTextInput(values.middleName);
    // }, [values.middleName]);
    // useEffect(() => {
    //     values.lastName = validateTextInput(values.lastName);
    // }, [values.lastName]);
    // useEffect(() => {
    //     values.school = validateTextInput(values.school);
    // }, [values.school]);
    // useEffect(() => {
    //     values.contactFirstName = validateTextInput(values.contactFirstName);
    // }, [values.contactFirstName]);
    // useEffect(() => {
    //     values.contactMiddleName = validateTextInput(values.contactMiddleName);
    // }, [values.contactMiddleName]);
    // useEffect(() => {
    //     values.contactLastName = validateTextInput(values.contactLastName);
    // }, [values.contactLastName]);
    // useEffect(() => {
    //     values.contactRelationship = validateTextInput(values.contactRelationship);
    // }, [values.contactRelationship]);
    // useEffect(() => {
    //     values.contactStreet = validateTextInput(values.contactStreet); no need to validate the street
    // }, [values.contactStreet]);
    useEffect(() => {
        values.contactZIPCode = validateNumberInput(values.contactZIPCode);
    }, [values.contactZIPCode]);
    useEffect(() => {
        values.contactPhoneNumber = validateNumberInput(values.contactPhoneNumber);
    }, [values.contactPhoneNumber]);

    return (
        <div className="register-page-content" onKeyDown={handleEnterPressed}>
            <Card className="content-card">
                <CardContent className="card-body">
                    <div className="card-title">
                        <h4>Create New Account</h4>
                    </div>
                    {successMessage && (
                        <Alert severity="success">
                            Account successfully registered. Click{" "}
                            <Link component={ReactRouterLink} to="/login">
                                here
                            </Link>{" "}
                            to Log In.
                        </Alert>
                    )}
                    {(errorMessage || hasErrors) && <Alert severity="error">{errorMessage || hasErrors}</Alert>}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="firstName"
                                name="firstName"
                                label="First name"
                                variant="outlined"
                                required
                                fullWidth
                                error={touched.firstName && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={values.middleName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="middleName"
                                name="middleName"
                                label="Middle Initial"
                                variant="outlined"
                                fullWidth
                                error={touched.middleName && Boolean(errors.middleName)}
                                helperText={touched.middleName && errors.middleName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                variant="outlined"
                                required
                                fullWidth
                                error={touched.lastName && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth required error={touched.role && Boolean(errors.role)}>
                                <InputLabel>Role</InputLabel>
                                <Select
                                    fullWidth
                                    id="role"
                                    name="role"
                                    label="Role"
                                    value={values.role}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value="Student">Student</MenuItem>
                                    <MenuItem value="Teacher">Teacher</MenuItem>
                                </Select>
                                <FormHelperText>{touched.role && errors.role}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={values.school}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="school"
                                name="school"
                                label="School"
                                variant="outlined"
                                required
                                fullWidth
                                error={touched.school && Boolean(errors.school)}
                                helperText={touched.school && errors.school}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                required
                                fullWidth
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                fullWidth
                                required
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            >
                                <InputLabel>Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type={showConfirmPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                color={
                                                    touched.confirmPassword && Boolean(errors.confirmPassword)
                                                        ? "error"
                                                        : ""
                                                }
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
                                <FormHelperText>{touched.confirmPassword && errors.confirmPassword}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {values.role == "Student" && (
                        <>
                            <Divider />
                            <div className="card-title">
                                <h4>Contact Person</h4>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactFirstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactFirstName"
                                        name="contactFirstName"
                                        label="First name"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactFirstName && Boolean(errors.contactFirstName)}
                                        helperText={touched.contactFirstName && errors.contactFirstName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactMiddleName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactMiddleName"
                                        name="contactMiddleName"
                                        label="Middle Initial"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactMiddleName && Boolean(errors.contactMiddleName)}
                                        helperText={touched.contactMiddleName && errors.contactMiddleName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactLastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactLastName"
                                        name="contactLastName"
                                        label="Last name"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactLastName && Boolean(errors.contactLastName)}
                                        helperText={touched.contactLastName && errors.contactLastName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactRelationship}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactRelationship"
                                        name="contactRelationship"
                                        label="Relationship"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactRelationship && Boolean(errors.contactRelationship)}
                                        helperText={touched.contactRelationship && errors.contactRelationship}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        error={touched.contactCountry && Boolean(errors.contactCountry)}
                                    >
                                        <InputLabel>Country</InputLabel>
                                        <Select
                                            fullWidth
                                            id="contactCountry"
                                            name="contactCountry"
                                            label="Country"
                                            value={values.contactCountry}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {_countries.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>
                                            {touched.contactCountry && errors.contactCountry}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactState}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactState"
                                        name="contactState"
                                        label="State"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactState && Boolean(errors.contactState)}
                                        helperText={touched.contactState && errors.contactState}
                                    />
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        disabled={_states.length == 0}
                                        error={touched.contactState && Boolean(errors.contactState)}
                                    >
                                        <InputLabel>State</InputLabel>
                                        <Select
                                            fullWidth
                                            id="contactState"
                                            name="contactState"
                                            label="State"
                                            value={values.contactState}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {_states.map((state, index) => (
                                                <MenuItem key={index} value={state.isoCode}>
                                                    {state.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{touched.contactState && errors.contactState}</FormHelperText>
                                    </FormControl>
                                </Grid> */}
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactCity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactCity"
                                        name="contactCity"
                                        label="City"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactCity && Boolean(errors.contactCity)}
                                        helperText={touched.contactCity && errors.contactCity}
                                    />
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        disabled={_cities.length == 0}
                                        error={touched.contactCity && Boolean(errors.contactCity)}
                                    >
                                        <InputLabel>City</InputLabel>
                                        <Select
                                            fullWidth
                                            id="contactCity"
                                            name="contactCity"
                                            label="City"
                                            value={values.contactCity}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {_cities.map((city, index) => (
                                                <MenuItem key={index} value={city.name}>
                                                    {city.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{touched.contactCity && errors.contactCity}</FormHelperText>
                                    </FormControl>
                                </Grid> */}
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactStreet}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactStreet"
                                        name="contactStreet"
                                        label="Street"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactStreet && Boolean(errors.contactStreet)}
                                        helperText={touched.contactStreet && errors.contactStreet}
                                        // disabled={values.contactCity == ""}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={values.contactZIPCode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="contactZIPCode"
                                        name="contactZIPCode"
                                        label="ZIP Code"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.contactZIPCode && Boolean(errors.contactZIPCode)}
                                        helperText={touched.contactZIPCode && errors.contactZIPCode}
                                        // disabled={values.contactStreet == ""}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        // disabled={values.contactZIPCode == ""}
                                        error={touched.contactPhoneNumber && Boolean(errors.contactPhoneNumber)}
                                    >
                                        <InputLabel>Phone number (Optional)</InputLabel>
                                        <OutlinedInput
                                            value={values.contactPhoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="contactPhoneNumber"
                                            name="contactPhoneNumber"
                                            label="Phone number (Optional)"
                                            variant="outlined"
                                            fullWidth
                                            startAdornment={<InputAdornment position="start">+1</InputAdornment>}
                                        />
                                        <FormHelperText>
                                            {touched.contactPhoneNumber && errors.contactPhoneNumber}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </>
                    )}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth disabled={isLoading} onClick={clickRegister}>
                                {isLoading ? <CircularProgress size={25} color="inherit" /> : "Create Account"}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="additional-links">
                                <Link component={ReactRouterLink} to="/login" variant="body2">
                                    Already have an account? Log In
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
