import React, { useState } from "react";
import PinnedTable from "../../../../../../components/commons/components/tables/pinned_table/PinnedTable";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { MRT_GlobalFilterTextField } from "material-react-table";
import { columns, rowsEnrolled, rowsPending } from "./ClassRosterData";

const rowActionsEnrolled = ({ row }) => [
    <MenuItem key="acceptClassRoster" onClick={() => console.info("Remove " + row.original.title)}>
        Remove
    </MenuItem>,
    <MenuItem key="rejectClassRoster" onClick={() => console.info("Email " + row.original.title)}>
        Email
    </MenuItem>,
];

const rowActionsPending = ({ row }) => [
    <MenuItem key="acceptClassRoster" onClick={() => console.info("Accept " + row.original.title)}>
        Accept
    </MenuItem>,
    <MenuItem key="rejectClassRoster" onClick={() => console.info("Reject " + row.original.title)}>
        Reject
    </MenuItem>,
];

const ClassRoster = () => {
    const [assignmentName, setAssignmentName] = useState("enrolled");

    const classRosterTable = () => {
        if (assignmentName === "enrolled") {
            return (
                <PinnedTable
                    columns={columns}
                    data={rowsEnrolled}
                    topToolbar={topToolbar}
                    pinnedColumn={false}
                    rowActions={rowActionsEnrolled}
                />
            );
        } else {
            return (
                <PinnedTable
                    columns={columns}
                    data={rowsPending}
                    topToolbar={topToolbar}
                    pinnedColumn={false}
                    rowActions={rowActionsPending}
                />
            );
        }
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
                        <MenuItem value="enrolled">Enrolled</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    };

    return <React.Fragment>{classRosterTable()}</React.Fragment>;
};

export default ClassRoster;
