import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "./context/ThemeModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import { IconButton, Stack } from "@mui/material";

const DarkModeSelection = () => {
  const theme = useTheme();
  const themeContext = useContext(ColorModeContext);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <IconButton
        sx={{
          border: `2px solid ${theme.palette.mode === "light" ? theme.palette.primary.dark : theme.palette.divider}`,
          borderRadius: "8px",
          width: 50,
          height: 50,
          display: "relative",
        }}
        onClick={() => {if (theme.palette.mode !== "light") themeContext.colorMode.toggleColorMode()}}
      >
        <WbSunnyOutlinedIcon sx={{ position: "absolute", fill: "#FFC107" }} />
      </IconButton>
      <IconButton
        sx={{
          border: `2px solid ${theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.divider}`,
          borderRadius: "8px",
          width: 50,
          height: 50,
          display: "relative",
          bgcolor: "#121212",
          "&&.MuiIconButton-root:hover": {
            backgroundColor: "#121212",
          }
        }}
        onClick={() => {if (theme.palette.mode === "light") themeContext.colorMode.toggleColorMode()}}
      >
        <ModeNightOutlinedIcon sx={{ color: theme.palette.mode === "dark" ? 'inherit' : 'white', position: "absolute" }}/>
      </IconButton>
    </Stack>
  );
};

export default DarkModeSelection;
