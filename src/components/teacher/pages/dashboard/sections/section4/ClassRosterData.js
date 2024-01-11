export const columns = [
    { accessorKey: "fullName", header: "Name" },
    { accessorKey: "className", header: "Class name" },
    { accessorKey: "email", header: "Email" },
];

// export const rowActionsPending = ({ row }) => [
//     <MenuItem key="acceptClassRoster" onClick={() => console.info("Accept " + row.original.title)}>
//         Accept
//     </MenuItem>,
//     <MenuItem key="rejectClassRoster" onClick={() => console.info("Reject " + row.original.title)}>
//         Reject
//     </MenuItem>,
// ];

export const rowsPending = [
    {
        className: "Algebra",
        fullName: "Snow Jon Jon",
        email: "sample@gmail.com",
    },
    {
        className: "Algebra",
        fullName: "Lannister Cersei Ykl",
        email: "sample@gmail.com",
    },
    {
        className: "Arithmetic",
        fullName: "Lannister Jaime Jon",
        email: "sample@gmail.com",
    },
    {
        className: "Trigonometry",
        fullName: "Stark Arya Tony",
        email: "sample@gmail.com",
    },
];
