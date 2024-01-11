import { Box } from "@mui/material";
import ToDo from "./components/ToDo";
import Resources from "./components/Resources";

const Main = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ToDo />
            <Resources />
        </Box>
    );
};

export default Main;
