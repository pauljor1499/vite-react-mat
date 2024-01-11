/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import PinnedTable from "../../../../../commons/components/tables/pinned_table/PinnedTable";
import { columnsCurrent, rowsCurrent, rowActionsCurrent } from "./current/AssignmentsData";
import { columnsArchived, rowsArchived, rowActionsArchived } from "./archived/ArchivedData";
import { columnsRequests, rowsRequests, rowActionsRequests } from "./requests/RequestsData";
import { columnsTrash, rowsTrash, rowActionsTrash } from "./trash/TrashedData";
// import Button from "@mui/material/Button";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { MRT_GlobalFilterTextField } from "material-react-table";
import NewAssignmentButton from "./commons/NewAssignmentButton";

const Assignments = () => {
    const [assignmentName, setAssignmentName] = useState("current");

    const assignmentTable = () => {
        switch (assignmentName) {
            case "current":
                return (
                    <PinnedTable
                        columns={columnsCurrent}
                        data={rowsCurrent}
                        topToolbar={topToolbarCurrentAssignment}
                        pinnedColumn={false}
                        rowActions={rowActionsCurrent}
                    />
                );
            case "archived":
                return (
                    <PinnedTable
                        columns={columnsArchived}
                        data={rowsArchived}
                        topToolbar={topToolbar}
                        pinnedColumn={false}
                        rowActions={rowActionsArchived}
                    />
                );
            case "requests":
                return (
                    <PinnedTable
                        columns={columnsRequests}
                        data={rowsRequests}
                        topToolbar={topToolbar}
                        pinnedColumn={false}
                        rowActions={rowActionsRequests}
                    />
                );
            case "trashed":
                return (
                    <PinnedTable
                        columns={columnsTrash}
                        data={rowsTrash}
                        topToolbar={topToolbar}
                        pinnedColumn={false}
                        rowActions={rowActionsTrash}
                    />
                );
            default:
                console.log("Invalid");
        }
    };

    const topToolbarCurrentAssignment = ({ table }) => {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    gap: "1rem",
                    p: "8px",
                    marginBottom: "1rem",
                }}
            >
                <MRT_GlobalFilterTextField table={table} />
                <FormControl>
                    <Select
                        value={assignmentName}
                        onChange={(e) => {
                            setAssignmentName(e.target.value);
                        }}
                        size="small"
                        fullWidth
                    >
                        <MenuItem value="current">Current</MenuItem>
                        <MenuItem value="archived">Archived</MenuItem>
                        <MenuItem value="requests">Requests</MenuItem>
                        <MenuItem value="trashed">Trashed</MenuItem>
                    </Select>
                </FormControl>
                <NewAssignmentButton />
            </Box>
        );
    };

    const topToolbar = ({ table }) => {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    gap: "1rem",
                    p: "8px",
                    marginBottom: "1rem",
                }}
            >
                <MRT_GlobalFilterTextField table={table} />
                <FormControl>
                    <Select
                        value={assignmentName}
                        onChange={(e) => {
                            setAssignmentName(e.target.value);
                        }}
                        size="small"
                        fullWidth
                    >
                        <MenuItem value="current">Current</MenuItem>
                        <MenuItem value="archived">Archived</MenuItem>
                        <MenuItem value="requests">Requests</MenuItem>
                        <MenuItem value="trashed">Trashed</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    };

    return <React.Fragment>{assignmentTable()}</React.Fragment>;
};

export default Assignments;
