import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./FifthSection.scss";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
        ochre: {
            main: "#FFF",
            light: "#FFF",
            dark: "#A9A9A9",
            contrastText: "black",
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
    },
});

const FifthSection = () => {
    const navigate = useNavigate();

    return (
        <div className="fifth-section-content">
            <div className="content-title">
                <h1>Create online classrooms and train your learners easily and effectively.</h1>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        size="large"
                        color="ochre"
                        onClick={(e) => {
                            navigate("/register");
                        }}
                    >
                        Get Started
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default FifthSection;
