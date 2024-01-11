/* eslint-disable react/jsx-pascal-case */
import React from "react";
import PinnedTable from "../../../../../commons/components/tables/pinned_table/PinnedTable";
import { Box, Typography } from "@mui/material";
import { MRT_GlobalFilterTextField } from "material-react-table";
import { columns, rowsPending, rowActionsPending } from "./ClassRosterData";

const PendingStudents = () => {
    const topToolbar = ({ table }) => {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: "8px",
                    marginBottom: "1rem",
                }}
            >
                <Typography variant="body1" gutterBottom>
                    Pending Students
                </Typography>
                <MRT_GlobalFilterTextField table={table} />
            </Box>
        );
    };

    return (
        <PinnedTable
            columns={columns}
            data={rowsPending}
            topToolbar={topToolbar}
            pinnedColumn={false}
            rowActions={rowActionsPending}
        />
    );
};

export default PendingStudents;
