import React, { useContext } from "react";
import { Stack, Typography, IconButton } from "@mui/material";

import { ColorModeContext } from "./context/ThemeModeContext";

import CheckIcon from "@mui/icons-material/Check";

import Fade from '@mui/material/Fade';

import defaultPalette from "./../../../../theme/presets/_default.js"
import redPalette from "./../../../../theme/presets/_red.js";
import purplePalette from "./../../../../theme/presets/_purple.js";
import greenPalette from "./../../../../theme/presets/_green.js";

const PresetSelection = () => {
  const themeContext = useContext(ColorModeContext);

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
            backgroundColor: defaultPalette().primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: defaultPalette().primary800,
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
            backgroundColor: redPalette().primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: redPalette().primary800,
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
            backgroundColor: purplePalette().primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: purplePalette().primary800,
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
            backgroundColor: greenPalette().primaryMain,
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: greenPalette().primary800,
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
