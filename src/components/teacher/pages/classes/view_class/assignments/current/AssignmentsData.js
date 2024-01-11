import { MenuItem } from "@mui/material";

export const columnsCurrent = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "totalQuestions", header: "Total Questions" },
    { accessorKey: "dateOpen", header: "Date open" },
    { accessorKey: "dateClose", header: "Date close" },
    { accessorKey: "totalSubmissions", header: "Submissions" },
    { accessorKey: "status", header: "Status" },
];

export const rowActionsCurrent = ({ row }) => [
    <MenuItem key="shareAssignment" onClick={() => console.info("Share " + row.original.title)}>
        Share
    </MenuItem>,
    <MenuItem key="analyticsAssignment" onClick={() => console.info("Analytics " + row.original.title)}>
        Analytics
    </MenuItem>,
];

export const rowsCurrent = [
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
    {
        title: "Assignment 1",
        totalQuestions: "10",
        dateOpen: "Nov. 17, 2023",
        dateClose: "Nov. 18, 2023",
        totalSubmissions: "20/20",
        status: "Assigned",
    },
];
