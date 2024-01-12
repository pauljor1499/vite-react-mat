/* eslint-disable react/jsx-pascal-case */
import React from "react";
import PinnedTable from "../../../../../../components/commons/components/tables/pinned_table/PinnedTable";
import { Box, lighten } from "@mui/material";
import { MRT_GlobalFilterTextField } from "material-react-table";
import { columns, data } from "./GradebookData";

const pinnedColumn = { left: ["name.lastName"], right: ["average"] };

const Gradebook = () => {
    const topToolbar = ({ table }) => {
        return (
            <Box
                sx={(theme) => ({
                    backgroundColor: lighten(theme.palette.background.default, 0.05),
                    display: "flex",
                    gap: "0.5rem",
                    p: "8px",
                    marginBottom: "1rem",
                    justifyContent: "space-between",
                })}
            >
                <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <MRT_GlobalFilterTextField table={table} />
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: "0.5rem" }}></Box>
                </Box>
            </Box>
        );
    };

    return (
        <React.Fragment>
            <PinnedTable columns={columns} data={data} topToolbar={topToolbar} pinnedColumn={pinnedColumn} />
        </React.Fragment>
    );
};

export default Gradebook;
