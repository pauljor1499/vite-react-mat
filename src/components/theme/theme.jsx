import "./theme.css";
import { createTheme, responsiveFontSizes } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";

import colors from "./presets/_colors.scss";
import green from "./presets/_green.scss";
import purple from "./presets/_purple.scss";
import red from "./presets/_red.scss";
import { grey } from "@mui/material/colors";

export const createMuiTheme = (mode, presetColor) => {
  let color = colors;

  switch (presetColor) {
    case "green":
      color = green;
      break;
    case "purple":
      color = purple;
      break;
    case "red":
      color = red;
      break;
    default:
      color = colors;
  }

  let theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    primaryAppBar: {
      height: 100,
    },
    primaryDraw: {
      width: 240,
      closed: 70,
    },
    secondaryDraw: {
      width: 210,
    },
    palette: {
      primary: {
        light: color?.primaryLight,
        main: color?.primaryMain,
        dark: color?.primaryDark,
        200: color.primary200,
        800: color.primary800,
      },
      error: {
        light: color?.errorLight,
        main: color?.errorMain,
        dark: color?.errorDark,
      },
      orange: {
        light: color?.orangeLight,
        main: color?.orangeMain,
        dark: color?.orangeDark,
      },
      warning: {
        light: color?.warningLight,
        main: color?.warningMain,
        dark: colors.warningDark,
      },
      success: {
        light: color?.successLight,
        200: color?.success200,
        main: color?.successMain,
        dark: color?.successDark,
      },
      grey: {
        50: color?.grey50,
        100: color?.grey100,
        500: color.darkTextSecondary,
        600: color.heading,
        700: color.darkTextPrimary,
        900: color.textDark,
      },
      dark: {
        light: color?.darkTextPrimary,
        main: color?.darkLevel1,
        dark: color?.darkLevel2,
        800: color?.darkBackground,
        900: color?.darkPaper,
      },
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar(
              mode === "light"
                ? {
                  track: grey[200],
                  thumb: grey[400],
                  active: grey[400],
                }
                : undefined
            ),
            //scrollbarWidth for Firefox
            scrollbarWidth: "thin",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "default",
          elevation: 1,
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createMuiTheme;
