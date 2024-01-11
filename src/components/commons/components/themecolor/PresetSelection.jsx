import React, { useContext } from "react";
import { Stack, Typography, IconButton } from "@mui/material";

import { ColorModeContext } from "./context/ThemeModeContext";

import CheckIcon from "@mui/icons-material/Check";

import Fade from '@mui/material/Fade';

import colors from "./../../../../theme/presets/_colors.scss"
import red from "./../../../../theme/presets/_red.scss";
import purple from "./../../../../theme/presets/_purple.scss";
import green from "./../../../../theme/presets/_green.scss";

const PresetSelection = () => {
  const themeContext = useContext(ColorModeContext);
  console.log(themeContext)

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography variant="h6">PRESET COLOR</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <IconButton
          sx={{
            backgroundColor: colors.primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: colors.primary800,
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("default") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "default"}>
            <CheckIcon />
          </Fade>
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: red.primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: red.primary800,
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("red") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "red"}>
            <CheckIcon />
          </Fade>
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: purple.primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: purple.primary800,
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("purple") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "purple"}>
            <CheckIcon />
          </Fade>
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: green.primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: green.primary800,
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("green") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "green"}>
            <CheckIcon />
          </Fade>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default PresetSelection;
