import { Stack, Typography, Divider } from "@mui/material";

import DarkModeSelection from "../../../../commons/components/themecolor/DarkModeSelection.jsx";
import PresetSelection from "../../../../commons/components/themecolor/PresetSelection.jsx";

const ThemeSettings = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ padding: "0 8%" }}
            divider={<Divider orientation="horizontal" flexItem />}
        >
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Typography variant="h6">THEME MODE</Typography>
                <DarkModeSelection />
            </Stack>
            <PresetSelection />
        </Stack>
    );
};

export default ThemeSettings;
