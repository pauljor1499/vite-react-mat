import { MenuItem } from "@mui/material";

export const columnsRequests = [
    { accessorKey: "className", header: "Class Name" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "totalQuestions", header: "Total Questions" },
    { accessorKey: "sender", header: "Sender" },
    { accessorKey: "dateRequested", header: "Date Received" },
];

export const rowActionsRequests = ({ row }) => [
    <MenuItem key="acceptRequest" onClick={() => console.info("Accept " + row.original.title)}>
        Accept
    </MenuItem>,
    <MenuItem key="rejectRequest" onClick={() => console.info("Reject " + row.original.title)}>
        Reject
    </MenuItem>,
];

export const rowsRequests = [
    {
        className: "Algebra",
        title: "Assignment 1",
        totalQuestions: "10",
        sender: "Jose Rizal",
        dateRequested: "Nov. 18, 2023",
    },
    {
        className: "Polynomials",
        title: "Assignment 1",
        totalQuestions: "10",
        sender: "Manny Pacquiao",
        dateRequested: "Nov. 18, 2023",
    },
    {
        className: "Geometry",
        title: "Assignment 1",
        totalQuestions: "10",
        sender: "Lebron James",
        dateRequested: "Nov. 18, 2023",
    },
];
