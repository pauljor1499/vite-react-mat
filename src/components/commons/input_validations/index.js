import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
//  1 uppercase letter, 1 lowercase letter, 1 numeric digit

export const loginValidations = yup.object({
    role: yup.string().required("Role is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

export const registrationValidations = yup.object({
    firstName: yup
        .string()
        .min(1, "First name must be at least 1 character long")
        .max(25, "First name must be no more than 25 characters long")
        .required("First name is required"),
    middleName: yup
        .string()
        .min(1, "Middle name must be at least 1 character1 long")
        .max(25, "Middle name must be no more than 25 characters long"),
    lastName: yup
        .string()
        .min(1, "Last name must be at least 1 characters long")
        .max(25, "Last name must be no more than 25 characters long")
        .required("Last name is required"),
    role: yup.string().required("Role is required"),
    school: yup
        .string()
        .min(8, "School must be at least 8 characters long")
        .max(25, "School must be no more than 25 characters long")
        .required("School is required"),
    email: yup
        .string()
        .min(8, "Email must be at least 8 characters long")
        .max(25, "Email must be no more than 25 characters long")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(25, "Password must be no more than 25 characters long")
        .matches(passwordRules, "Must contains at least 1 uppercase letter, 1 lowercase, and 1 numeric digit")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(25, "Password must be no more than 25 characters long")
        .matches(passwordRules, "Must contains at least 1 uppercase letter, 1 lowercase, and 1 numeric digit")
        .oneOf([yup.ref("password"), null], "Password doesn't match")
        .required("Confirm password is required"),
    contactFirstName: yup
        .string()
        .min(1, "First name must be at least 1 character long")
        .max(25, "First name must be no more than 25 characters long"),
    // .required("First name is required"),
    contactMiddleName: yup
        .string()
        .min(1, "Middle name must be at least 1 character long")
        .max(25, "Middle name must be no more than 25 characters long"),
    contactLastName: yup
        .string()
        .min(1, "Last name must be at least 1 character long")
        .max(25, "Last name must be no more than 25 characters long"),
    // .required("Last name is required"),
    contactRelationship: yup
        .string()
        .min(3, "Relationship must be at least 3 character long")
        .max(25, "Relationship must be no more than 25 characters long"),
    // .required("Relationship is required"),
    contactCountry: yup
        .string()
        .min(1, "Country name must be at least 1 character long")
        .max(25, "Country name must be no more than 25 characters long"),
    // .required("Country is required"),
    contactState: yup
        .string()
        .min(1, "State name must be at least 1 character long")
        .max(25, "State name must be no more than 25 characters long"),
    // .required("State is required"),
    contactCity: yup
        .string()
        .min(1, "City name must be at least 1 character long")
        .max(25, "City name must be no more than 25 characters long"),
    // .required("City is required"),
    contactStreet: yup
        .string()
        .min(3, "Street must be at least 3 characters long")
        .max(25, "Street must be no more than 25 characters long"),
    // .required("Street is required"),
    contactZIPCode: yup
        .string()
        .notRequired()
        .test({
            message: "Input value must be either 3 or 5 digits",
            test: (value) => !value || [3, 5].includes(value.length),
        }),
    // .required("ZIP Code is required")
    // .test({
    //     test: (value) => value.length === 3 || value.length === 5,
    //     message: "ZIP Code must be 3 or 5 digits",
    // }),
    contactPhoneNumber: yup.string().length(10, "Phone number must be exactly 10 digits"),
    // .required("Phone number is required")
    // .test({
    //     test: (value) => value.length === 10,
    //     message: "Phone number must be 10 digits",
    // }),
});
