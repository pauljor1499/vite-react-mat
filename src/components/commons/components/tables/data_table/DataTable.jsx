import * as React from "react";
import "./DataTable.scss";
import { DataGrid, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

const Pagination = ({ page, onPageChange, className }) => {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
        <MuiPagination
            color="primary"
            className={className}
            count={pageCount}
            page={page + 1}
            onChange={(event, newPage) => {
                onPageChange(event, newPage - 1);
            }}
        />
    );
};

const CustomPagination = (props) => {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
};

const CustomNoRowsOverlay = () => {
    return <Box sx={{ textAlign: "center", padding: "20px" }}>No matching data found</Box>;
};

export default function DataTable({ columns, rows, tableCustomToolbar }) {
    return (
        <div className="data-table-content">
            <DataGrid
                sx={{ padding: "2%" }}
                autoHeight
                loading={false}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10]}
                slots={{
                    toolbar: tableCustomToolbar,
                    pagination: CustomPagination,
                    noResultsOverlay: CustomNoRowsOverlay,
                }}
                disableColumnMenu
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
                disableRowSelectionOnClick
            />
        </div>
    );
}
