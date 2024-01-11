import React, { useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import createMuiTheme from "../../../../theme/theme";
import { ColorModeContext } from "./context/ThemeModeContext";
import Cookies from "js-cookie";

const ToggleColorMode = ({ children }) => {
  const storedMode = Cookies.get("colorMode");
  const preferedDarkMode = useMediaQuery("([prefers-color-scheme: dark])");
  const defaultMode = storedMode || (preferedDarkMode ? "dark" : "light");

  const storedPreset = Cookies.get("presetColor");
  const defaultPresetColor = storedPreset || "default";

  const [mode, setMode] = useState(defaultMode);
  const [presetColor, setPresetColor] = useState(defaultPresetColor)

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);
  const togglePresetColor = React.useCallback((preset) => {
    setPresetColor(preset)
  }, [])

  useEffect(() => {
    Cookies.set("colorMode", mode);
  }, [mode]);
  useEffect(() => {
    Cookies.set("presetColor", presetColor);
  }, [presetColor])

  const colorMode = useMemo(() => ({ toggleColorMode }), [toggleColorMode]);
  const presetMode = useMemo(() => ({ togglePresetColor }), [togglePresetColor])

  const theme = React.useMemo(() => createMuiTheme(mode, presetColor), [mode, presetColor]);

  return (
    <ColorModeContext.Provider value={{colorMode, presetMode, presetColor}}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;