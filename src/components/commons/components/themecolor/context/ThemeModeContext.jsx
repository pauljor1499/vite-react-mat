import React from "react";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
    togglePresetColor: (presetColor) => {}
})