import { MenuItem } from "@mui/material";

export const columnsTrash = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "totalQuestions", header: "Total Questions" },
    { accessorKey: "className", header: "Class Name" },
    { accessorKey: "sender", header: "Sender" },
    { accessorKey: "dateTrashed", header: "Date Trashed" },
];

export const rowActionsTrash = ({ row }) => [
    <MenuItem key="restoreRequest" onClick={() => console.info("Restore " + row.original.title)}>
        Restore
    </MenuItem>,
    <MenuItem key="trashRequest" onClick={() => console.info("Trash " + row.original.title)}>
        Trash
    </MenuItem>,
];

export const rowsTrash = [
    {
        title: "Assignment 1",
        totalQuestions: "10",
        className: "Algebra",
        sender: "Jose Rizal",
        dateTrashed: "Nov. 18, 2023",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        className: "Polynomials",
        sender: "Jose Rizal",
        dateTrashed: "Nov. 18, 2023",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        className: "Geometry",
        sender: "Jose Rizal",
        dateTrashed: "Nov. 18, 2023",
    },
];
